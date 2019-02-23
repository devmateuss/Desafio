const resolvers = require('../resolvers/departamentsResolvers')
const { makeExecutableSchema } = require('graphql-tools')

const departamentsAttribs = `
    id: ID
    name: String!
`

const typeDefs = `
    type Departament {
        ${departamentsAttribs}
    }
    type Query {
        getDepartament(id: ID!): Departament
        getDepartaments: [Departament]
    }
    input DepartamentInput {
        ${departamentsAttribs}
    }
    type Mutation {
        createDepartament(input: DepartamentInput): Departament
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})