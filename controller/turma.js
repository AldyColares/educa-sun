import database from '../services/conectdatabase.js'



let turmaController = {}

turmaController.insertStudantInTurma = async function (req, res, next) {
  const body = req.body,
    databaseObject = await database.connect();

  const result = await databaseObject.collection("turma")
    .updateOne(
      { name: "alpha" },
      { $push: { "listStudants": { name: "Luiz" } }}
    );
  return res.status(200).json({ message: result });
}



turmaController.seeTurmasByStudant = function (req, res, next) {

}

turmaController.studandsByTurma = function (req, res, next) {
}


export default turmaController;