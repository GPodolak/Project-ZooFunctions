const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('retorna zoo is closed na Segunda', () => {
    expect(getOpeningHours('Monday', '09:00-AM').toBe('The zoo is closed'));
  });
  it('retorna zoo is open na terça', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM').toEqual('The zoo is open'));
  });
  it('retorna zoo is closed na quarta', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM').toBe('The zoo is closed'));
  });
  test('retorna Exceção na quinta', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
    expect(() => getOpeningHours()).toThrow(Error);
  });
  test('retorna Exceção na sexta', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours()).toThrow(Error);
  });
  test('retorna Exceção no sabado', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours()).toThrow(Error);
  });
  test('retorna Exceção no domingo ', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours()).toThrow(Error);
  });
});
// https://jestjs.io/pt-BR/docs/using-matchers

// it('retorna a quantidade de elefantes', () => {
//     expect(handlerElephants('count')).toBe(4);
