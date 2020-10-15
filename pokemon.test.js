const { expect, it } = require('@jest/globals')
const Pokemon = require('./pokemon.js')

describe('Pokemon', () => {
    it('returns an object', () => {
        const testPoke = new Pokemon()
        expect(typeof testPoke).toBe('object')
    })
    it('object has property name', () => {
        const testPoke = new Pokemon()
        expect(testPoke).toHaveProperty('name')
    })
    it('pokemon has property HP', () => {
        const testPoke = new Pokemon();
        expect(testPoke).toHaveProperty('HP')

    })
})