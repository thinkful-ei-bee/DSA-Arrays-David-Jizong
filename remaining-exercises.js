'use strict';

// URLify a string
function URLify(str) {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== ' ') {
      output += char;
    } else {
      output += '%20';
    }
  }

  return output;
}

console.log(URLify('www.thinkful.com /tauh ida parv een'));
// If += on a string is O(n), this algorithm is O(n^2).
// We could make the whole algorithm O(n) by ensuring enough space is allocated from the beginning, e.g. set the original string length to 3 times the input.

// Filter an array

function moreThanFive(arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      output.push(arr[i]);
    }
  }
  return output;
}

// in the worst case this would be O(n^2) if push needs to recopy array each time. We could make this O(n) by allocating a space equal to the original array.

