# JavaScript Basics & Data Types

## `"use strict"`

### Theory
`"use strict"` enables **Strict Mode** in JavaScript. It helps write cleaner and safer code by preventing common mistakes.

### Syntax

```javascript
"use strict";
```

### Example

```javascript
"use strict";

x = 10; // Error
```

> **Note:** Always write `"use strict"` at the top of your JavaScript file.

---

# `alert()`

### Theory
`alert()` displays a popup message in the **browser**.

It **does not work in Node.js** because Node.js runs outside the browser.

### Example (Browser)

```javascript
alert("Hello");
```

### Example (Node.js)

```javascript
alert("Hello");
```

Output

```text
ReferenceError: alert is not defined
```

---

# `console.log()`

### Theory
`console.log()` prints output to the console. It is mainly used for debugging and testing code.

### Example

```javascript
console.log(3 + 3);
```

Output

```text
6
```

> **Good Practice:** Write clean and readable code.

❌ Bad

```javascript
console.log(3+3)
```

✅ Good

```javascript
console.log(3 + 3);
```

---

# Variables

### Example

```javascript
let name = "Rahul";
let age = 18;
let isLoggedIn = false;
```

- `name` → String
- `age` → Number
- `isLoggedIn` → Boolean

---

# JavaScript Data Types

JavaScript has **8 data types**.

## 1. Number

### Theory
Stores integer and decimal numbers.

### Example

```javascript
let age = 18;
let price = 99.99;
```

---

## 2. BigInt

### Theory
`BigInt` is used to store **very large integers** that are bigger than the Number limit.

A BigInt value ends with **`n`**.

### Example

```javascript
let bigNumber = 123456789012345678901234567890n;
```

---

## 3. String

### Theory
A String stores text. It is written inside single (`' '`) or double (`" "`) quotes.

### Example

```javascript
let name = "Rahul";
let city = 'Bhubaneswar';
```

---

## 4. Boolean

### Theory
Boolean stores only **two values**:

- `true`
- `false`

### Example

```javascript
let isLoggedIn = true;
```

---

## 5. Null

### Theory
`null` means **an empty or intentionally missing value**.

### Example

```javascript
let temperature = null;
```

---

## 6. Undefined

### Theory
`undefined` means a variable has been declared but **no value has been assigned**.

### Example

```javascript
let state;

console.log(state);
```

Output

```text
undefined
```

---

## 7. Symbol

### Theory
A `Symbol` is a **unique and immutable value**. It is mainly used to create unique object properties.

### Example

```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);
```

Output

```text
false
```

---

## 8. Object

### Theory
An Object stores data in **key-value pairs**.

### Example

```javascript
let student = {
    name: "Rahul",
    age: 18
};
```

---

# `typeof` Operator

### Theory
`typeof` is used to check the data type of a value or variable.

### Syntax

```javascript
typeof value
```

### Example

```javascript
console.log(typeof "Rahul");
```

Output

```text
string
```

---

# Special Cases of `typeof`

### Example

```javascript
console.log(typeof null);
```

Output

```text
object
```

> **Note:** This is a well-known JavaScript bug kept for backward compatibility.

---

### Example

```javascript
console.log(typeof undefined);
```

Output

```text
undefined
```

---

# Quick Revision

| Data Type | Description | Example |
|-----------|-------------|---------|
| Number | Stores numbers | `18` |
| BigInt | Stores very large integers | `1234567890n` |
| String | Stores text | `"Rahul"` |
| Boolean | `true` or `false` | `true` |
| Null | Empty value | `null` |
| Undefined | No value assigned | `let x;` |
| Symbol | Unique value | `Symbol("id")` |
| Object | Key-value pairs | `{name:"Rahul"}` |

---

# Important Points

- Use `"use strict"` for safer JavaScript code.
- `alert()` works only in browsers.
- `console.log()` prints output in the console.
- `BigInt` values end with **`n`**.
- `null` means an empty value.
- `undefined` means no value has been assigned.
- `typeof null` returns `"object"` (JavaScript bug).
- `typeof undefined` returns `"undefined"`.

---

# Summary

- JavaScript has **8 data types**.
- Use `typeof` to check a variable's data type.
- `Number` stores numbers, `String` stores text, `Boolean` stores `true`/`false`.
- `BigInt` stores very large integers.
- `Object` stores data as key-value pairs.
- `null` and `undefined` are different:
  - `null` → intentionally empty.
  - `undefined` → value not assigned.
