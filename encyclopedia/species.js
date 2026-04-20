const snakes = require('./species/snakes.json');
const lizards = require('./species/lizards.json');
const turtles = require('./species/turtles.json');
const amphibians = require('./species/amphibians.json');
const crocodilians = require('./species/crocodilians.json');

module.exports = [
    ...snakes,
    ...lizards,
    ...turtles,
    ...amphibians,
    ...crocodilians
];
