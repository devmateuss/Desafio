const resolvers = require('../resolvers/movimentsResolvers')
const { makeExecutableSchema } = require('graphql-tools')

const movimentAttribs = `
    id: ID
    agent: Int!
    description: String!
    value: Float!
`

const typeDefs = `
    type Moviment {
        ${movimentAttribs}
    }
    type Query {
        getMoviment(id: ID!): Moviment
        getMoviments: [Moviment]
    }
    input MovimentInput {
        ${movimentAttribs}
    }
    type Mutation {
        createMoviment(input: MovimentInput): Moviment
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})