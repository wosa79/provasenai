![alt text](https://www.senairs.org.br/sites/default/files/styles/scale_sm/public/logos/senai_pb2.png?itok=KYIhBtq6 "SENAI-RS")

## 1. INTRODUÇÃO
---

Esta prova visa testar os seus conhecimentos em desenvolvimento web. A aplicação desenvolvida e entregue deverá funcionar no navegador Google Chrome, sem a necessidade de qualquer instalação, incluindo plug-ins como Flash ou Java.

A Gerência de Desenvolvimento Educacional (GDE) é responsável pelo desenvolvimento e manutenção do Ambiente Virtual de Aprendizagem (AVA) SAPIEN utilizando nos cursos presenciais, semipresenciais e à distância em todo o SENAI no Rio Grande do Sul.

O SAPIEN possui uma grande diversidade de funcionalidades, como listagem de alunos, banco de recursos, avaliações, biblioteca virtual, dentre outras. 

## 2. DESCRIÇÃO DA TAREFA
---

A sua tarefa consiste na replicação do front-end de uma das telas do SAPIEN com persistência de informações: a tela de listagem de participantes de uma turma (alunos), que contém informações sobre a turma, o nome de cada participante e seu respectivo avatar. Você deverá clonar este repositório e realizar as modificações descritas nas regras de negócio abaixo: ***ATENÇÃO: Você não deve submeter PRs ou commits neste repositório. Lembre-se de excluir a pasta .git/ para incluir o seu repositório ou alterar as URLs remotas.*** 

Neste repositório você encontrará:

* Uma pasta chamada layouts contendo layout final esperado em duas capturas de tela, uma referente à listagem dos participantes (ver arquivo <code>layout.png</code>) e outra que contém uma customização exibindo um card de usuário selecionado (ver arquivo layout_selecionado.png);
* O arquivo <code>style.css</code>, que ao final deve conter todos estilos utilizados na criação da tela, você encontrará já presente neste arquivo as configurações de root da página;

* Um arquivo <code> script.js </code>, que ao final deve conter todos os scripts utilizados na manipulação da tela, este script já possui uma requisição em AJAX para uma API externa que recuperará randomicamente as informações referente aos participantes da turma;

* Um arquivo chamado <code>exemplo-retorno-api.json</code> que contém um exemplo de resposta da requisição AJAX;

* Um arquivo <code>index.html</code>, que deverá ser utilizado para exibir as informações, este arquivo já contém os CDNs (Bootstrap e jQuery) que podem ser utilizados a seu critério para o desenvolvimento desta tarefa junto ao esqueleto da página já incluídos;

* Uma pasta chamada imgs que contém a logo do SENAI-RS/FIERGS (<code>logo_topo.png</code>) que deverá ser inserida no topo do documento, conforme as imagens de layout disponíveis;

* Você deverá implementar o código usando a linguagem de programação PHP. Ou, caso você prefira, você poderá usar React.Js com back-end desenvolvido em Node.js

**NOTA:** Caso você queira usar algum framework, seja ele PHP ou JavaScript, exemplo: Laravel, PHPCake, Reactjs, Node.js... Fique a vontade! Iremos avaliar você baseado no que você é capaz de produzir tecnicamente dentro do escopo definido sem restrições de tecnologia.

**DICA:** O SAPIEN possui mais de 150 mil usuários cadastrados em sua base, estamos constantemente migrando e utilizando tecnologias de ponta que miram o mercado enterprise, considere este ponto na sua adoção.

***Regras de negócio a serem consideradas:***

* O layout final deve ser igual ao layout disponibilizado nas capturas de tela presentes na pasta layouts;

* Você poderá usar banco de dados relacional (SQL) ou não relacional (NoSQL), independente do provider (MySQL, SQL Server Developer/Express, Oracle XE, PostgreSQL)

* A cada vez que a página for carregada ela deverá apresentar uma lista aleatória de 5 a 15 participantes, que devem ser obtidos através de uma requisição à API;

* Você deverá criar uma tabela de log no banco de dados que deverá persistir a data e hora de cada vez que uma nova requisção for feita a API;

* Cada card de participante deverá exibir o nome e o avatar que estará presente na resposta da requisição a API;

* Ao clicar sobre um card de usuário, este deve ter a cor do seu card modificada conforme a imagem <code>layout_selecionado.png</code> (ver a pasta layouts);

* Você deverá persistir em banco todos os usuários e suas informações básicas retornadas pela API junto com o seu round de carramento.

* Você deve aplicar as classes correspondentes aos critérios de responsividade para desktops, tablets e smartphones utilizando como modelo de referência o framework CSS Bootstrap;

* Você deverá documentar o desenvolvimento utilizando arquivos markdown (um readme.md como este é um bom começo), descrevendo o projeto e a sua implementação incluindo, tecnologias, detalhes, etc. 
 
**Desafio extra**

* Encorajamos que você use uma abordagem em containeres Docker para realizar a tarefa. Neste caso, por favor, nos envie o seu <code>docker-compose.yaml</code> junto do <code>Dockerfile</code>.

## 3. Entrega
---

**Como você irá entregar?**

Você irá nos enviar, via email, um link para um repositório Git (GitHub, GitLab, BitBucket, etc) criado por você com o resultado final de sua implementação e que deve estar acessível, conforme o item 2. Não se esqueça de nos enviar a estrutura do seu BD. Exemplo: O DDL em formato <code>.sql</code>. A documentação é muito importante para que consigamos entender a sua linha de raciocínio e como replicar a sua solução aqui no SENAI.

Caso você não consiga criar um repositório Git, você deverá encaminhar sua resposta em um arquivo compactado via email.

:coffee: **Happy Coding!!** :coffee: 
