function updateBrain(root, args, context, info) {
  const data = { value: args.damage };
  if (args.injured) {
    data.injured = args.injured;
  }
  return context.db.mutation.updateBrain({
    data,
    where: { id: args.id },
  });
}

module.exports = {
  updateBrain,
};