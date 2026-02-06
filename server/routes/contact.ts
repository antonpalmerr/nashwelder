import { RequestHandler } from "express";

const TELEGRAM_BOT_TOKEN = "8592539982:AAH8NP8yrLxU8Ykv7ZfObWWaSrtD2Y8Sxn8";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;
// Chat ID пользователя, которому будут отправляться сообщения
const DEFAULT_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "@nashwelder";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

// Функция для получения chat_id из последних обновлений
async function getChatId(): Promise<string | null> {
  try {
    // Получаем последние обновления (до 100 сообщений)
    const response = await fetch(`${TELEGRAM_API_URL}/getUpdates?limit=100`);
    const data = await response.json();
    
    console.log("getUpdates response:", JSON.stringify(data, null, 2));
    
    if (data.ok && data.result && data.result.length > 0) {
      // Ищем chat_id в последних обновлениях
      // Приоритет: личные сообщения (type: "private") > каналы/группы
      const privateChatIds: string[] = [];
      const otherChatIds: string[] = [];
      
      for (const update of data.result) {
        let chat = null;
        if (update.message && update.message.chat) {
          chat = update.message.chat;
        } else if (update.channel_post && update.channel_post.chat) {
          chat = update.channel_post.chat;
        }
        
        if (chat) {
          const chatId = chat.id.toString();
          if (chat.type === "private") {
            privateChatIds.push(chatId);
          } else {
            otherChatIds.push(chatId);
          }
        }
      }
      
      // Возвращаем первый личный chat_id, если есть, иначе первый из других
      if (privateChatIds.length > 0) {
        console.log("Found private chat_id:", privateChatIds[0]);
        return privateChatIds[0];
      } else if (otherChatIds.length > 0) {
        console.log("Found other chat_id:", otherChatIds[0]);
        return otherChatIds[0];
      }
    } else {
      console.log("No updates found or error in getUpdates");
    }
  } catch (error) {
    console.error("Error getting chat_id:", error);
  }
  return null;
}

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, phone, email, message }: ContactFormData = req.body;

    // Валидация
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "All fields are required" 
      });
    }

    // Форматируем сообщение для Telegram
    const telegramMessage = `🔔 *Новая заявка с сайта Nash Welder*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📧 *Email:* ${email}

💬 *Сообщение:*
${message}`;

    // Получаем chat_id для отправки сообщений
    // Сначала пытаемся использовать переменную окружения или дефолтное значение
    let chatId = process.env.TELEGRAM_CHAT_ID || DEFAULT_CHAT_ID;
    
    // Если используется username, пытаемся получить числовой chat_id из обновлений
    // Это нужно, потому что Telegram API может не работать с username для отправки сообщений
    if (chatId.startsWith("@")) {
      const numericChatId = await getChatId();
      if (numericChatId) {
        chatId = numericChatId;
        console.log("Using auto-detected chat_id:", chatId);
      } else {
        console.warn("Could not auto-detect chat_id. Using username:", chatId);
        console.warn("Please ask @nashwelder to send a message to the bot first, or set TELEGRAM_CHAT_ID with numeric chat_id");
      }
    }

    // Отправляем сообщение в Telegram
    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      console.error("Telegram API error:", JSON.stringify(data, null, 2));
      console.error("Chat ID used:", chatId);
      
      // Более детальное сообщение об ошибке
      let errorMessage = "Failed to send message to Telegram";
      if (data.description) {
        if (data.description.includes("chat not found")) {
          errorMessage = "User not found. Please make sure @nashwelder has started a conversation with the bot first.";
        } else if (data.description.includes("bot was blocked")) {
          errorMessage = "Bot was blocked by the user. Please unblock the bot.";
        } else {
          errorMessage = `Telegram error: ${data.description}`;
        }
      }
      
      return res.status(500).json({ 
        success: false, 
        error: errorMessage,
        details: data.description || "Unknown error",
        chat_id_used: chatId
      });
    }

    res.json({ 
      success: true, 
      message: "Message sent successfully" 
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Internal server error" 
    });
  }
};

