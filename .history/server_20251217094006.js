import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID
    usename: String
  }
  type Tweet {
    id: ID
    text: String
    author: User
  }
  type Query {
    allTweets: [Tweet]
    twewt(id: ID): Tweet
  }
`;
// GET /api/v1/tweets
// GET /api/v1/tweet/:id

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
