const { Moviment } = require('../../app/models')

module.exports = {
    Query: {
        async getMoviment(_, { id }) {
            return await Moviment.findOne({ where: { id } });
        },

        async getMoviments() {
            return await Moviment.findAll();
        }
    },
    Mutation: {
        async createMoviment(_, { input }) {
            const result = await Moviment.create({
                agent: input.agent,
                description: input.description,
                value: input.value
            })

            return await result;
        }
    }
}