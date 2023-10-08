const express = require('express')
const app = express()
const port = 3000
const path = require('path'); // Import the 'path' module
const bodyParser = require('body-parser');
const { SendEmail, generate7CharacterOTP } = require('./emailhandler'); // Import the functions from your 'email.js' module


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const htmlFilePath = path.join(__dirname, 'login.html');
    res.sendFile(htmlFilePath);
})

app.get('/shipping', (req, res) => {
  const htmlFilePath = path.join(__dirname, 'shipping.html');
  res.sendFile(htmlFilePath);
})

app.get('/home/:OTP', (req, res) => {
    res.redirect("/shipping")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/submit-form', (req, res) => {


  const email = req.body.email;
  console.log(email);

  // Generate a 7-character OTP
  const otp = generate7CharacterOTP();

  // Send an email with the OTP
  SendEmail(email, otp);

  res.send('Check your (' + email + ') inbox for the magic link.');
});

app.post('/shipping/submit', (req, res) => {
  console.log(req.body);
  res.send('Form data submitted successfully!');
});
