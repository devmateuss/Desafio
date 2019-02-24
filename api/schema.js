module.exports = `
  type Query {
    agents(limit: Int): [Agent]
    agent(id: ID!): Agent
    departaments(limit: Int): [Departament]
    departament(id: ID!): Departament
    moviments(limit: Int): [Moviment]
    moviment(id: ID!): Moviment
  }

  type Agent {
    id: ID!
    name:String!
    DepartamentId:[Departament]
  }

  type Departament {
    id: ID!
    name:String!
  }

  type Moviment {
    id: ID!
    Description: String!
    AgentId:[Agent]
  }

  type Mutation {
    createAgent(name: String!, DepartamentId: Departament): Agent
    createDepartament(name: String!): Departament!
    createMoviment(description: String!, AgentId: Int!): Moviment
  }
`