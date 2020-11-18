const inquirer = require("inquirer")


console.log(Math.floor(Math.random() * 5 + 6))

function battleData() {
    let prompt = inquirer.prompt(secondQuestions)
        .then(response => {
            if (response.action === 'fight') {
                fightData.turn(fightData.pokeOne, fightData.pokeTwo)
                fightData.turn(fightData.pokeTwo, fightData.pokeOne)
                return battleData()
            }
        })
    return prompt;
}