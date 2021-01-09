const dotenv = require('dotenv');
const Telegraf = require('telegraf');
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const getCurrentDollar = require('./actions/getCurrentCurrencyAction');

bot.start((ctx) => ctx.reply(`
Então você quer saber a cotação atual das moedas? Veio ao lugar certo! 🤑\n
Para começar basta me pedir para buscar o preço da moeda (A moeda base é o Real).
\nExemplo: /dollar
Resposta do exemplo: 1 Dólar americano igual a R$ (valor do real)
`));

// commands
bot.command('dollar', async (ctx) => {
    try {
        const response = await getCurrentDollar();
        await ctx.reply(`1 Dólar americano igual a R$ ${+response.toFixed(2)}`);
    } catch (error) {
        await ctx.reply(`Ops!, ocorreu um erro ao buscar os dados. 😣`);
        console.log(error);
    }
});

module.exports = bot;
