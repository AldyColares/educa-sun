import turma from '../controller/turma.js';
import professorAuthorization from '../model/middlewares/professorAuthorization.js';

export default function (app) {
  app.put('/insertstudantinturma', turma.insertStudantInTurma);

  app.post('/seeturmasbystudant', turma.seeTurmasByStudant);

  app.post('/studandsbyturma', turma.studandsByTurma);
}