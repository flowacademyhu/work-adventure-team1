let isInitialised = false;
let character = {};
const moving = (arr, direction, initialLocation) => {
  if (!isInitialised) {
    character = arr[initialLocation.x][initialLocation.y];
    isInitialised = true;
  }
  const coordinates = () => {
    console.log(`Az X:${character.x}, Y:${character.y} ${character.name}`);
  };
  const height = arr.length;
  const width = arr[0].length;
  if (direction === 'w') {
    for (let i = 0; i < height - 1; i++) { // We check if the character has reached the top or not. i++ because we are moving upwards.
      for (let j = 0; j < arr[i].length; j++) { // Here we check if we have hit the width limits.;
        if (arr[i + 1][j] === character) { // We move up so we check the cell below us
          character = arr[i][j];
          arr[i][j] = character; // We add a character to the desired location
          coordinates();// Let's check where we are standing.
          return;
        }
      }
    }
  }
  if (direction === 's') {
    for (let i = height - 1; i > 0; i--) { // We check if the character has reached the bottom or not. i-- because we are moving downwards.
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i - 1][j] === character) { // Here we check what is above us
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
      for (let j = width - 1; j > 0; j--) { // We check if the character has reached the sides or not. j-- because we are moving to the right
        if (arr[i][j - 1] === character) { // What is left of us
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
      for (let j = 0; j < width - 1; j++) { // We check if the character has reached the sides or not. j++ because we are moving to the left
        if (arr[i][j + 1] === character) { // And what is right of us
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
