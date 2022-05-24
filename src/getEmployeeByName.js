const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  const checkName = data.employees.filter(
    (nameObject) => nameObject.firstName === employeeName || nameObject.lastName === employeeName,
  );
  return checkName[0];
}

module.exports = getEmployeeByName;
