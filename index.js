const express = require("express");
const qr = require("qrcode");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const dataToEncode = req.query.qrcode || "Hello, world!";

  qr.toDataURL(dataToEncode, (err, url) => {
    if (err) {
      res.status(500).send("Erro ao criar o QR code.");
    } else {
      res.send(`<img src="${url}" alt="QR Code">`);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
