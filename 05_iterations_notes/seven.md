# JavaScript `map()` and Method Chaining Guide

## Overview
This guide explains how `map()` works and how to chain multiple array methods together to transform data step by step.

---

## 1. Understanding `map()`

### What is `map()`?
`map()` is an array method that **transforms each element** and **returns a NEW array** with the transformed elements. It's different from `filter()` because it changes the data, not removes it.

### Syntax
```javascript
const newArray = array.map((element) => {
  return transformedElement;
});
```

### Key Points:
- ✅ **Returns a NEW array** with same length as original
- ✅ Transforms each element
- ✅ Original array is NOT changed
- Used when you want to **change/transform** each item

### Simple Examples

**Example 1: Multiply each number by 10**
```javascript
const myNums = [1, 2, 3, 4, 5];

const multiplied = myNums.map((num) => num * 10);

console.log(multiplied);  // Output: [10, 20, 30, 40, 50]
console.log(myNums);      // Output: [1, 2, 3, 4, 5] (unchanged)
```

**Example 2: Convert strings to uppercase**
```javascript
const words = ["hello", "world", "javascript"];

const uppercase = words.map((word) => word.toUpperCase());

console.log(uppercase);  // Output: ["HELLO", "WORLD", "JAVASCRIPT"]
```

**Example 3: Extract specific property from objects**
```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const names = users.map((user) => user.name);

console.log(names);  // Output: ["Alice", "Bob", "Charlie"]
```

---

## 2. `map()` vs `filter()` vs `forEach()`

### Quick Comparison Table

| Method | Returns | Purpose | Length Changes |
|--------|---------|---------|-----------------|
| `map()` | New array | Transform each item | Same length |
| `filter()` | New array | Get matching items | Can be shorter |
| `forEach()` | `undefined` | Loop/side effects | N/A |

### Visual Comparison

```javascript
const numbers = [1, 2, 3, 4, 5];

// map() - TRANSFORMS (same length)
const mapped = numbers.map((n) => n * 2);
// Input:  [1, 2, 3, 4, 5]
// Output: [2, 4, 6, 8, 10]  ← Same length, different values

// filter() - FILTERS (shorter/same length)
const filtered = numbers.filter((n) => n > 2);
// Input:  [1, 2, 3, 4, 5]
// Output: [3, 4, 5]  ← Shorter, removes items

// forEach() - LOOPS (no return)
numbers.forEach((n) => console.log(n));
// Just performs action, returns undefined
```

---

## 3. Method Chaining Explained

### What is Method Chaining?
**Method chaining** means calling multiple methods one after another in a single statement. Each method returns an array, which is then used by the next method.

### Syntax
```javascript
const result = array
  .method1()
  .method2()
  .method3();
```

### How It Works (Step by Step)
When you chain methods, they execute **in order from top to bottom**:

```
Input Array → Method 1 → Array Result → Method 2 → Array Result → Method 3 → Final Result
```

### Your Code Example: Step-by-Step Breakdown

```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums
  .map((num) => num * 10)      // STEP 1
  .map((num) => num + 1)       // STEP 2
  .filter((num) => num > 50);  // STEP 3

console.log(newNums);
```

**Let's trace through each step:**

#### STEP 1: First `map()` - Multiply by 10
```javascript
// Input:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myNums.map((num) => num * 10)

// Process each number:
// 1 * 10 = 10
// 2 * 10 = 20
// 3 * 10 = 30
// 4 * 10 = 40
// 5 * 10 = 50
// 6 * 10 = 60
// 7 * 10 = 70
// 8 * 10 = 80
// 9 * 10 = 90
// 10 * 10 = 100

// Output: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
```

#### STEP 2: Second `map()` - Add 1 to each
```javascript
// Input from Step 1: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

.map((num) => num + 1)

// Process each number:
// 10 + 1 = 11
// 20 + 1 = 21
// 30 + 1 = 31
// 40 + 1 = 41
// 50 + 1 = 51
// 60 + 1 = 61
// 70 + 1 = 71
// 80 + 1 = 81
// 90 + 1 = 91
// 100 + 1 = 101

// Output: [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
```

#### STEP 3: `filter()` - Keep only numbers > 50
```javascript
// Input from Step 2: [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]

.filter((num) => num > 50)

// Check each number:
// 11 > 50? NO  ✗
// 21 > 50? NO  ✗
// 31 > 50? NO  ✗
// 41 > 50? NO  ✗
// 51 > 50? YES ✓
// 61 > 50? YES ✓
// 71 > 50? YES ✓
// 81 > 50? YES ✓
// 91 > 50? YES ✓
// 101 > 50? YES ✓

// Output: [51, 61, 71, 81, 91, 101]
```

### Final Result
```javascript
console.log(newNums);  // Output: [51, 61, 71, 81, 91, 101]
```

---

## 4. Visual Diagram of Chaining

```
Original Array:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                  ↓
     STEP 1: map(n => n * 10)
                  ↓
            [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                  ↓
     STEP 2: map(n => n + 1)
                  ↓
            [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
                  ↓
     STEP 3: filter(n => n > 50)
                  ↓
            [51, 61, 71, 81, 91, 101]  ← Final Result
```

---

## 5. More Chaining Examples

### Example 1: Transform and Filter Numbers
```javascript
const numbers = [1, 2, 3, 4, 5];

// Add 5, multiply by 2, then keep only > 15
const result = numbers
  .map((n) => n + 5)      // [6, 7, 8, 9, 10]
  .map((n) => n * 2)      // [12, 14, 16, 18, 20]
  .filter((n) => n > 15); // [16, 18, 20]

console.log(result);  // [16, 18, 20]
```

### Example 2: Working with Objects
```javascript
const products = [
  { name: "Laptop", price: 1000, quantity: 2 },
  { name: "Mouse", price: 25, quantity: 5 },
  { name: "Keyboard", price: 75, quantity: 3 },
  { name: "Monitor", price: 300, quantity: 1 }
];

// Calculate total value, add tax, keep items > 100
const result = products
  .map((item) => ({
    name: item.name,
    total: item.price * item.quantity  // Total price
  }))
  .map((item) => ({
    ...item,
    withTax: item.total * 1.1  // Add 10% tax
  }))
  .filter((item) => item.withTax > 100);

console.log(result);
// [
//   { name: "Laptop", total: 2000, withTax: 2200 },
//   { name: "Keyboard", total: 225, withTax: 247.5 },
//   { name: "Monitor", total: 300, withTax: 330 }
// ]
```

### Example 3: Chain Multiple Filters and Maps
```javascript
const data = [
  { id: 1, type: "admin", active: true },
  { id: 2, type: "user", active: true },
  { id: 3, type: "admin", active: false },
  { id: 4, type: "user", active: true },
  { id: 5, type: "admin", active: true }
];

// Get active admins, then extract just their IDs
const activeAdminIds = data
  .filter((user) => user.type === "admin")      // Get admins
  .filter((user) => user.active === true)       // Keep active
  .map((user) => user.id);                      // Extract IDs

console.log(activeAdminIds);  // [1, 5]
```

---

## 6. Implicit vs Explicit in Chaining

### Explicit (with curly braces and return)
```javascript
const result = myNums
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 1;
  })
  .filter((num) => {
    return num > 50;
  });
```

### Implicit (without curly braces)
```javascript
const result = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 50);
```

Both do **exactly the same thing**. Implicit is cleaner for simple operations!

---

## 7. Chaining vs Non-Chaining

### Without Chaining (Multiple Variables)
```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const step1 = myNums.map((num) => num * 10);
const step2 = step1.map((num) => num + 1);
const result = step2.filter((num) => num > 50);

console.log(result);  // [51, 61, 71, 81, 91, 101]
```

**Problems:**
- Creates unnecessary intermediate variables
- Takes more lines of code
- Less readable

### With Chaining (Recommended)
```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 50);

console.log(result);  // [51, 61, 71, 81, 91, 101]
```

**Benefits:**
- Clean and readable
- No intermediate variables
- Easy to see the transformation steps

---

## 8. Common Array Methods That Can Be Chained

```javascript
const data = [1, 2, 3, 4, 5];

// All these methods return arrays, so they can be chained:
data
  .filter((n) => n > 2)        // Returns array
  .map((n) => n * 2)           // Returns array
  .filter((n) => n > 6)        // Returns array
  .map((n) => ({ value: n }))  // Returns array
  .filter((obj) => obj.value < 10);  // Returns array
```

### Methods That Can Be Chained
| Method | Returns | Can Chain |
|--------|---------|-----------|
| `map()` | Array | ✅ Yes |
| `filter()` | Array | ✅ Yes |
| `sort()` | Array | ✅ Yes |
| `slice()` | Array | ✅ Yes |
| `concat()` | Array | ✅ Yes |
| `reverse()` | Array | ✅ Yes |
| `find()` | Object | ❌ No (single item) |
| `forEach()` | undefined | ❌ No |

---

## 9. Practical Real-World Examples

### Example 1: E-commerce - Calculate Order Total
```javascript
const cartItems = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 50, quantity: 1 },
  { name: "Shoes", price: 80, quantity: 1 }
];

const orderSummary = cartItems
  .map((item) => ({
    name: item.name,
    subtotal: item.price * item.quantity
  }))
  .map((item) => ({
    ...item,
    tax: item.subtotal * 0.1
  }))
  .map((item) => ({
    ...item,
    total: item.subtotal + item.tax
  }))
  .filter((item) => item.total > 30);

console.log(orderSummary);
// Items with total > 30 (with tax)
```

### Example 2: Data Filtering and Processing
```javascript
const employees = [
  { name: "Alice", dept: "IT", salary: 5000, active: true },
  { name: "Bob", dept: "HR", salary: 4000, active: true },
  { name: "Charlie", dept: "IT", salary: 6000, active: false },
  { name: "Diana", dept: "IT", salary: 5500, active: true }
];

// Get active IT employees, increase salary by 10%, show names and new salary
const updatedIT = employees
  .filter((emp) => emp.dept === "IT")
  .filter((emp) => emp.active === true)
  .map((emp) => ({
    name: emp.name,
    newSalary: emp.salary * 1.1
  }));

console.log(updatedIT);
// [
//   { name: "Alice", newSalary: 5500 },
//   { name: "Diana", newSalary: 6050 }
// ]
```

---

## 10. Key Takeaways

✅ **`map()`** when you want to:
- Transform each element to something new
- Keep the same number of items
- Change the data structure or values

✅ **`filter()`** when you want to:
- Keep only items that match a condition
- Remove items that don't match
- Get a smaller array

✅ **Chaining** when you want to:
- Apply multiple transformations in sequence
- Keep code clean and readable
- Avoid intermediate variables

❌ **Avoid:**
- Creating too many intermediate variables
- Using `forEach()` when you should use `map()` or `filter()`
- Breaking chains unnecessarily

---

## 11. Practice Exercises

### Exercise 1: Double and Filter
```javascript
const nums = [1, 2, 3, 4, 5];
// Double each number, then keep only > 5
// Expected: [6, 8, 10]

const result = nums
  .map((n) => n * 2)
  .filter((n) => n > 5);

console.log(result);
```

### Exercise 2: Transform Objects
```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 }
];

// Get users 18+, then show only names
// Expected: ["Alice", "Charlie"]

const adults = users
  .filter((user) => user.age >= 18)
  .map((user) => user.name);

console.log(adults);
```

### Exercise 3: Complex Chaining
```javascript
const products = [
  { id: 1, price: 100, inStock: true },
  { id: 2, price: 50, inStock: false },
  { id: 3, price: 200, inStock: true }
];

// Get in-stock items, apply 20% discount, add shipping cost of 10
// Expected: [90 (100*0.8+10), 170 (200*0.8+10)]

const final = products
  .filter((p) => p.inStock)
  .map((p) => p.price * 0.8)
  .map((p) => p + 10);

console.log(final);
```

---

## Summary

**Method chaining** is a powerful technique that makes your code:
- ✅ Cleaner and easier to read
- ✅ More functional and expressive
- ✅ Fewer intermediate variables
- ✅ Step-by-step transformations are clear

**Your code example:**
```javascript
const newNums = myNums
  .map((num) => num * 10)      // Transform: multiply by 10
  .map((num) => num + 1)       // Transform: add 1
  .filter((num) => num > 50);  // Filter: keep only > 50

// Result: [51, 61, 71, 81, 91, 101]
```

This is clean, readable, and shows exactly what transformations happen to the data!
