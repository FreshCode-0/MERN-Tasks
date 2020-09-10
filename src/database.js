const mongoose = require('mongoose')

const URI = 'mongodb+srv://brus2099:mastermongo117@mern-test.2adgp.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(URI)
  .then( db => { 
    console.log('Base de datos conectada exitosamente!!')
  })
  .catch( err => console.log(err))

module.exports = mongoose


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://brus2099:<password>@mern-test.2adgp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

