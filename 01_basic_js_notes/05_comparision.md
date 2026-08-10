# JavaScript Relational & Equality Operators

## 1. Relational Operators

Relational operators are used to **compare two values**.
The result is always a **Boolean value**: `true` or `false`.

### `>` Greater Than

Checks whether the left value is greater than the right value.

```javascript
console.log(3 > 1);  // true
console.log(3 > 5);  // false
```

### `<` Less Than

Checks whether the left value is smaller than the right value.

```javascript
console.log(3 < 1);  // false
console.log(3 < 5);  // true
```

### `>=` Greater Than or Equal To

Checks whether the left value is greater than **or equal to** the right value.

```javascript
console.log(3 >= 1); // true
console.log(3 >= 3); // true
console.log(3 >= 5); // false
```

### `<=` Less Than or Equal To

Checks whether the left value is smaller than **or equal to** the right value.

```javascript
console.log(3 <= 1); // false
console.log(3 <= 3); // true
console.log(3 <= 5); // true
```

---

# 2. Equality Operators

Equality operators are used to check whether two values are equal or not.

## `==` Loose Equality Operator

`==` compares the values after **type conversion** if necessary.

```javascript
console.log(3 == "3"); // true
```

Here:

```text
3       → Number
"3"     → String
```

JavaScript converts `"3"` to a number before comparing.

So:

```text
3 == "3"
   ↓
3 == 3
   ↓
true
```

### `!=` Loose Inequality Operator

`!=` checks whether two values are **not equal**, also allowing type conversion.

```javascript
console.log(3 != "3"); // false
```

Because:

```text
3 == "3"  → true
```

Therefore:

```text
3 != "3"  → false
```

---

# 3. Important Example: `null` and `0`

```javascript
console.log(null == 0);  // false
console.log(null > 0);   // false
console.log(null >= 0);  // true
```

This can look confusing.

### `null == 0`

```javascript
null == 0 // false
```

`null` is **not loosely equal** to `0`.

### `null > 0`

```javascript
null > 0 // false
```

For the relational comparison, `null` is converted to `0`.

So:

```text
null → 0

0 > 0 → false
```

### `null >= 0`

```javascript
null >= 0 // true
```

Again:

```text
null → 0

0 >= 0 → true
```

### Remember this special case:

```javascript
null == 0   // false
null > 0    // false
null >= 0   // true
```

Don't try to apply normal mathematical logic to all JavaScript comparisons because `==` and relational operators follow different conversion rules.

---

# 4. Strict Equality Operator `===`

`===` compares **both value AND data type**.

It does **not** perform type conversion.

```javascript
console.log(3 === "3"); // false
```

Why?

```text
3     → Number
"3"   → String
```

The values may look the same, but their **types are different**.

Therefore:

```text
3 === "3"
     ↓
Different types
     ↓
false
```

### Example

```javascript
console.log(3 === 3);     // true
console.log("3" === "3"); // true
console.log(3 === "3");   // false
```

---

# 5. Strict Inequality Operator `!==`

`!==` checks whether the **value or type is different**.

```javascript
console.log(3 !== "3"); // true
```

Because:

```text
3     → Number
"3"   → String
```

Their types are different, so the result is `true`.

### Examples

```javascript
console.log(3 !== 3);     // false
console.log("3" !== "3"); // false
console.log(3 !== "3");   // true
```

---

# Quick Comparison Table

| Operator | Meaning               | Example     | Result  |
| -------- | --------------------- | ----------- | ------- |
| `>`      | Greater than          | `3 > 1`     | `true`  |
| `<`      | Less than             | `3 < 1`     | `false` |
| `>=`     | Greater than or equal | `3 >= 3`    | `true`  |
| `<=`     | Less than or equal    | `3 <= 3`    | `true`  |
| `==`     | Loose equality        | `3 == "3"`  | `true`  |
| `!=`     | Loose inequality      | `3 != "3"`  | `false` |
| `===`    | Strict equality       | `3 === "3"` | `false` |
| `!==`    | Strict inequality     | `3 !== "3"` | `true`  |

---

# ⭐ Most Important Difference

### Loose equality `==`

Allows **type conversion**:

```javascript
3 == "3" // true
```

### Strict equality `===`

Does **not** allow type conversion:

```javascript
3 === "3" // false
```

### Best practice

In modern JavaScript, prefer:

```javascript
===
!==
```

because they make comparisons more predictable.

---

## Your Complete Code

```javascript
// Relational Operators

console.log(3 > 1);   // true
console.log(3 < 1);   // false
console.log(3 >= 1);  // true
console.log(3 <= 1);  // false

// Loose Equality / Inequality

console.log(3 == "3");  // true
console.log(3 != "3");  // false

// null comparisons

console.log(null == 0);  // false
console.log(null > 0);   // false
console.log(null >= 0);  // true

// Strict Equality / Inequality

console.log(3 === "3");  // false
console.log(3 !== "3");  // true
```
