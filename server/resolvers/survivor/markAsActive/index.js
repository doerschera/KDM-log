function markAsActive(root, args, context, info) {
  return context.db.mutation.updateSurvivor({
    data: { isActive: true },
    where: {id: args.id}
  });
}

module.exports = {
  markAsActive,
};