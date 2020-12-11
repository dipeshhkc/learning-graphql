const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const { books } = require('../database');
const { BookType } = require('./book-author');

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is the root Mutation',
  fields: () => ({
    addBook: {
      type: BookType,
      description: 'Add a book',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        author: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (_, args) => {
        const book = {
          id: books.length + 1,
          name: args.name,
          authorId: args.author,
        };
        books.push(book);
        return book;
      },
    },
  }),
});

module.exports.RootMutationType = RootMutationType;
