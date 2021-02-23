const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.get('/api/items', (req, res) => {
  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
    .then(response =>
      res.json(getSearchResponse(response.data.results, response.data.filters.find(filter => filter.id === 'category')))
    )
    .catch(error => {
      console.log(error);
      res.json({});
    });

});

const getSearchResponse = (results, categories) => ({
  author: getAuthor(),
  categories: categories !== undefined
    ? categories.values[0].path_from_root.map(category => category.name) : [],
  items: results.slice(0, 4).map(item => ({
    ...getCommonItem(item),
    picture: item.thumbnail,
    state: item.address.state_name
  }))
});

const getAuthor = () => ({ name: 'Ramiro', lastname: 'Cabello' });

const getCommonItem = item => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: item.price
  },
  condition: item.condition,
  free_shipping: item.shipping.free_shipping,
});

const getProduct = id => axios.get(`https://api.mercadolibre.com/items/${id}`);

const getProductDescription = id => axios.get(`https://api.mercadolibre.com/items/${id}/description`);

app.get('/api/items/:id', (req, res) => {
  Promise.all([getProduct(req.params.id), getProductDescription(req.params.id)])
    .then(results =>
      res.json(getDetailResponse(results[0].data, results[1].data))
    )
    .catch(error => console.log(error));
});

const getDetailResponse = (product, description) => ({
  author: getAuthor(),
  item: {
    ...getCommonItem(product),
    picture: product.pictures[0].url,
    sold_quantity: product.sold_quantity,
    description: description.plain_text
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`)
})