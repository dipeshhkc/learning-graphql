const { authors, books } = require('./database');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
  } = require('graphql');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'Author Entity',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'Type Defination of Book',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: { type: GraphQLNonNull(GraphQLString) },
    author: {
      type: AuthorType,
      resolve: (book) => authors.find((each) => each.id == book.id),
    },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: 'Root',
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

module.exports.schema=schema