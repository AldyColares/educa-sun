import { MongoClient } from 'mongodb';
//const url = process.env.URIMOONGODB;
const url = 'mongodb://localhost:27017/';

export default {
  connect: async function () {
    let connection;
    await new Promise((resolve, reject) => {
      MongoClient.connect(url, { useNewUrlParser: true }, 
        (err, database) => {
        if (err)
          reject(err);
        else {
          connection = database.db("educaSun");
          resolve();
        }
      });
    });
    return connection;
  }
  
};