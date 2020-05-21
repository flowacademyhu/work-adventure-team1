const operationLife = (character, mlife) => {
  if (character === false) {
    mlife = mlife - 1;
  }
};

const invLife = (mlife) => {
  if (mlife === 0) {
    console.log('Az őrület végleg a hatamába kerített! Nem jutsz ki élve a labirintusból!');
    console.log('KALANDOD VÉGETÉRT!');
    process.exit();
  }
};

module.exports = {
  operationLife,
  invLife

};
