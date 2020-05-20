// create main function
const map = require('./functions/map');
const moving = require('./functions/movement');

const main = () => {
  console.log('Hello gamer!');
  const mapArr = map.generateMap(5, 5);
  console.log('To moving type one of the nexts: w, a, s, d');

  map.fillMap(mapArr);
  const characterLocation = map.placeCharacter(mapArr);
  console.log(`Az X:${characterLocation.x}, Y:${characterLocation.y} koordinátán állsz!`);
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    if (key === 'q') {
      process.exit();
    }
    if (key === 'w') {
      console.clear();
      moving.mov(mapArr, key, characterLocation);
      console.log('You turned North');
    } else if (key === 'a') {
      console.clear();
      moving.mov(mapArr, key, characterLocation);
      console.log('You turned West');
    } else if (key === 's') {
      console.clear();
      moving.mov(mapArr, key, characterLocation);
      console.log('You turned South');
    } else if (key === 'd') {
      console.clear();
      moving.mov(mapArr, key, characterLocation);
      console.log('You turned East');
    }
  });
};
main();
