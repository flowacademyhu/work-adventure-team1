let character = {}; // Placeholder; this should equal to the value set by placeCharacter
const moving = (arr, direction) => {
  const coordinates = () => {
    console.log(`Az X:${character.x}, Y:${character.y} ${character.name}`);
  };
  const height = arr.length;
  const width = arr[0].length;
  if (direction === 'w') {
    for (let i = 0; i < height - 1; i++) { // We check if the character has reached the bottom or not. i++ because we are moving upwards.
      for (let j = 0; j < arr[i].length; j++) { // Here we check if we have hit the width limits.;
        if (arr[i + 1][j] === character) { // We check where we are with the character
          character = arr[i][j]; // We make it pick up the value of the cell
          arr[i][j] = character; // We put the character to where we are standing
          coordinates();
          return;
        }
      }
    }
  }
  if (direction === 's') {
    for (let i = height - 1; i > 0; i--) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i - 1][j] === character) {
          character = arr[i][j];
          arr[i][j] = character;
          coordinates();
          return;
        }
      }
    }
  }
  if (direction === 'd') {
    for (let i = 0; i < height; i++) {
      for (let j = width - 1; j > 0; j--) {
        if (arr[i][j - 1] === character) {
          character = arr[i][j];
          arr[i][j] = character;
          coordinates();
          return;
        }
      }
    }
  }
  if (direction === 'a') {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width - 1; j++) {
        if (arr[i][j + 1] === character) {
          character = arr[i][j];
          arr[i][j] = character;
          coordinates();
          return;
        }
      }
    }
  }
  console.log(`Az X:${character.x}, Y:${character.y} ${character.name}`);
};
module.exports = {
  mov: moving
}
;
