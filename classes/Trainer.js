const Pokemon = require('./Pokemon')

class Trainer {
    constructor(name) {
        // create a trainer based on the name passed 
        this.name = name;
        this.pokeBelt = [];
    }
    catch(pokemon) {
        /*
        Takes a string representing the name of a pokemon and creates the pokemon.
        Adds the created pokemon to the trainers pokebelt 
        only allows for a maximum of 6 pokemon 
         */
        if (this.pokeBelt.length < 6) {
            const newPoke = new Pokemon(pokemon)
            this.pokeBelt.push(newPoke);
        }
        else return 'NO WAY PAL DON\'T GET GREEDY'
    }
}

module.exports = Trainer;