const data = require('../data/zoo_data');

function employees(object) {
  const staffs = data.employees;
  const newArray = [];
  for (let i = 0; i < staffs.length; i += 1) {
    newArray.push({
      id: staffs[i].id,
      fullName: `${staffs[i].firstName} ${staffs[i].lastName}`, // buscar o nome e sobrenome
      species: data.species
        .filter((animal) => staffs[i].responsibleFor.includes(animal.id))
        .map((animal) => animal.name),
      locations: data.species
        .filter((animal) => staffs[i].responsibleFor.includes(animal.id))
        .map((animal) => animal.location),
    });
  }
  return newArray;
}

function newEmployee(object) {
  const staff = data.employees.find(
    (name) => name.firstName === object.name
    || name.lastName === object.name
    || name.id === object.id, // retornar o objeto do nome pelo id
  );
  const checkStaff = {
    id: staff.id,
    fullName: `${staff.firstName} ${staff.lastName}`,
    species: data.species
      .filter((animal) => staff.responsibleFor.includes(animal.id))
      .map((animal) => animal.name),
    locations: data.species
      .filter((animal) => staff.responsibleFor.includes(animal.id))
      .map((animal) => animal.location),
  };
  return checkStaff;
}

function getStaff(object) {
  const aStaff = data.employees.some(
    (pm) => pm.firstName === object.name || pm.lastName === object.name || pm.id === object.id,
  );
  return aStaff;
}

function getEmployeesCoverage(object) {
  // seu código aqui
  if (object === undefined || object.length < 1) {
    return employees(object);
  }
  const checkEployee = getStaff(object);
  if (checkEployee === false) {
    throw new Error('Informações inválidas');
  }
  return newEmployee(object);
}
module.exports = getEmployeesCoverage;
