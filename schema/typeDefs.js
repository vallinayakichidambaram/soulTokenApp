exports.typeDefs = ` #graphql
    type user {
        name: String!,
        age: String!
    }

    type Query {
        getUsers: [user!]!
    }

    type Mutation {
        addUser(name: String!, age: String!): user!
    }
`;