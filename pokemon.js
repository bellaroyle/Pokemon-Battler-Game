
class Pokemon {
    constructor(name, HP, AD, sound, move, type = 'normal') {
        this.name = name;
        this.HP = HP;
        this.AD = AD;
        this.sound = sound;
        this.move = move;
        this.type = type;
    }

    talk() { return this.sound };
    useYourMoves() { return this.move };
}



// class Fire extends Pokemon {
//     constructor(type){
// super
//     }
// }


// Pokemon.prototype.talk = function () {
//     return this.sound;
// }
// Pokemon.prototype.useYourMoves = function () {
//     return this.move;
// }
// Pokemon.prototype.compare = function(pokeOne) {
//     if (pokeOne.type === 'grass')
// }

class Trainer {
    constructor(name) {
        this.name = name;
        this.pokeBelt = [];
    }
    catch(pokemon) {
        if (this.pokeBelt.length < 6) {
            this.pokeBelt.push(pokemon);
        }
        else return 'NO WAY PAL DONT GET GREEDY'
    }
}

// Trainer.prototype.catch = function (pokemon) {
//     if (this.pokeBelt.length < 6) {
//         this.pokeBelt.push(pokemon);
//     }
//     else return 'NO WAY PAL DONT GET GREEDY'
// }

class Battle {
    constructor(trainerOne, trainerTwo, pokeOne, pokeTwo) {
        this.trainerOne = trainerOne;
        this.trainerTwo = trainerTwo;
        this.pokeOne = trainerOne.pokeBelt.find(function (pokemon) {
            return pokemon.name === pokeOne;
        });
        this.pokeTwo = trainerTwo.pokeBelt.find(function (pokemon) {
            return pokemon.name === pokeTwo;
        })
    }
    /* Takes two trainers and two strings representing one of the Pokemon in their respective belts
    Then allows us to access the pokemone we want by their name using the 'find' function
    */
    turn(pokeOne, pokeTwo) {
        //first input is always going to be the attacking pokemon.

        let newPokeAD = pokeOne.AD;
        let message = ''
        if (pokeOne.type === 'grass' && pokeTwo.type === 'water'
            || pokeOne.type === 'water' && pokeTwo.type === 'fire'
            || pokeOne.type === 'fire' && pokeTwo.type === 'grass') {
            newPokeAD = Math.floor(pokeOne.AD * 1.25);
            message = 'It was super effective!'
        } else if (pokeOne.type === 'grass' && pokeTwo.type === 'fire'
            || pokeOne.type === 'water' && pokeTwo.type === 'grass'
            || pokeOne.type === 'fire' && pokeTwo.type === 'water') {
            newPokeAD = Math.floor(pokeOne.AD * 0.75);
            message = 'It wasn\'t very effective ...'
        } else { }

        if (pokeOne.HP > 0 && pokeTwo.HP > 0) {
            pokeTwo.HP = pokeTwo.HP - newPokeAD;
            if (pokeTwo.HP < 0) {
                pokeTwo.HP = 0;
                console.log(`Oh No! Your Pokemon Fainted! ${this.trainerOne.name} wins!!`)
                return `Oh No! Your Pokemon Fainted! ${this.trainerOne.name} wins!!`;
            }
            console.log(`${pokeOne.name} attacked ${pokeTwo.name} with ${pokeOne.move} and dealt ${newPokeAD} damage! ${message}`)
        } return `${pokeOne.name} attacked ${pokeTwo.name} with ${pokeOne.move} and dealt ${newPokeAD} damage! ${message}`
    }
}
/* Takes two Pokemon as inputs -> the first input attacks the second input 
and takes off a set amount of HP equal to attacking pokemon's AD.
*/



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




module.exports = { Pokemon, Trainer, Battle };