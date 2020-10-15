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
    this.pokeOne = pokeOne;
    this.pokeTwo = pokeTwo;
}


module.exports = { Pokemon, Trainer, Battle };