import { EntityRepository, Repository } from "typeorm";
import { Cliente } from "../entities/Cliente";

@EntityRepository(Cliente)
export class ClienteRepository extends Repository<Cliente> {}