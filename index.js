// create main function
const map = require('./functions/map');
const moving = require('./functions/movement');
const contentArr = require('./functions/content');
const context = require('./functions/context');
const opLife = require('./functions/life');

const main = () => {
  console.log('Hello játékos!');
  const mapArr = map.generateMap(5, 5);
  const shuffledArr = map.shuffleArr(contentArr.contentArr);
  const mLife = 5;

  console.log('Mozgáshoz a következő betűkből válassz ki egyet: w, a, s, d');
  console.log('LIFE:', mLife);

  map.fillMap(mapArr, shuffledArr);

  const characterLocation = map.placeCharacter(mapArr);

  // console.log(`Az X:${characterLocation.x}, Y:${characterLocation.y} koordinátán állsz!`);

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
      console.log(context.returnCon().content.description);
      console.log('LIFE:', mLife);
    } else if (key === 'a') {
      console.clear();
      moving.mov(mapArr, key, characterLocation);
      console.log(context.returnCon().content.description);
      console.log('LIFE:', mLife);
    } else if (key === 's') {
      console.clear();
      moving.mov(mapArr, key, characterLocation);
      console.log(context.returnCon().content.description);
      console.log('LIFE:', mLife);
    } else if (key === 'd') {
      console.clear();
      moving.mov(mapArr, key, characterLocation);
      console.log(context.returnCon().content.description);
      console.log('LIFE:', mLife);
    }
    opLife.operationLife(context.returnCon().content.life, mLife);
    opLife.invLife(mLife);
  });
};
main();
