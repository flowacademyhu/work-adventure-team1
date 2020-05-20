// create main function
const map = require('./map');
const moving = require('./moving');

const main = () => {
console.log('Hello gamer!');
    const mapArr = map.generateMap(5, 5);
console.log('You are positioned at ', );
console.log('To moving type one of the nexts: w, a, s, d');

	map.fillMap(mapArr);
	placeCharacter(arr);
        movment.moving();

    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', (key) => {
        if (key === 'q') {
            process.exit();
        };
        if (key === 'w') {
	movement.moving();
	console.log('You turned North');
       } else if{ (key === 'a') {
	movement.moving();
       console.log('You turned West');
	} else if { (key === 's');
	movement.moving();
	console.log('You turned South');
	} else { (key === 'd');
	movement.moving();
	console.log('You turned East'); 
       
main();
