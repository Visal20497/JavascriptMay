// A Symbol is a unique and immutable primitive value, often used to create unique property keys for objects.
// Creating a symbol
const sym1: symbol = Symbol("description");
const sym2: symbol = Symbol("description");

// Symbols are unique
console.log(sym1 === sym2); // Output: false

// Using symbols as object property keys
const obj: Record<symbol, string> = {};
const symKey: symbol = Symbol("key");
obj[symKey] = "value";
console.log(obj[symKey]); // Output: 'value'

// Symbol.for(key): Searches for existing symbols in a global symbol registry with the given key and returns it if found. Otherwise, creates a new symbol with this key.
const globalSym: any = Symbol.for("globalKey");
const sameGlobalSym: any = Symbol.for("globalKey");
console.log(globalSym === sameGlobalSym); // Output: true

// Symbol.keyFor(symbol): Retrieves a shared symbol key from the global symbol registry for the given symbol.
const globalSym1 = Symbol.for("globalKey");
console.log(Symbol.keyFor(globalSym1)); // Output: 'globalKey'

// Map in JavaScript
const map = new Map<string, any>();
map.set("name", "Alice");
map.set("age", 30);
console.log(map); // Output: Map(2) { 'name' => 'Alice', 'age' => 30 }

console.log(map.get("name")); // Output: 'Alice'
console.log(map.get("age")); // Output: 30

// Returns a boolean indicating whether an element with the specified key exists.
console.log(map.has("name")); // Output: true
console.log(map.has("gender")); // Output: false

// Removes the element with the specified key.
map.delete("age");
console.log(map.has("age")); // Output: false

// Removes all elements from the map.
map.clear();
console.log(map.size); // Output: 0

// Returns the number of elements in the map.
map.set("country", "USA");
console.log(map.size); // Output: 1

// keys() method Returns a new iterator object that contains the keys for each element in the map.
map.set("city", "New York");
for (const key of map.keys()) {
  console.log(key); // Output: 'country', 'city'
}

// values() Returns a new iterator object that contains the values for each element in the map.
for (const value of map.values()) {
  console.log(value); // Output: 'USA', 'New York'
}

// Returns a new iterator object that contains an array of [key, value] for each element in the map.
for (const entry of map.entries()) {
  console.log(entry); // Output: ['country', 'USA'], ['city', 'New York']
}

// forEach(callback) Executes a provided function once for each key-value pair
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output: 'country: USA', 'city: New York'

// Set in JavaScript
const set = new Set<number>();
set.add(1);
set.add(2);
set.add(2); // Duplicate values are ignored
console.log(set); // Output: Set(2) { 1, 2 }

console.log(set.has(1)); // Output: true
console.log(set.has(3)); // Output: false

set.delete(2);
console.log(set.has(2)); // Output: false

set.clear();
console.log(set.size); // Output: 0
set.add(3);
set.add(4);
console.log(set.size); // Output: 2

for (const value of set.values()) {
  console.log(value); // Output: 3, 4
}

for (const key of set.keys()) {
  console.log(key); // Output: 3, 4
}

// Returns a new iterator object that contains an array of [value, value] for each element in the set.
for (const entry of set.entries()) {
  console.log(entry); // Output: [3, 3], [4, 4]
}

set.forEach((value) => {
  console.log(value);
});
// Output: 3, 4

// parseInt(string, radix);
// parseInt() is used to convert a string into an integer
// Handling Different Bases: Useful for converting numbers from different numeral systems, such as binary, octal, or hexadecimal, to decimal.
// It can return NaN if the string does not start with a number.
console.log(parseInt("42")); // Output: 42
console.log(parseInt("101", 2)); // Output: 5 (binary to decimal)
console.log(parseInt("2F", 16)); // Output: 47 (hexadecimal to decimal)

const result1 = parseInt("abc123"); // Non-numeric start, returns NaN
console.log(result1); // Output: NaN
const result3 = parseInt("123abc"); // Starts with a number
console.log(result3); // Output: 123
const result2 = parseInt(""); // Empty string
console.log(result2); // Output: NaN

// First-Class Function Example
const add = (a: number, b: number): number => {
  return a + b;
};
const FirstClassFunction = (
  operator: (a: number, b: number) => number,
  a: number,
  b: number
): number => {
  return operator(a, b);
};
console.log("First class function", FirstClassFunction(add, 3, 5)); // Output: 8
// Immediately Invoked Function Expression (IIFE)
(function (): void {
  console.log("%c hello I am IIFE", "color: red; background-color: yellow");
})();

// ---Object
interface ObjType {
  name: string;
  add: string;
}
const obj2: ObjType = { name: "Vishal", add: "UP" };
console.log(obj2);
function details(name: string, add: string): ObjType {
  return { name, add };
}
const personDetails: ObjType = details("vishal", "UP");
console.log(personDetails);

interface ObjectType {
  id: number;
  product_name: string;
  category: string;
  price: number;
  brand_name: string;
  quantity: number;
  arrival: boolean;
}
const TestObject: ObjectType = {
  id: 1,
  product_name: "Laptop",
  category: "Electronics",
  brand_name: "Dell",
  price: 999.99,
  quantity: 10,
  arrival: true,
};

const keys = Object.keys(TestObject);
console.log(keys); // Output: ['id', 'product_name', 'category', 'brand_name', 'price', 'quantity', 'arrival']

const values = Object.values(TestObject);
console.log(values); // Output: [1, 'Laptop', 'Electronics', 'Dell', 999.99, 10, true]

// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const entries = Object.entries(TestObject);
console.log(entries);
// Output: [['id', 1], ['product_name', 'Laptop'], ['category', 'Electronics'], ['brand_name', 'Dell'], ['price', 999.99], ['quantity', 10], ['arrival', true]]

const additionalInfo = { warranty: "1 year", color: "Black" };
const updatedObject = Object.assign({}, TestObject, additionalInfo);
console.log(updatedObject);
// Output: { id: 1, product_name: 'Laptop', category: 'Electronics', brand_name: 'Dell', price: 999.99, quantity: 10, arrival: true, warranty: '1 year', color: 'Black' }

//Freezes an object, preventing new properties from being added to it and existing properties from being removed or changed
Object.freeze(TestObject);
TestObject.price = 899.99; // This will not change the price
console.log(TestObject.price); // Output: 999.99

// Seals an object, it is same like Object.freeze but here we can change the value of our property.
Object.seal(TestObject);
TestObject.price = 899.99; // This will change the price
// delete TestObject.brand_name; // This will not delete the brand_name property
console.log(TestObject.price); // Output: 899.99

// Returns a boolean indicating whether the object has the specified property
const hasPrice = Object.prototype.hasOwnProperty.call(TestObject, "price");
console.log(hasPrice); // Output: true

// Returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object
const exampleObject = {
  id: 1,
  name: "Laptop",
  price: 999.99,
};
// Adding a non-enumerable property
Object.defineProperty(exampleObject, "category", {
  value: "Electronics",
  enumerable: false,
});
const keys2: string[] = Object.keys(exampleObject);
console.log(keys2); // Output: ['id', 'name', 'price']

const propertyNames = Object.getOwnPropertyNames(exampleObject);
console.log(propertyNames); // Output: ['id', 'name', 'price', 'category']

const entries1: (string | number)[][] = [
  ["name", "Alice"],
  ["age", 30],
  ["city", "New York"],
];
const result23: {
  [k: string]: any;
} = Object.fromEntries(entries1);
console.log("Result2", result23);
// Output: { name: 'Alice', age: 30, city: 'New York' }

function groupBy(array: any[], property: string): { [key: string]: any[] } {
  return array.reduce((acc: { [key: string]: any[] }, obj: any) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
const students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 22, grade: "B" },
  { name: "Charlie", age: 28, grade: "A" },
  { name: "David", age: 23, grade: "B" },
  { name: "Eve", age: 20, grade: "A" },
];
const groupedByGrade = groupBy(students, "grade");
console.log("GroupByGrade", groupedByGrade);
// output:
// {
//   A: [
//     { name: "Alice", age: 20, grade: "A" },
//     { name: "Charlie", age: 28, grade: "A" },
//     { name: "Eve", age: 20, grade: "A" }
//   ],
//   B: [
//     { name: "Bob", age: 22, grade: "B" },
//     { name: "David", age: 23, grade: "B" }
//   ]
// }

// ---Array
// new Array Concept
//    new Array(element0, element1, ..., elementN)
//   new Array(arrayLength)
let arr0 = new Array(1, 2, 3, 4);
console.log(arr0); // Output: [1, 2, 3, 4]

//   When a single numeric argument is passed, it specifies the length of the array
let arr01 = new Array(3);
console.log(arr01); // Output: [ <3 empty items> ]

// arr.fill(value, start, end)
// Example 1: Fill entire array with a static value
let arr1 = [1, 2, 3, 4, 5];
arr1.fill(0); // Fills the entire array with 0
console.log(arr1); // Output: [0, 0, 0, 0, 0]

// Example 2: Fill part of the array with a static value
let arr2 = [1, 2, 3, 4, 5];
arr2.fill(9, 1, 4); // Fill with 9 from index 1 to 4 (exclusive)
console.log(arr2); // Output: [1, 9, 9, 9, 5]

// Example 3: Fill with different start and end indices
let arr3 = [1, 2, 3, 4, 5];
arr3.fill(0, 2); // Fill with 0 from index 2 to the end
console.log(arr3); // Output: [1, 2, 0, 0, 0]

// Example 4: Fill with an object reference
let arr4 = new Array(3);
let obj = { key: "value" };
arr4.fill(obj);
console.log(arr4); // Output: [{key: "value"}, {key: "value"}, {key: "value"}]

// Modifying the object affects all elements
obj.key = "newValue";
console.log(arr4); // Output: [{key: "newValue"}, {key: "newValue"}, {key: "newValue"}]

//   Array.from(arrayLike, mapFunction, thisArg);
//   Convert Strings to Arrays
let str = "hello";
let arr = Array.from(str);
console.log(arr); // Output: ['h', 'e', 'l', 'l', 'o']

let mySet = new Set(["a", "b", "c"]);
let arr6 = Array.from(mySet);
console.log(arr); // Output: ['a', 'b', 'c']

let arr7 = Array.from([1, 2, 3], (x) => x * 2);
console.log(arr); // Output: [2, 4, 6]

function createArray() {
  return Array.from(arguments);
}
console.log(createArray(1, 2, 3)); // Output: [1, 2, 3]

// Array.of(element0, element1, ..., elementN);
const array1 = Array.of(1, 2, 3);
console.log(array1); // Output: [1, 2, 3]

const array23 = Array.of(7);
console.log(array23); // Output: [7]
const array4 = new Array(7); // but here return the empty array with length 7
console.log(array4); // Output: [ , , , , , , ] (an array with 7 empty slots)

const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];
// Define an object to hold additional data
const context = {
  maxLength: 5,
};
// Filter function using all arguments
const filteredWords = words.filter(function (element, index, array) {
  console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
  // Use 'this' to access the context object
  return element.length <= this.maxLength && index % 2 === 0;
}, context);

console.log("Filtered words:", filteredWords);
// Output: Filtered words: ['apple', 'date', 'fig']

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 40 },
];
// Find the first person older than the age specified in this.minAge
const foundPerson = people.find(
  function (person) {
    return person.age > this.minAge;
  },
  { minAge: 30 }
);
console.log(foundPerson); // Output: { name: "Alice", age: 35 }

// --split method
const text = "apple,banana,cherry";
const fruits = text.split(",");
console.log(fruits); // Output: ['apple', 'banana', 'cherry']
const limitedFruits = text.split(",", 2);
console.log(limitedFruits); // Output: ['apple', 'banana']
const text2 = "one two  three   four";
const words2 = text2.split(/\s+/);
console.log(words2); // Output: ['one', 'two', 'three', 'four']
const text3 = "hello";
const chars = text3.split("");
console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']

// --Promises
function exceptionHandling(arg: any) {
  try {
    if (typeof arg == "number") {
      console.log("every thing is correct");
    } else {
      throw new EvalError("somthing wrong");
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("experiment done");
  }
}
exceptionHandling(23);

async function FetchData(url: string): Promise<void> {
  const { data } = await axios.get(url);
  if (!data) {
    throw new Error("Url is not working properly");
  }
  return data;
}

async function fetchDataFromMultipleUrls(urls: string[]): Promise<any[]> {
  const promises = urls.map((url) => FetchData(url));
  return Promise.all(promises);
}
async function fetchDataFromMultipleUrls1(urls: string[]): Promise<any[]> {
  const promises = urls.map((url) => FetchData(url));
  return Promise.allSettled(promises);
}
async function fetchDataFromMultipleUrls2(urls: string[]): Promise<any[]> {
  const promises = urls.map((url) => FetchData(url));
  return Promise.race(promises.map((p) => p.catch((e) => e)));
}

// --Spread operator or Destructing
const arr12: (number | (number | { name: string })[])[] = [
  1,
  2,
  3,
  4,
  [5, 6, { name: "vishal" }],
];
const obje = {
  name: "vishal",
  add1: "up",
  hobies: { cricket: true, football: false },
};
const result_ = { ...obje, ...arr12 };
console.log("hello this is result", result_);

const [a, b, c, d, [e, f, { name: g }]] = arr12 as [
  number,
  number,
  number,
  number,
  [number, number, { name: string }]
];
console.log(g, a, b, c, d, e, f);
const {
  name,
  add1,
  hobies,
  hobies: { cricket, football },
} = obje;
console.log(name, add1, cricket, football, hobies);

//Shallow Copy of Objects or array
const testobj = {
  name: "vishal",
  add: "up",
};
const shallowobj = { ...testobj };

console.log(testobj === shallowobj); // false
console.log(testobj.name === shallowobj.name); // true
shallowobj.name = "abc";
console.log(testobj.name); // "vishal"
console.log(shallowobj.name); // "abc"

//Shallow Copy with Nested Objects , In the nested Object it will take the referece of original Object
const testobj2 = {
  name: "vishal",
  hobbies: { isActive: true },
};
const shallowobj2 = { ...testobj2 };
shallowobj2.hobbies.isActive = false;

console.log(testobj2.hobbies.isActive); // false
console.log(shallowobj2.hobbies.isActive); // false
shallowobj2.name = "krishnam";
console.log(testobj2.name); // "vishal"
console.log(shallowobj2.name); // "krishnam"
console.log(testobj2.hobbies.isActive == shallowobj2.hobbies.isActive); // true

//Shallow Copy of Arrays
const originalComplexArray: [number, number[], number[]] = [1, [2, 3], [4, 5]];
const shallowCopyComplexArray: [number, number[], number[]] = [
  ...originalComplexArray,
];

shallowCopyComplexArray[1][0] = 6;

console.log(originalComplexArray); // [1, [6, 3], [4, 5]]
console.log(shallowCopyComplexArray); // [1, [6, 3], [4, 5]]

console.log("..........................");

//Deep Copy Attempt with Spread Operator
const testingobj = {
  name: "vishal",
  add: {
    presentAdd: "bangalore",
    permanentAdd: "UP",
    hobbies: {
      cricket: true,
      fooltball: false,
      study: "no",
      salary: {
        amountDisclose: "not disclose",
      },
    },
  },
};

const speadObj = {
  ...testingobj,
  add: {
    ...testingobj.add,
    hobbies: {
      ...testingobj.add.hobbies,
      salary: {
        ...testingobj.add.hobbies.salary,
        salary: { ...testingobj.add.hobbies.salary },
      },
    },
  },
};

speadObj.add.hobbies.salary.amountDisclose = "null";

console.log(speadObj.add.hobbies.salary.amountDisclose); // "null"

//Prototype Inheritance
const protoStu = {
  name: "vishal",
  add: "up",
  isActive: true,
};

const protoTec = {
  ispartOf: true,
};

protoTec.__proto__ = protoStu;

console.log(protoTec.name, "hello i am tec"); // "vishal hello i am tec"
console.log(protoTec.add, "hello i am tec"); // "up hello i am tec"
console.log(protoTec.isActive, "hello i am tec"); // "true hello i am tec"
console.log(protoStu.name, "hello i am stu"); // "vishal hello i am stu"
console.log(protoStu.ispartOF, "hello i am stu"); // "undefined hello i am stu"
console.log(protoTec.__proto__.__proto__.__proto__); // null

console.log("..........................");

// Array Prototype Extension
const arrayTest = [];
arrayTest.__proto__.isLenghtcount = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
  }
  return count;
};

console.log(arrayTest.isLenghtcount([1, 2, 3])); // 3

console.log("..........................");

//Overriding `toString`
protoStu.__proto__.toString = function () {
  return "this is a custom message";
};

console.log({}.toString()); // "this is a custom message"

console.log("..........................");

// Closure
function closure() {
  const variable = 25;
  return function (arg) {
    return variable + arg;
  };
}

console.log(closure()(123)); // 148
const data = closure();
console.log(data(123)); // 148

console.log("..........................");

// Nested Functions and Closure
function Outest() {
  const c = 30;
  function outer(b) {
    function inner() {
      console.log(A, b, c);
    }
    const A = 10;
    return inner;
  }
  return outer;
}

Outest()(20)(); // 10 20 30

// Example of an async function with proper handling of asynchronous operations
async function exampleAsyncFunction() {
  // Helper function to simulate a delay
  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // Original comment: const data = await setTimeout(() => { console.log("hello"); }, 3000);
  await delay(3000);
  console.log("hello");

  // Original comment: const data3 = await console.log("end1");
  console.log("end1");

  // Original comment: const data2 = await setTimeout(() => { console.log("data2"); }, 3000);
  await delay(3000);
  console.log("data2");

  console.log("end");
}

exampleAsyncFunction();

// Find the sum of any number in given in presented array
const array = [
  1,
  2,
  3,
  [4, 5, 6, [7, 8, 9, [10, { number: 13 }], [11]]],
  12,
  { number: 12 },
];

function arraySum(arr: any[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object" && !Array.isArray(arr[i])) {
      sum += sumObject(arr[i]);
    } else if (Array.isArray(arr[i])) {
      sum += arraySum(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

function sumObject(args: any): number {
  let sum = 0;
  for (const x in args) {
    if (typeof args[x] === "number") {
      sum += args[x];
    } else if (Array.isArray(args[x])) {
      sum += arraySum(args[x]);
    } else if (typeof args[x] === "object") {
      sum += sumObject(args[x]);
    }
  }
  return sum;
}

console.log(arraySum(array)); // Output: 93

// Deep copy function
function deep(arg: any): any {
  if (Array.isArray(arg)) {
    const globalArr = [];
    for (let i = 0; i < arg.length; i++) {
      globalArr.push(deep(arg[i]));
    }
    return globalArr;
  } else if (typeof arg == "object" && arg != null) {
    const obj: any = {};
    for (const x in arg) {
      obj[x] = deep(arg[x]);
    }
    return obj;
  } else {
    return arg;
  }
}

const array2 = [1, 2, 3, 6, 66, 5, 8, 9, 10];
const newArray = deep(array2);
console.log("deep Copy", newArray);

// Bubble Sort
let arr = [3, 4, 2, 5, 1, 7];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

//selection Sort
let arr2 = [3, 4, 2, 5, 1, 7];
for (let i = 0; i < arr2.length; i++) {
  let index = i;
  for (let j = i + 1; j < arr2.length - 1; j++) {
    if (arr2[index] > arr2[j]) {
      index = j;
    }
  }
  if (i != index) {
    let swap = arr2[i];
    arr2[i] = arr2[index];
    arr2[index] = swap;
  }
}
console.log(arr2);

//Insertion sort
let arr3 = [3, 4, 2, 5, 1, 7];
for (let i = 1; i < arr3.length; i++) {
  let key = arr3[i];
  let j = i - 1;
  while (j >= 0 && arr3[j] > key) {
    arr3[j + 1] = arr3[j];
    j = j - 1;
  }
  arr3[j + 1] = key;
}
console.log(arr3);

//linear searching    -- comparing one to all the elements of an array
let arr = [6, 5, 4, 7, 5, 1, 4];
let findNumber = Number(prompt("Enter the Number :"));
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (findNumber === arr[i]) {
    count++;
    break;
  }
}
count > 0
  ? console.log(`${findNumber} is there in that array`)
  : console.log(`${findNumber} is not there in that array`);

//Binary searching    -- first we have to make the element in sorting order
let arr = [1, 5, 6, 8, 9, 20, 25];
let key = Number(prompt("Enter the key :"));
let startIndex = 0;
let endIndex = arr.length - 1;

while (startIndex <= endIndex) {
  let mid = ~~((startIndex + endIndex) / 2);
  if (key === arr[mid]) {
    console.log(`In Index ${mid} this ${key} is found `);
  } else if (key > arr[mid]) {
    startIndex = mid + 1;
  } else if (key < arr[mid]) {
    endIndex = mid - 1;
  }
}
if (startIndex > endIndex) {
  console.log("Element is not found");
}
