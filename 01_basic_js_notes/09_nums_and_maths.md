# JavaScript Numbers and Math

# 1. Numbers in JavaScript

A **Number** is a data type used to store numeric values.

```javascript
const score = 567;

console.log(score);
```

Output:

```text
567
```

---

# 2. `new Number()`

You can create a **Number object** using `new Number()`.

```javascript
const balance = new Number(499535553);

console.log(balance);
```

However, for normal JavaScript code, prefer:

```javascript
const balance = 499535553;
```

`new Number()` creates an object instead of a primitive number.

```javascript
console.log(typeof balance);
```

With `new Number()`:

```text
object
```

---

# 3. `toString()`

`toString()` converts a number into a **string**.

```javascript
const balance = 499535553;

console.log(balance.toString());
```

Output:

```text
"499535553"
```

You can then use string properties like `length`.

```javascript
console.log(balance.toString().length);
```

Output:

```text
9
```

### Flow

```text
Number
  ↓
toString()
  ↓
String
  ↓
length
```

---

# 4. `toFixed()`

`toFixed()` controls how many digits appear **after the decimal point**.

```javascript
const balance = 499.535;

console.log(balance.toFixed(2));
```

Output:

```text
499.54
```

Here:

```text
2 → 2 digits after decimal
```

Another example:

```javascript
const number = 5;

console.log(number.toFixed(2));
```

Output:

```text
5.00
```

### Remember

> `toFixed(2)` → **2 digits after decimal**

---

# 5. `toPrecision()`

`toPrecision()` controls the **total number of significant digits**.

```javascript
const otherNumber = 200.5;

console.log(otherNumber.toPrecision(4));
```

Output:

```text
200.5
```

There are 4 significant digits:

```text
2 0 0 5
```

### Important

`toPrecision()` returns a **string**.

```javascript
const result = otherNumber.toPrecision(4);

console.log(typeof result);
```

Output:

```text
string
```

### Easy difference

```text
toFixed()     → digits AFTER decimal
toPrecision() → TOTAL significant digits
```

---

# 6. `toLocaleString()`

`toLocaleString()` formats a number using commas according to the locale.

```javascript
const number = 1000000;

console.log(number.toLocaleString());
```

Output:

```text
1,000,000
```

It makes large numbers easier to read.

```text
1000000
   ↓
1,000,000
```

---

# Number Methods Quick Revision

| Method             | Use                                  |
| ------------------ | ------------------------------------ |
| `toString()`       | Number → String                      |
| `toFixed(n)`       | `n` digits after decimal             |
| `toPrecision(n)`   | `n` significant digits               |
| `toLocaleString()` | Format number with locale separators |

---

# Math in JavaScript

JavaScript provides the built-in **`Math` object** for mathematical operations.

```javascript
console.log(Math);
```

`Math` contains many useful properties and methods.

---

# 7. `Math.abs()`

`Math.abs()` returns the **absolute value** of a number.

It removes the negative sign.

```javascript
console.log(Math.abs(-4));
```

Output:

```text
4
```

Examples:

```javascript
Math.abs(10);   // 10
Math.abs(-10);  // 10
Math.abs(0);    // 0
```

### Remember

> `Math.abs()` → removes `-`

---

# 8. `Math.round()`

`Math.round()` rounds a number to the **nearest integer**.

```javascript
console.log(Math.round(5.9));
```

Output:

```text
6
```

Examples:

```javascript
Math.round(5.4); // 5
Math.round(5.5); // 6
Math.round(5.9); // 6
```

### Easy rule

```text
.5 or higher → goes UP
below .5     → goes DOWN
```

---

# 9. `Math.ceil()`

`Math.ceil()` always rounds **up**.

```javascript
console.log(Math.ceil(3.1));
```

Output:

```text
4
```

Examples:

```javascript
Math.ceil(3.1); // 4
Math.ceil(3.9); // 4
Math.ceil(3.0); // 3
```

### Remember

> `ceil` → ceiling → **UP**

---

# 10. `Math.floor()`

`Math.floor()` always rounds **down**.

```javascript
console.log(Math.floor(5.9));
```

Output:

```text
5
```

Examples:

```javascript
Math.floor(5.9); // 5
Math.floor(5.1); // 5
Math.floor(5.0); // 5
```

### Remember

> `floor` → floor → **DOWN**

---

# 11. `Math.min()`

Returns the **smallest number**.

```javascript
console.log(Math.min(1, 2, 3, 4, 5, 34, 2, 1, 2));
```

Output:

```text
1
```

Example:

```javascript
Math.min(10, 5, 20, 3);
```

Output:

```text
3
```

---

# 12. `Math.max()`

Returns the **largest number**.

```javascript
console.log(Math.max(45, 2, 4, 556, 3, 6));
```

Output:

```text
556
```

Example:

```javascript
Math.max(10, 5, 20, 3);
```

Output:

```text
20
```

---

# 13. `Math.random()`

`Math.random()` generates a random decimal number from:

```text
0 inclusive → 1 exclusive
```

Example:

```javascript
console.log(Math.random());
```

Possible output:

```text
0.438291
```

Every time you run it, the value can be different.

### Important

```text
Math.random()
     ↓
0 ≤ number < 1
```

It can produce:

```text
0
0.25
0.678
0.999...
```

But it will not produce `1`.

---

# 14. Random Number from 1 to 10

You can generate a random integer from **1 to 10** using:

```javascript
console.log(Math.floor(Math.random() * 10) + 1);
```

Possible outputs:

```text
1
2
3
4
5
6
7
8
9
10
```

### How does it work?

```text
Math.random()
     ↓
0 to less than 1
     ↓
× 10
     ↓
0 to less than 10
     ↓
Math.floor()
     ↓
0 to 9
     ↓
+ 1
     ↓
1 to 10
```

---

# 15. Random Number Between `min` and `max`

You can generate a random integer within a range.

Example:

```javascript
const min = 10;
const max = 20;

console.log(
    Math.floor(Math.random() * (max - min + 1)) + min
);
```

This generates a number between:

```text
10 → 20
```

Possible outputs:

```text
10
11
12
13
14
15
16
17
18
19
20
```

### Formula

```javascript
Math.floor(Math.random() * (max - min + 1)) + min
```

### Flow

```text
Math.random()
      ↓
× (max - min + 1)
      ↓
Math.floor()
      ↓
+ min
      ↓
Random integer between min and max
```

---

# 🧠 Math Methods Quick Revision

| Method          | Meaning         | Example           | Result |
| --------------- | --------------- | ----------------- | ------ |
| `Math.abs()`    | Remove negative | `Math.abs(-4)`    | `4`    |
| `Math.round()`  | Nearest integer | `Math.round(5.6)` | `6`    |
| `Math.ceil()`   | Round up        | `Math.ceil(5.1)`  | `6`    |
| `Math.floor()`  | Round down      | `Math.floor(5.9)` | `5`    |
| `Math.min()`    | Smallest        | `Math.min(2,5,1)` | `1`    |
| `Math.max()`    | Largest         | `Math.max(2,5,1)` | `5`    |
| `Math.random()` | Random decimal  | `Math.random()`   | `0–<1` |

---

# ⭐ Most Important Things to Remember

```text
NUMBER
  │
  ├── toString()       → Number → String
  ├── toFixed(2)       → 2 digits after decimal
  ├── toPrecision(4)   → 4 significant digits
  └── toLocaleString() → Add number formatting
```

```text
MATH
 │
 ├── abs()    → Remove negative
 ├── round()  → Nearest
 ├── ceil()   → UP
 ├── floor()  → DOWN
 ├── min()    → Smallest
 ├── max()    → Largest
 └── random() → Random number
```

## 🧠 Super Easy Memory Trick

```text
ABS   → Absolute
ROUND → Nearest
CEIL  → UP
FLOOR → DOWN
MIN   → Smallest
MAX   → Largest
RANDOM → Random
```

### Random Number Formula

For a random integer from **min to max**:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min
```

Example:

```javascript
const min = 10;
const max = 20;

const randomNumber =
    Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);
```

Result will always be an integer between **10 and 20**.
