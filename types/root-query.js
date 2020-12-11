const { GraphQLObjectType, GraphQLInt, GraphQLList } = require("graphql");
const { authors,books } = require("../database");
const { BookType,AuthorType } = require("./book-author");

const RootQueryType = new GraphQLObjectType({
    name: 'Root',
    description: 'This is the root Query',
    fields: () => ({
      book: {
        type: BookType,
        description: 'Single Book',
        args: {
          id: { type: GraphQLInt },
        },
        resolve: (_, args) => books.find((each) => each.id == args.id),
      },
      author: {
        type: AuthorType,
        description: 'Single Author',
        args: {
          id: { type: GraphQLInt },
        },
        resolve: (_, args) => authors.find((each) => each.id == args.id),
      },
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

  module.exports.RootQueryType=RootQueryType