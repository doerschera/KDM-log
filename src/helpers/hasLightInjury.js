function hasLightInjury(location) {
  const damageDifferential = location.damage - location.armor;
  if (damageDifferential !== 1 || location.type === 'head') return false;
  return true;
}

export default hasLightInjury;
