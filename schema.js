const { GraphQLSchema } = require('graphql');
const { RootQueryType } = require('./types/root');

const schema = new GraphQLSchema({ query: RootQueryType });

module.exports.schema = schema;
