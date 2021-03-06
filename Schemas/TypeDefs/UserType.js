const graphql = require('graphql') 
const {
    GraphQLObjectType, GraphQLString, GraphQLInt} = graphql;
  


const UserType = new GraphQLObjectType({
    name: "User", 
    fields: () => ({
        id: { type: GraphQLInt}, 
        first_name: { type: GraphQLString},
        last_name: { type: GraphQLString}, 
        email: { type: GraphQLString},
    }),
}); 

module.exports = UserType;