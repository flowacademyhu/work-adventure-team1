
const generateMap = (width, height) => {
  const arr = new Array(height);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(width);
  }
  return arr;
};

const fillMap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const coordinate = { x: (i + 1), y: (j + 1), name: 'Koordinátán állsz!' };
      arr[i][j] = coordinate;
    }
  }
};

const placeCharacter = (arr) => {
  const x = Math.floor(Math.random() * arr.length);
  const y = Math.floor(Math.random() * arr[0].length);
  const basicLocation = { x, y };
  return basicLocation;
};

module.exports = {
  generateMap,
  fillMap,
  placeCharacter

};
