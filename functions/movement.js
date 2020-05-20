const moving = (arr, direction) => {
  const coordinates = () => {
    console.log(`Az X:${character.x}, Y:${character.y} ${character.name}`);
  };
  const height = arr.length;
  const width = arr[0].length;
  if (direction === 'w') {
    for (let i = 0; i < height - 1; i++) { // We check if the character has reached the bottom or not. i++ because we are moving upwards.
      for (let j = 0; j < arr[i].length; j++) { // Here we check if we have hit the width limits.;
        if (arr[i + 1][j] === character) { // We delete the characzer in the previous line
          character = arr[i][j];
          arr[i][j] = character; // We add a character to where we are standing
          coordinates();// Let's check where we are standing.
          return;
        }
      }
    }
  }
  if (direction === 's') {
    for (let i = height - 1; i > 0; i--) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i - 1][j] === character) { // The character goes one step right (-1y) so that means that the one before it (+1y) gets deleted
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
        if (arr[i][j - 1] === character) { // The character goes one step right (-1y) so that means that the one before it (+1y) gets deleted
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
        if (arr[i][j + 1] === character) { // The character goes one step right (-1y) so that means that the one before it (+1y) gets deleted
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
