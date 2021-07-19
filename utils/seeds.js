module.exports = function () {
  databaseObject = global.educaSunDB;
  databaseObject.createCollection("user", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
    databaseObject.close();
  });
}