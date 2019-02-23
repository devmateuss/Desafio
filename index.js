const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const { Agent, Departament, Moviment } = require('./app/models')
const app = express();

const agentSchema = require('./api/schems/agentSchema')
const departamentSchema = require('./api/schems/departamentSchema')
const movimentSchema = require('./api/schems/movimentSchema')

app.use(bodyParser.urlencoded({ extended: false }));

//Departament.create({ name: 'Departamento pessoal', createdAt: new Date, updatedAt: new Date });

app.use('/agents', bodyParser.json(), graphqlHTTP({
  schema: agentSchema,
  graphiql: true
}))

app.use('/departaments', bodyParser.json(), graphqlHTTP({
  schema: departamentSchema,
  graphiql: true
}))

app.use('/moviments', bodyParser.json(), graphqlHTTP({
  schema: movimentSchema,
  graphiql: true
}))


app.listen(3000)