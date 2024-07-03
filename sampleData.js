const clients = [
    {
        id: "1",
        name: "Michael Scoffild",
        email: "ms@gmail.com",
        phone:"0987654567"
    },
    {
        id: "2",
        name: "Tonny Stark",
        email: "stark@yahoo.com",
        phone:"087976543"
    },
    {
        id: "3",
        name: "James Mumo",
        email: "jm@gmail.com",
        phone:"078654567"
    },
    {
        id: "4",
        name: "Jane Doe",
        email: "jane@doe.mail",
        phone:"0789675645"
    },
    {
        id: "5",
        name: "Njoro wa Uber",
        email: "njoro@uber.com",
        phone:"0786561234"
    }
];

const projects = [
    {
        id: "1",
        name: "AWS Clone",
        description:
            "This is the official GraphQL over HTTP spec reference implementation and as such follows the specification strictly without any additional features (like playgrounds or GUIs, file uploads, @stream/@defer directives and subscriptions).Having said this, graphql-http is mostly aimed for library authors and simple server setups, where the requirements are exact to what the aforementioned spec offers.",
        status: "active",
        client: "2",
    },
    {
        id: "2",
        name: "Safari Adventure",
        description:
            "This is the official GraphQL over HTTP spec reference implementation and as such follows the specification strictly without any additional features (like playgrounds or GUIs, file uploads, @stream/@defer directives and subscriptions).Having said this, graphql-http is mostly aimed for library authors and simple server setups, where the requirements are exact to what the aforementioned spec offers.",
        status: "finished",
        client: "1",
    },
    {
        id: "3",
        name: "carrer Pilot",
        description:
            "This is the official GraphQL over HTTP spec reference implementation and as such follows the specification strictly without any additional features (like playgrounds or GUIs, file uploads, @stream/@defer directives and subscriptions).Having said this, graphql-http is mostly aimed for library authors and simple server setups, where the requirements are exact to what the aforementioned spec offers.",
        status: "active",
        client: "5",
    },
    {
        id: "4",
        name: "Abuja",
        description:
            "This is the official GraphQL over HTTP spec reference implementation and as such follows the specification strictly without any additional features (like playgrounds or GUIs, file uploads, @stream/@defer directives and subscriptions).Having said this, graphql-http is mostly aimed for library authors and simple server setups, where the requirements are exact to what the aforementioned spec offers.",
        status: "active",
        client: "3",
    },
];

module.exports = { clients, projects };