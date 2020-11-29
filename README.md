# Pokemon Battle Game

## Table of Contents 
- [About](#about)
- [How to play](#how-to-play)
- [Status](#status)
- [Technologies used](#technologies-used)


## About

Welcome to the wonderful world of Pokemon!

This is a command line Pokemon battler game created using Object Oriented Programming in ES6 JavaScript to create trainers and their Pokemon. This was made using JavaScript, inquirer.js and 

Each Pokemon and Trainer was created using Classes. The Pokemon class creates a Pokemon with properties Name, Hit Points(HP), Attack Damage(AD), Sound, Move, and Type when provided the name. The Trainer class creates a trainer with properties Name and Pokebelt, and has a method 'catch' which add Pokemon to the Pokebelt.

There is also a Battle class which creates a battle arena, with two trainers and two Pokemon. This has a method 'turn', which allows one of the Pokemon to attack the other. The 'turn' method takes into account a Pokemon's strength or weakness against its opponent, multiplying the AD by 1.25 or 0.75 respectively.

Using inquirer.js, a command line method was implemented in order to establish a flow through which the initial stages of the original Pokemon game were followed through, from initial meeting with Professor Oak to the end of the first battle with the player's rival. Upon running away or Pokemon fainting, the game ends.

## How to play:

- Fork and clone this repository to your computer and open in your code editor. 
- Run the following commands in your terminal and have fun:
```
npm install 
node playpokemon.js
```

## Status

This project is ongoing. It is ready to be played, however there is some extra functionality that I am working on to make the game even better:

- The ability to catch and play with up to 6 pokemon in the game, and be able to switch between your pokemon when you want. Then the game would only be over when all of one players pokemon have fainted. 

- A critical hit feature where randomly in the game a pokemon can do a critical hit on their opponent and inflict triple their usual damage. 

## Technologies used

- JavaScript ES6 - Object Oriented Programming
- [Inquirer.js](https://www.npmjs.com/package/inquirer) - an npm promise-based package used to create Command Line Interface (CLI) tools for query based tasks.
- Test-Driven Development (TDD) using [Jest](https://jestjs.io).