const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const app = express();

const authors = [
  { id: 1, name: 'Author1' },
  { id: 2, name: 'Author2' },
  { id: 3, name: 'Author3' },
];

const books = [
  { id: 1, name: 'Book1', authorId: 1 },
  { id: 2, name: 'Book2', authorId: 1 },
  { id: 3, name: 'Book3', authorId: 1 },
  { id: 4, name: 'Book4', authorId: 2 },
  { id: 5, name: 'Book5', authorId: 2 },
  { id: 6, name: 'Book6', authorId: 2 },
  { id: 7, name: 'Book7', authorId: 3 },
  { id: 8, name: 'Book8', authorId: 3 },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'Type Defination of Book',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'This is the root Query',
  fields: () => ({
    books: {
      type: GraphQLList(BookType),
      description: 'Collection of books',
      resolve: () => books,
    },
  }),
});

const schema = new GraphQLSchema({ query: RootQueryType });

app.use('/graphql', graphqlHTTP({ graphiql: true, schema: schema }));

app.listen(9001, () => console.log('Server Running Successfully 🎉 🎉'));
