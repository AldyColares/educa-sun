import seeds from '../utils/seeds.js'
import { MongoClient } from 'mongodb';
//const url = process.env.URIMOONGODB;
const url = 'mongodb://localhost:27017/';
export default async function() {

  MongoClient.connect(url, function (err, client) {
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

