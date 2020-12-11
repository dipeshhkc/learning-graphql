const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const { books,authors } = require('../database');
const { BookType,AuthorType } = require('./book-author');

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is the root Mutation',
  fields: () => ({
    addBook: {
      //type of return value
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
    addAuthor: {
        //type of return value
        type: AuthorType,
        description: 'Add an author',
        args: {
          name: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: (_, args) => {
          const author = {
            id: authors.length + 1,
            name: args.name,
          };
          authors.push(author);
          return author;
        },
      },
  }),
});

module.exports.RootMutationType = RootMutationType;
