const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalNames = data.species.find(({ name }) => name === animal);
  const animalAge = animalNames.residents.every((age1) => age1.age >= age);
  return animalAge;
}

module.exports = getAnimalsOlderThan;
