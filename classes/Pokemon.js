const { moveRef, typeRef } = require('../ref-obj')

class Pokemon {
    constructor(name) {
        // this constructor creates a pokemon based on the name passed

        this.name = name;
        // creates a random integer between 25 and 30
        this.HP = Math.floor(Math.random() * 10 + 25);
        // creates a random integer between 6 and 10
        this.AD = Math.floor(Math.random() * 5 + 6);
        // sound will be the first 5 letters of name in capitals with a '!'
        this.sound = `${name.slice(0, 6).toUpperCase()}!`;
        // uses reference objects above 
        this.type = typeRef[name];
        this.move = moveRef[this.type];
    }
}

module.exports = Pokemon;