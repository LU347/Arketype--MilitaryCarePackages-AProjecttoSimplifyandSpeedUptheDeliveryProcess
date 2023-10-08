const express = require('express')
const app = express()
const port = 3000
const path = require('path'); // Import the 'path' module
const bodyParser = require('body-parser');
const { SendEmail, generate7CharacterOTP } = require('./emailhandler'); // Import the functions from your 'email.js' module
const Parser=require('@json2csv/plainjs');

const { MongoClient } = require('mongodb');

// Replace with your MongoDB connection URL
const uri = 'mongodb+srv://dmisno1note:dmisno1note@cluster0.fn23i5h.mongodb.net/';

// Create a MongoClient instance
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
let converter = require('json-2-csv');


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

app.post('/shipping/submit', async (req, res) => {
  const jsonData = req.body;
  console.log(jsonData);
  
  const collectionName = 'Requests';

  console.log("json collected");

  const db = client.db();

  // Get a reference to the collection
  const collection = db.collection(collectionName);

  console.log("Entering data into DB!");
  // Insert the JSON data into the collection
  const result = await collection.insertOne(jsonData)
    // console.log("DB Call commencing")
    //   if (err) {
    //       console.error('Error inserting data into MongoDB:', err);
    //   } else {
    //       console.log('Data inserted successfully:', result.insertedCount);
    //   }

      // Close the MongoDB connection
      console.log(result);
  // });
  
  const csv = await converter.json2csv(req.body);
  res.redirect(`/view/${JSON.stringify(jsonData)}/${csv}`);
});


// Get a reference to the database

app.get('/view/:json/:csv', (req, res) => {
  const htmlFilePath = path.join(__dirname, 'view.html');
  res.sendFile(htmlFilePath);
})
