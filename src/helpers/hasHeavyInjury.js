function hasHeavyInjury(location) {
  const damageDifferential = location.damage - location.armor;
  if (damageDifferential <= 0) return false;
  if (location.type === 'head' && damageDifferential >= 1) return true;
  if (damageDifferential >= 2) return true;

  return false;
}

export default hasHeavyInjury;
