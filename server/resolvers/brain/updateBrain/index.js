function updateBrain(root, args, context, info) {
  return context.db.mutation.updateBrain({
    data: { value: args.damage },
    where: { id: args.id },
  });
}

module.exports = {
  updateBrain,
};