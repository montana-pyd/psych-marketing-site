const express = require('express');
const app = express();
const { HTTP_PORT } = require('./env');

console.log(HTTP_PORT);

app.use(express.static('src'));

app.listen(HTTP_PORT, () => {
  console.log(`Server live on port ${HTTP_PORT}`);
})