const express = require("express");
// const { graphqlHTTP } = require("express-graphql");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require('./schema/schema');
const PORT = 4600;
require("./db/dbconfig");

const app = express();

app.all("/graphql", createHandler({
    schema,
}));

app.listen(PORT, () => console.log(`app running at port ${PORT}`));