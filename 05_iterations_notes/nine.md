# JavaScript `reduce()` Method - Complete Guide

## Overview
This guide explains the `reduce()` method, which is one of the most powerful array methods. It combines all elements in an array into a **single value**.

---

## 1. Understanding `reduce()`

### What is `reduce()`?
`reduce()` is an array method that **combines/accumulates all array elements into a single value**. It takes a **callback function** that receives an **accumulator** (running total) and processes each element.

### Syntax
```javascript
const result = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);
```

### Parts Explained:
- **accumulator**: Stores the accumulated/combined value (starts with `initialValue`)
- **currentValue**: The current element being processed
- **initialValue**: Starting value for accumulator (0, empty array, empty object, etc.)

### Visual Concept:
```
Array: [1, 2, 3]

Start:        accumulator = 0 (initialValue)
              ↓
Process 1:    accumulator = 0 + 1 = 1
              ↓
Process 2:    accumulator = 1 + 2 = 3
              ↓
Process 3:    accumulator = 3 + 3 = 6
              ↓
Result:       6
```

---

## 2. Your First Code Example - Sum Numbers

### Simple Addition
```javascript
const myNums = [1, 2, 3];

const total = myNums.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(total);  // Output: 6
```

### Step-by-Step Execution:

```
Initial Value: accumulator = 0

ITERATION 1:
  currentValue = 1 (first element)
  accumulator = 0 + 1 = 1
  return 1
  
ITERATION 2:
  currentValue = 2 (second element)
  accumulator = 1 + 2 = 3
  return 3

ITERATION 3:
  currentValue = 3 (third element)
  accumulator = 3 + 3 = 6
  return 6

Final Result: 6
```

### With `console.log()` to See Each Step:
```javascript
const myNums = [1, 2, 3];

const total = myNums.reduce(function(accumulator, currentValue) {
  console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 0);

// Console Output:
// accumulator: 0, currentValue: 1
// accumulator: 1, currentValue: 2
// accumulator: 3, currentValue: 3

console.log(total);  // 6
```

---

## 3. Arrow Function vs Regular Function

### Regular Function Syntax
```javascript
const total = myNums.reduce(function(acc, curr) {
  return acc + curr;
}, 0);
```

### Arrow Function Syntax (Cleaner)
```javascript
const total = myNums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
```

### Implicit Arrow Function (Most Concise)
```javascript
const total = myNums.reduce((acc, curr) => acc + curr, 0);
```

**All three do the same thing!** Use whichever is most readable for your code.

---

## 4. Anatomy of `reduce()`

### Breaking Down the Parameters:

```javascript
array.reduce((accumulator, currentValue, index, array) => {
  // ...
}, initialValue);
```

| Parameter | What it is | Example |
|-----------|-----------|---------|
| **accumulator** | Running total/result | `0` (for addition), `1` (for multiplication), `[]` (for array) |
| **currentValue** | Current element being processed | `1`, `2`, `3` (if array is [1,2,3]) |
| **index** | Position of current element | `0`, `1`, `2` (optional) |
| **array** | Original array | `[1, 2, 3]` (optional) |
| **initialValue** | Starting value for accumulator | `0`, `""`, `{}`, etc. (optional but recommended) |

### Simple Example with Index:
```javascript
const nums = [10, 20, 30];

const result = nums.reduce((acc, curr, index) => {
  console.log(`Index ${index}: acc=${acc}, curr=${curr}`);
  return acc + curr;
}, 0);

// Output:
// Index 0: acc=0, curr=10
// Index 1: acc=10, curr=20
// Index 2: acc=30, curr=30
// Result: 60
```

---

## 5. Shopping Cart Example - Real World Use

### Your Shopping Cart Code:
```javascript
const ShopingCart = [
  {
    itemName: "shirt",
    price: 1000,
    quantity: 2
  },
  {
    itemName: "pants",
    price: 2000,
    quantity: 1
  },
  {
    itemName: "shoes",
    price: 3000,
    quantity: 1
  },
  {
    itemName: "belt",
    price: 200,
    quantity: 3
  }
];

const totalPrice = ShopingCart.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

console.log(`Your total price is ${totalPrice}`);
// Output: Your total price is 8600
```

### Step-by-Step Execution:

```
Initial Value: accumulator = 0

ITERATION 1 (shirt):
  item = { itemName: "shirt", price: 1000, quantity: 2 }
  price * quantity = 1000 * 2 = 2000
  accumulator = 0 + 2000 = 2000
  return 2000

ITERATION 2 (pants):
  item = { itemName: "pants", price: 2000, quantity: 1 }
  price * quantity = 2000 * 1 = 2000
  accumulator = 2000 + 2000 = 4000
  return 4000

ITERATION 3 (shoes):
  item = { itemName: "shoes", price: 3000, quantity: 1 }
  price * quantity = 3000 * 1 = 3000
  accumulator = 4000 + 3000 = 7000
  return 7000

ITERATION 4 (belt):
  item = { itemName: "belt", price: 200, quantity: 3 }
  price * quantity = 200 * 3 = 600
  accumulator = 7000 + 600 = 7600
  return 7600

Final Result: 7600
```

**Wait! Your console output shows 8600, let me recalculate:**
- Shirt: 1000 × 2 = 2000
- Pants: 2000 × 1 = 2000
- Shoes: 3000 × 1 = 3000
- Belt: 200 × 3 = 600
- **Total: 2000 + 2000 + 3000 + 600 = 7600**

(The actual result is 7600, not 8600)

---

## 6. Different Types of `reduce()`

### 1. Sum Numbers
```javascript
const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15
```

### 2. Multiply Numbers
```javascript
const nums = [1, 2, 3, 4];

const product = nums.reduce((acc, num) => acc * num, 1);
// Start with 1 because 0 would make everything 0
console.log(product);  // 24 (1*2*3*4)
```

### 3. Find Maximum Value
```javascript
const nums = [5, 2, 8, 1, 9, 3];

const max = nums.reduce((acc, num) => {
  return num > acc ? num : acc;
}, nums[0]);  // Start with first element

console.log(max);  // 9
```

### 4. Count Occurrences
```javascript
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 3, banana: 2, orange: 1 }
```

### 5. Flatten Array
```javascript
const nested = [[1, 2], [3, 4], [5, 6]];

const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// Or: .concat(arr) OR ...arr (spread operator)

console.log(flat);  // [1, 2, 3, 4, 5, 6]
```

### 6. Group Objects by Property
```javascript
const employees = [
  { name: "Alice", dept: "IT" },
  { name: "Bob", dept: "HR" },
  { name: "Charlie", dept: "IT" },
  { name: "Diana", dept: "HR" }
];

const byDept = employees.reduce((acc, emp) => {
  if (!acc[emp.dept]) {
    acc[emp.dept] = [];
  }
  acc[emp.dept].push(emp.name);
  return acc;
}, {});

console.log(byDept);
// {
//   IT: ["Alice", "Charlie"],
//   HR: ["Bob", "Diana"]
// }
```

---

## 7. `reduce()` vs Other Methods

### Comparison Table:

| Method | Returns | Use Case | Complexity |
|--------|---------|----------|-----------|
| `map()` | New array | Transform each item | Simple |
| `filter()` | New array | Keep matching items | Simple |
| `forEach()` | `undefined` | Loop & perform action | Simple |
| `reduce()` | Single value | Combine into one value | Complex |
| `find()` | Single object | Find first match | Simple |

### When to Use `reduce()`:
- ✅ Sum or multiply numbers
- ✅ Count occurrences
- ✅ Group data
- ✅ Transform array to object
- ✅ Create a single value from array
- ✅ Complex accumulation logic

### When NOT to Use `reduce()`:
- ❌ Just looping (use `forEach()`)
- ❌ Transforming each item (use `map()`)
- ❌ Finding matching items (use `filter()`)
- ❌ Finding one item (use `find()`)

---

## 8. Common `reduce()` Patterns

### Pattern 1: Accumulating a Number
```javascript
const nums = [10, 20, 30];
const total = nums.reduce((acc, num) => acc + num, 0);
// initialValue = 0 (because adding 0 doesn't change result)
```

### Pattern 2: Accumulating an Array
```javascript
const nested = [[1, 2], [3, 4]];
const flat = nested.reduce((acc, arr) => [...acc, ...arr], []);
// initialValue = [] (empty array)
```

### Pattern 3: Accumulating an Object
```javascript
const items = ["a", "b", "a", "c", "b"];
const count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
// initialValue = {} (empty object)
```

### Pattern 4: Complex Calculation
```javascript
const data = [
  { category: "A", value: 100 },
  { category: "B", value: 200 },
  { category: "A", value: 150 }
];

const byCategory = data.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = 0;
  }
  acc[item.category] += item.value;
  return acc;
}, {});

console.log(byCategory);
// { A: 250, B: 200 }
```

---

## 9. Practical Real-World Examples

### Example 1: Shopping Cart Total (Your Code)
```javascript
const cart = [
  { name: "Laptop", price: 1000, qty: 1 },
  { name: "Mouse", price: 25, qty: 2 },
  { name: "Keyboard", price: 75, qty: 1 }
];

const total = cart.reduce((acc, item) => {
  return acc + (item.price * item.qty);
}, 0);

console.log(`Total: $${total}`);  // Total: $1175
```

### Example 2: Calculate Average
```javascript
const grades = [85, 90, 78, 92, 88];

const sum = grades.reduce((acc, grade) => acc + grade, 0);
const average = sum / grades.length;

console.log(`Average: ${average}`);  // Average: 86.6

// Or in one step:
const avg = grades.reduce((acc, grade, i, arr) => {
  acc += grade;
  return i === arr.length - 1 ? acc / arr.length : acc;
}, 0);
```

### Example 3: Word Frequency Counter
```javascript
const text = "hello world hello javascript hello";
const words = text.split(" ");

const frequency = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(frequency);
// { hello: 3, world: 1, javascript: 1 }
```

### Example 4: Total Budget by Category
```javascript
const expenses = [
  { category: "Food", amount: 50 },
  { category: "Transport", amount: 30 },
  { category: "Food", amount: 45 },
  { category: "Entertainment", amount: 60 },
  { category: "Transport", amount: 25 }
];

const byCategory = expenses.reduce((acc, expense) => {
  const existing = acc.find(item => item.category === expense.category);
  if (existing) {
    existing.total += expense.amount;
  } else {
    acc.push({ category: expense.category, total: expense.amount });
  }
  return acc;
}, []);

console.log(byCategory);
// [
//   { category: "Food", total: 95 },
//   { category: "Transport", total: 55 },
//   { category: "Entertainment", total: 60 }
// ]
```

---

## 10. Important: Choosing Initial Value

### With Initial Value (Recommended)
```javascript
const nums = [1, 2, 3];
const sum = nums.reduce((acc, num) => acc + num, 0);
// Start with 0, very clear what we're doing
console.log(sum);  // 6
```

### Without Initial Value (Not Recommended)
```javascript
const nums = [1, 2, 3];
const sum = nums.reduce((acc, num) => acc + num);
// acc starts as first element (1), then num = 2, 3...
console.log(sum);  // Still 6, but less clear
```

### Why Initial Value Matters:
```javascript
// Example: Multiplying with wrong initial value
const nums = [2, 3, 4];

// ❌ Wrong: No initial value
const product1 = nums.reduce((acc, num) => acc * num);
// acc = 2 (first element)
// acc = 2 * 3 = 6
// acc = 6 * 4 = 24
console.log(product1);  // 24

// ✅ Correct: Initial value 1
const product2 = nums.reduce((acc, num) => acc * num, 1);
// acc = 1
// acc = 1 * 2 = 2
// acc = 2 * 3 = 6
// acc = 6 * 4 = 24
console.log(product2);  // 24

// Both work but initial value makes intent clear!
```

---

## 11. Common Mistakes to Avoid

### ❌ Mistake 1: Forgetting Initial Value
```javascript
const nums = [1, 2, 3];

// Might not work as expected with empty arrays
const sum = nums.reduce((acc, num) => acc + num);  // No initial value
// Better:
const sum = nums.reduce((acc, num) => acc + num, 0);  // With initial value
```

### ❌ Mistake 2: Forgetting to Return
```javascript
const nums = [1, 2, 3];

// ❌ Wrong: No return
const sum = nums.reduce((acc, num) => {
  acc + num;  // Forgot return!
}, 0);
console.log(sum);  // undefined

// ✅ Correct: With return
const sum = nums.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log(sum);  // 6
```

### ❌ Mistake 3: Wrong Initial Value Type
```javascript
const nums = [1, 2, 3];

// ❌ Wrong: Numeric addition with string
const sum = nums.reduce((acc, num) => acc + num, "");
console.log(sum);  // "123" (string concatenation, not addition!)

// ✅ Correct: Use 0 for addition
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 6
```

### ❌ Mistake 4: Mutating Objects in Array
```javascript
// ❌ Avoid mutating original array items
const items = [
  { price: 100 },
  { price: 200 }
];

const total = items.reduce((acc, item) => {
  item.price += 10;  // Mutating original!
  return acc + item.price;
}, 0);

// ✅ Better: Don't mutate, just calculate
const total = items.reduce((acc, item) => {
  return acc + item.price;
}, 0);
```

---

## 12. `reduce()` Chained with Other Methods

### Combine reduce() with Other Methods
```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Get even numbers and sum them
const result = numbers
  .filter(num => num % 2 === 0)  // [2, 4, 6]
  .map(num => num * 10)           // [20, 40, 60]
  .reduce((acc, num) => acc + num, 0);  // 120

console.log(result);  // 120
```

### Reduce at Different Positions
```javascript
const products = [
  { name: "A", price: 100, quantity: 2 },
  { name: "B", price: 50, quantity: 3 }
];

// Calculate total price
const total1 = products.reduce((acc, p) => acc + (p.price * p.quantity), 0);

// Same calculation after filter
const total2 = products
  .filter(p => p.price > 40)
  .reduce((acc, p) => acc + (p.price * p.quantity), 0);

console.log(total1);  // 350
console.log(total2);  // 350
```

---

## 13. Key Takeaways

✅ **`reduce()`** is used for:
- Combining array elements into a single value
- Calculating totals, products, counts
- Transforming arrays into objects
- Complex accumulation logic

✅ **Always provide:**
- A clear initial value
- A return statement in the callback
- Meaningful accumulator name (`acc`, `total`, etc.)

✅ **Basic Pattern:**
```javascript
const result = array.reduce((accumulator, currentValue) => {
  return accumulator + someCalculation;
}, initialValue);
```

✅ **Choose the right initial value:**
- `0` for addition/subtraction
- `1` for multiplication
- `""` for string concatenation
- `[]` for array flattening
- `{}` for grouping/counting

---

## 14. Practice Exercises

### Exercise 1: Sum Numbers
```javascript
const nums = [5, 10, 15, 20];
// Sum all numbers
// Expected: 50

const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum);
```

### Exercise 2: Find Maximum
```javascript
const nums = [3, 7, 2, 9, 1];
// Find the maximum number
// Expected: 9

const max = nums.reduce((acc, num) => num > acc ? num : acc, nums[0]);
console.log(max);
```

### Exercise 3: Count Occurrences
```javascript
const colors = ["red", "blue", "red", "green", "blue", "red"];
// Count each color
// Expected: { red: 3, blue: 2, green: 1 }

const count = colors.reduce((acc, color) => {
  acc[color] = (acc[color] || 0) + 1;
  return acc;
}, {});
console.log(count);
```

### Exercise 4: Calculate Invoice Total
```javascript
const items = [
  { description: "Item A", price: 100, qty: 2 },
  { description: "Item B", price: 50, qty: 3 },
  { description: "Item C", price: 200, qty: 1 }
];
// Calculate total (price * qty for all items)
// Expected: 650

const total = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
console.log(total);
```

---

## Summary

`reduce()` is one of the most powerful array methods in JavaScript. It takes an array and **reduces it** to a single value by applying a function that accumulates results.

**Your Shopping Cart Example:**
```javascript
const ShopingCart = [
  { itemName: "shirt", price: 1000, quantity: 2 },
  { itemName: "pants", price: 2000, quantity: 1 },
  { itemName: "shoes", price: 3000, quantity: 1 },
  { itemName: "belt", price: 200, quantity: 3 }
];

const totalPrice = ShopingCart.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

console.log(`Your total price is ${totalPrice}`);  // 7600
```

This is a perfect real-world use case of `reduce()` - calculating a total from a list of items!
