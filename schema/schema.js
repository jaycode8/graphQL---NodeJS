const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema, GraphQLNonNull } = require("graphql");
const mongoose = require("mongoose");
const { clientsSchema } = require("../models/clients.model");
const { projectsSchema } = require("../models/projects.model");
const clientsModel = mongoose.model("clients", clientsSchema);
const projectsModel = mongoose.model("projects", projectsSchema);
const { clients } = require("./clients.schema");

const ClientType = new GraphQLObjectType({
    name: "Client",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});

const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                return clientsModel.findById(parent.client);
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                return clientsModel.find();
            },
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return clientsModel.findById(args.id);
            },
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return projectsModel.find();
            },
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return projectsModel.findById(args.id);
            },
        },
    },
});

const mutation = new GraphQLObjectType({
    name: "mutation",
    fields: {
        addClient: {
            type: ClientType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const client = new clientsModel({
                    name: args.name,
                    email: args.email,
                    phone: args.phone,
                });
                return client.save();
            },
        },
        deleteClient: {
            type: ClientType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return clientsModel.findByIdAndDelete(args.id);
            },
        },
        updateClient: {
            type: ClientType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                phone: { type: GraphQLString },
            },
            resolve(parent, args) {
                return clientsModel.findByIdAndUpdate(args.id, {
                    $set: {
                        name: args.name,
                        email: args.email,
                        phone: args.phone,
                    },
                });
            },
        },
        addProject: {
            type: ProjectType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                status: { type: new GraphQLNonNull(GraphQLString) },
                client: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                const project = new projectsModel({
                    name: args.name,
                    description: args.description,
                    status: args.status,
                    client: args.client,
                });
                return project.save();
            },
        },
        updateProject: {
            type: ProjectType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                status: { type: GraphQLString },
            },
            resolve(parent, args) {
                return projectsModel.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            name: args.name,
                            description: args.description,
                            status: args.status
                        }
                    }
                )
            }
        },
        deleteProject: {
            type: ProjectType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args) {
                return projectsModel.findByIdAndDelete(args.id);
            }
        }
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
});