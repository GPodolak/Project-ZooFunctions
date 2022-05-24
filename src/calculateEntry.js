const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitor = { child: 0, adult: 0, senior: 0 };
  const object = Object.values(entrants);
  object.forEach((people) => {
    if (people.age < 18) {
      visitor.child += 1;
    }
    if (people.age >= 18 && people.age < 50) {
      visitor.adult += 1;
    }
    if (people.age >= 50) {
      visitor.senior += 1;
    }
  });
  return visitor;
}

function calculateEntry(entrants) {
  const zero = 0;
  const childPrice = data.prices.child;
  const adultPrice = data.prices.adult;
  const SeniorPrice = data.prices.senior;
  let valueTotal = 0;
  if (entrants === undefined) {
    return zero;
  }
  const prince = countEntrants(entrants);
  valueTotal = prince.child * childPrice + prince.adult * adultPrice + prince.senior * SeniorPrice;
  return valueTotal;
}

module.exports = { calculateEntry, countEntrants };
