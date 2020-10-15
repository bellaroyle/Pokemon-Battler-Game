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


module.exports = Pokemon;