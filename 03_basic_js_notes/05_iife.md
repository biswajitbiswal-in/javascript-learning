# Immediately Invoked Function Expressions (IIFE) - Complete Guide

## Definition

An **Immediately Invoked Function Expression (IIFE)** is a JavaScript function that is defined and executed immediately after its creation. It runs as soon as it's declared, without requiring a separate function call.

### Key Characteristics:
- **Anonymous or Named**: Can be either anonymous or have a name (though the name is only accessible inside the function)
- **Self-Executing**: Invoked immediately upon declaration
- **Creates Own Scope**: Creates its own execution context and scope
- **No Global Pollution**: Variables declared inside don't pollute the global scope

---

## Syntax Patterns

### Pattern 1: Anonymous IIFE with Parentheses
```javascript
(function() {
    console.log("I execute immediately!");
})();
```

### Pattern 2: Named IIFE
```javascript
(function chai() {
    console.log("Named IIFE");
    // 'chai' is only accessible inside this function
})();

// chai(); // Error: chai is not defined (outside the function)
```

### Pattern 3: Arrow Function IIFE
```javascript
(() => {
    console.log("Arrow function IIFE");
})();
```

### Pattern 4: IIFE with Parameters
```javascript
((name) => {
    console.log(`Hello ${name}`);
})("RAHUL");
// Output: Hello RAHUL
```

### Pattern 5: Async IIFE
```javascript
(async () => {
    const data = await fetch('https://api.example.com/data');
    console.log(data);
})();
```

---

## Your Code Explained

### Example 1: Named IIFE
```javascript
(function chai() {
    // Named IIFE
    console.log(`DB CONNECTED`);
})();
```

**What happens:**
1. `function chai()` is defined
2. The parentheses `()` at the end immediately invoke/execute it
3. "DB CONNECTED" is logged to the console
4. The function is created and destroyed immediately
5. `chai` is NOT accessible outside (it's not in global scope)

### Example 2: Arrow Function IIFE with Parameter
```javascript
((NAME) => {
    console.log(`DB CONNECTED TWO ${NAME}`);
})("RAHUL");
```

**What happens:**
1. An arrow function is defined that accepts a parameter `NAME`
2. The function is immediately invoked with the argument `"RAHUL"`
3. Inside, `NAME` equals `"RAHUL"`
4. Output: "DB CONNECTED TWO RAHUL"

---

## Why Use IIFE?

### 1. **Avoid Global Scope Pollution**

**Without IIFE (Pollutes Global Scope):**
```javascript
var counter = 0;
var userName = "John";

function incrementCounter() {
    counter++;
}

// counter and userName are now in global scope
console.log(counter); // Accessible globally
console.log(userName); // Accessible globally
```

**Problems:**
- `counter` and `userName` can be accessed/modified from anywhere
- Risk of naming conflicts with other code
- Difficult to maintain in large applications

**With IIFE (Protected Scope):**
```javascript
(function() {
    var counter = 0;
    var userName = "John";

    function incrementCounter() {
        counter++;
    }
})();

// console.log(counter); // Error: counter is not defined
// console.log(userName); // Error: userName is not defined
```

**Benefits:**
- `counter` and `userName` are private to the IIFE
- No risk of global namespace pollution
- Safe and encapsulated

### 2. **Module Pattern**

Create private and public variables:

```javascript
const calculator = (function() {
    // Private variables
    let result = 0;

    // Private function
    function log(value) {
        console.log(`Current result: ${value}`);
    }

    // Public interface (returned object)
    return {
        add: function(x) {
            result += x;
            log(result);
            return this; // for chaining
        },
        subtract: function(x) {
            result -= x;
            log(result);
            return this;
        },
        getResult: function() {
            return result;
        }
    };
})();

calculator.add(5).subtract(2).add(3);
console.log(calculator.getResult()); // 6

// Cannot access private variables
// console.log(calculator.result); // undefined
// calculator.log(); // Error: log is not a function
```

### 3. **Avoid Variable Conflicts**

**Problem without IIFE:**
```javascript
// Library 1
var config = { theme: "light" };

// Library 2 (by different developer)
var config = { theme: "dark" }; // Overwrites Library 1's config!
```

**Solution with IIFE:**
```javascript
// Library 1
const lib1 = (function() {
    var config = { theme: "light" };
    return { getTheme: () => config.theme };
})();

// Library 2
const lib2 = (function() {
    var config = { theme: "dark" };
    return { getTheme: () => config.theme };
})();

console.log(lib1.getTheme()); // "light"
console.log(lib2.getTheme()); // "dark"
```

### 4. **Execute Code Immediately**

Useful for initialization and setup:

```javascript
(function initializeApp() {
    console.log("App is initializing...");
    
    // Connect to database
    connectDB();
    
    // Load configuration
    loadConfig();
    
    // Start server
    startServer();
})();
```

### 5. **Create Singleton Pattern**

```javascript
const database = (function() {
    let instance = null;

    function createConnection() {
        return { connected: true };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createConnection();
            }
            return instance;
        }
    };
})();

const db1 = database.getInstance();
const db2 = database.getInstance();

console.log(db1 === db2); // true (same instance)
```

### 6. **Pass Global Object as Parameter**

```javascript
(function(global) {
    // 'global' refers to the global object (window in browser, global in Node.js)
    global.myGlobalVar = "I'm global";
    
    var privateVar = "I'm private";
})(typeof window !== 'undefined' ? window : global);

console.log(myGlobalVar); // "I'm global"
```

---

## Real-World Examples

### Example 1: Database Connection Setup

```javascript
const db = (function() {
    // Private variables
    let isConnected = false;
    let connectionPool = [];

    // Private methods
    function validateConnection() {
        return connectionPool.length > 0;
    }

    // Public interface
    return {
        connect: function(url) {
            connectionPool.push(url);
            isConnected = true;
            console.log(`Connected to ${url}`);
        },
        isReady: function() {
            return validateConnection();
        },
        query: function(sql) {
            if (isConnected) {
                return `Executed: ${sql}`;
            } else {
                throw new Error("Database not connected");
            }
        }
    };
})();

db.connect("mongodb://localhost:27017");
console.log(db.query("SELECT * FROM users"));
```

### Example 2: Feature Flag System

```javascript
const featureFlags = (function() {
    const features = {
        darkMode: true,
        betaFeatures: false,
        analytics: true
    };

    return {
        isEnabled: function(feature) {
            return features[feature] || false;
        },
        enable: function(feature) {
            features[feature] = true;
        },
        disable: function(feature) {
            features[feature] = false;
        }
    };
})();

if (featureFlags.isEnabled('darkMode')) {
    console.log("Dark mode is ON");
}
```

### Example 3: Counter with Closure

```javascript
const counter = (function() {
    let count = 0; // Private variable

    return function() {
        return ++count; // Increments and returns
    };
})();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

---

## IIFE vs Regular Functions

### Regular Function
```javascript
function regularFunc() {
    console.log("Regular function");
}

regularFunc(); // Must be called explicitly
regularFunc(); // Can be called multiple times
```

### IIFE
```javascript
(function() {
    console.log("IIFE");
})(); // Executes immediately, only once
```

### Comparison Table

| Feature | Regular Function | IIFE |
|---------|-----------------|------|
| Execution | Manual call required | Automatic/immediate |
| Scope | Global (if declared globally) | Own scope |
| Reusability | Can be called multiple times | Runs once |
| Variable Pollution | Can pollute global scope | Encapsulated |
| Use Case | Reusable functions | One-time setup, module pattern |

---

## Common Use Cases Summary

1. **Module Pattern** - Create public/private interfaces
2. **Avoid Naming Conflicts** - Isolate variables
3. **Setup/Initialization** - Run initialization code once
4. **Create Closures** - Maintain state between invocations
5. **Library Wrapping** - Prevent library code from polluting global scope
6. **Singleton Pattern** - Ensure only one instance exists
7. **Async Initialization** - Modern async/await IIFEs for initialization

---

## Modern Alternatives

In modern JavaScript with ES6 modules, you don't need IIFE as much because modules provide scope isolation. However, IIFE is still useful for:

```javascript
// ES6 Module (Modern approach)
export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// IIFE (Still useful for initialization and wrapping existing code)
(async () => {
    const data = await fetchInitialData();
    startApplication(data);
})();
```

---

## Key Takeaways

✅ IIFE executes immediately upon creation  
✅ Creates its own scope, preventing global pollution  
✅ Useful for creating private variables and methods  
✅ Popular for the Module Pattern  
✅ Prevents naming conflicts  
✅ Can accept parameters and return values  
✅ Can be named or anonymous  
✅ Still relevant in modern JavaScript for initialization  

---

## Quick Reference

```javascript
// Basic IIFE
(function() { /* code */ })();

// With parameter
(function(param) { /* code */ })(value);

// Arrow function
(() => { /* code */ })();

// Named IIFE
(function name() { /* code */ })();

// Async IIFE
(async () => { /* await code */ })();

// IIFE with return value
const result = (function() { return 42; })();
```

---

*Happy coding! 🚀*
