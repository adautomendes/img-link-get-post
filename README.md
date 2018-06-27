# img-link-get-post
Um pequeno exemplo didático de utilização de métodos HTTP GET e POST em conjunto com AJAX para inserir dados em banco de dados remoto e atualizar uma página HTML dinamicamente.

## Dependências
Banco de Dados MySQL instalado.

## Backend
* [Express](http://expressjs.com/) - Framework de aplicação WEB em NodeJS
* [MySQL](https://www.npmjs.com/package/mysql) - Plugin de conexão com o BD

## Frontend
* [jQuery](https://jquery.com/) - Biblioteca Javascript
* [MaterializeCSS](https://materializecss.com/) - Framework CSS para estilização do HTML

## Deployment
* Execute 'img-link-get-post.sql' no seu MySQL
* Configure a variável 'con' no arquivo backend/index.js com as suas configurações do MySQL
* Abra o terminal na pasta 'backend' e execute o comando abaixo para instalar as dependências do NodeJS:
```
npm install
```
* Execute o comando abaixo para subir o servidor:
```
node index.js
```
* Abra o arquivo cards.html ou list.html da pasta 'frontend'.

## Funcionamento
Para inserir uma nova imagem na galeria dê um nome para imagem e cole o link do arquivo .jpg ou .png no campo 'url' e salve. Dentro de instantes a imagem será carregada na galeria.