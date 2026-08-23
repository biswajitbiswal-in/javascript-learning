# 🟨 JavaScript — Loops (`for`, Nested, `break`, `continue`)

> **Topic:** for loop · Nested loops · Array looping · break · continue
> **Written by:** Biswajit Biswal
> **Series:** JavaScript Learning Journey

---

## 📌 Table of Contents

| # | Topic |
|---|-------|
| 1 | [What is a Loop?](#1-what-is-a-loop) |
| 2 | [for Loop — Syntax](#2-for-loop--syntax) |
| 3 | [How the for Loop Works](#3-how-the-for-loop-works--step-by-step) |
| 4 | [Nested for Loop](#4-nested-for-loop) |
| 5 | [Looping Through an Array](#5-looping-through-an-array) |
| 6 | [break](#6-break) |
| 7 | [continue](#7-continue) |
| 8 | [break vs continue](#8-break-vs-continue) |
| ⭐ | [Quick Revision](#-quick-revision) |

---

## 1. What is a Loop?

> A **loop** runs the same block of code **again and again** until a condition is false.

### Without loop — repetitive ❌:
```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// imagine doing this for 100 numbers... 😩
```

### With loop — clean ✅:
```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1 2 3 4 5
```

---

## 2. `for` Loop — Syntax

```js
for (initialization; condition; update) {
    // code runs here
}
```

### Three parts:

```
for ( let i = 0 ;  i <= 10 ;  i++ )
       ↑              ↑          ↑
  initialization   condition   update
  (start here)   (run while   (change i
                  this true)   each time)
```

| Part | What it does | Example |
|---|---|---|
| **Initialization** | Start value — runs ONCE | `let i = 0` |
| **Condition** | Checked before each loop | `i <= 10` |
| **Update** | Runs after each loop | `i++` |

---

## 3. How the `for` Loop Works — Step by Step

```js
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}
```

### What happens inside:

```
Step 1 → let i = 0        (initialization — only once)
Step 2 → is i <= 10?      YES → run the code block
Step 3 → element = 0, print 0
Step 4 → i++  → i = 1

Step 5 → is i <= 10?      YES → run the code block
Step 6 → element = 1, print 1
Step 7 → i++  → i = 2

... keeps going ...

Step → i = 11
Step → is i <= 10?        NO → STOP ✅
```

### Visual timeline:

```
i=0  → ✅ run → print 0
i=1  → ✅ run → print 1
i=2  → ✅ run → print 2
...
i=10 → ✅ run → print 10
i=11 → ❌ stop (11 <= 10 is false)
```

---

### `<=` vs `<` — Important difference:

```js
for (let i = 0; i <= 10; i++) // 0, 1, 2 ... 10  → 11 numbers
for (let i = 0; i <  10; i++) // 0, 1, 2 ... 9   → 10 numbers
```

```
i <= 10  →  includes 10  ✅
i <  10  →  stops BEFORE 10 ❌
```

---

## 4. Nested `for` Loop

> A loop **inside** another loop — runs inner loop fully for every outer loop step.

```js
for (let i = 0; i < 10; i++) {
    console.log(`outer loop value: ${i}`);

    for (let j = 0; j < 10; j++) {
        console.log(`inner: ${j} and outer: ${i}`);
        console.log(i + ' * ' + j + ' = ' + i * j);
    }
}
```

### How it runs:

```
i = 0
    j = 0 → 0 * 0 = 0
    j = 1 → 0 * 1 = 0
    j = 2 → 0 * 2 = 0
    ... j goes 0 to 9
i = 1
    j = 0 → 1 * 0 = 0
    j = 1 → 1 * 1 = 1
    j = 2 → 1 * 2 = 2
    ... j goes 0 to 9
...
i = 9
    j = 0 → 9 * 0 = 0
    j = 9 → 9 * 9 = 81
```

### Visual:

```
Outer loop (i) → runs 10 times
  └── Inner loop (j) → runs 10 times FOR EACH i

Total runs = 10 × 10 = 100 times
```

> 💡 Nested loops are used to make **multiplication tables**, **grids**, and **matrices**.

### Multiplication table example:

```
i=1, j=1 → 1*1=1
i=1, j=2 → 1*2=2
i=2, j=1 → 2*1=2
i=2, j=2 → 2*2=4
```

---

## 5. Looping Through an Array

> Use a `for` loop to go through every item in an array.

```js
let myArr = ["Rahul", "Biswajit", "Arpit", "Batman"];

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}
```

### Output:
```
Rahul
Biswajit
Arpit
Batman
```

### How it works:

```
myArr         = ["Rahul", "Biswajit", "Arpit", "Batman"]
               index: 0       1          2        3

myArr.length  = 4   (4 items)

i = 0 → myArr[0] = "Rahul"
i = 1 → myArr[1] = "Biswajit"
i = 2 → myArr[2] = "Arpit"
i = 3 → myArr[3] = "Batman"
i = 4 → 4 < 4 is false → STOP ✅
```

### Why `i < myArr.length` and NOT `i <= myArr.length`?

```
myArr.length = 4
Last index   = 3

i <= 4  →  tries myArr[4] = undefined ❌
i <  4  →  stops at myArr[3] = "Batman" ✅
```

> 💡 Always use `i < array.length` when looping through arrays.

---

## 6. `break`

> `break` **stops the loop completely** and exits immediately.

```js
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected ${i}`);
        break; // 🛑 STOP everything
    }
    console.log(`value of i is ${i}`);
}
```

### Output:
```
value of i is 0
value of i is 1
value of i is 2
value of i is 3
value of i is 4
Detected 5
← loop ends here, never reaches 6,7,8...
```

### Visual:

```
i=0 → print "value of i is 0"
i=1 → print "value of i is 1"
i=2 → print "value of i is 2"
i=3 → print "value of i is 3"
i=4 → print "value of i is 4"
i=5 → "Detected 5" → BREAK 🛑 → loop stops
i=6,7... → NEVER RUNS
```

> 💡 Use `break` when you **found what you were looking for** and don't need to continue.

---

## 7. `continue`

> `continue` **skips the current iteration** and moves to the next one.
> The loop does NOT stop — it just skips that one step.

```js
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected ${i}`);
        continue; // ⏭️ SKIP i=5, go to i=6
    }
    console.log(`value of i is ${i}`);
}
```

### Output:
```
value of i is 0
value of i is 1
value of i is 2
value of i is 3
value of i is 4
Detected 5          ← i=5 detected and skipped
value of i is 6
value of i is 7
...
value of i is 20
```

### Visual:

```
i=0  → print "value of i is 0"
i=1  → print "value of i is 1"
i=2  → print "value of i is 2"
i=3  → print "value of i is 3"
i=4  → print "value of i is 4"
i=5  → "Detected 5" → CONTINUE ⏭️ → skip rest, go to i=6
i=6  → print "value of i is 6"
i=7  → print "value of i is 7"
...
i=20 → print "value of i is 20"
```

> 💡 Use `continue` when you want to **skip specific values** but keep looping.

---

## 8. `break` vs `continue`

```
break     →  STOP the loop completely   🛑
continue  →  SKIP this step, keep going ⏭️
```

### Side by side:

```js
// break — stops at 5
for (let i = 0; i <= 10; i++) {
    if (i == 5) break;
    console.log(i);
}
// Output: 0 1 2 3 4


// continue — skips 5
for (let i = 0; i <= 10; i++) {
    if (i == 5) continue;
    console.log(i);
}
// Output: 0 1 2 3 4  6 7 8 9 10
//                    ↑ 5 is missing
```

| | `break` | `continue` |
|---|---|---|
| What it does | Stops the entire loop | Skips current step only |
| Loop continues? | ❌ No | ✅ Yes |
| Used when | Found what you need | Skip certain values |
| Output with `i==5` | 0 1 2 3 4 | 0 1 2 3 4 6 7 8 9 10 |

---

## 9. Complete Code — Explained

```js
// ─── 1. Basic for loop ───
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element); // 0 to 10
}


// ─── 2. Nested for loop — multiplication table ───
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i + ' * ' + j + ' = ' + i * j);
    }
}
// Runs 10 × 10 = 100 times total


// ─── 3. Loop through an array ───
let myArr = ["Rahul", "Biswajit", "Arpit", "Batman"];

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element); // Rahul, Biswajit, Arpit, Batman
}


// ─── 4. break and continue ───
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected ${i}`);
        continue; // skip 5, keep going
        // break;  ← would stop completely at 5
    }
    console.log(`value of i is ${i}`);
}
```

---

## ⭐ Quick Revision

```
for loop
│
├── Syntax
│     for (init; condition; update) { }
│
├── Three parts
│     init       →  let i = 0    (start, runs once)
│     condition  →  i <= 10      (check before each run)
│     update     →  i++          (change after each run)
│
├── i <= 10   →  includes 10
├── i < 10    →  stops before 10
│
├── Nested loop
│     loop inside loop
│     inner runs FULLY for each outer step
│     total = outer × inner
│
├── Array loop
│     i < myArr.length   ← always use < not <=
│     myArr[i]           ← access each item
│
├── break
│     stops loop COMPLETELY  🛑
│
└── continue
      skips CURRENT step, loop continues ⏭️
```

---

## 💡 Key Rules to Remember

```
✅  for loop  →  init ; condition ; update
✅  i <= 10   →  runs when i is 0,1,2...10  (includes 10)
✅  i <  10   →  runs when i is 0,1,2...9   (excludes 10)
✅  Array     →  always use i < arr.length  (not <=)
✅  Nested    →  inner loop runs fully each time outer loops
✅  break     →  exits loop immediately
✅  continue  →  skips current iteration only
✅  const element = myArr[i]  →  stores current item cleanly
```

---

*Notes by Biswajit Biswal · JavaScript Learning Journey · 2026*
