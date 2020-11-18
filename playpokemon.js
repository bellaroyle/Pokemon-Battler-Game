'use strict';
const { Trainer, Battle } = require('./pokemon');
const inquirer = require('inquirer');

console.log('IT\'S POKEMON!');

let firstQuestions = [
    {
        // 1. Hi! What's your name?
        type: 'input',
        name: 'player name',
        message: 'Hi! I\'m Professor Oak. What\'s your name?',
        validate: function (value) {
            let pass = value.match(/[A-Z]{1,}/gi);
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
        validate: function (value) {
            let pass = value.match(/[A-Z]{1,}/gi);
            if (pass) {
                return true;
            }
            return 'Please enter a valid name';

        }
    },
    {
        //4. What's their pokemon?
        type: 'list',
        name: 'pokemon2',
        message: 'Choose their pokemon!',
        choices: ['charmander', 'bulbasaur', 'squirtle'],
    },
    {
        //5. do you want to battle?
        type: 'confirm',
        name: 'battle?',
        message: 'Well, this is a turn up for the books! Why don\'t you test out your new Pokemon?!',
        default: true,
    }

]

// const player1 = new Trainer(firstAnswers[0].name)
// console.log(player1)
const secondQuestions = [
    {
        type: 'list',
        name: 'action',
        message: 'Do you want to fight or run?!',
        choices: ['fight', 'run']
    },
]

function playGame() {
    inquirer
        .prompt(firstQuestions)
        .then(firstAnswers => {

            // console.log(firstAnswers)
            const player1 = new Trainer(firstAnswers['player name']);
            player1.catch(firstAnswers.pokemon);
            // console.log(player1, '<---- player 1')
            console.log(`${player1.name} sent out ${firstAnswers.pokemon}. ${firstAnswers.pokemon} shouted ${player1.pokeBelt[0].sound}!!`)

            const player2 = new Trainer(firstAnswers['rival name']);
            player2.catch(firstAnswers.pokemon2)
            console.log(`${player2.name} sent out ${firstAnswers.pokemon2}. ${firstAnswers.pokemon2} shouted ${player2.pokeBelt[0].sound}!!`)
            // console.log(player2, '<---- player 1')

            const firstBattle = new Battle(player1, player2, firstAnswers.pokemon, firstAnswers.pokemon2)
            // console.log(firstBattle, '<----- firstBattle')

            return [(inquirer.prompt(secondQuestions)), firstBattle];
        })
        // .prompt(secondQuestions)
        .then(battleResp => {
            let fightData = battleResp[1];
            let secondAnswers = battleResp[0];
            function battleData() {
                let prompt = inquirer.prompt(secondQuestions)
                    .then(response => {
                        if (response.action === 'fight') {
                            fightData.turn(fightData.pokeOne, fightData.pokeTwo)
                            fightData.turn(fightData.pokeTwo, fightData.pokeOne)
                            if (fightData.pokeOne.HP > 0 && fightData.pokeTwo.HP > 0) return battleData();
                            else console.log('Game Over! Please play again!')
                        } else console.log('You got away safely you coward!')
                    })
                return prompt;
            }
            secondAnswers.then(response => {
                if (response.action === 'fight') {
                    fightData.turn(fightData.pokeOne, fightData.pokeTwo)
                    fightData.turn(fightData.pokeTwo, fightData.pokeOne)
                    return (battleData());
                } else console.log('You got away safely you coward!')
            })
            // do stuff with the answers to the secondQuestions, e.g. choose moves to use / fight / run away / select pokemon to fight with
        });
}
playGame();