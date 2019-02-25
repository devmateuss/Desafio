const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const { Agent, Departament, Moviment } = require('./app/models')
const typeDefs = require('./api/schema')
const resolvers = require('./api/resolvers')


const app = express();
const graphqlEndpoint = '/graphql'

const { makeExecutableSchema } = require('graphql-tools')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(bodyParser.urlencoded({ extended: false }));

//Departament.create({ name: 'Departamento pessoal', createdAt: new Date, updatedAt: new Date });

app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlHTTP({
    schema,
    graphiql: true
  }))


app.listen(3003)