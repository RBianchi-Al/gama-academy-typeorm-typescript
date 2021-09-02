// consegue abstrair todas as configurações de rotas
import {Router} from 'express';
import CadastroController from './controller/CadastroController';

const routes = Router();

routes.post('/cadastro', CadastroController.create)
routes.get('/cadastro', CadastroController.list)
routes.get('/cadastro/:id', CadastroController.find)
routes.put('/cadastro/:id', CadastroController.update)
routes.delete('/cadastro/:id', CadastroController.delete)

export default routes;
