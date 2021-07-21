import database from '../services/conectdatabase.js'
import objectfilter from '../model/filters/objectfilter.js';
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
    const cursor = await databaseObject.collection("turma")
      .find({
        "listStudants.matriculation": { matriculation: 2566 }

        // "listStudants": {
        // "$elemMatch": {
        // "name": "pedro"
        // }
        // }
      }).toArray();
      
    console.log(cursor);
    return res.status(200).json({ cursor });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "falid" });
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