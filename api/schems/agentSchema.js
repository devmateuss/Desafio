const resolvers = require('../resolvers/agentsResolvers')
const { makeExecutableSchema } = require('graphql-tools')

const agentAttribs = `
    id: ID
    name: String!
    departament: Int!
`

const typeDefs = `
    type Agent {
        ${agentAttribs}
    }
    type Query {
        getAgent(id: ID!): Agent
        getAgents: [Agent]
    }
    input AgentInput {
        ${agentAttribs}
    }
    type Mutation {
        createAgent(input: AgentInput): Agent
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})