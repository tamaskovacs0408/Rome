const express = require('express');
const dotenv = require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
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

app.get("/colosseum", (req, res) => {
  res.render("colosseum");
});

app.get("/forum", (req, res) => {
  res.render("forum");
});

app.get("/pantheon", (req, res) => {
  res.render("pantheon");
});

app.get("/trevi", (req, res) => {
  res.render("trevi");
});

app.get("/castle", (req, res) => {
  res.render("castle");
});

app.get("/vatican", (req, res) => {
  res.render("vatican");
});

app.listen(port, () => {
  console.log(`Server runs at port ${port}.`)
})