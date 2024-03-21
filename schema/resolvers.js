const { users } = require("../userData");


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
