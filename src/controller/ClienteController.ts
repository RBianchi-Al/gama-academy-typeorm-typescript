// gerenciamento e regras de negócio, faz as requisições

import { Request, Response } from 'express';
import { getConnection, getCustomRepository } from 'typeorm';
import { Cliente } from '../entities/Cliente';
import { ClienteTelefone } from '../entities/ClienteTelefone';
import { ClienteRepository } from '../repositories/ClienteRepositories';

export default {
    async create(req: Request, res: Response) {
        const { cpf_cnpj, nome, endereco, telefones } = req.body;
        let data = { cpf_cnpj, nome, endereco, telefones };

        const repository = getCustomRepository(ClienteRepository);
        data = await repository.save(data)

        return res.status(201).json({ data: data })
    },
    async list(req: Request, res: Response) {
        const repository = getCustomRepository(ClienteRepository)
        const data = await repository.find()
        return res.status(201).json({ data: data })
    },
    async find(req: Request, res: Response) {
        const { id } = req.params;
        const repository = getCustomRepository(ClienteRepository);
        const user = await repository.findOne(id)
        return res.status(201).json({ data: user })
    },
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, cpf } = req.body;
        const data = { cpf, nome };
        const repository = getCustomRepository(ClienteRepository)
        await repository.update(id, data)
        return res.status(201).json({ data: data })

    },
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const repository = getCustomRepository(ClienteRepository)
        await repository.delete(id)
       
        return res.status(201).json({ message: "Usuário deletado com sucesso" })
    },
    async addTel(req: Request, res: Response){
        const { id } = req.params;
        const { ddd, numero, tipo } = req.body;

        const repository = getCustomRepository(ClienteRepository);

        const cliente = await repository.findOne(id)
        const telefone = new ClienteTelefone();
        telefone.numero = numero;
        telefone.ddd = ddd;
        telefone.tipo = tipo;
        telefone.cliente = cliente;

        cliente.telefones.push(telefone);
        await repository.save(cliente);
        return res.status(201).json({ message: "Telefone adicionado com sucesso" })
    },
    async listCity(req: Request, res: Response){
        const {nome} = req.params;
        const data = await getConnection()
        .getRepository(Cliente)
        .createQueryBuilder("cliente").innerJoin("cliente.endereco", "endereco")
        .where("endereco.cidade = :nome", {nome: nome})
        .getMany()
        return res.status(201).json({data: data })
    }
}