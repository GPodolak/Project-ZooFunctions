// const { species } = require('../data/zoo_data');

const { species } = require('../data/zoo_data');
// comentario pra commit
const getAnimalName = (animal) => species.find((specie) => specie.name === animal.specie);
const getAnimalSex = (choosenAnimal, animal) => {
  const sexAnimal = choosenAnimal.residents.filter((resident) => resident.sex === animal.sex);
  return sexAnimal.length;
};
function countAnimals(animal) {
  // seu código aqui
  const animalType = {};
  if (!animal) {
    species.forEach(({ name, residents }) => {
      animalType[name] = residents.length;
    }); return animalType;
  }
  const choosenAnimal = getAnimalName(animal);
  if (animal.sex) {
    return getAnimalSex(choosenAnimal, animal);
  }
  return choosenAnimal.residents.length;
}
module.exports = countAnimals;
