const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');
const {
  createNewSurvivor,
  markAsActive,
} = require('./survivor/index');

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.db.mutation.createUser({
    data: { ...args, password },
  }, `{ id }`);

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
};

async function login(parent, args, context, info) {
  const user = await context.db.query.user({ where: { username: args.username } }, ` { id password } `);
  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  }
}

function campaign(root, args, context, info) {
  const userId = getUserId(context);
  return context.db.mutation.createCampaign({
    data: {
      name: args.name,
      users: { connect: [{ id: userId }] },
    },
  });
}

module.exports = {
  campaign,
  createNewSurvivor,
  login,
  markAsActive,
  signup,
}