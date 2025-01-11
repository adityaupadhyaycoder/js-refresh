Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  const newArr = new Array(this.length); // Create a new array to store results
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      // Check if the element exists in the array
      newArr[i] = callback.call(thisArg, this[i], i, this); // Call the callback with the specified thisArg
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