import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { config as loadEnv } from "dotenv";
import ngrok from "ngrok";

const ENV_FILES = [".env.local", ".env"];

for (const file of ENV_FILES) {
  const fullPath = path.resolve(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    loadEnv({ path: fullPath, override: true });
  }
}

async function main() {
  const port = Number(process.env.NGROK_PORT ?? process.env.PORT ?? 8080);
  const region = process.env.NGROK_REGION ?? "us";
  const subdomain = process.env.NGROK_SUBDOMAIN;
  const domain = process.env.NGROK_DOMAIN;
  const authtoken = process.env.NGROK_AUTHTOKEN ?? process.env.NGROK_TOKEN;
  const inspect = (process.env.NGROK_INSPECT ?? "false").toLowerCase() === "true";

  if (!authtoken) {
    console.error(
      "[ngrok] Missing NGROK_AUTHTOKEN. Add it to .env.local or export it in your shell.",
    );
    process.exit(1);
  }

  try {
    console.log(`[ngrok] Starting tunnel → http://localhost:${port}`);

    const url = await ngrok.connect({
      addr: port,
      proto: "http",
      authtoken,
      region,
      subdomain,
      domain,
      inspect,
    });

    console.log(`[ngrok] Public URL     → ${url}`);
    console.log(`[ngrok] Inspector UI   → ${ngrok.getUrl() ?? "http://127.0.0.1:4040"}`);
    console.log("[ngrok] Press Ctrl+C to stop the tunnel.");

    const shutdown = async () => {
      console.log("\n[ngrok] Shutting down tunnel…");
      await ngrok.disconnect(url);
      await ngrok.kill();
      process.exit(0);
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);

    process.stdin.resume();
  } catch (error) {
    console.error("[ngrok] Failed to start tunnel.");
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}

main();


