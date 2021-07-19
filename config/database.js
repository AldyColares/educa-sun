//let MongoClient = require('mongodb').MongoClient;
//const seeds = require('../utils/seeds');
//const url = 'mongodb://localhost:27017/';

import mongodb, { MongoClient } from 'mongodb';
const MongoClient = mongodb.MongoClient;
const url = process.env.URIMOONGODB;

export default function() {
  const mongoClient = new MongoClient(url);
  mongoClient.connect(url, function (err, client) {
  if (err) throw err;
  let databaseObject = client.db("educaSun");
  global.educaSunDB = databaseObject;
  databaseObject.listCollections().toArray()
  .then(arrayColletions => {
    if(!arrayColletions.length) {
      seeds();
    }
  })  
});
}

