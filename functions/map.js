
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
      const coordinate = { x: i, y: j, name: 'Koordinátán állsz!' };
      arr[i][j] = coordinate;
    }
  }
};

module.exports = {
  generateMap,
  fillMap

};
