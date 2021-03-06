const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(expect.not.arrayContaining(['Monday']));
  });
  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(undefined).toBe(handlerElephants());
  });
});
