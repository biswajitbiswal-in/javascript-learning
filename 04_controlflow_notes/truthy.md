# JavaScript: Truthy & Falsy Values — Notes

*Made by Biswajit Biswal*

---

## 1. The Core Idea

In JavaScript, every value is either **truthy** or **falsy** when used inside a condition like `if(...)`. It doesn't have to be an actual `true`/`false` — JS automatically converts it.

```javascript
const userEmail = []

if (userEmail) {
    console.log(`Got user email ${userEmail}`);
} else {
    console.log("Don't have user email");
}
```

**What happens here?**
- `userEmail` is `[]` — an **empty array**.
- An array (even an empty one!) is an **object**, and objects are **always truthy**.
- So `if(userEmail)` is `true` → it prints:
```
Got user email 
```
(The email is empty inside the string because the array has nothing in it, but the `if` still ran the "true" branch — this is a common beginner trap!)

👉 **Lesson:** `if(array)` only checks whether the variable **exists** (is not falsy) — it does **NOT** check whether the array is empty. `[]` is truthy, even though it "feels empty."

---

## 2. Falsy Values (There are only 7!)

These are the **only** values JavaScript treats as `false` in a condition:

| Value | Example |
|---|---|
| `false` | the boolean itself |
| `0` | zero |
| `-0` | negative zero |
| `0n` | BigInt zero |
| `""` | empty string |
| `null` | |
| `undefined` | |
| `NaN` | Not-a-Number |

If a value is **not** in this list, it's automatically **truthy**.

---

## 3. Truthy Values (Common Beginner Traps ⚠️)

These all look "empty" or "false-ish" but are actually **truthy**:

```javascript
"0"        // truthy! (it's a non-empty STRING, not the number 0)
"false"    // truthy! (it's a non-empty STRING, not the boolean false)
" "        // truthy! (a space is still a character, so string isn't empty)
[]         // truthy! (empty array is still an object)
{}         // truthy! (empty object is still an object)
function(){} // truthy! (functions are always truthy)
```

👉 **Lesson:** Anything that is an **object** (arrays, objects, functions) is **always truthy**, no matter how "empty" it looks. Only the 7 falsy values above make something false.

---

## 4. Correctly Checking for an Empty Array

Since `[]` is truthy, checking `if(array)` won't tell you if it's empty. Instead, check its **length**:

```javascript
const userEmail = []

if (userEmail.length === 0) {
    console.log("Array is empty");
}
```
- `.length` gives the number of items in the array.
- `userEmail.length === 0` → `0 === 0` → `true` → correctly detects the empty array. ✅

---

## 5. Correctly Checking for an Empty Object

Objects don't have `.length`, so `.length` won't work on them. Instead, use `Object.keys()`:

```javascript
const emptyObj = {}   // ⚠️ this needs to be declared first!

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}
```

⚠️ **Bug in your code:** `emptyObj` was used but never declared anywhere (no `const emptyObj = {}` before the `if`). Running it as-is throws:
```
ReferenceError: emptyObj is not defined
```
Make sure to declare it first, like in the corrected snippet above.

**How `Object.keys()` works:**
- `Object.keys(obj)` returns an **array of the object's property names**.
- For an empty object `{}`, there are no properties, so it returns `[]` (an empty array).
- `[].length` → `0` → `0 === 0` → `true` → correctly detects the empty object. ✅

**Example with a non-empty object:**
```javascript
const user = { name: "Biswajit", age: 25 }
console.log(Object.keys(user));         // ["name", "age"]
console.log(Object.keys(user).length);  // 2
```

---

## Quick Summary
| What you want to check | How to check it |
|---|---|
| Is a variable `null`/`undefined`/falsy? | `if (value)` |
| Is an **array** empty? | `if (arr.length === 0)` |
| Is an **object** empty? | `if (Object.keys(obj).length === 0)` |

- `[]` and `{}` are **truthy** — don't rely on `if(array)` or `if(object)` to detect emptiness.
- Only 7 values are falsy: `false, 0, -0, 0n, "", null, undefined, NaN`. Everything else is truthy — including empty strings-that-aren't-empty like `"0"`, `" "`, and all objects/arrays/functions.
