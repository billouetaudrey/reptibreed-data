const extract = (data) => {
    if (!data) return [];
    return (data.default !== undefined) ? data.default : data;
};

const snakes = extract(require('./species/snakes.json'));
const lizards = extract(require('./species/lizards.json'));
const turtles = extract(require('./species/turtles.json'));
const amphibians = extract(require('./species/amphibians.json'));
const crocodilians = extract(require('./species/crocodilians.json'));

module.exports = [
    ...snakes,
    ...lizards,
    ...turtles,
    ...amphibians,
    ...crocodilians
];
