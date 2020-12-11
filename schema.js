const { GraphQLSchema } = require('graphql');
const { RootMutationType } = require('./types/root-mutation');
const { RootQueryType } = require('./types/root-query');

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

module.exports.schema = schema;
