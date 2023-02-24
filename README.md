# Your Garden

Esse é um projeto desenvolvido utilizando as tecnologias Node.js, React, Sequelize e MySQL. Ele consiste em uma loja web com foco de venda de plantas com uma aba de comunidade para as pessoas interagirem pedindo dicas e opiniões sobre suas plantas adquiridas.

Ferramentas Utilizadas no Backend

    Node.js
    Sequelize: ORM utilizado para facilitar o uso do Mysql, permitindo criar Modelos, um incrível sistema de versionamento de banco de dados e diversas         outras funcionacidades
    MySQL2: Driver utilizado para usar o mysql

# Configurando o Backend

    Após clonar o projeto em sua máquina, instale as dependencias do projeto:

    npm install

    ##Renomeie o arquivo .env.example para .env e o complete com as seguintes informações:

    DB_HOST=<host do banco de dados>
    DB_USER=<usuário do banco de dados>
    DB_PASSWORD=<senha do banco de dados>
    DB_NAME=<nome do banco de dados>
    DB_PORT=<porta do banco de dados>
    PORT=<porta do servidor>
    PRIVATE=<chave privada para autenticação JWT (Bate a mão no teclado) >

    ##Crie o banco de dados:

    npx sequelize-cli db:create

    ##Rode as migrations para criar as tabelas do banco de dados (usuário admin já incluido):

    npx sequelize-cli db:migrate

    ##Inicie o servidor:
    
    npm run start:dev

# Configurando o Frontend

    ##Instale as dependências do projeto:

    npm install

    ##Crie um arquivo .env na raiz do projeto com a seguinte informação:

    javascript

    VITE_API_URL=http://localhost:4000

    ##Inicie o servidor:

    npm run dev
   
    ##Acesse a URL cedida no console e vá para a aba "Entrar", caso queira entrar como administrador entre com os dados:

    Email: admin@admin.com
    Senha: admin123senha

    ##Caso contrario vá em "Cadastre-se" e crie um usuário 
   
# A fazer:

## 1 - Refatoração do código: 
      - Componentizando componentes no frontend para serem reutilizados;
      - Configurar estilos no tailwind para melhor aproveitamento.
## 2 - Funcionalidades:
      - Adicionar as funcionalidades da aba comunidade;
      - Criar painel do administrador 
      - Repensar interface

# Considerações:

      - Este projeto não teve foco na interface do Usuário por ser uma área que demanda mais tempo.

