const express = require('express');
const app = express();
const { HTTP_PORT } = require('./env');

app.use(express.static('src'));

app.listen(HTTP_PORT, () => {
  console.log(`Server live on port ${HTTP_PORT}`);
})