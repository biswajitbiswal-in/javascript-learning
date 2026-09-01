# JavaScript Array Methods: forEach vs Filter

## Overview
This guide explains the difference between `forEach()` and `filter()`, and how to work with arrays of objects.

---

## 1. Understanding `forEach()`

### What is `forEach()`?
`forEach()` is an array method that **loops through each element** and executes a function for each one. It **does NOT return anything** (returns `undefined`).

### Syntax
```javascript
array.forEach((element) => {
  // do something with element
});
```

### Key Points:
- ✅ Used for **side effects** (console.log, push to array, update something)
- ❌ Does NOT return a new array
- ❌ Return statements inside are ignored
- Used when you want to **perform an action** on each item

### Example from your code:
```javascript
const coding = ["java", "python", "ruby", "react", "express"];

const values = coding.forEach((item) => {
  return item;  // ❌ This return is IGNORED
});

console.log(values);  // Output: undefined ❌

// This is why:
// forEach doesn't return anything. The return inside the function doesn't matter.
```

### Correct Use of `forEach()`:
```javascript
const coding = ["java", "python", "ruby", "react", "express"];

// ✅ Correct: Use forEach for side effects like printing
coding.forEach((item) => {
  console.log(item);  // Prints each language
});

// ✅ Correct: Use forEach to modify an external array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);  // Add to new array
  }
});

console.log(newNums);  // Output: [5, 6, 7, 8, 9] ✅
```

---

## 2. Understanding `filter()`

### What is `filter()`?
`filter()` is an array method that **creates a NEW array** with only the elements that pass a test (condition). It **returns a new array**.

### Syntax
```javascript
const newArray = array.filter((element) => {
  return condition;  // true or false
});
```

### Key Points:
- ✅ **Returns a new array** with filtered results
- ✅ Original array is NOT changed
- ✅ Only includes elements where condition is `true`
- Used when you want to **get a subset** of an array

### Example from your code:
```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ✅ Correct: filter returns a new array
const x = myNums.filter((num) => {
  return num > 4;
});

console.log(x);  // Output: [5, 6, 7, 8, 9] ✅
```

### Implicit vs Explicit `filter()`:
```javascript
// Explicit (with curly braces and return)
const result1 = myNums.filter((num) => {
  return num > 4;
});

// Implicit (without curly braces)
const result2 = myNums.filter((num) => num > 4);

// Both do the same thing!
console.log(result1);  // [5, 6, 7, 8, 9]
console.log(result2);  // [5, 6, 7, 8, 9]
```

---

## 3. `forEach()` vs `filter()` - Quick Comparison

| Feature | forEach() | filter() |
|---------|-----------|----------|
| **Returns** | `undefined` | New array |
| **Modifies original** | No | No |
| **Use case** | Perform actions on each item | Get filtered subset |
| **Example** | `console.log()`, `push()` | Get items matching condition |

---

## 4. Filtering Arrays of Objects

### What is an Object in an Array?
An array can contain objects (complex data structures with properties).

```javascript
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  // ... more books
];
```

Each book is an object with properties: `title`, `genre`, `publish`, `edition`.

### Filtering by Single Property
```javascript
// Get all books with genre "History"
const historyBooks = books.filter((bk) => bk.genre === "History");

// Result: 
// [
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }
// ]
```

**How it works:**
- `bk` represents each book object
- `bk.genre` accesses the `genre` property
- `===` checks if it equals "History"
- If true, that book is included in the result

### Filtering by Multiple Conditions (AND)
```javascript
// Get books published in 2000 or later AND genre is "Science"
const recentScience = books.filter((bk) => {
  return bk.publish >= 2000 && bk.genre === "Science";
});

// Result:
// [
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
// ]
```

**How it works:**
- `&&` means BOTH conditions must be true
- `bk.publish >= 2000` checks if published in 2000 or later
- `bk.genre === "Science"` checks if genre is Science
- Only books that meet BOTH conditions are included

### Different Multiple Conditions (OR)
```javascript
// Get books that are either Fiction OR History
const fictionOrHistory = books.filter((bk) => {
  return bk.genre === "Fiction" || bk.genre === "History";
});

// `||` means at least ONE condition must be true
```

---

## 5. Your Code Explained

### Problem 1: Using `forEach()` expecting a return value
```javascript
const coding = ["java", "python", "ruby", "react", "express"];

const values = coding.forEach((item) => {
  return item;
});

console.log(values);  // Output: undefined ❌
```

**Why it doesn't work:**
- `forEach()` always returns `undefined`
- The `return item` inside is ignored
- You should use this for console.log only

**Solution:** Use `map()` if you want to transform, or `filter()` if you want to filter.

### Problem 2: Manual filtering instead of using `filter()`
```javascript
const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);  // Manually add to array
  }
});

console.log(newNums);  // [5, 6, 7, 8, 9]
```

**This works but is verbose.** 

**Better solution using `filter()`:**
```javascript
const newNums = myNums.filter((num) => num > 4);
console.log(newNums);  // [5, 6, 7, 8, 9]
```

### Correct: Filtering Objects by Multiple Conditions
```javascript
const books = [...]; // Your books array

// Filter books published 2000+ AND genre is Science
let userBooks = books.filter((bk) => {
  return bk.publish >= 2000 && bk.genre === "Science";
});

console.log(userBooks);
// Output:
// [
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
// ]
```

---

## 6. Common Array Methods Summary

| Method | Purpose | Returns | Best For |
|--------|---------|---------|----------|
| `forEach()` | Loop through items | `undefined` | Side effects (print, modify external) |
| `filter()` | Get matching items | New array | Get subset of data |
| `map()` | Transform items | New array | Change data structure |
| `find()` | Get first match | Single object | Find ONE item |
| `some()` | Check if ANY match | Boolean | Test condition |
| `every()` | Check if ALL match | Boolean | Validate all items |

---

## 7. Practice Examples

### Example 1: Get all Fiction books
```javascript
const fictionBooks = books.filter((bk) => bk.genre === "Fiction");
```

### Example 2: Get books published before 1990
```javascript
const oldBooks = books.filter((bk) => bk.publish < 1990);
```

### Example 3: Get Non-Fiction books published after 1990
```javascript
const recentNonFiction = books.filter((bk) => {
  return bk.genre === "Non-Fiction" && bk.publish > 1990;
});
```

### Example 4: Print each book title using forEach
```javascript
books.forEach((bk) => {
  console.log(bk.title);
});
```

---

## Key Takeaways

✅ **Use `forEach()`** when you want to:
- Print/log data
- Modify elements externally
- Perform an action on each item
- NOT expecting a return value

✅ **Use `filter()`** when you want to:
- Get a NEW array with matching items
- Keep original array unchanged
- Test each item against a condition
- Return a subset of data

✅ **Use `map()`** when you want to:
- Transform each item
- Create a new array with modified items

---

## Common Mistakes to Avoid

❌ **Don't** expect `forEach()` to return an array:
```javascript
const result = array.forEach(...);  // Always undefined!
```

❌ **Don't** forget to return in `filter()`:
```javascript
array.filter((item) => {  // Missing return statement!
  item > 5;
});
```

❌ **Don't** modify the original array with `filter()`:
```javascript
const filtered = array.filter(...);  // Creates NEW array
// Original array is still unchanged
```

✅ **Do** use the returned array from `filter()`:
```javascript
const filtered = array.filter((item) => item > 5);
console.log(filtered);  // Use the filtered array
```
