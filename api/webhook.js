const fetch = require('node-fetch'); // Certifique-se de que 'node-fetch' está instalado
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const update = req.body;

        if (update.message) {
            const chatId = update.message.chat.id;
            const text = update.message.text;

            if (text === '/start') {
                await sendMessage(chatId, 'Bem-vindo ao bot! Clique no botão abaixo para ganhar pontos.');
            } else if (text === 'Ganhar Pontos') {
                await sendMessage(chatId, 'Você ganhou 10 pontos!');
            }
        }

        res.status(200).send('OK');
    } else {
        res.status(405).send('Method Not Allowed');
    }
};

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
