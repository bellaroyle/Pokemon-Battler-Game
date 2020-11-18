## Pokemon Battle Game

- Introduction

Welcome to the wonderful world of Pokemon!

This is a command line Pokemon battler game created using Object Oriented Programming in ES6 JavaScript to create trainers and their Pokemon.

Each Pokemon and Trainer was created using Classes. The Pokemon class creates a Pokemon with properties Name, Hit Points(HP), Attack Damage(AD), Sound, Move, and Type when provided the name. The Trainer class creates a trainer with properties Name and Pokebelt, and has a method 'catch' which add Pokemon to the Pokebelt.

There is also a Battle class which creates a battle arena, with two trainers and two Pokemon. This has a method 'turn', which allows one of the Pokemon to attack the other. The 'turn' method takes into account a Pokemon's strength or weakness against its opponent, multiplying the AD by 1.25 or 0.75 respectively.

Using inquirer.js, a command line method was implemented in order to establish a flow through which the initial stages of the original Pokemon game were followed through, from initial meeting with Professor Oak to the end of the first battle with the player's rival. Upon running away or Pokemon fainting, the game ends.

## Instructions:

- Fork and clone the repo: ___
- Run command 'node playpokemon.js' in your terminal.
- Have fun!

### Extra Requirements
- Implement a critical hit, that randomly awards pokemon triple damage.
- A trainer should only be able to hold 6 pokeballs. Limit the number of pokemon that a trainer can store. 
- In the original pokemon games, the victor was only declared once all of a trainer's pokeballs contained unconscious pokemon. Improve your battle function so take this into account. 
- Trainers should be able to change pokemon mid battle to adjust to changing circumstances. This should end the trainer's turn. 
- Pokemon should have a selection of moves, stored in an array. Each move should modify the pokemon's attack damage, and should be available a finite amount of times - determined by its PP (power points). When a move is used, it loses a power point. When there are no more power points for that move, it cannot be used. When none of that pokemon's moves can be used, it 'struggles' by default. This damages the attacker for its base attack value, rather than the defender. 
