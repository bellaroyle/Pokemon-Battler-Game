
// 5. A friendly battle between you and your rival!
// 6. It's your turn! Do you want to attack?
// 7. Blah blah blah #fight
// 8. WOW YOU WIN/WOW YOU LOSE.

'use strict';
const { Pokemon, Trainer, Battle } = require('./pokemon');
const inquirer = require('inquirer');

console.log('IT\'S POKEMON!');


const charmander = new Pokemon('charmander', 30, 8, 'CHAR', 'ember', 'fire');
const bulbasaur = new Pokemon('bulbasaur', 30, 8, 'BULBA', 'razor leaf', 'grass');
const squirtle = new Pokemon('squirtle', 30, 8, 'SQUIRTLE', 'bubblebeam', 'water');

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
        choices: [charmander, bulbasaur, squirtle],
    },
    {
        // 3. WOAH IT'S YOUR RIVAL! What's their name?
        type: 'input',
        name: 'rival name',
        message: 'Oh no! It\'s your rival! What a coincidence! What\'s their name again?',
        validate: function (value) {
            let pass = value.match(/[A-Z]{1,}/gi);
            if (pass) {
                return true
            }
            return 'Please enter a valid name';

        }
    },
    {
        //4. What's their pokemon?
        type: 'list',
        name: 'pokemon2',
        message: 'Choose their pokemon!',
        choices: [charmander, bulbasaur, squirtle],
    },
    {
        //5. do you want to battle?
        type: 'confirm',
        name: 'battle?',
        message: 'Do you want to battle?',
        default: true,
    }

]

// const player1 = new Trainer(firstAnswers[0].name)
// console.log(player1)

function playGame() {
    inquirer
        .prompt(firstQuestions)
        .then(function (firstAnswers) {

            console.log(firstAnswers)
            const player1 = new Trainer(firstAnswers['player name']);
            player1.catch(firstAnswers.pokemon);
            console.log(player1)

            const player2 = new Trainer(firstAnswers['rival name']);
            player2.catch(firstAnswers.pokemon2)
            console.log(player2)

            const firstBattle = new Battle(player1, player2, firstAnswers.pokemon, firstAnswers.pokemon2)
            console.log(firstBattle)

            return inquirer.prompt(secondQuestions);
        })
        .then(function (secondAnswers) {
            // do stuff with the answers to the secondQuestions, e.g. choose moves to use / fight / run away / select pokemon to fight with
        });
}
playGame();