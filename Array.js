'use strict';
const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(val) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, val);
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }

    const val = memory.get(this.ptr + this.length - 1);
    this.length -= 1;
    return val;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, val);
    this.length +=1 ;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('index error');
    }

    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length -= 1;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }
}

Array.SIZE_RATIO = 3;

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();
  arr.push(3); // 3
  arr.push(5); // 4
  arr.push(15);  // 5
  arr.push(19); // 6
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  // console.log(arr.get(0));
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.push('tauhida');
  // console.log(arr.get(0));
  console.log(arr); 

}

// exercise 2
// after first step in exercise 2, length 1, capacity 3, ptr 0
// after adding additional pushes, length 6, capacity 12, ptr 3
// length is 6 since we have put in 6 values
// capacity is 12 because we add 1 and then triple when we resize
// (0 + 1) * 3 = 3;
// (3 + 1) * 3 = 12;
// ptr is 3 since we only move when we resize from 3 to 12

// exercise 3
// length 3, capacity 12, ptr 3
// pop reduces length but does not change capacity or pointer

// exercise 4
// first result is 3 as expected
// result of "tauhida" is NaN because the memory is stored as floating point values

// resize is needed since memory immediately after the array might not be free
main();