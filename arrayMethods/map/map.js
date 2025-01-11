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

  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      // Check if element exists in the array (avoid sparse arrays)
      newArr.push(callback.call(thisArg, this[i], i, this));
    }
  }
  return newArr;
};

const users = [
  {
    firstName: "Aditya",
    lastName: "Upadhyay",
  },
  {
    firstName: "Ram",
    lastName: "Upadhyay",
  },
];

const usersWithFullname = users.myMap((user, index, arr) => {
  const fullName = user?.firstName + " " + user?.lastName;
  return fullName;
});

const numbers = [1, 2, 3, 4];
const incremented = numbers.myMap((num) => num + 1);
