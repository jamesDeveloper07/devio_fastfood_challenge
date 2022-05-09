## Fastfood API

O projeto foi gerado com Adonis versão 4.1.0.


## Para executá-lo em sua máquina

1 - Faça o clone do repositório

2 - Para instalar o Adonis se faz necessário ter o NodeJS instalado. Caso ainda não o tenha, acesse o site do Node.js e baixe a última versão destinada ao seu sistema operacional. (https://nodejs.org/)

3 - Após a instalação do NodeJS, rode em um terminal a instrução: npm install -g @adonisjs/cli 

4 - Se faz necessário instalar os módulos nodes, para isso, acesse a pasta server do repositório e execute a instrução: npm install

5 - A api foi desenvolvida utilizando o PostgreSQL como banco de dados. Recomendamos instalar o postgreSQL, para após criar uma base para ser utilizada pela api. (https://www.postgresql.org/)

6 - Após instalar o banco de dados, rode o script de criação da base de dados utilizada por padrão:

CREATE DATABASE fastfood
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'Portuguese_Brazil.1252'
       LC_CTYPE = 'Portuguese_Brazil.1252'
       CONNECTION LIMIT = -1;

7 - Não esqueça de configurar o arquivo .env, com os dados necessários para a perfeita execução da api. Disponibilizamos um arquivo .env.example para facilitar esta configuração

8 - Agora, execute o migration para que as tabelas sejam criadas no banco de dados: adonis migration:run

9 - Após criadas as tabelas, execute o comando adonis seed para alimenta-lás com alguns dados iniciais: adonis seed

10 - Para iniciar a api, execute a instrução: adonis serve --dev

11 - Se tudo ocorrer, a api estará disponível por padrão no endereço http://localhost:3333/

