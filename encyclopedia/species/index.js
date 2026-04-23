const extract = (data) => {
    if (!data) return [];
    return (data.default !== undefined) ? data.default : data;
};

const snakes = extract(require('./snakes.json'));
const lizards = extract(require('./lizards.json'));
const turtles = extract(require('./turtles.json'));
const amphibians = extract(require('./amphibians.json'));
const crocodilians = extract(require('./crocodilians.json'));
const arachnids = extract(require('./arachnids.json'));
const invertebrates = extract(require('./invertebrates.json'));

module.exports = [
    ...snakes,
    ...lizards,
    ...turtles,
    ...amphibians,
    ...crocodilians,
    ...arachnids,
    ...invertebrates
];
