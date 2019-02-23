const { Agent } = require('../../app/models')

module.exports = {
    Query: {
        async getAgent(_, { id }) {
            return await Agent.findOne({ where: { id } });
        },
        async getAgents() {
            return await Agent.findAll();
        }
    },
    Mutation: {
        async createAgent(_, { input }) {
            const result = await Agent.create({
                name: input.name,
                departament: input.departament
            })
            
            return await result;
        }
    }
}