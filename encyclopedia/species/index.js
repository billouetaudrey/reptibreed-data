const snakes = require('./snakes.json');
const lizards = require('./lizards.json');
const varanidae = require('./varanidae.json');
const turtles = require('./turtles.json');
const amphibians = require('./amphibians.json');
const crocodilians = require('./crocodilians.json');
const arachnids = require('./arachnids.json');
const invertebrates = require('./invertebrates.json');

module.exports = [
    ...snakes,
    ...lizards,
    ...varanidae,
    ...turtles,
    ...amphibians,
    ...crocodilians,
    ...arachnids,
    ...invertebrates
];
