const { activeSurvivors } = require('./activeSurvivors');
const { createNewSurvivor } = require('./createSurvivor');
const { killSurvivor } = require('./killSurvivor');
const { markAsActive } = require('./markAsActive');
const { markAsInactive } = require('./markAsInactive');

module.exports = {
  activeSurvivors,
  createNewSurvivor,
  killSurvivor,
  markAsActive,
  markAsInactive,
};