import turma from '../controller/turma.js';
import professorAuthorization from '../model/middlewares/professorAuthorization.js';
import studantAuthorization from '../model/middlewares/studantAuthorization.js'

export default function (app) {
  app.put('/insertstudantinturma',professorAuthorization, turma.insertStudantInTurma);

  app.post('/listturmasbystudant',studantAuthorization, turma.listTurmasByStudant);

  app.post('/liststudandsbyturma',professorAuthorization, turma.listStudandsByTurma);
}