// teszt komment

// create main function
const map = require('./map');
const moving = require('./moving');

const main = () => {
console.log('Hello gamer!');
    const arr = map.generateMap(5, 5);
console.log('You are positioned at ', );
console.log('To moving type one of the nexts: x, y');
setInterval(() => {
	map.fillMap();
	placeCharacter();
        movment.moving();
};
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', (key) => {
        if (key === 'q') {
            process.exit();
        };
main();
