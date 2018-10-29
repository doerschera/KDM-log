const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Query {
    info: String!
    survivors: [Survivor!]!
  }

  type Survivor {
    id: ID!
    name: String!
    gender: String!
  }
`;

const survivors = [{
  id: 1,
  name: 'Staby',
  gender: 'm',
}];

const resolvers = {
  Query: {
    info: () => 'Have a bad time all the time',
    survivors: () => survivors,
  },
  Survivor: {
    id: (root) => root.id,
    name: (root) => root.name,
    gender: (root) => root.gender,
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log('Server is running on http://localhost:4000'));