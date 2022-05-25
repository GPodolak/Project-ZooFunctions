const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const checkStaff = data.employees
    .find((element) => element.id === id).responsibleFor[0];
  const checkId = data.species.find((animal) => animal.id === checkStaff).residents
    .reduce(((acc, inicialValue) => {
      if (inicialValue.age > acc.age) return inicialValue;
      return acc;
    }));
  return Object.values(checkId);
}
module.exports = getOldestFromFirstSpecies;
