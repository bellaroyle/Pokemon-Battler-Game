// reference object that assigns a move to a type
exports.moveRef = {
    fire: 'ember',
    grass: 'razor leaf',
    water: 'bubblebeam',
    normal: 'tackle'
}

// reference object that assigns a type to a pokemon name 
exports.typeRef = {
    charmander: 'fire',
    bulbasaur: 'grass',
    squirtle: 'water',
    eevee: 'normal',
    vaporeon: 'water',
    flareon: 'fire',
    leafeon: 'grass',
    rattata: 'normal'
}

// reference object where the keys are strong against the values 
exports.strengthRef = {
    grass: 'water',
    fire: 'grass',
    water: 'fire'
}

// reference object where the keys are weak against the values 
exports.weaknessRef = {
    grass: 'fire',
    fire: 'water',
    water: 'grass'
}