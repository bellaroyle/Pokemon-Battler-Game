//'use strict';
const Trainer = require('./classes/Trainer')
const Battle = require('./classes/Battle')
const { typeRef, weaknessRef } = require('./ref-obj')
const inquirer = require('inquirer');

console.log('IT\'S POKEMON TIME!');
// array containing first 3 questions that the player will be asked in order to set up the game
let firstQuestions = [
    {
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
    {
        type: 'list',
        name: 'pokemon',
        message: 'Choose your pokemon!',
        choices: ['charmander', 'bulbasaur', 'squirtle'],
    },
    {
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

//array containing question asking if you want to play
const wantToBattle = [
    {
        type: 'confirm',
        name: 'battle?',
        message: 'Well, this is a turn up for the books! Why don\'t you test out your new Pokemon?!',
        default: true,
    }
]

// array containing question do you want to fight or run away that will be repeated on each turn 
const fightOrFlight = [
    {
        type: 'list',
        name: 'action',
        message: 'Do you want to fight or run?!',
        choices: ['fight', 'run']
    },
]

//function that takes the name of a pokemon and returns the name of a pokemon that will be strong against it 
const choosePoke = (poke1) => {

    // type new pokemon needs to be 
    let poke2type = weaknessRef[poke1.type]
    // array of potential pokemon names 
    const typeRefKeys = Object.keys(typeRef)
    // a pokemon of the correct type will be assigned to the variable pokeFind
    let pokeFind = typeRefKeys.find(name => {
        return typeRef[name] === poke2type
    })
    return pokeFind;
}

function playGame() {
    inquirer
        // asks the player the questions in array first questions 
        .prompt(firstQuestions)
        .then(firstAnswers => {

            // uses the answers from first questions to create the two trainers and adds their pokemon to their pokebelts. 
            const player1 = new Trainer(firstAnswers['player name']);
            player1.catch(firstAnswers.pokemon);
            const player2 = new Trainer(firstAnswers['rival name']);
            player2.catch(choosePoke(player1.pokeBelt[0]))

            // prints confirmation to the player that the pokemon have been added to the respective pokeBelts and prints the pokemon's HP
            console.log(`${firstAnswers.pokemon} was added to ${player1.name}'s pokebelt`)
            console.log(`${firstAnswers.pokemon} has ${player1.pokeBelt[0].HP} HP and ${player1.pokeBelt[0].AD} AD!!`)
            console.log(`${player2.name} chose ${player2.pokeBelt[0].name}!!`)
            console.log(`${player2.pokeBelt[0].name} was added to ${player2.name}'s pokebelt`)
            console.log(`${player2.pokeBelt[0].name} has ${player2.pokeBelt[0].HP} HP and ${player2.pokeBelt[0].AD} AD!!`)

            return [player1, player2, inquirer.prompt(wantToBattle)]
        })
        .then(([player1, player2, battleAnswer]) => {
            return battleAnswer.then(response => {
                // if player answers no when asked if they want to battle 
                if (response['battle?'] === false) return 'Well that was a fun game wasn\'t it. Bye then!'

                // if player answers yes when asked if they want to battle, the pokemon get sent out to battle
                let poke1 = player1.pokeBelt[0]
                let poke2 = player2.pokeBelt[0]
                console.log(`${player1.name} sent out ${poke1.name}. ${poke1.name} shouted ${poke1.sound}!!`)
                console.log(`${player2.name} sent out ${poke2.name}. ${poke2.name} shouted ${poke2.sound}!!`)

                // battle arena is created 
                const battle = new Battle(player1, player2, poke1.name, poke2.name)

                // asks the player if they want to fight or run, and sends the battle arena object to the next part of the function
                return [(inquirer.prompt(fightOrFlight)), battle];

            })
        })
        .then(response => {
            /* 
            - if the response from first questions was 'well that was a fun game...'
            - We don't get an object, we get a string, so if that's the case, game ends, goodnight.
            */
            if (typeof response === 'string') {
                console.log(response);
                return response;
            }

            // if the answer is not a string, the game can continue
            const [fightOrFlightAnswer, battle] = response

            // recursive function which asks if the player wants to fight or run and then follows their response
            const takeTurn = () => {

                let prompt = inquirer
                    .prompt(fightOrFlight)
                    .then(response => {
                        if (response.action === 'fight') {
                            battle.turn(battle.pokeOne, battle.pokeTwo)
                            battle.turn(battle.pokeTwo, battle.pokeOne)

                            // if both pokemon are still awake, the player is asked again if they want to fight or run 
                            if (battle.pokeOne.HP > 0 && battle.pokeTwo.HP > 0) return takeTurn();
                            //if pokemon are not both awake, the game is over
                            else console.log('Game Over! Please play again!')
                        }
                        // if the player has chosen to run away 
                        else console.log('You got away safely you coward!')
                    })
                return prompt;
            }

            fightOrFlightAnswer.then(response => {
                // deals with the players first answer to the fight or run question
                if (response.action === 'fight') {
                    battle.turn(battle.pokeOne, battle.pokeTwo)
                    battle.turn(battle.pokeTwo, battle.pokeOne)
                    return (takeTurn());
                }
                else console.log('You got away safely you coward!')
            })

        });

}

// invokes the playGame function
playGame();