const { createNewSurvivor } = require('./createSurvivor/index');
const { markAsActive } = require('./markAsActive');
const { markAsInactive } = require('./markAsInactive');

module.exports = {
  createNewSurvivor,
  markAsActive,
  markAsInactive,
};