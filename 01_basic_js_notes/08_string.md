# 🟨 JavaScript Strings — Complete Notes

> **Written by:** Biswajit Biswal
> **Level:** Beginner → Intermediate
> **Goal:** Understand every string method with simple examples

---

## 📌 Table of Contents

| # | Topic |
|---|-------|
| 1 | [What is a String?](#1-what-is-a-string) |
| 2 | [Concatenation](#2-string-concatenation) |
| 3 | [Template Literals](#3-template-literals--interpolation) |
| 4 | [String Object vs Primitive](#4-string-object-vs-primitive) |
| 5 | [Accessing Characters](#5-accessing-characters) |
| 6 | [length](#6-length) |
| 7 | [toLowerCase / toUpperCase](#7-tolowercase--touppercase) |
| 8 | [indexOf()](#8-indexof) |
| 9 | [charAt()](#9-charat) |
| 10 | [substring()](#10-substring) |
| 11 | [slice()](#11-slice) |
| 12 | [trim()](#12-trim) |
| 13 | [replace()](#13-replace) |
| 14 | [includes()](#14-includes) |
| 15 | [split()](#15-split) |
| 16 | [startsWith / endsWith](#16-startswith--endswith) |
| 17 | [concat()](#17-concat) |
| 18 | [repeat()](#18-repeat) |
| 19 | [padStart / padEnd](#19-padstart--padend) |
| 20 | [at()](#20-at) |
| 21 | [charCodeAt()](#21-charcodeat) |
| 22 | [toString()](#22-tostring) |
| ⭐ | [Quick Revision](#-quick-revision-cheatsheet) |

---

## 1. What is a String?

> A **string** is just text — any sequence of characters wrapped in quotes.

```js
let name = "Biswajit";   // double quotes ✅
let game = 'GTA';        // single quotes ✅
let msg  = `Hello`;      // backticks     ✅
```

All three work. You'll mostly use `"..."` or backticks `` `...` ``.

---

## 2. String Concatenation

> **Concatenation** = joining strings using `+`

```js
const name = "Biswajit";
const repo = 10;

console.log(name + " has " + repo + " repos");
// Output: Biswajit has 10 repos
```

> 💡 Think of `+` as glue between strings.

---

## 3. Template Literals / Interpolation

> **A cleaner, modern way** to combine strings and variables.
> Use **backticks** `` ` `` and `${}` to embed variables.

```js
const name = "Biswajit";
const repo = 10;

console.log(`My name is ${name} and I have ${repo} repos`);
// Output: My name is Biswajit and I have 10 repos
```

### 🔑 Remember this rule:

```
`Hello ${variable}`
        ↑
   put any variable or expression inside ${ }
```

| Old way (`+`) | New way (template literal) |
|---|---|
| `"Hi " + name` | `` `Hi ${name}` `` |
| Harder to read | Cleaner & easier |

---

## 4. String Object vs Primitive

```js
// ✅ Normal way — use this
const gameName = "GTA";

// ❌ Object way — avoid this
const gameName = new String("GTA");
console.log(typeof gameName); // object ← not what you want
```

> ⚠️ Always use the simple `"..."` form. `new String()` creates an object, not a normal string.

---

## 5. Accessing Characters

> Use `[index]` to get any character. **Index starts from 0.**

```js
const gameName = "GTA";

console.log(gameName[0]); // G
console.log(gameName[1]); // T
console.log(gameName[2]); // A
```

### Index Map:

```
  G    T    A
  ↑    ↑    ↑
  0    1    2
```

> 🧠 Think of it like a row of boxes — first box is box number **0**, not 1.

---

## 6. `length`

> Tells you **how many characters** are in the string.

```js
const gameName = "GTA";
console.log(gameName.length); // 3

console.log("Biswajit".length); // 8
```

> 💡 `length` is a **property**, not a method — no `()` needed.

---

## 7. `toLowerCase()` / `toUpperCase()`

```js
const gameName = "GTA";

console.log(gameName.toLowerCase()); // gta
console.log(gameName.toUpperCase()); // GTA
```

| Method | What it does | Example |
|---|---|---|
| `toLowerCase()` | All small letters | `"GTA"` → `"gta"` |
| `toUpperCase()` | All capital letters | `"gta"` → `"GTA"` |

> 💡 Original string is **NOT changed**. These return a new string.

---

## 8. `indexOf()`

> **Where is it?** — Finds the position of a character or word.

```js
const gameName = "GTA";

console.log(gameName.indexOf("T")); // 1
console.log(gameName.indexOf("X")); // -1  ← not found
```

### Visual:

```
  G    T    A
  0    1    2
       ↑
   indexOf("T") = 1
```

> 🧠 If the character is **not found**, it returns **-1**.

---

## 9. `charAt()`

> **Which character?** — Get the character at a specific position.

```js
const gameName = "GTA";

console.log(gameName.charAt(1)); // T
```

### `indexOf()` vs `charAt()` — Easy difference:

```
gameName.indexOf("T");  // → 1       (you give character, get position)
gameName.charAt(1);     // → "T"     (you give position, get character)
```

| Method | You give | You get |
|---|---|---|
| `indexOf("T")` | Character | Position |
| `charAt(1)` | Position | Character |

---

## 10. `substring()`

> **Take a part of the string** using start and end positions.
> ⚠️ End index is **NOT included**.

```js
const gameName = "GTA";

console.log(gameName.substring(0, 2)); // GT
```

### Visual:

```
  G    T    A
  0    1    2
  ↑         ↑
start=0   end=2 (stop BEFORE this)

Result → G T → "GT"
```

### Rule:
```
substring(start, end)
           ↓      ↓
        included  NOT included
```

---

## 11. `slice()`

> Works like `substring()` but **also supports negative indexes** (count from right).

```js
const gameName = "GTA";

console.log(gameName.slice(0, 2));  // GT
console.log(gameName.slice(-2));    // TA
console.log(gameName.slice(-1));    // A
```

### Index Map (positive + negative):

```
  G    T    A
  0    1    2    ← normal indexes
 -3   -2   -1   ← negative indexes
```

### How negative index works:

```
slice(-2) → start from the 2nd character from the RIGHT
          → starts at "T", goes to end
          → "TA"
```

### `slice(-2, 2)` — The Tricky One:

```js
console.log(gameName.slice(-2, 2)); // T
```

```
  G    T    A
  0    1    2
 -3   -2   -1

slice(-2, 2)
       ↓    ↓
      -2    2
      "T"  "A"  (stop BEFORE index 2)

Result → only "T"
```

### `slice()` vs `substring()`:

| | `slice()` | `substring()` |
|---|---|---|
| Negative index | ✅ Yes | ❌ No |
| Basic usage | Same | Same |

---

## 12. `trim()`

> **Removes spaces** from the beginning and end of a string. NOT the middle.

```js
const herName = "  IPSITA  ";
console.log(herName.trim()); // IPSITA

console.log("Hello   World".trim()); // "Hello   World"  ← middle spaces stay
```

### Visual:

```
"  IPSITA  "
 ↑        ↑
removed  removed

Result: "IPSITA"
```

> 💡 Useful when you get user input — people often accidentally add spaces.

---

## 13. `replace()`

> **Change text** — replaces one part of the string with another.

```js
const myName = "Biswajit";
console.log(myName.replace("Biswajit", "Rahul")); // Rahul

let text = "I like Java";
console.log(text.replace("Java", "JavaScript")); // I like JavaScript
```

### Rule:
```
replace(oldValue, newValue)
```

> ⚠️ Only replaces the **first** match. Use `replaceAll()` to replace all matches.

---

## 14. `includes()`

> **Does it contain it?** — Returns `true` or `false`.

```js
const url = "https://rahul.com/rahul";

console.log(url.includes("rahul"));  // true
console.log(url.includes("google")); // false
```

> 💡 Case-sensitive — `"Rahul"` and `"rahul"` are different.

---

## 15. `split()`

> **Break a string into an array** using a separator.

```js
const user = "biswa-rahul";
console.log(user.split("-")); // ["biswa", "rahul"]

let fruits = "apple,banana,mango";
console.log(fruits.split(",")); // ["apple", "banana", "mango"]
```

### Visual:

```
"biswa-rahul"
      ↓
   split("-")
      ↓
["biswa", "rahul"]
```

> 💡 The separator character is **removed** from the result.

---

## 16. `startsWith()` / `endsWith()`

> Check what a string **starts with** or **ends with** — returns `true` or `false`.

```js
let name = "Biswajit";

// startsWith
console.log(name.startsWith("Bis")); // true
console.log(name.startsWith("Raj")); // false

// endsWith
console.log(name.endsWith("jit"));   // true
console.log(name.endsWith("Raj"));   // false
```

```
"Biswajit"
 ↑↑↑              ↑↑↑
"Bis"             "jit"
startsWith ✅    endsWith ✅
```

---

## 17. `concat()`

> **Join strings** — same as `+` but as a method.

```js
let firstName = "Biswajit";
let lastName  = "Biswal";

console.log(firstName.concat(" ", lastName)); // Biswajit Biswal
```

> 💡 In modern JS, template literals are cleaner:
> `` `${firstName} ${lastName}` ``

---

## 18. `repeat()`

> **Repeat** a string a certain number of times.

```js
let text = "Hi ";
console.log(text.repeat(3)); // Hi Hi Hi

console.log("GTA ".repeat(2)); // GTA GTA
```

---

## 19. `padStart()` / `padEnd()`

> **Add characters** to the beginning or end until the string reaches a certain length.

```js
let number = "5";

console.log(number.padStart(3, "0")); // 005
console.log(number.padEnd(3, "0"));   // 500
```

### Visual:

```
padStart(3, "0")    padEnd(3, "0")
"5" → "05" → "005"  "5" → "50" → "500"
      ↑ adds to LEFT       ↑ adds to RIGHT
```

> 💡 Great for formatting numbers like `001`, `002`, `003`.

---

## 20. `at()`

> **Get character at position** — like `charAt()` but supports negative indexes.

```js
let gameName = "GTA";

console.log(gameName.at(1));  // T
console.log(gameName.at(-1)); // A  ← last character
console.log(gameName.at(-2)); // T  ← second from last
```

| Method | Negative index? |
|---|---|
| `charAt()` | ❌ No |
| `at()` | ✅ Yes |

---

## 21. `charCodeAt()`

> Returns the **Unicode number** of a character.

```js
let gameName = "GTA";
console.log(gameName.charCodeAt(0)); // 71  ← Unicode of "G"
```

> 💡 Every character has a unique number code. `"A"` = 65, `"a"` = 97, `"G"` = 71.

---

## 22. `toString()`

> **Convert a number (or other value) into a string.**

```js
let number = 100;
let text = number.toString();

console.log(text);        // "100"
console.log(typeof text); // string
```

---

## ⭐ Quick Revision Cheatsheet

### 🗂️ All Methods at a Glance

| Method | What it does | Returns | Example |
|---|---|---|---|
| `length` | Count characters | Number | `"GTA".length` → `3` |
| `toUpperCase()` | ALL CAPS | String | `"gta"` → `"GTA"` |
| `toLowerCase()` | all small | String | `"GTA"` → `"gta"` |
| `indexOf()` | Find position | Number | `"GTA".indexOf("T")` → `1` |
| `charAt()` | Get character | String | `"GTA".charAt(1)` → `"T"` |
| `at()` | Get character (+ negative) | String | `"GTA".at(-1)` → `"A"` |
| `substring()` | Extract part | String | `"GTA".substring(0,2)` → `"GT"` |
| `slice()` | Extract part (+ negative) | String | `"GTA".slice(-2)` → `"TA"` |
| `trim()` | Remove edge spaces | String | `"  hi  ".trim()` → `"hi"` |
| `replace()` | Replace text | String | `"Java".replace("Java","JS")` → `"JS"` |
| `includes()` | Contains? | Boolean | `"GTA".includes("T")` → `true` |
| `split()` | String → Array | Array | `"a-b".split("-")` → `["a","b"]` |
| `startsWith()` | Starts with? | Boolean | `"Bis".startsWith("B")` → `true` |
| `endsWith()` | Ends with? | Boolean | `"Bis".endsWith("s")` → `true` |
| `concat()` | Join strings | String | `"Hi".concat(" there")` → `"Hi there"` |
| `repeat()` | Repeat | String | `"Hi ".repeat(3)` → `"Hi Hi Hi "` |
| `padStart()` | Add chars at start | String | `"5".padStart(3,"0")` → `"005"` |
| `padEnd()` | Add chars at end | String | `"5".padEnd(3,"0")` → `"500"` |
| `charCodeAt()` | Get Unicode code | Number | `"G".charCodeAt(0)` → `71` |
| `toString()` | Convert to string | String | `(100).toString()` → `"100"` |

---

### 🧠 Memory Map

```
                      STRING
                        │
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
      FIND            CHANGE          EXTRACT
        │               │               │
   indexOf()        replace()        slice()
   includes()       toUpperCase()    substring()
   startsWith()     toLowerCase()
   endsWith()
   charAt()
   at()

                      STRING
                        │
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
      CLEAN            JOIN            SPLIT
        │               │               │
     trim()           concat()        split()
                      + / `${}`
```

---

### ⭐ 5 Methods to Learn First

```
1. slice()      →  Take a part of a string
2. indexOf()    →  Find where something is
3. includes()   →  Check if something exists
4. replace()    →  Change text
5. split()      →  Break string into an array
```

---

### 🔁 Complete Example — Everything Together

```js
const name     = "Biswajit";
const gameName = "GTA";
const herName  = "  IPSITA  ";
const user     = "biswa-rahul";

// Concatenation
console.log(name + " has 10 repos");           // Biswajit has 10 repos

// Template literal
console.log(`My name is ${name}`);             // My name is Biswajit

// Access & Length
console.log(gameName[0]);                      // G
console.log(gameName.length);                  // 3

// Case
console.log(gameName.toLowerCase());           // gta
console.log(gameName.toUpperCase());           // GTA

// Find
console.log(gameName.indexOf("T"));            // 1
console.log(gameName.includes("T"));           // true

// Character
console.log(gameName.charAt(1));               // T
console.log(gameName.at(-1));                  // A

// Extract
console.log(gameName.substring(0, 2));         // GT
console.log(gameName.slice(0, 2));             // GT
console.log(gameName.slice(-2));               // TA
console.log(gameName.slice(-2, 2));            // T  ← tricky one!

// Clean
console.log(herName.trim());                   // IPSITA

// Replace
console.log(name.replace("Biswajit", "Rahul")); // Rahul

// Split
console.log(user.split("-"));                  // ["biswa", "rahul"]

// Start / End
console.log(name.startsWith("Bis"));           // true
console.log(name.endsWith("jit"));             // true

// Repeat
console.log("Hi ".repeat(3));                  // Hi Hi Hi

// Pad
console.log("5".padStart(3, "0"));             // 005
console.log("5".padEnd(3, "0"));               // 500
```

---

### 💡 Key Things to Remember

```
✅  String indexes start from 0
✅  slice() supports negative indexes, substring() does NOT
✅  end index is NEVER included in slice() or substring()
✅  -1 means last character, -2 means second from last
✅  includes(), startsWith(), endsWith() → return true/false
✅  split() → returns an ARRAY, not a string
✅  trim() only removes EDGE spaces, not middle spaces
✅  Original string is NEVER changed — methods return NEW strings
```

---

*Notes by Biswajit Biswal · JavaScript Learning Journey · 2025*
