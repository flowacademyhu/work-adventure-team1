const Table = require('cli-table');
const chalk = require('chalk');

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
  ['', '', '', '', '', ''],
  ['', 1, 2, 3, 4, 5],
  ['', 6, 7, 8, 9, 10],
  ['', 11, 12, 13, 14, 15],
  ['', 16, 17, 18, 19, 20],
  ['', 21, 22, 23, 24, 25]
);

console.log(table.toString());

const location = (x, y) => {
  table[x][y] = chalk.bgBlue(table[x][y]);
  console.log(table.toString());
};

module.exports = {
  location
}
;
