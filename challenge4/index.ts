import { ApolloServer } from "apollo-server";
import {
  ApolloServerPluginLandingPageLocalDefault
} from "apollo-server-core";

import typeDefs from './typedefs';
import resolvers from './resolvers';

async function startApolloServer(typeDefs: any, resolvers: any) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer(typeDefs, resolvers);