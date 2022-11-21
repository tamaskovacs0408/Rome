const express = require('express');
const dotenv = require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(cors());



app.listen(port, () => {
  console.log(`Server runs at port ${port}.`)
})