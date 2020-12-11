const { authors,books } = require('../database');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

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

module.exports = { BookType, AuthorType };
