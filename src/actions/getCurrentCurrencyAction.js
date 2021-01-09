const currentCurrency = require('../services/getCurrentDollarService');

async function getCurrentDollar() {
    const response = await currentCurrency();
    return response;
}

module.exports = getCurrentDollar;
