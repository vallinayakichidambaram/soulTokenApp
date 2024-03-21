
const { users } = require('./userData')

exports.typeDefs = ` #graphql
    type user {
        name: String!,
        age: String!
    }

    type Query {
        getUsers: [user!]!
    }
`;

exports.resolvers = {
    Query: {
        getUsers: () => {
           return users
        }
    }
};

