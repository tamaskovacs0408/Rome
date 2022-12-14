const express = require('express');
const dotenv = require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const romeData = require('./data.json');
const port = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get("/:subpage", (req, res) => {
  const {subpage} = req.params;
  const pageTitle = subpage[0].toUpperCase() + subpage.slice(1);
  const data = romeData[subpage];
  res.render("subpage", {pageTitle, ...data});
});


app.listen(port, () => {
  console.log(`Server runs at port ${port}.`)
})