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


app.listen(port, () => {
  console.log(`Server runs at port ${port}.`)
})