# JavaScript: For-Of Loops & Maps

## For-Of Loop

The **for-of loop** is a modern way to iterate over iterable objects (arrays, strings, Maps, Sets, etc.). It's cleaner than traditional `for` loops and more readable than `forEach`.

### Syntax
```javascript
for (const element of iterable) {
    // code to execute
}
```

### Example 1: Iterating Over Arrays
```javascript
const Arr = [1, 2, 3, 4, 5, 6, 7]
for (const element of Arr) {
    console.log(element);
}
```

**Output:**
```
1
2
3
4
5
6
7
```

**Key Points:**
- `element` contains the **value** (not the index)
- Works with any array type
- Cannot access index directly (use `for` loop if you need it)

### Example 2: Iterating Over Strings
```javascript
const string = "Hello world!"
for (const greet of string) {
    console.log(`Each character: ${greet}`);
}
```

**Output:**
```
Each character: H
Each character: e
Each character: l
Each character: l
Each character: o
Each character: 
Each character: w
Each character: o
Each character: r
Each character: l
Each character: d
Each character: !
```

**Key Points:**
- Strings are iterable - each iteration gives one character
- Perfect for character-level operations
- Includes spaces and special characters

---

## Maps

A **Map** is a collection of key-value pairs where keys can be of **any data type** (unlike objects where keys are strings). Maps maintain insertion order.

### Map Syntax & Methods

```javascript
// Create a new Map
const map = new Map()

// Add items using set()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('IN', "INDIA")  // Overwrites previous value

// Get value by key
console.log(map.get("USA"));  // Output: UNITED STATES OF AMERICA

// Print entire Map
console.log(map);
```

### Map Methods Reference

| Method | Description | Example |
|--------|-------------|---------|
| `set(key, value)` | Adds/updates a key-value pair | `map.set('IN', 'INDIA')` |
| `get(key)` | Retrieves value by key | `map.get('IN')` |
| `has(key)` | Checks if key exists | `map.has('USA')` → `true` |
| `delete(key)` | Removes a key-value pair | `map.delete('IN')` |
| `clear()` | Removes all items | `map.clear()` |
| `size` | Returns number of items | `map.size` |

### Iterating Over Maps using For-Of

```javascript
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
```

**Output:**
```
IN :- INDIA
USA :- UNITED STATES OF AMERICA
```

**Key Points:**
- Use **destructuring** `[key, value]` to extract both key and value
- Maps preserve insertion order
- Each iteration returns an array `[key, value]`
- Duplicate keys overwrite previous values (note: `'IN'` is set twice, but appears once)

### Why Use Maps Instead of Objects?

| Feature | Map | Object |
|---------|-----|--------|
| **Key Type** | Any type | String or Symbol |
| **Order** | Maintains insertion order | Not guaranteed |
| **Size Property** | `.size` property | Manual count needed |
| **Performance** | Optimized for frequent additions/deletions | Slower for dynamic data |
| **Iteration** | Can use for-of | Need Object.entries() or keys() |

---

## Objects vs Maps: Iteration Comparison

### ❌ Objects Don't Work Directly with For-Of

```javascript
const myObject = {
    'game1': 'spiderman',
    'game2': 'dicerolling'
}

// ❌ This will NOT work!
for (const [key, value] of myObject) {
    console.log(key, ":-", value);
}
// Error: myObject is not iterable
```

### ✅ Correct Ways to Iterate Objects

**Option 1: Using Object.entries()**
```javascript
const myObject = {
    'game1': 'spiderman',
    'game2': 'dicerolling'
}

for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ":-", value);
}
```

**Output:**
```
game1 :- spiderman
game2 :- dicerolling
```

**Option 2: Using Object.keys()**
```javascript
for (const key of Object.keys(myObject)) {
    console.log(key, ":-", myObject[key]);
}
```

**Option 3: Using for-in (older method)**
```javascript
for (const key in myObject) {
    console.log(key, ":-", myObject[key]);
}
```

---

## Map vs Object: Quick Reference

### Use **Maps** when:
- Keys are not strings (numbers, objects, etc.)
- You need to frequently add/remove items
- Order matters
- You need the `.size` property
- You're building a lookup table or cache

### Use **Objects** when:
- Keys are always strings
- You're representing real-world entities (user, product, etc.)
- You need a simple key-value structure
- Working with JSON data

### Example: Maps with Non-String Keys

```javascript
const userMap = new Map()

// Objects as keys
const user1 = { id: 1 }
const user2 = { id: 2 }

userMap.set(user1, 'Alice')
userMap.set(user2, 'Bob')
userMap.set(123, 'Numeric key')  // Numbers as keys

console.log(userMap.get(user1));  // Output: Alice
console.log(userMap.get(123));    // Output: Numeric key
```

---

## Loop Comparison: Which to Use?

| Loop Type | Best For | Pros | Cons |
|-----------|----------|------|------|
| **for** | Arrays (when you need index) | Full control | Verbose |
| **for-of** | Arrays, Strings, Maps, Sets | Clean, readable | No index access |
| **forEach** | Arrays, callback needed | Functional style | Can't break early |
| **for-in** | Objects (legacy) | Works with objects | Iterates inherited properties |
| **Object.entries()** | Modern object iteration | Pairs with for-of | Extra function call |

---

## Best Practices

✅ **Do:**
```javascript
// Use for-of for arrays
const numbers = [1, 2, 3]
for (const num of numbers) {
    console.log(num)
}

// Use Maps for key-value pairs
const cache = new Map()
cache.set('user_1', userData)

// Use Object.entries() for objects
const config = { debug: true, version: '1.0' }
for (const [key, value] of Object.entries(config)) {
    console.log(key, value)
}
```

❌ **Avoid:**
```javascript
// Don't use for-of on plain objects (won't work)
for (const [key, value] of myObject) { }

// Don't use for-in for arrays (includes prototype properties)
for (const index in myArray) {
    console.log(myArray[index])  // Works but not recommended
}

// Don't use Objects when you need non-string keys
const map = {}
map[{id: 1}] = 'value'  // Key becomes "[object Object]"
```

---

## Summary

- **For-Of Loop**: Clean iteration for arrays, strings, and iterables
- **Maps**: Better for key-value pairs, especially with non-string keys
- **Objects**: Use for simple key-value data with string keys
- **Object.entries()**: Bridge between objects and modern iteration patterns
