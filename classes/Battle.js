const { strengthRef, weaknessRef } = require('../ref-obj')

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
        console.log(`\nIt's ${pokeOne.trainer}'s turn`)

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
                let pokeFaint = `\nOh No! ${pokeTwo.name} Fainted! ${pokeOne.trainer} wins!!\n`;
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

module.exports = Battle;