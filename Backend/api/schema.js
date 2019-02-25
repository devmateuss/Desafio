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
    Departament: Departament
  }

  type Departament {
    id: ID!
    name:String!
  }

  type Moviment {
    id: ID!
    AgentMoviment: Agent
    description: String!
    value: Float!
  }

  input DepartamentInput {
    id: ID
    name: String
  }

  input AgentInput {
    id: ID
    name:String
  }

  type Mutation {
    createAgent(name: String!, input: DepartamentInput): Agent
    createDepartament(name: String!): Departament!
    createMoviment(description: String!, value: Float!, input: AgentInput ): Moviment
  }
`