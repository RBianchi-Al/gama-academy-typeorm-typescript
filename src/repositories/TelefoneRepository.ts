import { EntityRepository, Repository } from "typeorm";
import { ClienteTelefone } from "../entities/ClienteTelefone";


@EntityRepository(ClienteTelefone)
export class TelefoneRepository extends Repository<ClienteTelefone> {}