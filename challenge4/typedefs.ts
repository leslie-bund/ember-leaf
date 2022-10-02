import { gql } from "apollo-server";

const typeDefs = gql`
    

    type Review {
        author: String!
        content: String!
        date: String!
    }

    type Book {
        id: ID!
        ISBN: String
        title: String!
        published: String!
        author: String!
        pages: Int!
        publisher: String!
        genres: [String!]!
        reviews(limit: Int): [Review]!
    }

    type Query {
        books: [Book]!
        book(isbn: String): Book
    }
`

export default typeDefs