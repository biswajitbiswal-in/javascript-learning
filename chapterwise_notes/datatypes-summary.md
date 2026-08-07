# JavaScript Data Types

A **data type** tells JavaScript what kind of value a variable contains.

JavaScript data types are mainly divided into:

1. **Primitive Data Types**
2. **Non-Primitive / Reference Data Types**

---

# 1. Primitive Data Types

Primitive data types store **single/simple values**.

JavaScript has **7 primitive data types**:

| Data Type | Example         |
| --------- | --------------- |
| Number    | `100`, `187.9`  |
| String    | `"Hello"`       |
| Boolean   | `true`, `false` |
| Undefined | `undefined`     |
| Null      | `null`          |
| Symbol    | `Symbol("123")` |
| BigInt    | `123n`          |

---

## 1. Number

The `Number` type is used for both **integers and decimal numbers**.

```javascript
const score = 100;
const scoreValue = 187.9;

console.log(typeof score);      // "number"
console.log(typeof scoreValue); // "number"
```

Examples:

```javascript
let age = 18;
let price = 99.99;
let temperature = -5;
```

All of these are `number`.

---

## 2. String

A `String` represents **text**.

Strings can be written using:

```javascript
"Hello"
'Hello'
`Hello`
```

Example:

```javascript
let name = "Biswajit";

console.log(typeof name); // "string"
```

---

## 3. Boolean

A `Boolean` can have only two values:

```javascript
true
false
```

Example:

```javascript
const isLoggedIn = false;

console.log(typeof isLoggedIn); // "boolean"
```

Boolean values are commonly used for conditions.

```javascript
let isStudent = true;
```

---

## 4. Undefined

`undefined` means a variable has been declared but **has not been given a value**.

Example:

```javascript
let userEmail;

console.log(userEmail);        // undefined
console.log(typeof userEmail); // "undefined"
```

Here:

```text
userEmail
   ↓
no value assigned
   ↓
undefined
```

---

## 5. Null

`null` represents an **intentional absence of a value**.

Example:

```javascript
const outsideTemp = null;

console.log(outsideTemp);        // null
console.log(typeof outsideTemp); // "object"
```

### ⚠️ Important

Although `null` is a primitive data type:

```javascript
typeof null
```

returns:

```text
"object"
```

This is a historical behavior of JavaScript.

So remember:

```javascript
typeof null; // "object"
```

---

# 6. Symbol

A `Symbol` creates a **unique value**.

Example:

```javascript
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false
```

Even though both symbols contain `"123"`:

```javascript
Symbol("123")
Symbol("123")
```

they are **different and unique symbols**.

### Remember

```javascript
Symbol("123") === Symbol("123")
// false
```

Symbols are commonly used when you need unique property keys.

---

# 7. BigInt

`BigInt` is used to represent **very large integers** that cannot safely be represented by the normal `Number` type.

Example:

```javascript
const bigNumber = 1234567890123456789012345678901234567890n;

console.log(typeof bigNumber); // "bigint"
```

Notice the `n` at the end:

```javascript
1234567890n
          ↑
        BigInt
```

Example:

```javascript
let bigValue = 12345678901234567890n;
```

---

# 2. Non-Primitive / Reference Data Types

Non-primitive data types are also commonly called **reference types**.

The three important types you are learning are:

1. Object
2. Array
3. Function

---

# 1. Object

An object stores data in **key-value pairs**.

Example:

```javascript
let myObj = {
    name: "Biswajit",
    age: 18,
    id: 1232
};
```

Here:

```text
name → "Biswajit"
age  → 18
id   → 1232
```

We can access the values using:

```javascript
console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.id);
```

Output:

```text
Biswajit
18
1232
```

Check the type:

```javascript
console.log(typeof myObj); // "object"
```

---

# 2. Array

An array is used to store a **collection/list of values**.

Example:

```javascript
const heros = [
    "Mr Rajesh",
    "shaktiman",
    "power rangers"
];
```

Array elements have indexes starting from `0`.

```text
Index:   0          1           2
         ↓          ↓           ↓
       Rajesh    shaktiman   power rangers
```

Access an element:

```javascript
console.log(heros[0]); // Mr Rajesh
console.log(heros[1]); // shaktiman
```

### Important

An array is technically an **object** in JavaScript.

Therefore:

```javascript
console.log(typeof heros);
```

Output:

```text
object
```

---

# 3. Function

A function is a **reusable block of code**.

Example:

```javascript
const myFun = function() {
    console.log("Hello world");
};
```

We can call the function:

```javascript
myFun();
```

Output:

```text
Hello world
```

Check its type:

```javascript
console.log(typeof myFun);
```

Output:

```text
function
```

---

# `typeof` Operator

The `typeof` operator is used to find the **type of a value**.

Example:

```javascript
console.log(typeof 100);       // "number"
console.log(typeof "Hello");   // "string"
console.log(typeof true);      // "boolean"
```

---

# Your Complete Example

```javascript
// Primitive Data Types
// 7 types: Number, String, Boolean, Undefined,
// Null, Symbol, BigInt

const score = 100;
const scoreValue = 187.9;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

const bigNumber =
    1234567890123456789012345678901234567890n;


// Non-Primitive / Reference Data Types
// Object, Array, Function

const heros = [
    "Mr Rajesh",
    "shaktiman",
    "power rangers"
];

let myObj = {
    name: "Biswajit",
    age: 18,
    id: 1232
};

const myFun = function() {
    console.log("Hello world");
};


// typeof

console.log(typeof score);       // number
console.log(typeof scoreValue);  // number
console.log(typeof isLoggedIn);  // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail);   // undefined
console.log(typeof id);          // symbol
console.log(typeof bigNumber);   // bigint
console.log(typeof heros);       // object
console.log(typeof myObj);       // object
console.log(typeof myFun);       // function
```

# ⭐ Quick Revision

```text
Primitive:
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

Reference / Non-Primitive:
1. Object
2. Array
3. Function
```

### Important `typeof` facts

```javascript
typeof 100          // "number"
typeof "Hello"      // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"  ← special case
typeof Symbol()     // "symbol"
typeof 100n         // "bigint"
typeof []            // "object"
typeof {}            // "object"
typeof function(){}  // "function"
```
