# 🟨 JavaScript Learning Journey

> A structured, day-by-day record of everything I'm learning about JavaScript —
> from the absolute basics to advanced concepts. Built in public. Zero gatekeeping.

<br/>

<!-- 🔽 REPLACE WITH YOUR BANNER IMAGE 🔽 -->
![Banner](https://placehold.co/1200x300/1a1a2e/f7df1e?text=JavaScript+Learning+Journey+🟨)

<br/>

[![JavaScript](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Active%20Learning-34d399?style=flat-square)]()
[![Topics](https://img.shields.io/badge/Topics-50%2B-a78bfa?style=flat-square)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-38bdf8?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-ff6b6b?style=flat-square)]()

---

## 📖 What Is This Repo?

This is my **personal JavaScript learning repository** — a place where I document every concept I study, every code snippet I write, and every "aha moment" I have while learning JS.

If you're also learning JavaScript, feel free to use this as a reference, study alongside me, or suggest improvements.

> **Goal:** Go from zero to job-ready JavaScript developer — one concept at a time.

---

## 🗂️ Folder Structure

```
javascript-learning/
│
├── 01-basics/
│   ├── variables.js          # var, let, const
│   ├── datatypes.js          # string, number, boolean, null, undefined
│   ├── operators.js          # arithmetic, comparison, logical
│   └── type-conversion.js    # implicit & explicit conversion
│
├── 02-control-flow/
│   ├── if-else.js            # conditionals
│   ├── switch.js             # switch statements
│   ├── loops.js              # for, while, do-while
│   └── break-continue.js     # loop control
│
├── 03-functions/
│   ├── function-basics.js    # declarations, expressions
│   ├── arrow-functions.js    # ES6 arrow syntax
│   ├── closures.js           # closure concept
│   ├── callbacks.js          # callback pattern
│   └── higher-order.js       # map, filter, reduce
│
├── 04-arrays/
│   ├── array-basics.js       # create, access, modify
│   ├── array-methods.js      # push, pop, slice, splice…
│   ├── array-iteration.js    # forEach, map, filter, find
│   └── array-destructuring.js
│
├── 05-objects/
│   ├── object-basics.js      # create, access, modify
│   ├── methods.js            # object methods
│   ├── this-keyword.js       # 'this' explained
│   ├── object-destructuring.js
│   └── spread-rest.js        # ... operator
│
├── 06-dom/
│   ├── selecting-elements.js # getElementById, querySelector
│   ├── modifying-dom.js      # innerHTML, textContent, classList
│   ├── events.js             # addEventListener, event types
│   └── event-delegation.js   # efficient event handling
│
├── 07-async/
│   ├── callbacks.js          # callback hell problem
│   ├── promises.js           # .then(), .catch(), .finally()
│   ├── async-await.js        # cleaner async code
│   ├── fetch-api.js          # HTTP requests
│   └── error-handling.js     # try/catch with async
│
├── 08-es6-plus/
│   ├── template-literals.js  # `Hello ${name}`
│   ├── default-params.js     # function defaults
│   ├── modules.js            # import / export
│   ├── classes.js            # OOP in JS
│   └── optional-chaining.js  # ?. operator
│
├── 09-advanced/
│   ├── prototype.js          # prototype chain
│   ├── scope-hoisting.js     # var vs let scoping
│   ├── event-loop.js         # how JS runs async
│   ├── generators.js         # function* generators
│   └── proxy-reflect.js      # meta-programming
│
├── 10-projects/
│   ├── todo-app/             # DOM manipulation project
│   ├── weather-app/          # Fetch API project
│   ├── quiz-app/             # Logic + DOM project
│   └── calculator/           # Events + Math project
│
├── notes/
│   ├── concepts.md           # written notes & summaries
│   ├── cheatsheet.md         # quick reference
│   └── resources.md          # useful links & courses
│
└── README.md
```

---

## 📚 Topics Covered

### ✅ Completed

| # | Topic | Key Concepts | File |
|---|-------|-------------|------|
| 1 | Variables | `var`, `let`, `const`, scope | `01-basics/variables.js` |
| 2 | Data Types | String, Number, Boolean, Null, Undefined, Symbol | `01-basics/datatypes.js` |
| 3 | Operators | Arithmetic, Comparison, Logical, Ternary | `01-basics/operators.js` |
| 4 | Type Conversion | Implicit coercion, explicit casting | `01-basics/type-conversion.js` |
| 5 | Control Flow | if/else, switch, loops | `02-control-flow/` |
| 6 | Functions | Declarations, Expressions, Arrow Functions | `03-functions/` |
| 7 | Closures | Lexical scope, closure patterns | `03-functions/closures.js` |
| 8 | Arrays | Methods, iteration, destructuring | `04-arrays/` |
| 9 | Objects | Creation, methods, `this`, destructuring | `05-objects/` |
| 10 | DOM Manipulation | Select, modify, create elements | `06-dom/` |

### 🔄 In Progress

| # | Topic | Status |
|---|-------|--------|
| 11 | Events & Event Delegation | 🔄 50% |
| 12 | Promises | 🔄 Started |
| 13 | Async / Await | 🔜 Next |

### 📋 Planned

- [ ] Fetch API & REST calls
- [ ] ES6+ features (modules, classes, generators)
- [ ] Prototype & prototype chain
- [ ] Event loop & call stack deep dive
- [ ] LocalStorage & SessionStorage
- [ ] Regular Expressions (RegEx)
- [ ] Error handling patterns
- [ ] Design patterns (Module, Observer, Factory)
- [ ] Introduction to TypeScript
- [ ] Testing with Jest

---

## 💡 Key Concepts I Found Tricky (& How I Understood Them)

### 🔁 Closures
```js
// A function remembers the variables from where it was created
function counter() {
  let count = 0;          // count lives in counter's scope
  return function () {
    count++;              // inner function "closes over" count
    console.log(count);
  };
}
const inc = counter();
inc(); // 1
inc(); // 2 — count is remembered!
```

### ⏳ Promises vs Async/Await
```js
// Old way — Promise chains
fetch('/api/data')
  .then(res  => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// New way — Async/Await (same thing, cleaner)
async function getData() {
  try {
    const res  = await fetch('/api/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

### 🎯 `this` Keyword
```js
const user = {
  name: 'Biswajit',
  greet() {
    console.log(`Hi, I'm ${this.name}`); // 'this' = user object
  },
  greetArrow: () => {
    console.log(`Hi, I'm ${this.name}`); // 'this' = window (arrow doesn't bind 'this')
  }
};
user.greet();       // ✅ "Hi, I'm Biswajit"
user.greetArrow();  // ❌ "Hi, I'm undefined"
```

### 📦 Destructuring
```js
// Arrays
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Objects
const { name, age = 20, address: { city } } = person;

// In function parameters
function display({ name, score }) {
  console.log(`${name}: ${score}`);
}
```

---

## 🚀 Mini Projects

| Project | Concepts Used | Status | Demo |
|---------|--------------|--------|------|
| ✅ Calculator | DOM, Events, Math | Complete | [View](./10-projects/calculator/) |
| ✅ To-Do App | CRUD, LocalStorage, DOM | Complete | [View](./10-projects/todo-app/) |
| 🔄 Weather App | Fetch API, Async/Await, JSON | In Progress | — |
| 📋 Quiz App | Arrays, Objects, Timer | Planned | — |
| 📋 Budget Tracker | Classes, LocalStorage | Planned | — |

---

## 📅 Learning Log

| Date | What I Studied | Time Spent |
|------|---------------|------------|
| Apr 1, 2025 | Variables, Data Types, Operators | 2h |
| Apr 2, 2025 | Type Conversion, Coercion | 1.5h |
| Apr 3, 2025 | if/else, switch, for loops | 2h |
| Apr 4, 2025 | Functions, Arrow Functions | 2.5h |
| Apr 5, 2025 | Closures — mind blown 🤯 | 3h |
| Apr 6, 2025 | Arrays & all array methods | 2h |
| Apr 7, 2025 | Objects, `this`, destructuring | 2h |
| Apr 8, 2025 | DOM — selecting & modifying elements | 2.5h |
| Apr 9, 2025 | Events, listeners, bubbling | 2h |
| *Ongoing* | *Adding new entries daily* | — |

---

## 📝 My JavaScript Cheatsheet

### Variables
```js
var   x = 1;  // function-scoped, hoisted (avoid)
let   y = 2;  // block-scoped, reassignable  ✅
const z = 3;  // block-scoped, not reassignable ✅
```

### Data Types
```js
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object"  ← famous JS bug
typeof {}          // "object"
typeof []          // "object"  ← use Array.isArray()
typeof function(){} // "function"
```

### Array Methods Quick Reference
```js
arr.push(x)       // add to end
arr.pop()         // remove from end
arr.unshift(x)    // add to start
arr.shift()       // remove from start
arr.slice(1,3)    // copy portion (non-destructive)
arr.splice(1,2)   // remove/insert (destructive)
arr.map(fn)       // transform each → new array
arr.filter(fn)    // keep matching → new array
arr.reduce(fn,0)  // accumulate → single value
arr.find(fn)      // first match
arr.some(fn)      // true if any match
arr.every(fn)     // true if all match
arr.includes(x)   // boolean check
arr.flat()        // flatten nested arrays
```

### Useful String Methods
```js
str.toUpperCase() / str.toLowerCase()
str.trim()             // remove whitespace
str.split(',')         // string → array
str.includes('hello')  // boolean
str.startsWith('H')    // boolean
str.replace('a','b')   // replace first
str.replaceAll('a','b')// replace all
str.slice(0,5)         // substring
str.padStart(10,'0')   // pad left
```

---

## 🔗 Resources I'm Using

| Resource | Type | Rating |
|----------|------|--------|
| [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Documentation | ⭐⭐⭐⭐⭐ |
| [javascript.info](https://javascript.info) | Free Book / Tutorial | ⭐⭐⭐⭐⭐ |
| [Eloquent JavaScript](https://eloquentjavascript.net) | Free Book | ⭐⭐⭐⭐⭐ |
| [freeCodeCamp JS Course](https://www.freecodecamp.org) | Interactive | ⭐⭐⭐⭐ |
| [Akshay Saini — Namaste JS](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP) | YouTube | ⭐⭐⭐⭐⭐ |
| [The Odin Project](https://www.theodinproject.com) | Full Curriculum | ⭐⭐⭐⭐⭐ |
| [30 Days of JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript) | GitHub Repo | ⭐⭐⭐⭐ |

---

## 🤝 Contributing

Found a mistake? Have a better explanation? Want to add a concept?

1. Fork this repo
2. Create your branch — `git checkout -b fix/closure-explanation`
3. Make your changes
4. Open a Pull Request

All contributions are welcome — even fixing a typo! 🙏

---

## 📄 License

MIT — use anything here freely for your own learning. Just keep learning. 🚀

---

<div align="center">

**Made with ☕ and a lot of `console.log()` debugging**

*If this helped you, drop a ⭐ — it keeps me motivated!*

</div>
