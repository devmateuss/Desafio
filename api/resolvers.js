const { GraphQLString } = require('graphql')
const { Agent, Departament, Moviment } = require('../app/models')

module.exports = {
    Query: {
        agents: (obj, args) => Agent.findAll(),
        agent: (obj, { id }) => Agent.findOne({ where: { id } }),

        departaments: (obj, args) => Departament.findAll(),
        departament: (obj, { id }) => Departament.findOne({ where: { id } }),

        moviments: (obj, args) => Moviment.findAll(),
        moviment: (obj, args) => Moviment.findOne({ where: { id } })
    },
    Mutation: {
        createAgent: (parent, args, { models }) => Agent.create(args),
        createDepartament: (parent, args, { models }) => Departament.create(args),
        createMoviment: (parent, args, { models }) => Moviment.create(args)
    }
}