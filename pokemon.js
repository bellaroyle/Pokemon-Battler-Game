const moveRef = {
    fire: 'ember',
    grass: 'razor leaf',
    water: 'bubblebeam',
    normal: 'tackle'
}
const typeRef = {
    charmander: 'fire',
    bulbasaur: 'grass',
    squirtle: 'water',
    eevee: 'normal',
    vaporeon: 'water',
    flareon: 'fire',
    leafeon: 'grass',
    rattata: 'normal'
}

class Pokemon {
    constructor(name) {
        // creates a pokemon based on the name passed

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
         */
        if (this.pokeBelt.length < 6) {
            const newPoke = new Pokemon(pokemon)
            this.pokeBelt.push(newPoke);
        }
        else return 'NO WAY PAL DONT GET GREEDY'
    }
}
class Battle {
    constructor(trainerOne, trainerTwo, pokeOne, pokeTwo) {
        /* Takes two trainers and two strings representing one of the Pokemon in their respective belts
   Then allows us to access the pokemon we want by their name using the 'find' function
   */
        this.trainerOne = trainerOne;
        this.trainerTwo = trainerTwo;
        this.pokeOne = trainerOne.pokeBelt.find(function (pokemon) {
            return pokemon.name === pokeOne;
        });
        this.pokeTwo = trainerTwo.pokeBelt.find(function (pokemon) {
            return pokemon.name === pokeTwo;
        })
    }

    turn(pokeOne, pokeTwo) {
        /* Takes two Pokemon as inputs -> the first input attacks the second input 
        and takes off a set amount of HP equal to attacking pokemon's AD.
        */

        let newPokeAD = pokeOne.AD;
        let message = ''

        const strengthRef = {
            grass: 'water',
            fire: 'grass',
            water: 'fire'
        }
        const weaknessRef = {
            grass: 'fire',
            fire: 'water',
            water: 'grass'
        }

        // if pokeOne is strong against pokeTwo 
        if (pokeTwo.type === strengthRef[pokeOne.type]) {
            newPokeAD = Math.floor(pokeOne.AD * 1.25);
            message = 'It was super effective!'

            // if pokeOne is weak against PokeTwo
        } else if (pokeTwo.type === weaknessRef[pokeOne.type]) {
            newPokeAD = Math.floor(pokeOne.AD * 0.75);
            message = 'It wasn\'t very effective ...'
        }

        // if one of the pokemon has fainted
        if (pokeOne.HP <= 0) {
            return `Oh No! ${pokeOne} Fainted! ${this.trainerTwo.name} wins!!`;
        }
        else if (pokeTwo.HP <= 0) {
            return `Oh No! ${pokeTwo} Fainted! ${this.trainerOne.name} wins!!`;
        }
        // if both pokemon are awake, pokeOne attacks 
        if (pokeOne.HP > 0 && pokeTwo.HP > 0) {
            pokeTwo.HP = pokeTwo.HP - newPokeAD;
            // if pokeTwo faints after being attacked 

            if (pokeTwo.HP < 0) {
                pokeTwo.HP = 0;
                let pokeAttack = `${pokeOne.name} attacked ${pokeTwo.name} with ${pokeOne.move} and dealt ${newPokeAD} damage! ${message} ${pokeTwo.name} has ${pokeTwo.HP} HP left!!`
                let pokeFaint = `Oh No! ${pokeTwo.name} Fainted! ${this.trainerOne.name} wins!!`;
                console.log(pokeAttack)
                console.log(pokeFaint)
                return pokeFaint;
            }
            let pokeAttack = `${pokeOne.name} attacked ${pokeTwo.name} with ${pokeOne.move} and dealt ${newPokeAD} damage! ${message} ${pokeTwo.name} has ${pokeTwo.HP} HP left!!`
            console.log(pokeAttack)
            return pokeAttack;
        }
        return pokeFaint
    }

}

module.exports = { Pokemon, Trainer, Battle };