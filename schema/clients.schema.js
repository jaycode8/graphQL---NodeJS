const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema, GraphQLNonNull } = require("graphql");
const mongoose = require("mongoose");
const { clientsSchema } = require("../models/clients.model");
const { projectsSchema } = require("../models/projects.model");
const clientsModel = mongoose.model("clients", clientsSchema);
const projectsModel = mongoose.model("projects", projectsSchema);

const ClientType = new GraphQLObjectType({
    name: "Client",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    }),
});

const clients = [
    {
        type: new GraphQLList(ClientType),
        resolve(parent, args) {
            return clientsModel.find();
        },
    },
];

module.exports = {
    clients
}