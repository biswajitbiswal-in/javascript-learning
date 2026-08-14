# JavaScript Scopes - Advanced Notes

## Overview
This note covers advanced JavaScript scoping concepts including nested functions, closures, block scopes, and function hoisting.

---

## 1. Global Scope vs Local Scope

### **Global Scope**
Variables declared outside all functions and blocks are accessible everywhere.

```javascript
let a = 300;  // ✅ GLOBAL - accessible everywhere
```

### **Local Scope**
Variables declared inside functions or blocks are only accessible within that scope.

```javascript
if(true) {
    let a = 5;  // ✅ LOCAL to this if block
    const b = 10;  // ✅ LOCAL to this if block
    console.log("Inner:", a);  // ✅ Works: 5
}

console.log(a);  // ✅ 300 (global 'a')
// console.log(b);  // ❌ ReferenceError: 'b' is not defined
```

---

## 2. Nested Function Scope & Closures

### **What are Nested Functions?**
A function declared inside another function. Inner functions have access to outer function variables.

```javascript
function one() {                    // OUTER FUNCTION
    const username = "Rahul";      // Outer scope variable
    
    function two() {               // INNER FUNCTION (Nested)
        const website = "youtube";  // Inner scope variable
        
        console.log(website);      // ✅ Can access own scope
        console.log(username);     // ✅ Can access parent scope!
    }
    
    // console.log(website);  // ❌ Cannot access inner function's variables
    two();  // Call the inner function
}

one();  // Call the outer function
```

**Output:**
```
youtube
Rahul
```

### **What is a Closure?**
A closure is created when an inner function has access to the outer function's variables, even after the outer function has finished executing.

**Scope Chain in Nested Functions:**
```
Inner function scope
    ↓ (can't find variable)
Outer function scope
    ↓ (can't find variable)
Global scope
```

**Access Rules:**
- ✅ Inner function can access outer function variables
- ✅ Inner function can access global variables
- ❌ Outer function CANNOT access inner function variables
- ❌ Global scope cannot access function variables

---

## 3. Block Scope (if, for, while statements)

### **Block Scope Behavior**
Variables declared with `let` and `const` in blocks are scoped to that block only.

```javascript
if(true) {
    const userName = "Biswajit";  // Block scope
    
    if (userName === "Biswajit") {
        const website = "youtube";  // Nested block scope
        console.log(userName + website);  // ✅ Can access both
    }
    
    // console.log(website);  // ❌ ReferenceError: not in scope
}

// console.log(userName);  // ❌ ReferenceError: not in scope
```

**Block Scope Chain:**
```
Nested if block scope
    ↓
Outer if block scope
    ↓
Global scope
```

---

## 4. Function Hoisting vs Variable Hoisting

### **Function Hoisting** ✅
Function declarations are fully hoisted - you can call them BEFORE they're declared!

```javascript
console.log(addOne(5));  // ✅ Works! Output: 6

function addOne(num) {
    return num + 1;
}

// Functions are moved to the top of their scope during compilation
```

**Why it works:**
```javascript
// What you write:
console.log(addOne(5));
function addOne(num) { return num + 1; }

// What JavaScript sees (hoisted):
function addOne(num) { return num + 1; }
console.log(addOne(5));  // ✅ Now it makes sense!
```

---

### **Variable Hoisting & Temporal Dead Zone (TDZ)** ❌
Variables declared with `let` and `const` are hoisted BUT NOT initialized. They enter the "Temporal Dead Zone" until the declaration line.

```javascript
addTwo(5);  // ❌ ERROR! ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2;
}
```

**Why it fails:**
```javascript
// What you write:
addTwo(5);
const addTwo = function(num) { return num + 2; }

// What JavaScript sees:
// ↓ TDZ starts here
// const addTwo;  // Hoisted but NOT initialized
addTwo(5);  // ❌ Still in TDZ! addTwo is undefined
// ↓ TDZ ends here
// addTwo = function(num) { return num + 2; }  // Now initialized
```

---

## 5. Different Function Declaration Styles

### **Style 1: Function Declaration** ✅ Hoisted
```javascript
console.log(add(5, 3));  // ✅ Works! Output: 8

function add(a, b) {
    return a + b;
}
```

### **Style 2: Function Expression (const)** ❌ Not Hoisted
```javascript
console.log(add(5, 3));  // ❌ ReferenceError: Cannot access 'add' before initialization

const add = function(a, b) {
    return a + b;
}
```

### **Style 3: Arrow Function (const)** ❌ Not Hoisted
```javascript
console.log(add(5, 3));  // ❌ ReferenceError: Cannot access 'add' before initialization

const add = (a, b) => {
    return a + b;
}
```

| Style | Hoisted | Can call before declaration |
|-------|---------|---------------------------|
| `function name() {}` | ✅ Yes | ✅ Yes |
| `const name = function() {}` | ❌ No | ❌ No |
| `const name = () => {}` | ❌ No | ❌ No |
| `var name = function() {}` | ⚠️ Partial | ❌ No (undefined) |

---

## 6. Scope Hierarchy Diagram (Complete)

```
┌─────────────────────────────────────────────────────┐
│                    GLOBAL SCOPE                     │
│  let a = 300                                        │
│                                                     │
│  ┌──────────────────────────────────────────────┐   │
│  │ IF BLOCK (Block Scope 1)                     │   │
│  │ let a = 5  (shadows global 'a')              │   │
│  │ const b = 10                                 │   │
│  │ (Inner block: a = 5, b = 10, a from outer)   │   │
│  └──────────────────────────────────────────────┘   │
│                                                     │
│  ┌──────────────────────────────────────────────┐   │
│  │ function one() { FUNCTION SCOPE 1 }          │   │
│  │ const username = "Rahul"                     │   │
│  │                                               │   │
│  │ ┌────────────────────────────────────────┐   │   │
│  │ │ function two() { FUNCTION SCOPE 2 }   │   │   │
│  │ │ const website = "youtube"             │   │   │
│  │ │                                         │   │   │
│  │ │ Access: website ✅, username ✅, a ✅ │   │   │
│  │ └────────────────────────────────────────┘   │   │
│  └──────────────────────────────────────────────┘   │
│                                                     │
│  ┌──────────────────────────────────────────────┐   │
│  │ IF BLOCK (Block Scope 2)                     │   │
│  │ const userName = "Biswajit"                  │   │
│  │                                               │   │
│  │ ┌────────────────────────────────────────┐   │   │
│  │ │ IF BLOCK (Nested Block Scope)          │   │   │
│  │ │ const website = "youtube"              │   │   │
│  │ │ Access: website ✅, userName ✅       │   │   │
│  │ └────────────────────────────────────────┘   │   │
│  └──────────────────────────────────────────────┘   │
│                                                     │
│  ┌──────────────────────────────────────────────┐   │
│  │ function addOne(num) { FUNCTION SCOPE 3 }   │   │
│  │ return num + 1                              │   │
│  │ (✅ Hoisted - can call before declaration)  │   │
│  └──────────────────────────────────────────────┘   │
│                                                     │
│  ┌──────────────────────────────────────────────┐   │
│  │ const addTwo = function(num) { }             │   │
│  │ (❌ Not hoisted - TDZ prevents early call)   │   │
│  └──────────────────────────────────────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 7. Your Code - What Works & What Doesn't

### ✅ This Works (Function Hoisting)
```javascript
console.log(addOne(5));  // ✅ Output: 6

function addOne(num) {
    return num + 1;
}
```

**Why:** Function declarations are fully hoisted to the top.

---

### ❌ This Fails (Variable Hoisting/TDZ)
```javascript
addTwo(5);  // ❌ ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
}
```

**Why:** `const` variable is hoisted but not initialized. Calling it before declaration throws an error.

**To fix it:**
```javascript
const addTwo = function(num) {
    return num + 2;
}

addTwo(5);  // ✅ Now it works
```

---

## 8. Key Takeaways

| Concept | Explanation | Example |
|---------|-------------|---------|
| **Global Scope** | Accessible everywhere | `let a = 300;` |
| **Function Scope** | Local to function | `function one() { const x = 5; }` |
| **Block Scope** | Local to if/for/while | `if(true) { let x = 5; }` |
| **Nested Functions** | Inner functions access outer variables | Inner `function two()` accesses `username` from `one()` |
| **Closure** | Inner function remembers outer scope | `two()` has access to `username` even after `one()` ends |
| **Function Hoisting** | Function declarations moved to top | Can call before declaration ✅ |
| **Variable Hoisting** | Variables hoisted but not initialized | `const`/`let` enter TDZ (Temporal Dead Zone) ❌ |

---

## 9. Best Practices

1. ✅ **Use `const` by default** - prevents accidental reassignment
2. ✅ **Use `let` when you need to reassign** - signals intent to modify
3. ❌ **Avoid `var`** - causes confusion with function scoping
4. ✅ **Declare functions BEFORE calling them** (if using `const` syntax)
5. ✅ **Use function declarations for functions you call early** (exploits hoisting)
6. ✅ **Avoid calling variables before declaration** - leads to TDZ errors
7. ✅ **Keep scopes tight** - declare variables in the smallest scope needed

---

## 10. Common Mistakes & Fixes

### Mistake 1: Accessing inner function variables from outer scope
```javascript
// ❌ WRONG
function one() {
    function two() {
        const website = "youtube";
    }
    console.log(website);  // ❌ ReferenceError
    two();
}

// ✅ CORRECT
function one() {
    function two() {
        const website = "youtube";
        console.log(website);  // ✅ Put console.log inside inner function
    }
    two();
}
```

### Mistake 2: Calling function expressions before declaration
```javascript
// ❌ WRONG
addTwo(5);
const addTwo = function(num) { return num + 2; }  // ❌ TDZ Error

// ✅ CORRECT (Option 1: Declare first)
const addTwo = function(num) { return num + 2; }
addTwo(5);  // ✅ Works

// ✅ CORRECT (Option 2: Use function declaration)
addTwo(5);  // ✅ Works
function addTwo(num) { return num + 2; }
```

### Mistake 3: Block scope confusion
```javascript
// ❌ WRONG
if(true) {
    const userName = "Biswajit";
}
console.log(userName);  // ❌ ReferenceError: out of scope

// ✅ CORRECT
const userName = "Biswajit";  // Declare in global or function scope
if(true) {
    console.log(userName);  // ✅ Can access global userName
}
```
