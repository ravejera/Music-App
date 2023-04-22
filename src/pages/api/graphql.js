import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import typeDefs from "./data/schema";
import resolvers from "./data/resolvers";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: true,
  },
};

export default startServerAndCreateNextHandler(apolloServer);
