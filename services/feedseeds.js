import seeds from '../utils/seeds.js'
import database from './conectdatabase.js';

export default async function() {
  const databaseObject = await database.connect();
  global.educaSunDB = databaseObject;
  databaseObject.listCollections().toArray()
  .then(arrayColletions => {
    if(!arrayColletions.length) {
      seeds();
    }
  })
}

