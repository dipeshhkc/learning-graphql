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
    books: {
      type: GraphQLList(BookType),
      resolve: (author) => books.filter((each) => each.authorId == author.id),
    },
  }),
});

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'Book Entity',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: { type: GraphQLNonNull(GraphQLString) },
    author: {
      type: AuthorType,
      resolve: (book) => authors.find((each) => each.id == book.authorId),
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
    authors: {
      type: GraphQLList(AuthorType),
      description: 'Collection of authors',
      resolve: () => authors,
    },
  }),
});

const schema = new GraphQLSchema({ query: RootQueryType });

module.exports.schema = schema;
