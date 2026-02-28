import express from "express";
import basicAuth from "express-basic-auth";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const USER = "ladea";
const PASS = "preview2026";

const app = express();

// Basic Auth — browser login prompt
app.use(
  basicAuth({
    users: { [USER]: PASS },
    challenge: true,
    realm: "La Dea Beauty Preview",
  })
);

// Anti-indexing headers on every response
app.use((_req, res, next) => {
  res.setHeader("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
  next();
});

// Serve the static build
app.use(express.static(path.join(__dirname, "out")));

// SPA fallback for clean URLs (/nails, /lashes, etc.)
app.use((req, res) => {
  const filePath = path.join(__dirname, "out", req.path, "index.html");
  res.sendFile(filePath, (err) => {
    if (err) res.status(404).sendFile(path.join(__dirname, "out", "404.html"));
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`\n  La Dea Beauty Preview Server`);
  console.log(`  Local:    http://localhost:${PORT}`);
  console.log(`  User:     ${USER}`);
  console.log(`  Password: ${PASS}\n`);
});
