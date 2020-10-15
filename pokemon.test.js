
const { expect, it } = require('@jest/globals')
const Pokemon = require('./pokemon.js')

describe('Pokemon properties', () => {
    it('returns an object', () => {
        const testPoke = new Pokemon()
        expect(typeof testPoke).toBe('object')
    })
    it('object has property name which takes value of first argument passed', () => {
        const testPoke = new Pokemon('eevee')
        expect(testPoke).toHaveProperty('name')
        expect(testPoke.name).toBe('eevee')
    })
    it('pokemon has property HP which takes value of second argument passed', () => {
        const testPoke = new Pokemon('eevee', 58);
        expect(testPoke).toHaveProperty('HP');
        expect(testPoke.HP).toBe(58)
    })
    it('pokemon has property AD which takes value of third argument passed', () => {
        const testPoke = new Pokemon('eevee', 58, 7);
        expect(testPoke).toHaveProperty('AD');
        expect(testPoke.AD).toBe(7)
    })
    it('pokemon has property sound which takes value of fourth argument passed', () => {
        const testPoke = new Pokemon('eevee', 58, 7, 'rawr');
        expect(testPoke).toHaveProperty('sound');
        expect(testPoke.sound).toBe('rawr')
    })
    it('pokemon has property move which takes value of fifth argument passed', () => {
        const testPoke = new Pokemon('eevee', 58, 7, 'rawr', 'quick attack');
        expect(testPoke).toHaveProperty('move');
        expect(testPoke.move).toBe('quick attack')
    })
    it('pokemon has property type which takes value of sixth argument passed or defaults to normal if no argument passed', () => {
        const testPoke = new Pokemon('eevee', 58, 7, 'rawr', 'quick attack');
        expect(testPoke).toHaveProperty('type');
        expect(testPoke.type).toBe('normal')

        const testPoke2 = new Pokemon('vaporeon', 60, 9, 'glug', 'bubblebeam', 'water');
        expect(testPoke2.type).toBe('water')
    })
})

describe('Pokemon Methods', () => {
    it('talk is a function that returns the pokemons sound', () => {
        const testPoke = new Pokemon('eevee', 58, 7, 'rawr', 'quick attack');
        expect(typeof testPoke.talk).toBe('function')
        expect(testPoke.talk()).toBe('rawr');
    })
    it('useYourMoves is a function that returns their favourite move', () => {
        const testPoke = new Pokemon('eevee', 58, 7, 'rawr', 'quick attack');
        expect(typeof testPoke.useYourMoves).toBe('function')
        expect(testPoke.useYourMoves()).toBe('quick attack');
    })


})