# 🟨 JavaScript — `this` Keyword & Arrow Functions

> **Topic:** `this` keyword · Arrow Functions · Object Methods
> **Written by:** Biswajit Biswal
> **Series:** JavaScript Learning Journey

---

## 📌 Table of Contents

| # | Topic |
|---|-------|
| 1 | [this in an Object Method](#1-this-in-an-object-method) |
| 2 | [this in Global Scope](#2-this-in-global-scope) |
| 3 | [this in a Regular Function](#3-this-in-a-regular-function) |
| 4 | [Arrow Functions](#4-arrow-functions) |
| 5 | [this in Arrow Functions](#5-this-in-arrow-functions) |
| 6 | [Arrow Function Shortforms](#6-arrow-function-shortforms) |
| 7 | [Returning Object from Arrow Function](#7-returning-object-from-arrow-function) |
| 8 | [Arrow Functions with forEach](#8-arrow-functions-with-foreach) |
| ⭐ | [Quick Revision](#-quick-revision) |

---

## 1. `this` in an Object Method

> `this` inside an object method refers to **that object itself**.

```js
const user = {
    userName: "Biswajit",
    price: 100,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
```

### Output:
```
Biswajit, welcome to website

{
  userName: "Biswajit",
  price: 100,
  welcomeMessage: [Function: welcomeMessage]
}
```

### What is `this` here?

```
this  →  the object that is calling the method

user.welcomeMessage()
↑
user is calling it
→ so this = user object
```

### Visual:

```
const user = {
    userName: "Biswajit",   ←─────────────────┐
    price: 100,                                │
                                               │
    welcomeMessage: function() {               │
        console.log(this.userName);  ──────────┘
        //  this = user object
        //  this.userName = "Biswajit"
    }
}
```

---

### Changing the value and calling again:

```js
user.welcomeMessage();       // Biswajit, welcome to website
user.userName = "sam";       // change the name
user.welcomeMessage();       // sam, welcome to website
```

> 💡 `this` always reflects the **current** value — not the old one.

---

## 2. `this` in Global Scope

```js
console.log(this);
```

### In Browser:
```
Window { ... }   ← the global window object
```

### In Node.js:
```
{}   ← empty object
```

> 💡 `this` at the top level = the **global object** (browser → `window`, Node → `{}`)

---

## 3. `this` in a Regular Function

```js
function chai() {
    let user = "rahul"
    console.log(this.user);
}

chai();
```

### Output:
```
undefined
```

### Why undefined?

```
this.user  →  looking for "user" on the global object
              but "user" is a local variable inside the function
              it's NOT on the global object
              so → undefined
```

### Rule:

```
let/const variables  →  NOT attached to this
var variables        →  attached to global this (avoid!)
```

---

## 4. Arrow Functions

> Arrow functions are a **shorter way** to write functions — introduced in ES6.

### Regular function vs Arrow function:

```js
// Regular function
function addTwo(num) {
    return num + 2;
}

// Arrow function — same thing, shorter ✅
const addTwo = (num) => {
    return num + 2;
}
```

### Syntax:

```
const functionName = (parameters) => {
    // code
}
```

---

## 5. `this` in Arrow Functions

> Arrow functions do **NOT** have their own `this`.
> They borrow `this` from the **surrounding scope**.

```js
const chai = () => {
    let userName = "Biswajit"
    console.log(this.userName);
}

chai();
```

### Output:
```
undefined
```

### Why?

```
Arrow function has NO own this.
It looks OUTSIDE to find this.
Outside is the global scope.
Global this.userName = undefined.
```

### Visual comparison:

```
Regular function:
function welcomeMessage() {
    this  →  depends on WHO calls it
}
user.welcomeMessage()  →  this = user ✅


Arrow function:
const chai = () => {
    this  →  always from OUTSIDE (where it was defined)
}
chai()  →  this = global (not the object) ❌
```

### Rule:

```
✅ Use regular function   →  when you need this to refer to the object
✅ Use arrow function     →  when you DON'T need this
                             (callbacks, array methods, etc.)
```

---

## 6. Arrow Function Shortforms

Arrow functions have **4 levels of shorthand**. All do the same thing:

```js
// Level 1 — Full arrow function
const addTwo = (num) => {
    return num + 2;
}

// Level 2 — Remove { } and return (one line)
const addTwo = (num) => num + 2;

// Level 3 — With ( ) around expression
const addTwo = (num) => (num + 2);

// All three give same result:
console.log(addTwo(3)); // 5
```

### Visual:

```
(num) => { return num + 2 }   ← full form
(num) => num + 2               ← no braces, no return
(num) => (num + 2)             ← same, with parens (optional)
```

### When to use which?

```
Single line result    →  (num) => num + 2        ✅ clean
Multiple lines        →  use { } with return     ✅ readable
Returning an object   →  use ( { } )             ← special case (see below)
```

---

## 7. Returning Object from Arrow Function

> ⚠️ Special case — returning an object `{}` from an arrow function needs `( )`.

```js
// ❌ This looks like a code block, NOT an object
const addTwo = (num) => { user: "biswajit" }
// → returns undefined

// ✅ Wrap object in ( ) to tell JS it's an object
const addTwo = (num) => ({ user: "biswajit" })

console.log(addTwo(3));
// Output: { user: 'biswajit' }
```

### Why the `( )` ?

```
{ }  →  JS thinks this is a CODE BLOCK  ❌
({ }) →  JS knows this is an OBJECT     ✅

The outer ( ) wrapping is just to avoid confusion.
```

### Visual:

```
(num) => { user: "biswajit" }
           ↑
      JS reads this as a block of code — not an object!
      returns undefined ❌


(num) => ({ user: "biswajit" })
          ↑                  ↑
      ( wraps it as expression — now JS knows it's an object )
      returns { user: "biswajit" } ✅
```

---

## 8. Arrow Functions with `forEach`

> Arrow functions are most commonly used in **array methods** like `forEach`.

```js
const myArr = [1, 2, 3, 4, 5, 6];

// With regular function
myArr.forEach(function(item) {
    console.log(item);
});

// With arrow function — cleaner ✅
myArr.forEach((item) => {
    console.log(item);
});
```

### Both do the same thing — arrow is just shorter.

---

## 9. Complete Code — Explained

```js
// ─── 1. Object with method using this ───
const user = {
    userName: "Biswajit",
    price: 100,
    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website`);
        // this = user object → this.userName = "Biswajit"
        console.log(this); // prints full user object
    }
}

user.welcomeMessage();       // Biswajit, welcome to website
user.userName = "sam";       // update name
user.welcomeMessage();       // sam, welcome to website


// ─── 2. this in global scope ───
console.log(this); // Window (browser) or {} (Node)


// ─── 3. this in regular function ───
function chai() {
    let user = "rahul";
    console.log(this.user); // undefined — local var, not on global
}
chai();


// ─── 4. Arrow function — this from outer scope ───
const chai = () => {
    let userName = "Biswajit";
    console.log(this.userName); // undefined — arrow has no own this
}
chai();


// ─── 5. Arrow function shortforms ───
const addTwo = (num) => num + 2;          // implicit return
const addTwo = (num) => (num + 2);        // same with parens
const addTwo = (num) => ({ user: "biswajit" }); // return object

console.log(addTwo(3)); // { user: 'biswajit' }


// ─── 6. Arrow function in forEach ───
const myArr = [1, 2, 3, 4, 5, 6];

myArr.forEach(function() {}); // regular function syntax
myArr.forEach(() => {});      // arrow function syntax ✅
```

---

## ⭐ Quick Revision

```
this
│
├── In object method
│     this = the object itself ✅
│     user.welcomeMessage() → this = user
│
├── In global scope
│     this = window (browser) or {} (Node)
│
├── In regular function
│     this = global object
│     this.localVar = undefined
│
└── In arrow function
      this = BORROWED from outer/surrounding scope
      arrow has NO own this ❌


Arrow Function
│
├── Full form
│     (num) => { return num + 2 }
│
├── Short form (one line)
│     (num) => num + 2
│
├── With parens
│     (num) => (num + 2)
│
└── Return object (special!)
      (num) => ({ key: "value" })
      ↑ must wrap object in ( ) ↑
```

---

## 💡 Key Rules to Remember

```
✅  this in object method    →  refers to the object
✅  this in arrow function   →  borrowed from outer scope (NOT the object)
✅  Arrow functions are shorter but have no own this
✅  (num) => num+2           →  no return keyword needed for single line
✅  (num) => ({ })           →  ( ) needed when returning object
✅  Arrow functions are great for forEach, map, filter, etc.
❌  Don't use arrow function as object method if you need this
```

---

## 🔁 Regular Function vs Arrow Function

| Feature | Regular Function | Arrow Function |
|---|---|---|
| Syntax | `function fn() {}` | `const fn = () => {}` |
| Has own `this` | ✅ Yes | ❌ No (borrows from outside) |
| Used as method | ✅ Great | ❌ Avoid |
| Used in callbacks | ✅ Works | ✅ Cleaner & preferred |
| `return` keyword | Always needed | Optional for single line |
| Return object | `return { }` | `=> ({ })` |

---

*Notes by Biswajit Biswal · JavaScript Learning Journey · 2026*
