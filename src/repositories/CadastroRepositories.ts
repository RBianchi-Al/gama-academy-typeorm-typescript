import { EntityRepository, Repository } from "typeorm";
import { Cadastro } from "../entities/Cadastro";

@EntityRepository(Cadastro)
export class CadastroRepository extends Repository<Cadastro> {}