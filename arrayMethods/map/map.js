// The map() method in JavaScript is used when we need to transform each element in an array
// and create a new array with the transformed values, without modifying the original array.

/* 
1. callback: A function that is executed on each element in the array. It receives three arguments:
    currentValue: The current element being processed in the array.
    index: The index of the current element.
    array: The original array on which map() was called.
2. thisArg (optional): Value to use as this when executing the callback.
*/

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  const arrayLength = this.length;
  const resultArray = [];

  for (let index = 0; index < arrayLength; index++) {
    if (index in this) {
      // Avoid sparse array issues by checking if the index exists
      const transformedValue = callback.call(thisArg, this[index], index, this);
      resultArray.push(transformedValue);
    }
  }
  return resultArray;
};

const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

// Use map() to extract only the names of the users
const userNames = users.map((user) => user.name);

console.log(userNames); // ["Alice", "Bob", "Charlie"]

const numbers = [1, 2, 3, 4];
const incremented = numbers.myMap((num) => num + 1);
