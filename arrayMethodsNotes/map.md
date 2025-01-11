# CQ-1: What is need of second argument thisArg ?

Ans:
The second argument `thisArg` allows you to specify the value of `this`
inside the callback function. This is useful when you want to use an
external object or context within the callback function. Without `thisArg`,
the callback function’s `this` would either default to `undefined`
(in strict mode) or the global object (in non-strict mode).

          Example:
          const obj = { multiplier: 2 };
          const numbers = [1, 2, 3];
          const result = numbers.myMap(function (num) {
            return num * this.multiplier;
          }, obj);

          console.log(result); // Output: [2, 4, 6]

# CQ-2: What is need for returning the same array as the third argument inside the callback function ?

Ans:
1.  If we have generic function to pass inside map as callback then it has no context what array it's being used for.
2.  The third argument can be useful when we are chaining several array methods
    and need to access the intermediate state of the array.

                 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

                 numbers
                 .filter(num => num % 2 === 0)
                 .map((num, index, arr) => {
                  // arr contains only sum numbers
                  return num;
                })

# CQ-3: What is sparse array ?

Ans:
A sparse array is an array that contains "empty slots", meaning some indices are not assigned any values. These empty slots are different from indices that are explicitly set to undefined.

```js
// Array constructor:
const a = Array(5); // [ <5 empty items> ]

// Consecutive commas in array literal:
const b = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]

// Directly setting a slot with index greater than array.length:
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

// Elongating an array by directly setting .length:
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 empty items> ]

// Deleting an element:
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]

```

# CQ-4: What is problem with sparse Array ?

Ans:
1. In some operations, empty slots behave as if they are filled with undefined.

```js
const arr = [1, 2, , , 5]; // Create a sparse array
// Indexed access
console.log(arr[2]); // undefined
// For...of
for (const i of arr) {
console.log(i);
}
// Logs: 1 2 undefined undefined 5
// Spreading
const another = [...arr]; // "another" is [ 1, 2, undefined, undefined, 5 ]

```

2. But in others (most notably array iteration methods), empty slots are skipped.

 ```js
   const mapped = arr.map((i) => i + 1); // [ 2, 3, <2 empty items>, 6 ]
   arr.forEach((i) => console.log(i)); // 1 2 5
   const filtered = arr.filter(() => true); // [ 1, 2, 5 ]
   const hasFalsy = arr.some((k) => !k); // false
 ```

```js
// Property enumeration
const keys = Object.keys(arr); // [ '0', '1', '4' ]
for (const key in arr) {
console.log(key);
}
```

```js
// Logs: '0' '1' '4'
// Spreading into an object uses property enumeration, not the array's iterator
const objectSpread = { ...arr }; // { '0': 1, '1': 2, '4': 5 }

```

3. Sparse arrays can have slower performance in some operations due to how JavaScript engines handle them.

# CQ-5: How to detect a sparse array ?

Ans:
1. Sparse arrays can be detected by checking if the length property of the array
   is greater than the number of elements in the array.
2. By using the Object.prototype.hasOwnProperty() method.

```js
const arr = [1, 2, 3];
arr[4] = 4;
arr.length > arr.filter(() => true).length; // true
arr.hasOwnProperty(3); // false
```

# CQ-6: 1.What is dense Arrays ?

Ans:
These are the regular arrays where every index is filled with a value.
All elements have values, with no missing or undefined slots


```js
const greet = () => {
  console.log("Hello, World!");
}
```

