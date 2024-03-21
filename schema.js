
const { users } = require('./userData')

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

exports.resolvers = {
    Query: {
        getUsers: () => {
           return users
        }
    },

    Mutation: {
        addUser: (parent, args) => {
            const newUser = args;
            users.push(newUser);
            return newUser
        }
    }
};

