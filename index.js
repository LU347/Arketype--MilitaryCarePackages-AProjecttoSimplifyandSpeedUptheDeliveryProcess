const express = require('express')
const app = express()
const port = 3000
const path = require('path'); // Import the 'path' module
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Parse JSON requests

app.get('/', (req, res) => {
    const htmlFilePath = path.join(__dirname, 'index.html');
    res.sendFile(htmlFilePath);
})

app.get('/locationtracking', (req, res) => {
    res.send('Yes it works!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/submit-form', (req, res) => {
  const name = req.body.name;
    console.log(name)
    console.log(req.body)
  const age = req.body.age;
    console.log(age)
    

  // Do something with the form data
  // ...

  res.send('Form data submitted successfully!');
});

