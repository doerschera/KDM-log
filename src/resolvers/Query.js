function survivors() {
  return context.db.query.survivors({}, info);
}

function campaigns(root, args, context, info) {
  return context.db.query.campaigns({}, info);
}

function users(root, args, context, info) {
  return context.db.query.users({}, info);
}

module.exports = {
  campaigns,
  survivors,
  users,
};
