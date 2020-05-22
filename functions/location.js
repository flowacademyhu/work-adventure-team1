const Table = require('cli-table');
const chalk = require('chalk');
let previousLocationX = null;
let previousLocationY = null;
// let previousContent = null;  // This feature is not in use yet. It is used to assign the previous content to the previous location
let previousLocation = null;
const table = new Table({
  chars: {
    top: '═',
    'top-mid': '╤',
    'top-left': '╔',
    'top-right': '╗',
    bottom: '═',
    'bottom-mid': '╧',
    'bottom-left': '╚',
    'bottom-right': '╝',
    left: '║',
    'left-mid': '╟',
    mid: '─',
    'mid-mid': '┼',
    right: '║',
    'right-mid': '╢',
    middle: '│'
  }
});
table.push(
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
);

const location = (x, y) => {
  if (previousLocationY !== null && previousLocationX !== null) {
    table[previousLocationX][previousLocationY] = chalk.bgRed(previousLocation);
  }
  previousLocation = table[x][y];
  table[x][y] = chalk.bold.underline.whiteBright.bgBlue(`${table[x][y]}`);
  console.log(table.toString());
  previousLocationX = x;
  previousLocationY = y;
  // previousContent = returnContext().content.extra;
};

module.exports = {
  location
}
;
