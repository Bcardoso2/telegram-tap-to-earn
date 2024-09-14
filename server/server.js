const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config(); // Carregar variáveis do .env

const app = express();
//const webhook = require('../api/webhook');
app.use(cors());

app.use(bodyParser.json());

// Use o webhook para o endpoint /webhook
//'/webhook', webhook;

app.post('/webhook', webhook);{
    res.json(
        {
            'status:': 'OK'
        }
    )
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});

module.exports = app;