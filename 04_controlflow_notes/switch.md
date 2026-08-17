# JavaScript `switch` Statement — Notes

*Made by Biswajit Biswal*

## 1. Basic Syntax

```javascript
switch (key) {
    case value:
        // code
        break;

    default:
        // code
}
```

- `switch` compares `key` against each `case` value using **strict equality (`===`)**.
- When a match is found, it runs the code in that case until it hits `break`.
- `break` stops the switch from "falling through" into the next case.
- `default` runs when **no case matches** (like the `else` in an if/else chain).

---

## 2. Month Example — and a Bug 🐞

```javascript
const month = 12

switch (month) {
    case 1: console.log("january"); break;
    case 2: console.log("february"); break;
    case 3: console.log("march"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May"); break;
    case 6: console.log("june"); break;
    case 7: console.log("july"); break;
    case 8: console.log("August"); break;
    case 9: console.log("Septemember"); break;
    case 10: console.log("October"); break;
    case 11: console.log("November"); break;
    case 9: console.log("December"); break;   // ⚠️ bug
    default: console.log("MONTH NOT MATCH");
}
```

**What actually happens:** `month = 12`, but there is **no `case 12`** — instead `case 9` appears twice (once for `"Septemember"`, once for `"December"`). Since there's no case matching `12`, this falls to `default` and prints:

```
MONTH NOT MATCH
```

**Two problems to fix:**
1. `case 9` is duplicated. JavaScript won't throw an error for this — it just always uses the **first** matching case (`"Septemember"`) and the second `case 9` becomes unreachable dead code.
2. The duplicated `case 9` should actually be `case 12` for December.

**Corrected line:**
```javascript
case 12:
    console.log("December");
    break;
```

Also, `"Septemember"` is a small typo for `"September"`.

👉 **Lesson:** In a `switch`, each `case` value should be unique. Duplicate cases are a common bug — JS won't warn you, it silently ignores the second one.

---

## 3. Day Example — Falling Through to `default`

```javascript
const day = "sss"

switch (day) {
    case "sun":
        console.log("Today is sunday");
        break;
    case "mon":
        console.log("Today is monday");
        break;
    case "tues":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Not a valid day");
}
```

- `day = "sss"` doesn't match `"sun"`, `"mon"`, or `"tues"`.
- So it goes to `default` → prints:
```
Not a valid day
```
- Switch works with **strings** too, not just numbers — comparison is still `===`, so case must match exact spelling and case-sensitivity (e.g. `"Sun"` ≠ `"sun"`).

---

## 4. Why Use `break`?

If you forget `break`, execution **falls through** to the next case even if it doesn't match — it just keeps running the following cases' code until it hits a `break` or the switch ends.

```javascript
switch (2) {
    case 1:
        console.log("one");
    case 2:
        console.log("two");   // runs
    case 3:
        console.log("three"); // also runs! (no break after case 2)
        break;
    case 4:
        console.log("four");  // skipped, because break stopped it
}
// Output: "two" then "three"
```

👉 Always add `break` unless you **intentionally** want fall-through behavior.

---

## Quick Summary
- `switch` compares with strict equality (`===`).
- Each `case` needs a `break`, or execution falls through to the next case.
- `default` acts like a final `else` — runs when nothing matches.
- Case values must be unique — duplicates are silently ignored (first match wins), which is an easy bug to introduce (as seen with `case 9` above).
- Works with numbers, strings, or any comparable value.
