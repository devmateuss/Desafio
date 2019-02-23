const { Departament } = require('../../app/models')

module.exports = {
    Query: {
        async getDepartament(_, { id }) {
            return await Departament.findOne({ where: { id } });;
        },

        async getDepartaments() {
            return await Departament.findAll();
        }
    },
    Mutation: {
        async createDepartament(_, { input }) {
            const result = await Departament.create({
                name: input.name
            })

            return await result;
        }
    }
}