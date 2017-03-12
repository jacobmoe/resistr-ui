export function setActiveOfficial (official, office, division) {

  const activeOfficial = Object.assign({}, official)
  activeOfficial.office = office
  activeOfficial.division = division

  return {
    type: 'SET_ACTIVE_OFFICIAL',
    official: activeOfficial
  }
}
