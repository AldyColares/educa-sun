import turma from '../controller/turma.js';
import professorAuthorization from '../model/middlewares/professorAuthorization.js';
import studantAuthorization from '../model/middlewares/studantAuthorization.js'

export default function (app) {
  app.put('/insertstudantinturma', turma.insertStudantInTurma);

  app.post('/listturmasbystudant', turma.listTurmasByStudant);

  app.post('/liststudandsbyturma', turma.listStudandsByTurma);
}