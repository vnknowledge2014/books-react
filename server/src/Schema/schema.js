import { gql } from 'apollo-server-express';
import resolvers from '../Resolver/resolvers';

const typeDefs = gql`
    type Book {
        _id: String
        bookTitle: String!
        author: [String]!
        category: [String]!
        content: String!
        like: Int
        image: String!
        link: [String]!
        uploader: String!
    }

    type Query {
        getBooks: [Book]
        getOneBook(id: String!): Book
        getBookByAuthor(author: String): [Book]
        getBookByCategory(category: String): [Book]
    }

    type Mutation {
        addBook(bookTitle: String!, author: [String]!, category: [String]!, content: String!, image: String!, link: [String]!, uploader: String!): Book
        updateBook(id: String!, bookTitle: String, author: [String], category: [String], content: String, image: String!, link: [String], uploader: String): Book
        deleteBook(id: String!): Book
        updateLike(id: String!): Book
    }
`;

const schema = {
    typeDefs,
    resolvers
};

module.exports = schema;