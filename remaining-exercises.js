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

function maxSum(arr) {
  if (arr.length < 2) {
    return 'need two numbers for a sum';
  }

  let max = arr[0] + arr[1];
  for (let i = 2; i < arr.length; i++) {
    for (let j = 0; j <= arr.length - i; j++) {
      let currentSum = 0;
      for (let k = 0; k < i; k++) {
        currentSum += arr[j + k];
      }
      if (currentSum > max) {
        max = currentSum;
      }
    }
  }
  return max;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));
// O(n^3) -- there might be a better way to do it.

