# 🟨 JavaScript — Functions

> **Topic:** Functions — Definition, Parameters, Return, Default Values
> **Written by:** Biswajit Biswal
> **Series:** JavaScript Learning Journey

---

## 📌 Table of Contents

| # | Topic |
|---|-------|
| 1 | [What is a Function?](#1-what-is-a-function) |
| 2 | [Define & Call a Function](#2-define--call-a-function) |
| 3 | [Parameters vs Arguments](#3-parameters-vs-arguments) |
| 4 | [return Statement](#4-return-statement) |
| 5 | [Unreachable Code](#5-unreachable-code) |
| 6 | [Default Parameters](#6-default-parameters) |
| 7 | [Guard Clause (Early Return)](#7-guard-clause-early-return) |
| ⭐ | [Quick Revision](#-quick-revision) |

---

## 1. What is a Function?

> A **function** is a reusable block of code that runs when you **call** it.

### Real life analogy:
```
A function is like a recipe.
You write it once → use it as many times as you want.
```

### Without a function — repetitive:
```js
console.log("R");
console.log("a");
console.log("h");
console.log("u");
console.log("l");

// If you want to print again → write all 5 lines again ❌
```

### With a function — reusable ✅:
```js
function sayMyName() {
    console.log("R");
    console.log("a");
    console.log("h");
    console.log("u");
    console.log("l");
}

sayMyName(); // call once → prints Rahul
sayMyName(); // call again → prints Rahul again
```

---

## 2. Define & Call a Function

### Syntax:
```js
// DEFINE — write the function
function functionName() {
    // code here
}

// CALL — run the function
functionName();
```

### Example:
```js
// Define
function sayMyName() {
    console.log("R");
    console.log("a");
    console.log("h");
    console.log("u");
    console.log("l");
}

// Call
sayMyName();

// Output:
// R
// a
// h
// u
// l
```

### Important:
```
Define  →  writes the recipe
Call    →  actually cooks the food

Without calling → nothing happens.
```

---

## 3. Parameters vs Arguments

> This is one of the most **confusing parts** for beginners. Let's make it simple.

### Definition:

| Word | Meaning | Where |
|---|---|---|
| **Parameter** | Variable in the function definition | When writing the function |
| **Argument** | Actual value you pass when calling | When calling the function |

### Example:
```js
//                 ↓↓↓↓↓  parameters
function addTwoNum(num1, num2) {
    console.log(num1 + num2);
}

//              ↓  ↓  arguments
addTwoNum(   3,  7  );

// Output: 10
```

### Visual:
```
function addTwoNum(num1, num2)
                    ↑     ↑
               parameter  parameter
               (placeholder)


addTwoNum(3, 7)
           ↑  ↑
        argument argument
        (real value)


num1 = 3  ✅
num2 = 7  ✅
```

### Easy rule:
```
Parameter  →  in the function  →  placeholder
Argument   →  in the call      →  real value
```

---

## 4. `return` Statement

> `return` sends a value **back** from the function so you can use it outside.

### Without return:
```js
function addTwoNum(num1, num2) {
    console.log(num1 + num2); // prints 10, but value is LOST
}

const result = addTwoNum(3, 7);
console.log(result); // undefined ❌
```

### With return ✅:
```js
function addTwoNum(num1, num2) {
    return num1 + num2; // sends 10 back
}

const result = addTwoNum(3, 7);
console.log("Result:", result); // Result: 10 ✅
```

### Visual:
```
addTwoNum(3, 7)
      ↓
  num1 + num2
      ↓
   3 + 7 = 10
      ↓
   return 10  ──→  result = 10
```

### You can also store first, then return:
```js
function addTwoNum(num1, num2) {
    let result = num1 + num2;
    return result;
}
```

> Both ways work. The short form `return num1 + num2` is more common.

---

## 5. Unreachable Code

> Any code written **after** `return` will **never run**.

```js
function addTwoNum(num1, num2) {
    return num1 + num2;
    console.log("Rahul"); // ❌ UNREACHABLE — never runs
}
```

### Visual:
```
return num1 + num2;   ← function STOPS here
console.log("Rahul"); ← this line is DEAD CODE ❌
```

> ⚠️ Most code editors will warn you about unreachable code.

### Rule:
```
return = EXIT the function immediately.
Nothing after return will ever run.
```

---

## 6. Default Parameters

> If someone calls the function **without passing a value**, a default is used.

### Without default — problem:
```js
function userLoginMessage(userName) {
    return `${userName} just logged in`;
}

console.log(userLoginMessage());
// Output: "undefined just logged in" ❌
```

### With default value ✅:
```js
function userLoginMessage(userName = "sam") {
    return `${userName} just logged in`;
}

console.log(userLoginMessage("Rahul")); // Rahul just logged in
console.log(userLoginMessage());        // sam just logged in ← default used
```

### How it works:
```
userLoginMessage("Rahul")
→ userName = "Rahul"   ← argument given, use it

userLoginMessage()
→ userName = "sam"     ← no argument, use DEFAULT
```

### Syntax:
```js
function functionName(param = "defaultValue") {
    // code
}
```

---

## 7. Guard Clause (Early Return)

> A **guard clause** checks for a bad value early and **exits** the function immediately.

```js
function userLoginMessage(userName = "sam") {

    if (!userName) {
        console.log("Please enter a user name");
        return; // exit early ← guard clause
    }

    return `${userName} just logged in`;
}
```

### How `!userName` works:
```
!userName

If userName = ""        → !userName = true  → enters if block
If userName = null      → !userName = true  → enters if block
If userName = undefined → !userName = true  → enters if block
If userName = "Rahul"   → !userName = false → skips if block ✅
```

### Flow:
```
userLoginMessage("")
        ↓
   if(!userName) → true
        ↓
   "Please enter a user name"
        ↓
      return   ← exits here, never reaches the bottom


userLoginMessage("Rahul")
        ↓
   if(!userName) → false → skip
        ↓
   return "Rahul just logged in" ✅
```

> 💡 Guard clauses keep your code clean — handle the bad case first, then write the happy path.

---

## 8. Complete Code — Explained

```js
// ─── 1. Basic function — no parameters, no return ───
function sayMyName() {
    console.log("R");
    console.log("a");
    console.log("h");
    console.log("u");
    console.log("l");
}

sayMyName(); // call it


// ─── 2. Function with parameters and return ───
function addTwoNum(num1, num2) {  // num1, num2 → parameters
    return num1 + num2;           // return sends value back
}

const result = addTwoNum(3, 7);  // 3, 7 → arguments
console.log("Result:", result);  // Result: 10


// ─── 3. Function with default parameter + guard clause ───
function userLoginMessage(userName = "sam") {

    if (!userName) {
        console.log("Please enter a user name");
        return;                           // early exit
    }

    return `${userName} just logged in`; // happy path
}

console.log(userLoginMessage("Rahul")); // Rahul just logged in
console.log(userLoginMessage());        // sam just logged in
console.log(userLoginMessage(""));      // Please enter a user name
```

---

## ⭐ Quick Revision

```
FUNCTION
│
├── Define
│     function name() { }
│
├── Call
│     name();
│
├── Parameter  →  placeholder in definition
│     function add(num1, num2) { }
│
├── Argument   →  real value when calling
│     add(3, 7)
│
├── return
│     → sends value back
│     → stops function immediately
│     → code after return = DEAD (unreachable)
│
├── Default parameter
│     function login(name = "sam") { }
│     → used when no argument is passed
│
└── Guard clause
│     if (!value) { return; }
│     → exit early if bad input
```

---

## 💡 Key Rules to Remember

```
✅  Define once → call many times
✅  Parameter = placeholder  |  Argument = real value
✅  return sends a value back to the caller
✅  After return → nothing runs (unreachable code)
✅  Default parameter = fallback if no argument given
✅  Guard clause = check bad input first, exit early
✅  Without return → function gives back undefined
```

---

## 🔁 Side by Side Comparison

| Concept | Code | Output |
|---|---|---|
| No return | `function f() { console.log(1+1) }` | prints `2`, returns `undefined` |
| With return | `function f() { return 1+1 }` | returns `2` — you can store it |
| No argument | `login()` with default `"sam"` | uses `"sam"` |
| With argument | `login("Rahul")` | uses `"Rahul"` |
| Guard clause | `if(!name) return` | exits early if name is empty |

---

*Notes by Biswajit Biswal · JavaScript Learning Journey · 2026*
