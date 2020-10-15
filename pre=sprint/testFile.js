const sammy = new Animal('Samuel', 'snake');

// sammy should be an object with the following form:

// {
//   name: 'Samuel',
//   species: 'snake;
//  }
//module.exports = sammy;

describe('sammy', () => {
    test('has property name', () => {
        expect(sammy).toHaveProperty('name')
    })
    test('snake is called Samuel', () => {
        expect(sammy.name).toBe('Samuel')
    })
    test('has property species', () => {
        expect(sammy).toHaveProperty('species')
    })
    test('sammy is a snake ', () => {
        expect(sammy.species).toBe('snake')
    })
})