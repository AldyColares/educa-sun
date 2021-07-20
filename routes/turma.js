import turma from '../controller/turma.js'
import professorAuthorization from '../model/safety/professorAuthorization.js';

export default function (app) {
  app.post('/insertstudant', turma.insertStudant);

  app.post('/seeturmasbystudant', turma.seeTurmasByStudant);

  app.post('/studandsbyturma', turma.studandsByTurma);
}