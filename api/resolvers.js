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
    Agent: {
        Departament: async obj => await Departament.findOne({ where: { id: obj.DepartamentId}}),
    },

    Moviment: {
        AgentMoviment: async obj => await Agent.findOne({ where: { id: obj.AgentId }})
    },
    Mutation: {
        createAgent: async (parent, args, { models }) =>{
           const agent = await Agent.create({
                name: args.name,
                DepartamentId: args.input.id
            })
            return agent
        },
        createDepartament: (parent, args, { models }) => Departament.create(args),
        createMoviment: async (parent, args, { models }) => {
            const moviment = Moviment.create({
                AgentId: args.input.id,
                description: args.description,
                value: args.value
            })

            return moviment
        }
    }
}