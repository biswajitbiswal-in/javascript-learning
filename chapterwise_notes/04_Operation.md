# JavaScript Operations

## What are Operators?

**Operators** are symbols used to perform operations on values.

Example:

```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
```

Here, `+` is an **operator**.

---

# 1. Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

| Operator | Meaning        | Example  | Result     |
| -------- | -------------- | -------- | ---------- |
| `+`      | Addition       | `3 + 2`  | `5`        |
| `-`      | Subtraction    | `3 - 2`  | `1`        |
| `*`      | Multiplication | `7 * 7`  | `49`       |
| `/`      | Division       | `30 / 9` | `3.333...` |
| `%`      | Remainder      | `30 % 9` | `3`        |
| `**`     | Power          | `5 ** 2` | `25`       |

### Example

```javascript
console.log(3 + 2);  // 5
console.log(3 - 2);  // 1
console.log(7 * 7);  // 49
console.log(30 / 9); // 3.333...
console.log(30 % 9); // 3
console.log(5 ** 2); // 25
```

### `%` Modulus

`%` gives the **remainder** after division.

```javascript
console.log(10 % 3);
```

Output:

```text
1
```

Because:

```text
10 ÷ 3 = 3 remainder 1
```

---

# 2. Unary Minus `-`

Unary `-` changes a number to its negative value.

```javascript
let value = 8;
let negValue = -value;

console.log(negValue);
```

Output:

```text
-8
```

Think:

```text
8 → -8
```

---

# 3. String Concatenation

When `+` is used with strings, it **joins/concatenates** them.

### Example

```javascript
let str1 = "Hello";
let str2 = " Rahul";

console.log(str1 + str2);
```

Output:

```text
Hello Rahul
```

Here `+` is joining two strings.

---

# 4. Number + String

When `+` is used with a string and a number, JavaScript converts the number to a string and joins them.

```javascript
console.log(4 + "6");
```

Output:

```text
46
```

The number `4` becomes `"4"`.

```text
"4" + "6" = "46"
```

Similarly:

```javascript
console.log("4" + 6);
```

Output:

```text
46
```

---

# 5. Important: Left-to-Right Evaluation

This is very important when `+` is used with strings.

JavaScript evaluates the expression **from left to right**.

### Example

```javascript
console.log("1" + 2 + 2);
```

Output:

```text
122
```

### Why?

First:

```text
"1" + 2
```

Since `"1"` is a string:

```text
"12"
```

Then:

```text
"12" + 2
```

Result:

```text
"122"
```

So:

```text
"1" + 2 + 2
     ↓
  "12" + 2
     ↓
    "122"
```

---

# 6. Number First, String Later

Now look at this:

```javascript
console.log(1 + 2 + "3");
```

Output:

```text
33
```

### Why?

First:

```text
1 + 2 = 3
```

Then:

```text
3 + "3"
```

Because `"3"` is a string:

```text
"33"
```

So:

```text
1 + 2 + "3"
    ↓
  3 + "3"
    ↓
   "33"
```

### Remember

The position of the string matters.

```javascript
"1" + 2 + 2 // "122"
1 + 2 + "3" // "33"
```

---

# 7. Unary Plus `+`

Unary `+` is used before a value to convert it into a **number**.

### Example

```javascript
console.log(+"5");
```

Output:

```text
5
```

Here `"5"` is a string, but unary `+` converts it to a number.

```javascript
console.log(typeof +"5");
```

Output:

```text
number
```

### Example with Boolean

```javascript
console.log(+true);
```

Output:

```text
1
```

Because:

```text
true → 1
false → 0
```

Example:

```javascript
console.log(+false); // 0
```

### Empty String

```javascript
console.log(+"");
```

Output:

```text
0
```

An empty string converts to `0` when converted to a number.

---

# 8. Multiple Assignment

You can assign the same value to multiple variables.

```javascript
let num1, num2, num3;

num1 = num2 = num3 = 3 + 3;
```

First:

```text
3 + 3 = 6
```

Then:

```text
num3 = 6
num2 = 6
num1 = 6
```

So:

```javascript
console.log(num1); // 6
console.log(num2); // 6
console.log(num3); // 6
```

---

# 9. Increment Operator `++`

The `++` operator increases a number by **1**.

### Example

```javascript
let gameCounter = 200;

gameCounter++;

console.log(gameCounter);
```

Output:

```text
201
```

This:

```javascript
gameCounter++;
```

is basically:

```javascript
gameCounter = gameCounter + 1;
```

---

# 10. Decrement Operator `--`

The `--` operator decreases a number by **1**.

```javascript
let score = 10;

score--;

console.log(score);
```

Output:

```text
9
```

It is the same as:

```javascript
score = score - 1;
```

---

# 11. Assignment Operators

Assignment operators are used to **assign a value to a variable or update its existing value**.

## Basic Assignment `=`

The `=` operator assigns a value to a variable.

```javascript
let x = 10;
```

Here, `10` is assigned to `x`.

---

## Addition Assignment `+=`

Adds a value to the existing value.

```javascript
let x = 10;

x += 5;

console.log(x); // 15
```

Same as:

```javascript
x = x + 5;
```

---

## Subtraction Assignment `-=`

Subtracts a value from the existing value.

```javascript
let x = 10;

x -= 3;

console.log(x); // 7
```

Same as:

```javascript
x = x - 3;
```

---

## Multiplication Assignment `*=`

Multiplies the existing value.

```javascript
let x = 10;

x *= 2;

console.log(x); // 20
```

Same as:

```javascript
x = x * 2;
```

---

## Division Assignment `/=`

Divides the existing value.

```javascript
let x = 10;

x /= 2;

console.log(x); // 5
```

Same as:

```javascript
x = x / 2;
```

---

## Remainder Assignment `%=`

Stores the remainder after division.

```javascript
let x = 10;

x %= 3;

console.log(x); // 1
```

Same as:

```javascript
x = x % 3;
```

---

## Power Assignment `**=`

Raises the existing value to a power.

```javascript
let x = 2;

x **= 3;

console.log(x); // 8
```

Same as:

```javascript
x = x ** 3;
```

---

# Assignment Operators Quick Revision

| Operator | Meaning              | Example   | Same As      |
| -------- | -------------------- | --------- | ------------ |
| `=`      | Assign               | `x = 5`   | `x = 5`      |
| `+=`     | Add and assign       | `x += 5`  | `x = x + 5`  |
| `-=`     | Subtract and assign  | `x -= 5`  | `x = x - 5`  |
| `*=`     | Multiply and assign  | `x *= 5`  | `x = x * 5`  |
| `/=`     | Divide and assign    | `x /= 5`  | `x = x / 5`  |
| `%=`     | Remainder and assign | `x %= 5`  | `x = x % 5`  |
| `**=`    | Power and assign     | `x **= 5` | `x = x ** 5` |

---

# Quick Revision

| Operator | Meaning              | Example   | Result   |
| -------- | -------------------- | --------- | -------- |
| `+`      | Add / Join strings   | `2 + 3`   | `5`      |
| `-`      | Subtract             | `5 - 2`   | `3`      |
| `*`      | Multiply             | `5 * 2`   | `10`     |
| `/`      | Divide               | `10 / 2`  | `5`      |
| `%`      | Remainder            | `10 % 3`  | `1`      |
| `**`     | Power                | `2 ** 3`  | `8`      |
| `=`      | Assign               | `x = 5`   | `5`      |
| `+=`     | Add and assign       | `x += 2`  | `x + 2`  |
| `-=`     | Subtract and assign  | `x -= 2`  | `x - 2`  |
| `*=`     | Multiply and assign  | `x *= 2`  | `x * 2`  |
| `/=`     | Divide and assign    | `x /= 2`  | `x / 2`  |
| `%=`     | Remainder and assign | `x %= 2`  | `x % 2`  |
| `**=`    | Power and assign     | `x **= 2` | `x ** 2` |
| `++`     | Increase by 1        | `x++`     | `x + 1`  |
| `--`     | Decrease by 1        | `x--`     | `x - 1`  |
| `+value` | Convert to number    | `+"5"`    | `5`      |
| `-value` | Make negative        | `-8`      | `-8`     |

---

# ⭐ Most Important Things to Remember

### 1. `+` with numbers → Addition

```javascript
2 + 3 // 5
```

### 2. `+` with strings → Concatenation

```javascript
"2" + "3" // "23"
```

### 3. String affects the following `+` operations

```javascript
"1" + 2 + 2 // "122"
```

### 4. Calculations happen before the string

```javascript
1 + 2 + "3" // "33"
```

### 5. `%` gives the remainder

```javascript
10 % 3 // 1
```

### 6. `**` means power

```javascript
2 ** 3 // 8
```

### 7. `++` adds 1

```javascript
x++ // x = x + 1
```

### 8. Unary `+` converts to Number

```javascript
+"5"  // 5
+true // 1
+""   // 0
```

### 9. Assignment operators update the existing value

```javascript
let x = 10;

x += 5;

console.log(x); // 15
```

Same as:

```javascript
x = x + 5;
```

### 10. Easy Way to Remember Assignment Operators

```text
=    → Assign
+=   → Add + Assign
-=   → Subtract + Assign
*=   → Multiply + Assign
/=   → Divide + Assign
%=   → Remainder + Assign
**=  → Power + Assign
```
