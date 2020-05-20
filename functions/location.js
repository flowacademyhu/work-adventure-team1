const Table = require('cli-table');

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

console.log(table.toString());

const location = (koordinate) => {
  if (koordinate === 1) {
    console.log('egyes mező');
  } else if (koordinate === 2) {
    console.log('kettes mező');
  } else if (koordinate === 3) {
    console.log('hármas mező');
  } else if (koordinate === 4) {
    console.log('négyes mező');
  } else if (koordinate === 5) {
    console.log('ötös mező');
  } else if (koordinate === 6) {
    console.log('hatos mező');
  } else if (koordinate === 7) {
    console.log('hetes mező');
  } else if (koordinate === 8) {
    console.log('nyolcas mező');
  } else if (koordinate === 9) {
    console.log('kilences mező');
  } else if (koordinate === 10) {
    console.log('tizes mező');
  } else if (koordinate === 11) {
    console.log('tizenegyes mező');
  } else if (koordinate === 12) {
    console.log('tizenkettes mező');
  } else if (koordinate === 13) {
    console.log('tizenhármas mező');
  } else if (koordinate === 14) {
    console.log('tizennégyes mező');
  } else if (koordinate === 15) {
    console.log('tizenötös mező');
  } else if (koordinate === 16) {
    console.log('tizenhatos mező');
  } else if (koordinate === 17) {
    console.log('tizenhetes mező');
  } else if (koordinate === 18) {
    console.log('tizennyolcas mező');
  } else if (koordinate === 19) {
    console.log('tizenkilences mező');
  } else if (koordinate === 20) {
    console.log('huszas mező');
  } else if (koordinate === 21) {
    console.log('huszonegyes mező');
  } else if (koordinate === 22) {
    console.log('huszonkettes mező');
  } else if (koordinate === 23) {
    console.log('huszonhármas mező');
  } else if (koordinate === 24) {
    console.log('huszonnégyes mező');
  } else if (koordinate === 25) {
    console.log('huszonötös mező');
  }
};

location(2);
