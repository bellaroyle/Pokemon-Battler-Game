


const { Pokemon,
    Trainer,
    Battle } = require('./pokemon.js')

describe('Pokemon properties', () => {
    it('returns an object', () => {
        const testPoke = new Pokemon('eevee')
        expect(typeof testPoke).toBe('object')
    });
    it('object has property name which takes value of first argument passed', () => {
        const testPoke = new Pokemon('eevee')
        expect(testPoke).toHaveProperty('name')
        expect(testPoke.name).toBe('eevee')
    });
    it('pokemon has property HP which is a number between 25 and 35', () => {
        const testPoke = new Pokemon('eevee');
        expect(testPoke).toHaveProperty('HP');
        expect(testPoke.HP).toBeLessThanOrEqual(35)
        expect(testPoke.HP).toBeGreaterThanOrEqual(25)
    });
    it('pokemon has property AD which is a number between 6 and 10', () => {
        const testPoke = new Pokemon('eevee');
        expect(testPoke).toHaveProperty('AD');
        expect(testPoke.AD).toBeLessThanOrEqual(10)
        expect(testPoke.AD).toBeGreaterThanOrEqual(6)
    });
    it('pokemon has property sound which is first 5 letters of name in capitals with a "!"', () => {
        const testPoke = new Pokemon('eevee');
        expect(testPoke).toHaveProperty('sound');
        expect(testPoke.sound).toBe('EEVEE!')
    });
    it('pokemon has property move which is its value in in moveRef', () => {
        const testPoke = new Pokemon('eevee');
        expect(testPoke).toHaveProperty('move');
        expect(testPoke.move).toBe('tackle')
    });
    it('pokemon has property type which is its value in typeRef', () => {
        const testPoke = new Pokemon('eevee');
        expect(testPoke).toHaveProperty('type');
        expect(testPoke.type).toBe('normal')
        const testPoke2 = new Pokemon('squirtle');
        expect(testPoke2.type).toBe('water')
    });

})

describe('Pokemon Methods', () => {
    it('talk is a function that returns the pokemon\'s sound', () => {
        const testPoke = new Pokemon('eevee');
        expect(typeof testPoke.talk).toBe('function')
        expect(testPoke.talk()).toBe('EEVEE!');
    })
    it('useYourMoves is a function that returns their favourite move', () => {
        const testPoke = new Pokemon('eevee');
        expect(typeof testPoke.useYourMoves).toBe('function')
        expect(testPoke.useYourMoves()).toBe('tackle');
    })
})

describe('Create Trainer', () => {
    test('returns an object', () => {
        const testTrainer = new Trainer('Bella');
        expect(typeof testTrainer).toBe('object');
    });
    test('trainer has property name which takes the value of first arg passed', () => {
        const testTrainer = new Trainer('Bella');
        expect(testTrainer).toHaveProperty('name');
        expect(testTrainer.name).toBe('Bella');
    });
    test('trainer has property pokeBelt which is an empty array', () => {
        const testTrainer = new Trainer('Bella');
        expect(testTrainer).toHaveProperty('pokeBelt');
        expect(Array.isArray(testTrainer.pokeBelt)).toBe(true);
    });
    test('trainer has catch method which is a function', () => {
        const testTrainer = new Trainer('Bella');
        expect(typeof testTrainer.catch).toBe('function');
    });
    test('catch pushes pokemon into pokeBelt array', () => {
        const testPoke1 = 'eevee';
        const testTrainer = new Trainer('Bella');
        testTrainer.catch(testPoke1)
        expect(testTrainer.pokeBelt[0]).toBeInstanceOf(Pokemon);
    });
    test('catch pushes more than one pokemon into pokeBelt array', () => {
        const testPoke1 = 'eevee';
        const testPoke2 = 'squirtle';
        const testTrainer = new Trainer('Bella');
        testTrainer.catch(testPoke1);
        testTrainer.catch(testPoke2);
        expect(testTrainer.pokeBelt.length).toBe(2);
    });
    test('pokebelt cannot hold more than 6 pokemon', () => {
        const testPoke1 = 'eevee';
        const testPoke2 = 'vaporeon';
        const testPoke3 = 'leafeon';
        const testPoke4 = 'flareon';
        const testPoke5 = 'bulbasaur';
        const testPoke6 = 'charmander';
        const testPoke7 = 'rattata';
        const testTrainer = new Trainer('Bella');
        testTrainer.catch(testPoke1);
        testTrainer.catch(testPoke2);
        testTrainer.catch(testPoke3);
        testTrainer.catch(testPoke4);
        testTrainer.catch(testPoke5);
        testTrainer.catch(testPoke6);
        testTrainer.catch(testPoke7);
        expect(testTrainer.pokeBelt.length).toBe(6);
    });
});

// const trainerOne = new Trainer('Bella');
// const trainerTwo = new Trainer('Sam');
// const testPokeOne = new Pokemon('charmander', 67, 7, 'CHAR', 'ember', 'fire');
// const testPokeTwo = new Pokemon('flareon', 63, 11, 'fireeee', 'flamethrower', 'fire');

describe('BATTLE TIME', () => {
    test('battle has property trainerOne and trainerTwo which are trainers', () => {
        const trainerOne = new Trainer('Bella');
        const trainerTwo = new Trainer('Sam');
        const battleTime = new Battle(trainerOne, trainerTwo);
        expect(battleTime.trainerOne instanceof Trainer).toBe(true);
        expect(battleTime.trainerTwo instanceof Trainer).toBe(true);
    });
    test('battle has property pokeOne and pokeTwo which are pokemon', () => {
        const trainerOne = new Trainer('Bella');
        const trainerTwo = new Trainer('Sam');
        const pokeOne = new Pokemon('charmander', 67, 7, 'CHAR', 'ember', 'fire');
        const pokeTwo = new Pokemon('bulbasaur', 65, 9, 'BULBA', 'razor leaf', 'grass');
        trainerOne.catch(pokeOne)
        trainerTwo.catch(pokeTwo)
        const battleTime = new Battle(trainerOne, trainerTwo, 'charmander', 'bulbasaur');
        expect(typeof battleTime.pokeOne).toBe('object');
        expect(typeof battleTime.pokeTwo).toBe('object');
    });
    test('when pokeOne attacks pokeTwo, pokeTwo loses HP', () => {
        const trainerOne = new Trainer('Bella');
        const trainerTwo = new Trainer('Sam');
        const pokeOne = new Pokemon('charmander', 67, 7, 'CHAR', 'ember', 'fire');
        const pokeTwo = new Pokemon('bulbasaur', 65, 9, 'BULBA', 'razor leaf', 'grass');
        trainerOne.catch(pokeOne);
        trainerTwo.catch(pokeTwo);
        const battleTime = new Battle(trainerOne, trainerTwo, 'charmander', 'bulbasaur');
        battleTime.turn(battleTime.pokeOne, battleTime.pokeTwo);
        expect(pokeTwo.HP).not.toBe(65);
    });
    test('bulbasaur will lose 1.25 times charmander\'s AD, when charmander attacks', () => {
        const trainerOne = new Trainer('Bella');
        const trainerTwo = new Trainer('Sam');
        const pokeOne = new Pokemon('charmander', 67, 7, 'CHAR', 'ember', 'fire');
        const pokeTwo = new Pokemon('bulbasaur', 65, 9, 'BULBA', 'razor leaf', 'grass');
        trainerOne.catch(pokeOne);
        trainerTwo.catch(pokeTwo);
        const battleTime = new Battle(trainerOne, trainerTwo, 'charmander', 'bulbasaur');
        battleTime.turn(battleTime.pokeOne, battleTime.pokeTwo);
        expect(pokeTwo.HP).toBe(57);
    });
    test('charmander will lose 0.75 times bulbasaur\'s AD when bulbasaur attacks', () => {
        const trainerOne = new Trainer('Bella');
        const trainerTwo = new Trainer('Sam');
        const pokeOne = new Pokemon('charmander', 67, 7, 'CHAR', 'ember', 'fire');
        const pokeTwo = new Pokemon('bulbasaur', 65, 9, 'BULBA', 'razor leaf', 'grass');
        trainerOne.catch(pokeOne);
        trainerTwo.catch(pokeTwo);
        const battleTime = new Battle(trainerOne, trainerTwo, 'charmander', 'bulbasaur');
        battleTime.turn(battleTime.pokeTwo, battleTime.pokeOne);
        expect(pokeOne.HP).toBe(61);
    });
    test('Create a battle loop test that prints out the message when someone loses', () => {
        const trainerOne = new Trainer('Bella');
        const trainerTwo = new Trainer('Sam');
        const pokeOne = new Pokemon('charmander', 30, 7, 'CHAR', 'ember', 'fire');
        const pokeTwo = new Pokemon('bulbasaur', 30, 9, 'BULBA', 'razor leaf', 'grass');
        trainerOne.catch(pokeOne);
        trainerTwo.catch(pokeTwo);
        const battleTime = new Battle(trainerOne, trainerTwo, 'charmander', 'bulbasaur');
        while (pokeTwo.HP > 0 && pokeOne.HP > 0) {
            battleTime.turn(battleTime.pokeOne, battleTime.pokeTwo);
            battleTime.turn(battleTime.pokeTwo, battleTime.pokeOne);
        }
        console.log(pokeOne.HP, 'pokeOne HP')
        console.log(pokeTwo.HP, 'pokeTwo HP')
        expect(pokeTwo.HP).toBe(0);
        expect(battleTime.turn(battleTime.pokeTwo, battleTime.pokeOne)).toBe('Oh No! Your Pokemon Fainted! Bella wins!!')
    });
});