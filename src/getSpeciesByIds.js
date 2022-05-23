const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) {
    return [];
  }
  const getSpecieId = data.species.filter((specieId) => ids.includes(specieId.id));
  return getSpecieId;
}

module.exports = getSpeciesByIds;
