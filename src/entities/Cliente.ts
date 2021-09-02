import {BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { ClienteTelefone } from './ClienteTelefone';
import { Endereco } from './Endereco';

@Entity("tab_cliente")
export class Cliente extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cpf_cnpj: string;

    @Column()
    nome: string; 

    @Column()
    ativo: boolean;

    @OneToOne(() => Endereco, {cascade: true, eager: true})
    @JoinColumn({name: "cd_endereco"})
    endereco: Endereco;

    @OneToMany(() => ClienteTelefone, tel => tel.cliente, {
        cascade: true,
        eager: true
    })
    telefones: ClienteTelefone[];
    
    @CreateDateColumn({name: "dt_inclusao"})
    dt_inclusao: Date;
    
    @UpdateDateColumn({name: "dt_alteracao"})
    dt_alteracao: Date;
    
    @Column()
    cd_endereco: number;


    

    
}