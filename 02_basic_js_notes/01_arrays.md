# JavaScript Arrays & Array Methods

## Array Creation

### Method 1: Array Literal
```javascript
const myArray = [0,1,2,3,4,5,6]
const myR2 = ["RAHUL","RAJESH"]
```
- Most common and clean way to create arrays
- Can hold any data type (numbers, strings, etc.)

### Method 2: Array Constructor
```javascript
const myArr2 = new Array(0,1,2,3,4,5)
```
- Creates array using the `new` keyword
- Less commonly used than array literals

---

## Common Array Methods

### **Adding/Removing Elements from End**

#### `push()` - Add element to end
```javascript
myArr2.push(7)  // Adds 7 at the end
// Modifies original array ✅
// Returns: new length of array
```

#### `pop()` - Remove element from end
```javascript
myArr2.pop()  // Removes last element
// Modifies original array ✅
// Returns: removed element
```

### **Adding/Removing Elements from Start**

#### `unshift()` - Add element to start
```javascript
myArr2.unshift(8)  // Adds 8 at the beginning
// Modifies original array ✅
// Returns: new length of array
```

#### `shift()` - Remove element from start
```javascript
myArr2.shift()  // Removes first element
// Modifies original array ✅
// Returns: removed element
```

---

## Search Methods

### `includes()` - Check if element exists
```javascript
myArr2.includes(9)  // Returns: true or false
// Does NOT modify array
```

### `indexOf()` - Find position of element
```javascript
myArr2.indexOf(8)  // Returns: index number or -1 if not found
// Does NOT modify array
```

---

## String Conversion

### `join()` - Convert array to string
```javascript
const mynewArray = myArr2.join()
// Creates a string from array elements separated by commas
// Original array: [0,1,2,3,4,5]
// Result: "0,1,2,3,4,5"
// Returns: String
// Original array NOT modified
```

---

## Critical Difference: `slice()` vs `splice()`

### `slice()` - Extract portion (Non-destructive)
```javascript
const myar1 = myArr2.slice(1,3)
// Returns elements at index 1 and 2 (3 is excluded)
// Does NOT modify original array ❌
// Returns: new array with extracted elements
```

**Example:**
```javascript
console.log("A", myArr2);      // Original: [0,1,2,3,4,5]
const myar1 = myArr2.slice(1,3)
console.log(myar1);             // [1,2]
console.log("B", myArr2);       // Still [0,1,2,3,4,5] ✅ Unchanged
```

### `splice()` - Remove/Replace portion (Destructive)
```javascript
const myar2 = myArr2.splice(1,3)
// Removes 3 elements starting at index 1
// MODIFIES original array ✅
// Returns: array of removed elements
```

**Example:**
```javascript
console.log("B", myArr2);       // Before: [0,1,2,3,4,5]
const myar2 = myArr2.splice(1,3)
console.log(myar2);             // [1,2,3] - removed elements
console.log("C", myArr2);       // After: [0,4,5] ✅ Changed
```

---

## Summary Table

| Method | Adds/Removes | Position | Modifies Original | Returns |
|--------|--------------|----------|-------------------|---------|
| `push()` | Adds | End | ✅ Yes | New length |
| `pop()` | Removes | End | ✅ Yes | Removed element |
| `unshift()` | Adds | Start | ✅ Yes | New length |
| `shift()` | Removes | Start | ✅ Yes | Removed element |
| `slice()` | - | Any | ❌ No | New array |
| `splice()` | Adds/Removes | Any | ✅ Yes | Removed elements |
| `includes()` | - | - | ❌ No | Boolean |
| `indexOf()` | - | - | ❌ No | Number or -1 |
| `join()` | - | - | ❌ No | String |

---

## Key Takeaways

🔴 **Mutating Methods** (modify original array):
- `push()`, `pop()`, `unshift()`, `shift()`, `splice()`

🟢 **Non-mutating Methods** (don't modify original):
- `slice()`, `join()`, `includes()`, `indexOf()`

⚠️ **Most Important Difference:**
- **`slice()`** = Safe copy (doesn't change original)
- **`splice()`** = Dangerous (changes original array)
