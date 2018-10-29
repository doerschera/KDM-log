const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const resolvers = {
  Query: {
    info: () => 'Have a bad time all the time',
    survivors: (root, args, context, info ) => context.db.query.survivors({}, info),
  },
  Mutation: {
    survivor: (root, args, context, info) => {
      return context.db.mutation.createSurvivor({
        data: {
          name: args.name || 'Survivor',
          gender: args.gender,
        },
      }, info);
    },
  },
  Survivor: {
    id: (root) => root.id,
    name: (root) => root.name,
    gender: (root) => root.gender,
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/aly-doerscher-4d5fa2/kdm/dev',
      secret: 'darklantern',
      ebug: true,
    })
  }),
});

server.start(() => console.log('Server is running on http://localhost:4000'));