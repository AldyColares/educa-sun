export default function () {
  const databaseObject = global.educaSunDB;

  databaseObject.createCollection("user", function (err, res) {
    if (err) throw err;
    console.log("Collection user created!");
    databaseObject.collection("user").insertMany([
      { name: "roberto", password: "$2b$10$Cdke1aU38D1azg4ay/TKAOhwsX/PphxGyCxmhGJw1HaFzLAJhOuFC", 
        matriculation: "5", age: 32, role: "professor" },
      { name: "carlos", password: "$2b$10$Cdke1aU38D1azg4ay/TKAOhwsX/PphxGyCxmhGJw1HaFzLAJhOuFC", 
        matriculation: "2541", age: 13, role: "studant" },
      { name: "pedro", password: "$2b$10$Cdke1aU38D1azg4ay/TKAOhwsX/PphxGyCxmhGJw1HaFzLAJhOuFC", 
        matriculation: "2566", age: 12, role: "studant", }
    ]);
  });

  databaseObject.createCollection("turma", function (err, res) {
    if (err) throw err;
    console.log("Collection turma created!");
    databaseObject.collection("turma").insertMany([
      { name: "alpha", professor: "roberto", 
        listStudants: [{name: "carlos"}, {name: "pedro"}] },
      { name: "beta", professor: "isaque", 
        listStudants: [{name: "carlos"}, {name: "pedro"}] },
      { name: "gama", professor: "roberto", 
        listStudants: [{name: "carlos"}, {name: "pedro"}] }
    ]);
  });
}