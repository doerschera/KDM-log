function createHitLocations(context, info, survivor) {
  const types = ['head', 'arms', 'body', 'waist', 'legs'];
  return types.map((type) => {
    const armor = type === 'waist' ? 1 : 0;
    return context.db.mutation.createHitLocation({
      data: {
        type: type,
        armor,
        damage: 0,
        survivor: { connect: { id: survivor.id } }
      }
    }, info);
  });
}

function createSurvival(context, info, survivor) {
  return context.db.mutation.createSurvival({
    data: {
      survivor: { connect: { id: survivor.id } },
      value: 1,
      skills: { set: ["dodge"] },
      canSpend: true,
    }
  }, info);
}

function createMovement(context, info, survivor) {
  return context.db.mutation.createMovement({
    data: {
      survivor: { connect: { id: survivor.id } },
      value: 5,
    }
  }, info);
}

function createBrain(context, info, survivor) {
  return context.db.mutation.createBrain({
    data: {
      survivor: { connect: { id: survivor.id } },
    }
  });
}

async function createNewSurvivor(root, args, context, info) {
  const campaign = await context.db.query.campaign({ where: { id: args.campaign } })
  const survivor = await context.db.mutation.createSurvivor({
    data: {
      name: args.name,
      gender: args.gender,
      campaign: { connect: { id: campaign.id } },
    },
  }, info);

  createHitLocations(context, info, survivor);
  createSurvival(context, info, survivor);
  createMovement(context, info, survivor);
  createBrain(context, info, survivor);
  return survivor;
}

module.exports = {
  createNewSurvivor
};
