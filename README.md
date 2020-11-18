## Pokemon Battle Game

Welcome to the wonderful world of Pokemon!

This is a command line Pokemon battler game created using Object Oriented Programming in ES6 JavaScript to create trainers and their Pokemon. This was made using JavaScript, inquirer.js and 

Each Pokemon and Trainer was created using Classes. The Pokemon class creates a Pokemon with properties Name, Hit Points(HP), Attack Damage(AD), Sound, Move, and Type when provided the name. The Trainer class creates a trainer with properties Name and Pokebelt, and has a method 'catch' which add Pokemon to the Pokebelt.

There is also a Battle class which creates a battle arena, with two trainers and two Pokemon. This has a method 'turn', which allows one of the Pokemon to attack the other. The 'turn' method takes into account a Pokemon's strength or weakness against its opponent, multiplying the AD by 1.25 or 0.75 respectively.

Using inquirer.js, a command line method was implemented in order to establish a flow through which the initial stages of the original Pokemon game were followed through, from initial meeting with Professor Oak to the end of the first battle with the player's rival. Upon running away or Pokemon fainting, the game ends.

## How to play:

- Fork and clone this repository to your computer and open in your code editor. 
- Run the command 'npm install inquirer', followed by 'node playpokemon.js' in your terminal 
- Answer the initial questions to set up your trainers and pokemon and have fun!

