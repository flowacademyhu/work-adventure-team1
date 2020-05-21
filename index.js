// create main function
const map = require('./functions/map');
const moving = require('./functions/movement');
const contentArr = require('./functions/content');
const context = require('./functions/context');
const opLife = require('./functions/life');
const location = require('./functions/location');
const main = () => {
  console.log('--------------- RETTENET A FÖLD ALATT-------------------');
  console.log(' ');
  console.log('Nem is sjtetted hogy Nagyapád birtoka ilyen veszélyeket is rejt. \n Sajognak a csontjaid az esés miatt de szerencsére minden végtagod mozog. \n Ahogy az elméd kezd tisztulni rádöbbensz hogy olcsón megúsztad a zuhanást. \nKorom sötét van körülötted. Gyorsan a zsebedbe nyúlsz és előkapod a telefonodat. \nSzerencsére nem tört össze és tökéletesen működik. \nSajnos ilyen mélyen a föld alatt nincs térerő. De legalább világítani tudsz vele. Viszont a 22%os töltötség nem túl bizalomgerjesztő. \nAhogy körülnézel a telefonod fényében látod egy  régen az épület alá vájt kazamatarendszerbe kerültél ami egymást keresztező folyosók végeláthatatlan labirintusa. \nSajnos lehetetlen ott kimásznod ahonan lezuhantál. Az omlás túl magasan van. \nA légmozgás azonban arra utal hogy valahol kell, hogy legyen egy másik kijárata ennek a helynek. \nLassan azt is észreveszed hogy egy különös borzongató érzés kezd úrrálenni rajtad. Megrázod magad amitől megszűnik a hideg érzet de nem tudsz szabadulnia gondolattól \nhogy valami különös titokkal találtad szembe megad. \nNincs más hátra elindulsz a ősi labirintusban. \nMeg kell találnod a kiutat mielőtt lemerült a telefonod vagy mielőtt … de ebbe inkább nem is gondolsz bele');

  const mapArr = map.generateMap(5, 5);
  const shuffledArr = map.shuffleArr(contentArr.contentArr);
  const mLife = 5;
  console.log(' ');

  console.log('Mozgáshoz a következő betűkből válassz ki egyet: w, a, s, d');
  console.log(' ');

  console.log('LIFE:', mLife);
  map.fillMap(mapArr, shuffledArr);

  const characterLocation = map.placeCharacter(mapArr);

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
      location.location(context.returnCon().x - 1, context.returnCon().y - 1);
    } else if (key === 'a') {
      console.clear();
      moving.mov(mapArr, key, characterLocation);
      console.log(context.returnCon().content.description);
      console.log('LIFE:', mLife);
      location.location(context.returnCon().x - 1, context.returnCon().y - 1);
    } else if (key === 's') {
      console.clear();
      moving.mov(mapArr, key, characterLocation);
      console.log(context.returnCon().content.description);
      console.log('LIFE:', mLife);
      location.location(context.returnCon().x - 1, context.returnCon().y - 1);
    } else if (key === 'd') {
      console.clear();
      moving.mov(mapArr, key, characterLocation);
      console.log(context.returnCon().content.description);
      console.log('LIFE:', mLife);
      location.location(context.returnCon().x - 1, context.returnCon().y - 1);
    }
    console.log(' ');

    console.log('Merre tovább?');
    console.log('Mozgáshoz a következő betűkből válassz ki egyet: w, a, s, d');
    opLife.operationLife(context.returnCon().content.life, mLife);
    opLife.invLife(mLife);
  });
};
main();
