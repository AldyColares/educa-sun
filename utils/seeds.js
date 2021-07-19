export default function () {
  const databaseObject = global.educaSunDB;

  databaseObject.createCollection("user", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
    databaseObject.collection("user").insertMany([
      { name: "roberto", password: "", registration: "5", age: 32, role: "professor" },
      { name: "carlos", password: "", registration: "2541", age: 13, role: "studant" },
      { name: "pedro", password: "", registration: "2566", age: 12, role: "studant", }
    ]);
  });
  
  databaseObject.createCollection("class", function (err, res) {
    if (err) throw err;
    databaseObject.colletion("class").insertMany([
      { name: "", professor: "", registrationstudants: ["", ""], }
    ])
  })
}