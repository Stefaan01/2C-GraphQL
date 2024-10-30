const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        getUsers: [User],
        filterUsers(parameter: String!, isName: Boolean!): [User],
    }

    type Mutation {
        addUser(name: String!, email: String!) : User
        deleteUser(name: String!) : User
    }
`

module.exports = typeDefs;