const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://dev.to/api/articles?per_page=9');
    const articles = response.data;
    res.render('index', { articles });
  } catch (error) {
    console.error('Error fetching articles:', error.message);
    res.render('index', { articles: [] });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
