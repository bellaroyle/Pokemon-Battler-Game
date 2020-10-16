


const { Pokemon,
    Trainer,
    Battle } = require('./pokemon.js')

describe('Pokemon properties', () => {
    it('returns an object', () => {
        const testPoke = new Pokemon()
        expect(typeof testPoke).toBe('object')
    });
    it('object has property name which takes value of first argument passed', () => {
        const testPoke = new Pokemon('eevee')
        expect(testPoke).toHaveProperty('name')
        expect(testPoke.name).toBe('eevee')
    });
    it('pokemon has property HP which takes value of second argument passed', () => {
        const testPoke = new Pokemon('eevee', 58);
        expect(testPoke).toHaveProperty('HP');
        expect(testPoke.HP).toBe(58)
    });
    it('pokemon has property AD which takes value of third argument passed', () => {
        const testPoke = new Pokemon('eevee', 58, 7);
        expect(testPoke).toHaveProperty('AD');
        expect(testPoke.AD).toBe(7)
    });
    it('pokemon has property sound which takes value of fourth argument passed', () => {
        const testPoke = new Pokemon('eevee', 58, 7, 'rawr');
        expect(testPoke).toHaveProperty('sound');
        expect(testPoke.sound).toBe('rawr')
    });
    it('pokemon has property move which takes value of fifth argument passed', () => {
        const testPoke = new Pokemon('eevee', 58, 7, 'rawr', 'quick attack');
        expect(testPoke).toHaveProperty('move');
        expect(testPoke.move).toBe('quick attack')
    });
    it('pokemon has property type which takes value of sixth argument passed or defaults to normal if no argument passed', () => {
        const testPoke = new Pokemon('eevee', 58, 7, 'rawr', 'quick attack');
        expect(testPoke).toHaveProperty('type');
        expect(testPoke.type).toBe('normal')
        const testPoke2 = new Pokemon('vaporeon', 60, 9, 'glug', 'bubblebeam', 'water');
        expect(testPoke2.type).toBe('water')
    });

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
        const testPoke1 = new Pokemon('eevee', 58, 7, 'rawr', 'quick attack');
        const testTrainer = new Trainer('Bella');
        testTrainer.catch(testPoke1)
        expect(testTrainer.pokeBelt).toEqual([testPoke1]);
    });
    test('catch pushes more than one pokemon into pokeBelt array', () => {
        const testPoke1 = new Pokemon('eevee', 58, 7, 'rawr', 'quick attack');
        const testPoke2 = new Pokemon('vaporeon', 60, 9, 'glug', 'bubblebeam', 'water');
        const testTrainer = new Trainer('Bella');
        testTrainer.catch(testPoke1);
        testTrainer.catch(testPoke2);
        expect(testTrainer.pokeBelt).toEqual([testPoke1, testPoke2]);
    });
    test('pokebelt cannot hold more than 6 pokemon', () => {
        const testPoke1 = new Pokemon('eevee', 58, 7, 'rawr', 'quick attack');
        const testPoke2 = new Pokemon('vaporeon', 60, 9, 'glug', 'bubblebeam', 'water');
        const testPoke3 = new Pokemon('leafeon', 68, 10, 'tweet', 'vine whipe', 'grass');
        const testPoke4 = new Pokemon('flareon', 63, 11, 'fireeee', 'flamethrower', 'fire');
        const testPoke5 = new Pokemon('bulbasaur', 65, 9, 'BULBA', 'razor leaf', 'grass');
        const testPoke6 = new Pokemon('charmander', 67, 7, 'CHAR', 'ember', 'fire');
        const testPoke7 = new Pokemon('goldeen', 60, 0, 'BLURP', 'splash', 'water');
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