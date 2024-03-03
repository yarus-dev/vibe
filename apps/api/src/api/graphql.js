import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typeDefs from '../schema.graphql';
import { resolvers } from '../resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const standalone = await startStandaloneServer(server);

export default standalone;

console.log(`🚀 Server ready at ${standalone.url}`);
