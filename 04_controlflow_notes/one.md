# JavaScript Conditionals — Notes

*Made by Biswajit Biswal*

## 1. `==` vs `===` (Equality Operators)

```javascript
if (2 == "2") {
    console.log("executed"); // ✅ runs
}
if (2 === "2") {
    console.log("executed"); // ❌ does NOT run
}
```

- **`==` (loose equality):** Converts both values to the same type before comparing. So `2 == "2"` becomes `2 == 2` → `true`.
- **`===` (strict equality):** Checks value **and** type. `2` is a `number`, `"2"` is a `string` → different types → `false`.

👉 **Rule of thumb:** Always prefer `===` (and `!==`) in real projects. It avoids weird bugs caused by hidden type conversion.

### All comparison operators
| Operator | Meaning |
|---|---|
| `<` | less than |
| `>` | greater than |
| `<=` | less than or equal |
| `>=` | greater than or equal |
| `==` | loose equal (type conversion) |
| `===` | strict equal (no conversion) |
| `!=` | loose not equal |
| `!==` | strict not equal |

---

## 2. Basic `if / else`

```javascript
const temprature = 41

if (temprature <= 50) {
    console.log("Temprature is lessthan 50");
} else {
    console.log("Temprature is greater than 50");
}
```

- If the condition inside `if(...)` is `true`, the `if` block runs.
- Otherwise, the `else` block runs.
- Since `41 <= 50` is `true`, it prints `"Temprature is lessthan 50"`.

---

## 3. Block Scope (`{ }`) — `let`/`const` vs `var`

```javascript
const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`user power:${power}`); // ✅ works here
}

// console.log(`user power:${power}`); // ❌ Error! power doesn't exist outside {}
```

- Variables declared with `const` or `let` **only exist inside the `{ }` block** where they're created. This is called **block scope**.
- If you try to use `power` outside the `if` block, you'll get: `power is not defined`.
- 🔑 **Difference with `var`:** If you used `var power = "fly"` instead, it would **leak outside** the block (function-scoped, not block-scoped) — that's why `var` is considered risky and avoided in modern JS.

---

## 4. Implicit (Single-Statement) Blocks

```javascript
if (balance > 500) console.log("test"), console.log("test 2");
```

- Without `{ }`, only the **very next statement** belongs to the `if`.
- Here, the comma (`,`) is used to squeeze two `console.log` calls into one "statement" — but this is bad practice and hard to read.
- ✅ Best practice: always use `{ }` even for single-line ifs, to avoid bugs when adding more lines later.

---

## 5. `if / else if / else` Chain

```javascript
const balance = 1000

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else {
    console.log("less that 1200");
}
```

- JS checks conditions **top to bottom**, and stops at the **first true condition**.
- `balance = 1000` → not `< 500`, not `< 750` → falls to `else` → prints `"less that 1200"`.
- Use `else if` when you have **multiple ranges/cases** to check.

---

## 6. Logical Operators: `&&` (AND) and `||` (OR)

```javascript
const userLoggedIn = true
const userDebitCard = true
const loginFromGoogle = false
const loginFromEmail = true
const guestUser = false
```

### `&&` — AND (all conditions must be true)
```javascript
if (userLoggedIn && userDebitCard) {
    console.log("Allowed to buy courses");
}
```
- Runs only if **both** `userLoggedIn` **and** `userDebitCard` are `true`.
- Here both are `true` → ✅ prints `"Allowed to buy courses"`.

### `||` — OR (at least one condition must be true)
```javascript
if (loginFromEmail || loginFromGoogle || guestUser) {
    console.log("user logged in");
}
```
- Runs if **any one** of the values is `true`.
- `loginFromEmail` is `true` → ✅ prints `"user logged in"` (doesn't matter that the other two are `false`).

| Operator | Meaning | Passes when |
|---|---|---|
| `&&` | AND | **all** conditions are true |
| `\|\|` | OR | **at least one** condition is true |

---

## Quick Summary
- Use `===` / `!==`, avoid `==` / `!=`.
- `{ }` creates a block — `const`/`let` variables die outside it; `var` leaks out (avoid `var`).
- `else if` chains stop at the first `true` condition.
- `&&` = all must be true, `||` = any one true is enough.


# JavaScript: Nullish Coalescing (`??`) & Ternary Operator — Notes

*Made by Biswajit Biswal*

> This note covers the two **new** concepts from your latest code. Everything else (`==`/`===`, if/else, block scope, `&&`/`||`) was already explained in the earlier "JS Conditionals" note.

---

## 1. Nullish Coalescing Operator (`??`)

```javascript
let val1;
val1 = 5 ?? 10          // val1 = 5
val1 = null ?? 10       // val1 = 10
val1 = undefined ?? 10  // val1 = 10
val1 = null ?? 10 ?? 3  // val1 = 10
console.log(val1);
```

- `??` returns the **left value**, UNLESS the left value is `null` or `undefined` — in that case it returns the **right value**.
- It only cares about `null` / `undefined`. It does **not** treat `0`, `""` (empty string), or `false` as "empty" — those are still valid values and will be kept.
- It **chains left to right**: `null ?? 10 ?? 3` first checks `null ?? 10` → since left is `null`, result is `10`. Then `10 ?? 3` → left (`10`) is not null/undefined, so result stays `10`.

**Walkthrough of your code:**
```javascript
val1 = null ?? 10 ?? 3
```
Step by step:
1. `null ?? 10` → left is `null` → take right → `10`
2. `10 ?? 3` → left is `10` (not nullish) → keep left → `10`

So `console.log(val1)` prints `10`.

### Why not just use `||` (OR)?
```javascript
let count = 0;
console.log(count || 10);  // 10  ❌ (0 is treated as falsy, so it gets replaced!)
console.log(count ?? 10);  // 0   ✅ (0 is a valid value, so it's kept)
```
- `||` replaces **any falsy value** (`0`, `""`, `false`, `null`, `undefined`, `NaN`).
- `??` only replaces `null` and `undefined`.
- 👉 Use `??` when you want a **default value**, but `0`, `false`, or `""` should still count as real, intentional values.

---

## 2. Ternary Operator (`? :`)

### Syntax
```javascript
condition ? expressionIfTrue : expressionIfFalse
```

It's a **shortcut for `if/else`** — useful for short, simple conditions.

### Example from your code
```javascript
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("price grater than 80") : console.log("less than 80");
```

**Same logic written as if/else:**
```javascript
if (iceTeaPrice >= 80) {
    console.log("price grater than 80");
} else {
    console.log("less than 80");
}
```

- `iceTeaPrice >= 80` → `100 >= 80` → `true`
- Since the condition is `true`, it runs the part **before** the `:` → prints:
```
price grater than 80
```

### More common usage — assigning a value
The ternary operator is most useful when you want to **assign a result to a variable** in one line:
```javascript
const message = iceTeaPrice >= 80 ? "price grater than 80" : "less than 80";
console.log(message);
```
This is cleaner than calling `console.log()` inside the ternary itself (like your example does) — generally, ternary is meant to produce a **value**, not to run side-effect statements like `console.log`. Using it just to pick between two `console.log()` calls works, but an `if/else` is usually more readable for that case.

---

## Quick Summary
| Operator | Purpose | Triggers on |
|---|---|---|
| `??` | Pick a fallback/default value | Only `null` or `undefined` |
| `\|\|` | Pick a fallback/default value | Any falsy value (`0`, `""`, `false`, `null`, `undefined`, `NaN`) |
| `? :` | Inline if/else that returns a value | Any boolean condition |

- Use `??` for safe defaults that shouldn't override `0`/`false`/`""`.
- Use `? :` for short, simple conditional **values** — for anything more complex, prefer a full `if/else`.
