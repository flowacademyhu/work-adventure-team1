// create main function
const map = require('./functions/map');
const moving = require('./functions/movement');

const main = () => {
  console.log('Hello játékos!');
  const mapArr = map.generateMap(5, 5);
  console.log('Mozgáshoz a következő betűkből válassz ki egyet: w, a, s, d');

  map.fillMap(mapArr);
  const characterLocation = map.placeCharacter(mapArr);
  console.log(`Az X:${characterLocation.x}, Y:${characterLocation.y} koordinátán állsz!`);

  let life = 5;
  console.log(life);

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
      console.log('Északra fordultál');
      console.log(life);
    } else if (key === 'a') {
      console.clear();
      moving.mov(mapArr, key, characterLocation);
      console.log('Nyugatra fordultál');
      console.log(life);
    } else if (key === 's') {
      console.clear();
      moving.mov(mapArr, key, characterLocation);
      console.log('Délre fordultál');
      console.log(life);
    } else if (key === 'd') {
      console.clear();
      moving.mov(mapArr, key, characterLocation);
      console.log('Keletre fordultál');
      console.log(life);
    }
  });
};
main();
