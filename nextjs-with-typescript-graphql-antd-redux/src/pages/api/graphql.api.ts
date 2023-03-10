import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';

import Mutation from '@/graphql/resolvers/mutations';
import Query from '@/graphql/resolvers/queries';
import typeDefs from '@/graphql/schema.gql';

const resolvers = {
  Query,
  // Mutation,
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground({
          settings: {
            'schema.polling.enable': false,
          },
        }),
  ],
});

const serverStart = apolloServer.start();

export default async function handler(req: any, res: any) {
  await serverStart;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}
