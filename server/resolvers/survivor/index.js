const { activeSurvivors } = require('./activeSurvivors');
const { createNewSurvivor } = require('./createSurvivor');
const { markAsActive } = require('./markAsActive');
const { markAsInactive } = require('./markAsInactive');

module.exports = {
  activeSurvivors,
  createNewSurvivor,
  markAsActive,
  markAsInactive,
};