const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const checkManager = data.employees.some((check) => check.managers
    .some((check1) => check1 === id)); // está retornando true se o id retornar manager ou falso se não
  return checkManager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const checkManagerAgain = data.employees.filter(
    (person) =>
      person.managers.includes(managerId),
  ); const staffResponsible = checkManagerAgain.map((name) => `${name.firstName} ${name.lastName}`);
  if (isManager(managerId) === true) {
    return staffResponsible;// está retornando o array com os nomes dos gerentes pelo id
  }
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }// dispanando o erro apenas
}

module.exports = { isManager, getRelatedEmployees };
