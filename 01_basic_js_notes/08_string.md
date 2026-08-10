
# JavaScript Strings

## 1. What is a String?

A **string** is a sequence of characters used to store text.

```javascript
let name = "Biswajit";
let game = "GTA";
```

Strings can be written using:

```javascript
"Hello"
'Hello'
`Hello`
```

---

# 2. String Concatenation

**Concatenation means joining strings together.**

```javascript
const name = "Biswajit";
const repo = 10;

console.log(name + " has " + repo + " repos");
```

Output:

```text
Biswajit has 10 repos
```

Here `+` joins the strings and values.

---

# 3. String Interpolation

**Template literals** are a better and easier way to combine strings and variables.

Use **backticks**:

```javascript
const name = "Biswajit";
const repo = 10;

console.log(`My name is ${name} and I have ${repo} repos`);
```

Output:

```text
My name is Biswajit and I have 10 repos
```

### Remember

```text
`Hello ${name}`
       ↑
   variable
```

Use:

```text
` `     → backticks
${}     → put variable/expression inside
```

---

# 4. String Object

You may see:

```javascript
const gameName = new String("GTA");
```

But normally, you should simply use:

```javascript
const gameName = "GTA";
```

`new String()` creates a **String object**, not a normal string primitive.

```javascript
const gameName = new String("GTA");

console.log(typeof gameName);
```

Output:

```text
object
```

For normal coding, prefer:

```javascript
const gameName = "GTA";
```

---

# 5. Accessing Characters

You can access a character using its index.

```javascript
const gameName = "GTA";

console.log(gameName[0]);
```

Output:

```text
G
```

Index positions:

```text
 G   T   A
 ↑   ↑   ↑
 0   1   2
```

Remember:

> **String indexing starts from 0.**

---

# 6. `length`

`length` tells us how many characters are in a string.

```javascript
const gameName = "GTA";

console.log(gameName.length);
```

Output:

```text
3
```

Example:

```javascript
"Biswajit".length
```

Output:

```text
8
```

---

# 7. `toLowerCase()`

Converts the string to lowercase.

```javascript
const gameName = "GTA";

console.log(gameName.toLowerCase());
```

Output:

```text
gta
```

---

# 8. `toUpperCase()`

Converts the string to uppercase.

```javascript
const gameName = "gta";

console.log(gameName.toUpperCase());
```

Output:

```text
GTA
```

---

# 9. `indexOf()`

Finds the position of a character or text.

```javascript
const gameName = "GTA";

console.log(gameName.indexOf("T"));
```

Output:

```text
1
```

Because:

```text
 G   T   A
 0   1   2
     ↑
```

If the value is not found:

```javascript
console.log(gameName.indexOf("X"));
```

Output:

```text
-1
```

### Remember

> `indexOf()` → **Where is it?**

---

# 10. `charAt()`

Returns the character at a particular index.

```javascript
const gameName = "GTA";

console.log(gameName.charAt(1));
```

Output:

```text
T
```

```text
 G   T   A
 0   1   2
     ↑
```

### Difference

```javascript
gameName.indexOf("T"); // 1
gameName.charAt(1);    // "T"
```

`indexOf()` → gives **position**

`charAt()` → gives **character**

---

# 11. `substring()`

`substring(start, end)` extracts part of a string.

The `end` index is **not included**.

```javascript
const gameName = "GTA";

console.log(gameName.substring(0, 2));
```

Output:

```text
GT
```

Why?

```text
 G   T   A
 ↑   ↑   ↑
 0   1   2

Start → 0
End   → 2 (not included)
```

So we get:

```text
GT
```

### Remember

```text
substring(start, end)

start → included
end   → not included
```

---

# 12. `slice()`

`slice()` also extracts part of a string.

```javascript
const gameName = "GTA";

console.log(gameName.slice(0, 2));
```

Output:

```text
GT
```

### Negative Index

`slice()` can use negative indexes.

For:

```text
GTA
```

The indexes are:

```text
 G   T   A
 0   1   2

-3  -2  -1
```

So:

```javascript
console.log(gameName.slice(-2));
```

Output:

```text
TA
```

Because `-2` means:

> Start from the second-last character and go to the end.

### Important

For beginners, remember:

```javascript
gameName.slice(-2); // "TA"
gameName.slice(-1); // "A"
```

### Easy rule

```text
slice(start, end)

start → included
end   → not included

negative index → count from right
```

---

# 13. `trim()`

`trim()` removes spaces from the **beginning and end** of a string.

```javascript
const herName = "  IPSITA  ";

console.log(herName.trim());
```

Output:

```text
IPSITA
```

It does NOT remove spaces in the middle.

```javascript
"Hello World".trim()
```

Result:

```text
"Hello World"
```

---

# 14. `replace()`

`replace()` replaces text with another text.

```javascript
const myName = "Biswajit";

console.log(myName.replace("Biswajit", "Rahul"));
```

Output:

```text
Rahul
```

Syntax:

```text
replace(oldValue, newValue)
```

Example:

```javascript
let text = "I like Java";

console.log(text.replace("Java", "JavaScript"));
```

Output:

```text
I like JavaScript
```

---

# 15. `includes()`

`includes()` checks whether a string contains a particular value.

It returns:

```text
true
false
```

Example:

```javascript
const url = "https://rahul.com/rahul";

console.log(url.includes("rahul"));
```

Output:

```text
true
```

Example:

```javascript
console.log(url.includes("google"));
```

Output:

```text
false
```

### Remember

> `includes()` → **Does it contain it?**

---

# 16. `split()`

`split()` divides a string into an **array**.

Example:

```javascript
const use = "biswa-rahul";

console.log(use.split("-"));
```

Output:

```text
["biswa", "rahul"]
```

The `-` is used as the separator.

Think:

```text
"biswa-rahul"
       ↓
     split("-")
       ↓
["biswa", "rahul"]
```

Another example:

```javascript
let fruits = "apple,banana,mango";

console.log(fruits.split(","));
```

Output:

```text
["apple", "banana", "mango"]
```

---

# 17. `startsWith()`

Checks whether a string starts with a particular value.

Returns `true` or `false`.

```javascript
let name = "Biswajit";

console.log(name.startsWith("Bis"));
```

Output:

```text
true
```

```javascript
console.log(name.startsWith("Raj"));
```

Output:

```text
false
```

### Remember

> `startsWith()` → **Does it start with this?**

---

# 18. `endsWith()`

Checks whether a string ends with a particular value.

```javascript
let name = "Biswajit";

console.log(name.endsWith("jit"));
```

Output:

```text
true
```

```javascript
console.log(name.endsWith("Raj"));
```

Output:

```text
false
```

### Remember

> `endsWith()` → **Does it end with this?**

---

# 19. `concat()`

`concat()` joins strings together.

```javascript
let firstName = "Biswajit";
let lastName = "Biswal";

console.log(firstName.concat(" ", lastName));
```

Output:

```text
Biswajit Biswal
```

However, in modern JavaScript, `+` or template literals are usually easier:

```javascript
`${firstName} ${lastName}`
```

---

# 20. `repeat()`

Repeats a string a specified number of times.

```javascript
let text = "Hi ";

console.log(text.repeat(3));
```

Output:

```text
Hi Hi Hi
```

Example:

```javascript
console.log("GTA ".repeat(2));
```

Output:

```text
GTA GTA
```

---

# 21. `charCodeAt()`

Returns the Unicode number of a character.

```javascript
let gameName = "GTA";

console.log(gameName.charCodeAt(0));
```

Output:

```text
71
```

Because the Unicode value of `"G"` is `71`.

For beginners:

> `charCodeAt()` → gives the numeric code of a character.

---

# 22. `at()`

`at()` gets a character at a particular position.

```javascript
let gameName = "GTA";

console.log(gameName.at(1));
```

Output:

```text
T
```

It also supports negative indexes:

```javascript
console.log(gameName.at(-1));
```

Output:

```text
A
```

This is useful when you want to count from the end.

---

# 23. `padStart()`

Adds characters to the beginning of a string until it reaches a specified length.

```javascript
let number = "5";

console.log(number.padStart(3, "0"));
```

Output:

```text
005
```

Think:

```text
"5"
 ↓
"05"
 ↓
"005"
```

---

# 24. `padEnd()`

Adds characters to the end of a string.

```javascript
let number = "5";

console.log(number.padEnd(3, "0"));
```

Output:

```text
500
```

---

# 25. `toString()`

Converts a value into a string.

```javascript
let number = 100;

let text = number.toString();

console.log(text);
console.log(typeof text);
```

Output:

```text
100
string
```

---

# 26. `valueOf()`

Returns the primitive value of a String object.

Usually, beginners don't need this method.

Example:

```javascript
let text = new String("GTA");

console.log(text.valueOf());
```

Output:

```text
GTA
```

---

# Important String Methods

These are the methods you should remember first:

| Method          | What it does                      |
| --------------- | --------------------------------- |
| `length`        | Gets string length                |
| `toUpperCase()` | Converts to uppercase             |
| `toLowerCase()` | Converts to lowercase             |
| `indexOf()`     | Finds position                    |
| `charAt()`      | Gets character at index           |
| `at()`          | Gets character at index           |
| `substring()`   | Extracts part of string           |
| `slice()`       | Extracts part of string           |
| `trim()`        | Removes spaces from beginning/end |
| `replace()`     | Replaces text                     |
| `includes()`    | Checks if text exists             |
| `split()`       | Converts string into array        |
| `startsWith()`  | Checks beginning                  |
| `endsWith()`    | Checks ending                     |
| `concat()`      | Joins strings                     |
| `repeat()`      | Repeats string                    |
| `padStart()`    | Adds characters at start          |
| `padEnd()`      | Adds characters at end            |
| `charCodeAt()`  | Gets character code               |
| `toString()`    | Converts value to string          |

---

# 🧠 Easy Memory Map

```text
                    STRING
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     FIND           CHANGE          EXTRACT
        │              │              │
    indexOf()      replace()       slice()
    includes()     toUpperCase()   substring()
    startsWith()   toLowerCase()
    endsWith()
```

```text
                    STRING
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
      CLEAN           JOIN           SPLIT
        │              │              │
     trim()        concat()        split()
                   + / `${}`
```

---

# Complete Example

```javascript
// String
const name = "Biswajit";
const repo = 10;

// Concatenation
console.log(name + " has " + repo + " repos");

// Template literals
console.log(`My name is ${name} and I have ${repo} repos`);

// String
const gameName = "GTA";

// Access character
console.log(gameName[0]); // G

// Length
console.log(gameName.length); // 3

// Case
console.log(gameName.toLowerCase()); // gta
console.log(gameName.toUpperCase()); // GTA

// Find
console.log(gameName.indexOf("T")); // 1
console.log(gameName.includes("T")); // true

// Character
console.log(gameName.charAt(1)); // T
console.log(gameName.at(-1)); // A

// Extract
console.log(gameName.substring(0, 2)); // GT
console.log(gameName.slice(0, 2)); // GT
console.log(gameName.slice(-2)); // TA

// Trim
const herName = "  IPSITA  ";
console.log(herName.trim()); // IPSITA

// Replace
const myName = "Biswajit";
console.log(myName.replace("Biswajit", "Rahul")); // Rahul

// Split
const user = "biswa-rahul";
console.log(user.split("-")); // ["biswa", "rahul"]

// Start / End
console.log(name.startsWith("Bis")); // true
console.log(name.endsWith("jit")); // true

// Repeat
console.log("Hi ".repeat(3)); // Hi Hi Hi
```

# ⭐ Final Revision

```text
String
  │
  ├── length        → How many characters?
  ├── indexOf()     → Where is it?
  ├── charAt()      → Which character?
  ├── includes()    → Is it present?
  │
  ├── slice()       → Take a part
  ├── substring()   → Take a part
  │
  ├── toUpperCase() → CAPITAL
  ├── toLowerCase() → small
  ├── trim()        → Remove outside spaces
  ├── replace()     → Change text
  ├── split()       → String → Array
  ├── concat()      → Join strings
  ├── repeat()      → Repeat text
  ├── startsWith()  → Check beginning
  └── endsWith()    → Check ending
```

## 🧠 Most Important to Learn First

Don't try to memorize everything at once. Start with these:

```text
length
toUpperCase()
toLowerCase()
indexOf()
charAt()
slice()
substring()
trim()
replace()
includes()
split()
```
