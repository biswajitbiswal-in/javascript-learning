# JavaScript Variables (`const`, `let`, `var`)

## What are Variables?

A **variable** is a container used to **store data** in memory.  
The value stored in a variable can be used and changed later (depending on how it is declared).

Example:

```javascript
let name = "Biswajit";
```

Here, `name` is a variable that stores the string `"Biswajit"`.

---

# Ways to Declare Variables

JavaScript provides three keywords to declare variables:

- `const`
- `let`
- `var`

---

# 1. `const`

## Theory

- `const` is used to declare a **constant variable**.
- Its value **cannot be changed** after declaration.
- It **must be initialized** when declared.

### Syntax

```javascript
const variableName = value;
```

### Example

```javascript
const accountId = 123454;

console.log(accountId);
```

❌ Not Allowed

```javascript
accountId = 123456;
```

Output

```text
TypeError: Assignment to constant variable.
```

---

# 2. `let`

## Theory

- `let` is used for variables whose values **can change**.
- It is the **recommended** way to declare variables.
- It follows **block scope**, making code safer and easier to manage.

### Syntax

```javascript
let variableName = value;
```

### Example

```javascript
let accountEmail = "biswajit@google.edu.in";

accountEmail = "rahul@microsoft.com";

console.log(accountEmail);
```

Output

```text
rahul@microsoft.com
```

---

# 3. `var`

## Theory

- `var` is the **old way** of declaring variables.
- Its value can be changed.
- It has **function scope**, which can cause unexpected behavior.
- Modern JavaScript recommends using **`let`** instead of `var`.

### Syntax

```javascript
var variableName = value;
```

### Example

```javascript
var accountPassword = "123454";

accountPassword = "154789";

console.log(accountPassword);
```

Output

```text
154789
```

---

# Variables Without a Keyword

A variable can be created without `let`, `const`, or `var`, but **this is not recommended** because it becomes a global variable.

### Example

```javascript
accountCity = "Bhubaneswar";
```

Later,

```javascript
accountCity = "Bangalore";
```

Output

```text
Bangalore
```

> **Best Practice:** Always declare variables using `let` or `const`.

---

# Undefined Variables

If a variable is declared but **not assigned a value**, JavaScript gives it the value `undefined`.

### Example

```javascript
let accountState;

console.log(accountState);
```

Output

```text
undefined
```

---

# `console.log()`

## Theory

`console.log()` is used to print a single value in the console.

### Example

```javascript
console.log(accountId);
```

Output

```text
123454
```

---

# `console.table()`

## Theory

`console.table()` displays multiple values in a table format, making the output easier to read.

### Example

```javascript
console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
]);
```

Output

| (Index) | Value |
|---------:|---------------------------|
| 0 | 123454 |
| 1 | rahul@microsoft.com |
| 2 | 154789 |
| 3 | Bangalore |
| 4 | undefined |

---

# Complete Example

```javascript
const accountId = 123454;
let accountEmail = "biswajit@google.edu.in";
var accountPassword = "123454";
accountCity = "Bhubaneswar";
let accountState;

// accountId = 123456; ❌ Not Allowed

accountEmail = "rahul@microsoft.com";
accountPassword = "154789";
accountCity = "Bangalore";

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
]);
```

---

# Difference Between `const`, `let`, and `var`

| Feature | `const` | `let` | `var` |
|---------|---------|--------|--------|
| Can change value? | ❌ No | ✅ Yes | ✅ Yes |
| Must assign value while declaring? | ✅ Yes | ❌ No | ❌ No |
| Scope | Block | Block | Function |
| Can be redeclared? | ❌ No | ❌ No | ✅ Yes |
| Recommended? | ✅ Yes | ✅ Yes | ❌ No |

---

# Best Practices

- Use **`const`** when the value should not change.
- Use **`let`** when the value may change.
- Avoid using **`var`** in modern JavaScript.
- Never create variables without `let`, `const`, or `var`.

---

# Quick Revision

- **Variable:** Stores data in memory.
- **`const`:** Cannot be reassigned.
- **`let`:** Can be reassigned (recommended).
- **`var`:** Old method, avoid using it.
- **`undefined`:** Variable declared but no value assigned.
- **`console.log()`:** Prints a value.
- **`console.table()`:** Displays values in a table.
