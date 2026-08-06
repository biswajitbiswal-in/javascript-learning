# JavaScript Type Conversion

## What is Type Conversion?

**Type Conversion** means changing a value from one data type to another.

Example:

```javascript
let age = "20";      // String
let newAge = Number(age); // Number
```

---

# 1. `typeof`

### Theory
The `typeof` operator is used to **check the data type** of a variable or value.

### Syntax

```javascript
typeof value
```

### Example

```javascript
let score = 12;
let name = "Rahul";

console.log(typeof score); // number
console.log(typeof name);  // string
```

---

# 2. `Number()`

### Theory
The `Number()` function converts a value into the **Number** data type.

### Syntax

```javascript
Number(value)
```

### Example

```javascript
let age = "20";

let numAge = Number(age);

console.log(numAge);        // 20
console.log(typeof numAge); // number
```

### Common Outputs

| Input | Output |
|--------|--------|
| `"33"` | `33` |
| `"33abc"` | `NaN` |
| `"abc"` | `NaN` |
| `true` | `1` |
| `false` | `0` |
| `null` | `0` |
| `undefined` | `NaN` |

> **NaN (Not a Number)** means JavaScript could not convert the value into a valid number.

---

# 3. `Boolean()`

### Theory
The `Boolean()` function converts a value into either **true** or **false**.

### Syntax

```javascript
Boolean(value)
```

### Example

```javascript
console.log(Boolean(1));      // true
console.log(Boolean(0));      // false
console.log(Boolean("Hello"));// true
console.log(Boolean(""));     // false
```

### Common Outputs

| Input | Output |
|--------|--------|
| `1` | `true` |
| `0` | `false` |
| `"Hello"` | `true` |
| `""` | `false` |
| `null` | `false` |
| `undefined` | `false` |

> **Tip:** Empty values are usually **false**, while non-empty values are usually **true**.

---

# 4. `String()`

### Theory
The `String()` function converts any value into the **String** data type.

### Syntax

```javascript
String(value)
```

### Example

```javascript
let num = 45;

let str = String(num);

console.log(str);         // "45"
console.log(typeof str);  // string
```

### Common Outputs

| Input | Output |
|--------|--------|
| `45` | `"45"` |
| `true` | `"true"` |
| `false` | `"false"` |
| `null` | `"null"` |

---

# Quick Revision

| Function | Purpose |
|----------|---------|
| `typeof` | Checks the data type of a value. |
| `Number()` | Converts a value into a number. |
| `Boolean()` | Converts a value into `true` or `false`. |
| `String()` | Converts a value into a string. |

---

# Important Points

- `typeof` is used to **identify** the data type.
- `Number()` returns **NaN** if the value cannot be converted into a valid number.
- `Boolean()` returns **false** for `0`, `""`, `null`, `undefined`, and `NaN`.
- `String()` converts any value into text.

---

# Summary

- **Type Conversion** = Changing one data type into another.
- Use `typeof` to check the current type.
- Use `Number()` to convert to a number.
- Use `Boolean()` to convert to `true` or `false`.
- Use `String()` to convert to a string.
