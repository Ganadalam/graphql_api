import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    usename: String!
    firstName: String!
    lastName: String!
  }
  type Tweet {
    id: ID!
    text: String!
    author: User!
  }
  type Query {
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet!
    ping: String!
  }
  type Mutations {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`;
// GET /api/v1/tweets
// POST DELETE PUT /api/v1/tweets
// GET /api/v1/tweet/:id

const resolvers = {
  Query: {
    tweet() {
      console.log("I'm called");
      return null;
    },
    ping() {
      return "pong";
    },
  },
};
const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
