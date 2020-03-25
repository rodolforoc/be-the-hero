/**
 * Query Params: Parametros nomeados enviados na rota apos o "?" (Filtros, Paginação)
 * Route Params: Parametros utilizados apra identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle
 * NoSQL: MongoDB
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() KNEX
 */
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(
  // origin: 'http://'
));
app.use(express.json());
app.use(routes);



app.listen(3333);