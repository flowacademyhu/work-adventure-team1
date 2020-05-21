const operationLife = (caracter, life) => {
  if (caracter.life === false) {
    life = life - 1;
  }
  if (life === 0) {
    console.log('Az őrület végleg a hatamába kerített! Nem jutsz ki élve a labirintusból!');
    console.log('KALANDOD VÉGETÉRT!');
    process.exit();
  }
};

module.exports = {
  operationLife

};
