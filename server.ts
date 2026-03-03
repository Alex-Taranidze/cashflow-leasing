import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  // Anti-spam: simple rate limiting by IP
  const ipRequests = new Map<string, number[]>();
  const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
  const MAX_REQUESTS = 5;

  app.post("/api/lead", (req, res) => {
    const { fullName, phone, inn, honeypot } = req.body;
    const ip = req.ip || 'unknown';

    // 1. Honeypot check
    if (honeypot) {
      console.warn(`Spam detected from IP: ${ip}`);
      return res.status(400).json({ error: "Spam detected" });
    }

    // 2. Rate limiting
    const now = Date.now();
    const timestamps = ipRequests.get(ip) || [];
    const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
    
    if (recentTimestamps.length >= MAX_REQUESTS) {
      return res.status(429).json({ error: "Too many requests. Please try again later." });
    }
    
    recentTimestamps.push(now);
    ipRequests.set(ip, recentTimestamps);

    // 3. Server-side validation
    if (!fullName || fullName.trim().split(/\s+/).length < 2) {
      return res.status(400).json({ error: "Invalid full name" });
    }
    if (!phone || phone.replace(/\D/g, '').length < 11) {
      return res.status(400).json({ error: "Invalid phone number" });
    }
    if (inn && !/^\d{10}$|^\d{12}$/.test(inn)) {
      return res.status(400).json({ error: "Invalid TIN" });
    }

    // 4. Storage Logic
    // CRITICAL: Разместить БД/хранилище на хостинге РФ для соблюдения 152-ФЗ.
    // В данном примере мы просто логируем данные.
    // На реальном сервере здесь должен быть вызов к БД (PostgreSQL/MySQL) или CRM (Bitrix24/AmoCRM).
    console.log("New Lead Received:", { fullName, phone, inn, timestamp: new Date().toISOString() });

    // TODO: Инструкция для развертывания на российском хостинге:
    // 1. Установите подключение к БД (например, через Prisma или pg).
    // 2. Настройте отправку уведомлений в Telegram/Email через российские почтовые сервисы (Yandex/Mail.ru).
    // 3. Убедитесь, что сервер физически находится в дата-центре на территории РФ.

    res.status(200).json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
