const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.exchangeratesapi.io'
});

const currentCurrency = async (currency = 'USD', getCurrency = 'BRL') => {
    try {
        const response = await api.get(`/latest?base=${currency}`);
        return response.data.rates[getCurrency];
    } catch(error) {
        return error
    }
};

module.exports = currentCurrency;
