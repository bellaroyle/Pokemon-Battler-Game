function Pokemon(name, HP, AD, sound, move, type = 'normal') {
    this.name = name;
    this.HP = HP;
    this.AD = AD;
    this.sound = sound;
    this.move = move;
    this.type = type;
}

Pokemon.prototype.talk = function () {
    return this.sound;
}

Pokemon.prototype.useYourMoves = function () {
    return this.move;
}

// Pokemon.prototype.compare = function(pokeOne) {
//     if (pokeOne.type === 'grass')
// }

function Trainer(name) {
    this.name = name;
    this.pokeBelt = [];
}

Trainer.prototype.catch = function (pokemon) {
    if (this.pokeBelt.length < 6) {
        this.pokeBelt.push(pokemon);
    }
    else return 'NO WAY PAL DONT GET GREEDY'
}

function Battle(trainerOne, trainerTwo, pokeOne, pokeTwo) {
    this.trainerOne = trainerOne;
    this.trainerTwo = trainerTwo;
    console.log(trainerOne)
    console.log(trainerTwo)
    this.pokeOne = trainerOne.pokeBelt.find(function (pokemon) {
        return pokemon.name === pokeOne;
    });
    this.pokeTwo = trainerTwo.pokeBelt.find(function (pokemon) {
        return pokemon.name === pokeTwo;
    })
}
// if (pokeOne.type === 'grass' && pokeTwo.type === 'water'
//     || pokeOne.type === 'water' && pokeTwo.type === 'fire'
//     || pokeOne.type === 'fire' && pokeTwo.type === 'grass') {
//     const newPokeOneAD = pokeOne.AD * 1.25;
//     const newPokeTwoAD = pokeTwo.AD * 0.75;
// } else if (pokeOne.type === 'grass' && pokeTwo.type === 'fire'
//     || pokeOne.type === 'water' && pokeTwo.type === 'grass'
//     || pokeOne.type === 'fire' && pokeTwo.type === 'water') {
//     const newPokeOneAD = pokeOne.AD * 0.75;
//     const newPokeTwoAD = pokeTwo.AD * 1.25;
// } else {
//     const newPokeOneAD = pokeOne.AD;
//     const newPokeTwoAD = pokeTwo.AD;
// }

Battle.prototype.turn = function (pokeOne, pokeTwo) {
    // while (pokeOne.HP > 0 || pokeTwo.HP > 0) {
    //     let att = pokeOne;
    //     let def = pokeTwo;
    //     def.HP = def.HP - att.AD
    //     console.log(pokeOne)
    //     console.log(pokeTwo)
    //     att = pokeTwo;
    //     def = pokeOne;
    // }

    //make an attack function & a swap function 

    // in attack function : we do the attack on the HP 
    // attach a counter to the pokemons hit points that starts out = to parseInt(HP)

    //swap the parameters - if turn is odd, attacker is poke0ne 



}


module.exports = { Pokemon, Trainer, Battle };