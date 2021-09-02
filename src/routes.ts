// consegue abstrair todas as configurações de rotas
import {Router} from 'express';
import CadastroController from './controller/CadastroController';
import ClienteController from './controller/ClienteController';


const routes = Router();

routes.post('/cadastro', CadastroController.create)
routes.get('/cadastro', CadastroController.list)
routes.get('/cadastro/:id', CadastroController.find)
routes.put('/cadastro/:id', CadastroController.update)
routes.delete('/cadastro/:id', CadastroController.delete)




routes.post('/cliente', ClienteController.create)
routes.post('/cliente/:id/telefone', ClienteController.addTel)
routes.get('/cliente', ClienteController.list)
routes.get('/cliente/cidades/:nome', ClienteController.listCity)
routes.get('/cliente/:id', ClienteController.find)
routes.put('/cliente/:id', ClienteController.update)
routes.delete('/cliente/:id', ClienteController.delete)

export default routes;
