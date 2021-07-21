import database from '../services/conectdatabase.js'
import objectfilter from '../model/filters/objectfilter.js';
import studantByTurmaFilter from '../model/filters/studantByTurmasFilter.js'
let turmaController = {}

turmaController.insertStudantInTurma = async function (req, res, next) {
  const body = req.body;
  try {
    const databaseObject = await database.connect();

    await databaseObject.collection("turma")
      .updateOne(
        { name: body.nameturma },
        {
          $push: {
            "listStudants": {
              name: body.namestudant,
              matriculation: body.matriculation,
              age: body.age
            }
          }
        }
      );
    return res.status(200).json({ message: "Registration studant in turma successful." });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error internal serve." });
  }
}

turmaController.listTurmasByStudant = async function (req, res, next) {
  const body = req.body;

  try {
    const databaseObject = await database.connect();
    const result = await databaseObject.collection("turma")
      .find({
        listStudants: { $elemMatch: {matriculation: body.matriculation} }
      }).toArray();
    
    const resultFilter = studantByTurmaFilter(result); 
    return res.status(200).json({ resultFilter });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "falid internal serve" });
  }
}

turmaController.listStudandsByTurma = async function (req, res, next) {
  const body = req.body;
  try {
    const databaseObject = await database.connect();
    const result = await databaseObject.collection("turma").
      findOne({ name: body.name });
    if (!body.filter) {
      const listStudants = result.listStudants;
      return res.status(200).json({ listStudants });
    } else {
      const resultFilter = objectfilter(body.filter, result.listStudants);
      return res.status(200).json({ resultFilter });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'error list studant by turma' });
  }
}

export default turmaController;