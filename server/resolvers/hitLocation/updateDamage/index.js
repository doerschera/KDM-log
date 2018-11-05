function updateDamage(root, args, context, info) {
  return context.db.mutation.updateHitLocation({
    data: { damage: args.damage },
    where: { id: args.id },
  });
}

module.exports = {
  updateDamage,
};