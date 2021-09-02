import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity("tab_cadastro")
export class Cadastro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cpf: string;

    @Column()
    nome: string; 
}