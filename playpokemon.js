'use strict';
const { Trainer, Battle } = require('./pokemon');
const { moveRef, typeRef, strengthRef, weaknessRef } = require('./ref-obj')
const inquirer = require('inquirer');

console.log('IT\'S POKEMON!');

let firstQuestions = [
    {
        // 1. Hi! What's your name?
        type: 'input',
        name: 'player name',
        message: 'Hi! I\'m Professor Oak. What\'s your name?',
        validate: value => {
            let regex = /[A-Z]{1,}/i
            let pass = regex.test(value);
            if (pass) {
                return true
            }
            return 'Please enter a valid name';
        }
    },
    // 2. Look, here are some pokemon (list pokemon). Choose one!
    {
        type: 'list',
        name: 'pokemon',
        message: 'Choose your pokemon!',
        choices: ['charmander', 'bulbasaur', 'squirtle'],
    },
    {
        // 3. WOAH IT'S YOUR RIVAL! What's their name?
        type: 'input',
        name: 'rival name',
        message: 'Oh no! It\'s your rival! What a coincidence! What\'s their name again?',
        validate: value => {
            let regex = /[A-Z]{1,}/i
            let pass = regex.test(value);
            if (pass) {
                return true;
            }
            return 'Please enter a valid name';

        }
    }
]

// const player1 = new Trainer(firstAnswers[0].name)
// console.log(player1)
const wantToBattle = [
    {
        //5. do you want to battle?
        type: 'confirm',
        name: 'battle?',
        message: 'Well, this is a turn up for the books! Why don\'t you test out your new Pokemon?!',
        default: true,
    }
]

const fightOrFlight = [
    {
        type: 'list',
        name: 'action',
        message: 'Do you want to fight or run?!',
        choices: ['fight', 'run']
    },
]

const choosePoke = (poke1) => {
    let poke2type = weaknessRef[poke1.type]
    const typeRefKeys = Object.keys(typeRef)
    let pokeFind = typeRefKeys.find(name => {
        return typeRef[name] === poke2type
    })
    return pokeFind;
}



function playGame() {
    inquirer
        .prompt(firstQuestions)
        .then(firstAnswers => {

            // creates trainers for the player and the rival and adds the pokemon they cose to their pokeBelt
            const player1 = new Trainer(firstAnswers['player name']);
            player1.catch(firstAnswers.pokemon);
            const player2 = new Trainer(firstAnswers['rival name']);
            player2.catch(player2.catch(choosePoke(player1.pokeBelt[0])))
            console.log(`${player2.name} chose ${player2.pokeBelt[0].name}!!`)

            return [player1, player2, inquirer.prompt(wantToBattle)]
            // to find out if the player wants to battle...
        })
        .then(response => {
            const player1 = response[0]
            const player2 = response[1]
            const wantToBattleAnswer = response[2]

            return wantToBattleAnswer.then(battleAnswer => {
                // if player answered no when asked to test out pokemon 
                if (battleAnswer['battle?'] === false) return 'Well that was a fun game wasn\'t it. Bye then!'
                else {
                    // pokemon sent out 
                    let poke1 = player1.pokeBelt[0]
                    let poke2 = player2.pokeBelt[0]
                    console.log(`${player1.name} sent out ${poke1.name}. ${poke1.name} shouted ${poke1.sound}!!`)
                    console.log(`${player2.name} sent out ${poke2.name}. ${poke2.name} shouted ${poke2.sound}!!`)

                    // battle arena object created 
                    const battle = new Battle(player1, player2, poke1.name, poke2.name)

                    // returns prompt for the game to ask the player if they want to fight, and the battle arena object, in an array
                    return [(inquirer.prompt(fightOrFlight)), battle];
                }
            })
        })
        .then(response => {
            // case where player answered no when asked to test out pokemon 
            if (typeof response === 'string') {
                console.log(response)
                return response
            }
            else {
                // assigns the response items to variables that represent what they are 
                const [fightOrFlightAnswer, battle] = response

                // recursive function that will ask the player if they want to fight or run and then take their turn accordingly 
                function takeTurn() {
                    /*
                    The function asks if the player wants to fight or run. 
                    If they answer fight, then each pokemon has a turn, and if both pokemon are still awake, 
                    the function is invoked again and again until one has fainted.
                    if they answer run then they are called a coward 
                    */
                    return inquirer
                        .prompt(wantToBattle)
                        .then(response => {
                            if (response.action === 'fight') {
                                battle.turn(battle.pokeOne, battle.pokeTwo)
                                battle.turn(battle.pokeTwo, battle.pokeOne)

                                if (fightData.pokeOne.HP > 0 && fightData.pokeTwo.HP > 0) return takeTurn();
                                else console.log('Game Over! Please play again!')
                            }
                            else console.log('You got away safely you coward!')
                        })
                }

                fightOrFlightAnswer.then(({ action }) => {
                    // action is the players first response to the fightOrFlight question
                    if (action === 'fight') {
                        fightData.turn(fightData.pokeOne, fightData.pokeTwo)
                        fightData.turn(fightData.pokeTwo, fightData.pokeOne)

                        // recursive function that will ask the player if they want to fight or run and then take their turn accordingly 
                        return takeTurn();
                    }
                    // if action chosen is run
                    else console.log('You got away safely you coward!')
                })

            }
        });
}

playGame();