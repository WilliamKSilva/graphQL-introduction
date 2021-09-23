const express = require("express");  
const app = express();
const PORT = 5000;
const graphql = require("graphql") 
const schema = require('./Schemas/index')
const { graphqlHTTP } = require("express-graphql");

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

app.listen(PORT, () => console.log("Server Running")); 


