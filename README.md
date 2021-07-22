# Prova Senai

Oi! Eu sou a Rosana Faccioni 🦄, este repositório tem como objetivo armazenar artefatos e documentar o projeto realizado como prova de ingresso para a vaga de técnico em informática do Senai.

# Front-end
### Instalando o projeto 🚀
Após clonar o repositório é necessário executar os seguintes comandos:

    npm install

Após a instalação basta utilizar o comando:

    npm run start

Para o desenvolvimento do front-end eu utilizei o React.js com o Bootstrap, a justificativa pela escolha do React.js se faz pois no momento estou aprendendo HTML, CSS e JS. Então como estou estudando JavaScript me senti mais confiante de seguir tutorias e exemplos de React.js para o desenvolvimento da prova do que qualquer outro framework em PHP.

### FontAwesome
Para fazer o símbolo de selecionado eu carreguei a biblioteca FontAwesome para a prova em si, sei que é muita coisa mas pensando como aplicação completa acredito que seria uma boa adição ao stack de tecnologias.

### Consumindo APIs
Para realizar a tarefa de consumir as APIs (https://randomuser.me/api, http://localhost:3002), foi utilizado a biblioteca Axios para React.js que oferece todos recursos necessários para realizar requisições HTTP.

### Abordagem em Componentes 🧩
Aproveitando que estaria utilizando o React.js me esforcei para componentizar da melhor forma possível, em relação aos nomes das classes tentei utilizar a norma de escrita descrita neste site (http://getbem.com/introduction/).

**Obs:. Tentei colocar o conteúdo do componente <Content /> de forma dinâmica  de maneira a simular a reutilização dele em outras partes da aplicação.

# Banco de Dados
Para o banco de dados eu preferi utilizar o MySQL pois já tinha estudado sobre ele no meu curso técnico de informática então foi mais fácil a implementação.

### Tabela Logs
Utilizei o formato de ISOString para armazenar a hora e a data.

### Tabela Profile
Utilizei o formato "text" no tipo de campo no MySQL para armazenar todo o JSON do perfil, a justificativa está no fato de não ter o controle de quais propriedades serão retornadas no objeto JSON, além do fato que não foi especificado como regra de negócio que seria utilizado o banco MySQL para consultas nesse caso seria criadas as colunas que seria utilizadas para realizar as consultas.

# Servidor

Pelos mesmos motivos que definiu a escolha do React.js no front-end, eu preferi utilizar o Node.js em conjunto com o Express e uma biblioteca chamada mysql2 para criar uma mini camada de API para se conectar ao MySQL para persistir os dados.

**Obs:. O arquivo .sql está commitado também neste repositório nome "localhost.sql".