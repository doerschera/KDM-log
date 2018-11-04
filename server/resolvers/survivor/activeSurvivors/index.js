function activeSurvivors(root, args, context, info) {
  return context.db.query.survivors({ where: { isActive: true }}, info);
}

module.exports = {
  activeSurvivors,
};
