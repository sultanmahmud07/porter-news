const express = require('express')
const app = express();
const cors = require('cors');
const port =process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
  res.send('Hello Sultan Sir!')
})

app.get('/news-categories', (req, res) => {
  res.send(categories)
})

app.listen(port, () => {
  console.log('Porter Nows server running on port', port)
})