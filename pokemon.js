const { moveRef, typeRef, strengthRef, weaknessRef } = require('./ref-obj')

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
class Battle {
    constructor(trainerOne, trainerTwo, pokeOne, pokeTwo) {
        /* Takes two trainers and two strings representing one of the Pokemon in their respective belts
        Then allows us to access the pokemon we want by their name using the 'find' function
        */
        this.trainerOne = trainerOne;
        this.trainerTwo = trainerTwo;

        this.pokeOne = trainerOne.pokeBelt.find(pokemon => {
            return pokemon.name === pokeOne;
        });
        this.pokeTwo = trainerTwo.pokeBelt.find(pokemon => {
            return pokemon.name === pokeTwo;
        })

        // adds trainers name to the pokemon in the pokebelt
        trainerOne.pokeBelt[0].trainer = trainerOne.name
        trainerTwo.pokeBelt[0].trainer = trainerTwo.name
    }

    turn(pokeOne, pokeTwo) {
        /* Takes two Pokemon as inputs -> the first input attacks the second input 
        and takes off a set amount of HP equal to attacking pokemon's AD.
        */

        let newPokeAD = pokeOne.AD;
        let message = ''

        // if pokeOne is strong against pokeTwo, attack become more effective 
        if (pokeTwo.type === strengthRef[pokeOne.type]) {
            newPokeAD = Math.floor(pokeOne.AD * 1.25);
            message = 'It was super effective!'


        } // if pokeOne is weak against PokeTwo, attack becomes less effective
        else if (pokeTwo.type === weaknessRef[pokeOne.type]) {
            newPokeAD = Math.floor(pokeOne.AD * 0.75);
            message = 'It wasn\'t very effective ...'
        }

        // if both pokemon are awake, pokeOne attacks 
        if (pokeOne.HP > 0 && pokeTwo.HP > 0) {
            pokeTwo.HP = pokeTwo.HP - newPokeAD;

            // if pokeTwo faints after being attacked 
            if (pokeTwo.HP < 0) {
                pokeTwo.HP = 0;
                let pokeAttack = `${pokeOne.name} attacked ${pokeTwo.name} with ${pokeOne.move} and dealt ${newPokeAD} damage! ${message} ${pokeTwo.name} has ${pokeTwo.HP} HP left!!`
                let pokeFaint = `Oh No! ${pokeTwo.name} Fainted! ${pokeOne.trainer} wins!!`;
                console.log(pokeAttack)
                console.log(pokeFaint)
                return pokeFaint;
            }
            // if pokeTwo is still awake
            let pokeAttack = `${pokeOne.name} attacked ${pokeTwo.name} with ${pokeOne.move} and dealt ${newPokeAD} damage! ${message} ${pokeTwo.name} has ${pokeTwo.HP} HP left!!`
            console.log(pokeAttack)
            return pokeAttack;
        }
    }
}


module.exports = { Pokemon, Trainer, Battle };