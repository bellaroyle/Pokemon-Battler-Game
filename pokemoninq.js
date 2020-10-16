
// 5. A friendly battle between you and your rival!
// 6. It's your turn! Do you want to attack?
// 7. Blah blah blah #fight
// 8. WOW YOU WIN/WOW YOU LOSE.

'use strict';
const inquirer = require('./pokemon');

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
                return true
            }
            return 'Please enter a valid name';

        }
    },
    {
        //4. What's their pokemon?
        type: 'list',
        name: 'pokemon',
        message: 'Choose your pokemon!',
        choices: ['charmander', 'bulbasaur', 'squirtle'],
    },

]

function playGame() {
    inquirer
        .prompt(firstQuestions)
        .then(function (firstAnswers) {
            // do stuff with the answers to the firstQuestions, e.g. create trainers and catch pokemon
            console.log(firstAnswers);
            return inquirer.prompt(secondQuestions);
        })
        .then(function (secondAnswers) {
            // do stuff with the answers to the secondQuestions, e.g. choose moves to use / fight / run away / select pokemon to fight with
        });
}
playGame();