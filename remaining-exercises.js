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

function mergeArrays(arr1, arr2) {
  const output = [];
  let ptr1 = 0;
  let ptr2 = 0;
  while (ptr1 < arr1.length || ptr2 < arr2.length) {
    if (arr1[ptr1] < arr2[ptr2]) {
      output.push(arr1[ptr1]);
      ptr1++;
    } else if (arr1[ptr1] > arr2[ptr2]) {
      output.push(arr2[ptr2]);
      ptr2++;
    } else if (arr1[ptr1] === arr2[ptr2]) {
      output.push(arr1[ptr1]);
      output.push(arr1[ptr2]);
      ptr1++;
      ptr2++;
    } else {
      ptr1++;
      ptr2++;
    }
  }
  return output;
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
// seems like O(n^2) with the push incorporated

function removeChars(str, chars) {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (chars.indexOf(currentChar) === -1) {
      output += currentChar;
    }
  }

  return output;
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// If += is O(n), total is O(n^2). We can make this O(n) by making allocating more space to output string

function products(arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    output.push(product);
  }
  return output;
}

console.log(products([1, 3, 9, 4]));
// O(n^2)
// if there are no 0s we could make this O(n) by multiplying all numbers, then dividing by each to get the individual products
// and without any pushes, given no 0s:

function optimizedProducts(arr) {
  let product = 1;
  arr.forEach(ele => {
    product *= ele;
  });
  return arr.map(ele => product).map((ele, index) => ele/arr[index]);
}

console.log(optimizedProducts([1, 3, 9, 4]));

function setZeros(array, row, column) {
  array[row] = array[row].map(ele => 0);
  for (let i = 0; i < array.length; i++) {
    array[i][column] = 0;
  }
  return array;
}

function twoDArray(arr) {
  const output = arr.map(ele => ele.map(el => el));
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[0].length; column++) {
      if(arr[row][column] === 0){
        setZeros(output, row, column);
      }
    }
  }
  return output;
}
const testArr = [[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]];
console.log(twoDArray(testArr));

// this is O(n^3) since there are 3 nested loops, including the extra function.

function strRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // for string of length n, there are n possible rotations
  const rotations = [];
  for (let i = 0; i < str1.length; i++) {
    rotations.push(str1.slice(i) + str1.slice(0, i));
  } 
  if (rotations.indexOf(str2) === -1) {
    return false;
  }
  return true;
}

console.log(strRotation('amazon', 'azonma'));
console.log(strRotation('amazon', 'azonam'));