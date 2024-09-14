// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;
const TELEGRAM_BOT_TOKEN = '7390968345:AAGr6N-E7vzDK9i1rvHgo-QYzmlaBie6W7M'; // Seu token aqui

app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
    const update = req.body;

    if (update.message) {
        const chatId = update.message.chat.id;
        const text = update.message.text;

        // Adicionar lógica para processar a mensagem
        if (text === '/start') {
            await sendMessage(chatId, 'Bem-vindo ao bot! Clique no botão abaixo para ganhar pontos.');
        } else if (text === 'Ganhar Pontos') {
            // Aqui você pode adicionar lógica para ganhar pontos
            await sendMessage(chatId, 'Você ganhou 10 pontos!');
        }
    }

    res.sendStatus(200);
});

async function sendMessage(chatId, text) {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        }),
        headers: { 'Content-Type': 'application/json' }
    });
}

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});
