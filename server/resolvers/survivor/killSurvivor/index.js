function killSurvivor(root, args, context, info) {
  return context.db.mutation.updateSurvivor({
    data: { isActive: false, isDeceased: true },
    where: { id: args.id }
  });
}

module.exports = {
  killSurvivor,
};