const express = require('express');
const app = express();
const cors= require('cors');
const port = process.env.port||8080;

const category = require('./data/category.json');

app.use(cors());
app.get('/', (req, res) => {
  res.send('Vivani is running on port')
})

app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    res.send(category.find(item => item.id == id))
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})