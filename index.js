const { ApolloServer } = require('@apollo/server') ;
const { startStandaloneServer } = require('@apollo/server/standalone') ;
const { typeDefs } = require('./schema/typeDefs.js');
const { resolvers } = require('./schema/resolvers.js');

async function main() {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
      listen: { port: 3000 },
    });
    console.log(`🚀  Server ready at ${url}`);
};
main()
