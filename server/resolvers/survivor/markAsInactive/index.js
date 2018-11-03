function markAsInactive(root, args, context, info) {
  return context.db.mutation.updateSurvivor({
    data: { isActive: false },
    where: { id: args.id }
  });
}

module.exports = {
  markAsInactive,
};