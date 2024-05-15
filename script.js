
const express = require('express');
const app = express();
const request = require('request');

function getHaiPrice(){
    app.get('/get-HAI-price', (req, res) => {
        const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=HAI';
      
        request.get({
          url: url,
          json: true,
          headers: {
            'X-CMC_PRO_API_KEY': '0d02c497-d33a-4e73-a970-1779ed277726'
          }
        }, (error, response, data) => {
          if (error) {
            res.status(500).json({ error: 'Error fetching Ethereum price' });
          } else {
            const haiPrice = data?.data?.HAI?.quote?.USD?.price;
            res.json({ haiPrice });
          }
        });
      });
    
    
}
getHaiPrice()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//////

const axios = require('axios');


axios.get('/get-HAI-price')
.then(response => {
  const haiPrice = response.data.haiPrice;
  console.log(`HAI price: $${haiPrice}`);
  const haiPriceElement = document.querySelector('.price');
haiPriceElement.innerHTML = `HAI Price: $${haiPrice}`;
})
.catch(error => {
  console.error('Error fetching HAI price:', error);
});
