Etapas do projeto
1. yarn add express 
2. yarn add typescript
3. yarn add tsc
4. yarn add @types/express
5. yarn add ts-node-dev

plugin para relacionar com banco, ajuda na geração de scripts SQL ou independente de banco que será usado

 6. yarn add knex
 7. yarn add mysql2

 criar migrations

 knex migrate: make create_tab_cadastro

 yarn knex migrate:latest


 ///depois de excluir tudo relacionado ao knex, vamos trabalhar com typeorm

 1. npm install --global typeorm
 yarn add typeorm //inserir no projeto

 typeorm migration:create -n CreateTabCadastro