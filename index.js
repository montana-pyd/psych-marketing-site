const express = require('express');
const json = require('body-parser').urlencoded();
const app = express();
const Mailchimp = require('mailchimp-api-v3');
const { HTTP_PORT, MAIL_CHIMP_API_KEY } = require('./env');


let mailchimp = new Mailchimp(MAIL_CHIMP_API_KEY);
let mailChimpListId = 'c4dfe69fda';

console.log(HTTP_PORT);

app.use(express.static('src'));

function subscribeToMailChimp(email) {
  mailchimp
    .post(`/lists/${mailChimpListId}/members`, {
      email_address: email,
      status: 'subscribed'
    })
    .then(function(results) {
      console.log(results);
    })
    .catch(function(err) {
      console.error(err);
    });
}

app.post('/mailchimp-signup', json, (req, res) => {
  let { email } = req.body;
  console.log(email);
  subscribeToMailChimp(email);
  res.status(200).json({
    success: true
  });
});

app.listen(HTTP_PORT, () => {
  console.log(`Server live on port ${HTTP_PORT}`);
});
