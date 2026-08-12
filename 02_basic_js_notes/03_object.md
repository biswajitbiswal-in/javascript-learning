# 🔑 JavaScript Objects — Deep Dive

## Object Literals vs Singleton

### Object Literals (Not Singleton)
```javascript
const jsUser = {
    name: "Biswajit",
    age: 18
}
// Every time you create this way, a new object instance is created
// NOT a singleton pattern
```

### Singleton Pattern
```javascript
// Singleton would use constructor functions or closures
// Object literals do NOT create singletons
```

---

## Creating Objects with Properties

### Basic Object
```javascript
const jsUser = {
    name: "Biswajit",
    "full name": "Biswajit Biswal",  // Properties with spaces need quotes
    age: 18,
    location: "Kolkata",
    Email: "biswajitbiswal.in@google.com",
    iSLoggedIn: false,
    lastLoggedIn: ["Friday", "Sunday"]  // Can store arrays
}
```

---

## Symbols as Object Keys

### What are Symbols?
```javascript
const mySym = Symbol("key1")
// Symbol creates a unique identifier
// Useful for hidden/private object keys
```

### Adding Symbols to Objects
```javascript
const jsUser = {
    [mySym]: "key1"  // Use [mySym] to add symbol as key
}

console.log(typeof jsUser[mySym])  // "string" (value type)
console.log(jsUser[mySym])         // "key1"
```

**Why Symbols?**
- Unique & immutable
- Won't conflict with other properties
- Used for special/hidden properties
- Won't appear in normal property enumeration

---

## Accessing Object Properties

### Dot Notation (most common)
```javascript
console.log(jsUser.name)     // "Biswajit"
// Works for standard property names
```

### Bracket Notation
```javascript
console.log(jsUser["Email"])  // "biswajitbiswal.in@google.com"
// Needed for:
// - Properties with spaces
// - Symbols
// - Dynamic keys
```

### Key Differences
```javascript
jsUser.name            // Simple properties ✅
jsUser["full name"]    // Properties with spaces ✅
jsUser[mySym]          // Symbol keys ✅
jsUser[dynamicKey]     // Dynamic/variable keys ✅
```

---

## Modifying Properties

### Updating Values
```javascript
jsUser.Email = "biswajit@google.com"
console.log(jsUser.Email)  // "biswajit@google.com" ✅ Changed

jsUser.Email = "biswajit@microsoft.com"
console.log(jsUser.Email)  // "biswajit@microsoft.com" ✅ Changed again
```

### Preventing Modifications with Object.freeze()

```javascript
Object.freeze(jsUser)
// Now object is LOCKED

jsUser.Email = "newEmail@test.com"
console.log(jsUser.Email)  // Still old value! ❌ Change ignored

// Trying to add new properties also fails
jsUser.newProp = "value"  // ❌ Fails silently
```

**When to use `Object.freeze()`:**
- Lock configuration objects
- Prevent accidental modifications
- Ensure data integrity

---

## Adding Methods to Objects

### Method 1: Regular Function (Recommended)
```javascript
jsUser.greeting = function(){
    console.log("Hello jsUser");
}

jsUser.greeting()  // "Hello jsUser"
// Returns: undefined (prints text, doesn't return value)
```

### Method 2: Function with `this` Keyword
```javascript
jsUser.greetingTwo = function(){
    console.log(`hello user ${this.Email}`);
    // 'this' refers to the jsUser object
}

jsUser.greetingTwo()  // "hello user biswajit@microsoft.com"
```

**What is `this`?**
- `this` = the object the method is called on
- In `jsUser.greetingTwo()`, `this` = `jsUser`
- Lets you access other properties of same object

### Method Execution
```javascript
console.log(jsUser.greeting())   // undefined
// Function runs → prints text → returns nothing

console.log(jsUser.greetingTwo()) // undefined
// Function runs → prints text → returns nothing
```

---

## Common Object Operations

### Adding New Properties
```javascript
jsUser.phone = "9876543210"  // ✅ Added
jsUser["country"] = "India"   // ✅ Added
```

### Deleting Properties
```javascript
delete jsUser.phone           // ✅ Removed
```

### Checking if Property Exists
```javascript
"name" in jsUser              // true
jsUser.hasOwnProperty("name") // true
```

---

## Summary Table

| Task | Syntax | Example |
|------|--------|---------|
| Access property | `obj.prop` or `obj["prop"]` | `jsUser.name` |
| Update property | `obj.prop = value` | `jsUser.Email = "new@mail.com"` |
| Add method | `obj.method = function(){}` | `jsUser.greeting = function(){}` |
| Use `this` in method | `this.prop` | `this.Email` inside method |
| Lock object | `Object.freeze(obj)` | `Object.freeze(jsUser)` |
| Add symbol key | `[Symbol()]` | `[mySym]: "value"` |

---

## Key Takeaways

🔴 **Object Literals are NOT Singletons** — new instances created each time  
🟢 **Bracket notation needed for:** spaces in names, symbols, dynamic keys  
🔵 **`this` keyword:** refers to the object calling the method  
⚠️ **Object.freeze():** prevents all modifications (immutable object)  
⭐ **Symbols:** create unique, hidden object properties
