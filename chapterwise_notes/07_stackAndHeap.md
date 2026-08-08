# JavaScript Memory Allocation

## Stack and Heap

JavaScript uses memory to store data while the program is running.

For beginners, remember:

```text
Primitive values     → Stack
Objects / References  → Heap
```

---

# 1. Stack Memory

### Definition

**Stack memory** is commonly used to store **primitive values**.

Primitive data types include:

```text
String
Number
Boolean
Undefined
Null
BigInt
Symbol
```

When we assign one primitive variable to another, a **copy of the value** is created.

So, changing one variable does **not** change the other variable.

---

## Example

```javascript
let myYoutubeName = "Biswajit";

let anotherName = myYoutubeName;

anotherName = "Rahul";

console.log(myYoutubeName);
console.log(anotherName);
```

### Output

```text
Biswajit
Rahul
```

---

## How does it work?

First:

```javascript
let myYoutubeName = "Biswajit";
```

```text
STACK

┌────────────────────────┐
│ myYoutubeName          │
│ "Biswajit"             │
└────────────────────────┘
```

Then:

```javascript
let anotherName = myYoutubeName;
```

A **copy** of `"Biswajit"` is created.

```text
STACK

┌────────────────────────┐
│ myYoutubeName          │
│ "Biswajit"             │
└────────────────────────┘

┌────────────────────────┐
│ anotherName            │
│ "Biswajit"             │
└────────────────────────┘
```

Now:

```javascript
anotherName = "Rahul";
```

Only `anotherName` changes.

```text
STACK

┌────────────────────────┐
│ myYoutubeName          │
│ "Biswajit"             │
└────────────────────────┘

┌────────────────────────┐
│ anotherName            │
│ "Rahul"                │
└────────────────────────┘
```

Therefore:

```text
myYoutubeName → Biswajit
anotherName   → Rahul
```

### Stack Flow

```text
Primitive Value
      ↓
   STACK
      ↓
Copy of value
      ↓
Separate variables
      ↓
Changing one does NOT change the other
```

---

# 2. Heap Memory

### Definition

**Heap memory** is commonly used for storing **objects and other reference values**.

Example:

```javascript
let user = {
    email: "user@gmail.com",
    id: 123,
    UPI_ID: "user@upi",
    role: "SDE - II"
};
```

When an object is assigned to another variable, the variable gets a **reference to the same object**.

It does not create an independent copy of the object.

---

## Example

```javascript
let user = {
    email: "user@gmail.com",
    id: 123,
    UPI_ID: "user@upi",
    role: "SDE - II"
};

let admin = user;

admin.email = "biswajit@gmail.com";

console.log(user.email);
console.log(admin.email);
```

### Output

```text
biswajit@gmail.com
biswajit@gmail.com
```

---

## How does it work?

First, the object is created:

```javascript
let user = {
    email: "user@gmail.com",
    id: 123
};
```

Think of it like this:

```text
STACK                    HEAP

┌───────────┐            ┌──────────────────────┐
│ user      │ ─────────→ │ email: user@gmail.com│
└───────────┘            │ id: 123              │
                         │ UPI_ID: user@upi     │
                         │ role: SDE - II       │
                         └──────────────────────┘
```

Now:

```javascript
let admin = user;
```

`admin` gets a reference to the **same object**.

```text
STACK                    HEAP

┌───────────┐             ┌──────────────────────┐
│ user      │ ────────┐   │ email: user@gmail.com│
└───────────┘         │   │ id: 123              │
                      ├──→│ UPI_ID: user@upi     │
┌───────────┐         │   │ role: SDE - II       │
│ admin     │ ────────┘   └──────────────────────┘
└───────────┘
```

Both `user` and `admin` point to the **same object**.

---

## Changing the Object

Now:

```javascript
admin.email = "biswajit@gmail.com";
```

The object in the Heap changes.

```text
STACK                    HEAP

┌───────────┐             ┌──────────────────────────┐
│ user      │ ────────┐   │ email: biswajit@gmail.com│
└───────────┘         │   │ id: 123                  │
                      ├──→│ UPI_ID: user@upi         │
┌───────────┐         │   │ role: SDE - II           │
│ admin     │ ────────┘   └──────────────────────────┘
└───────────┘
```

Because both variables refer to the same object:

```javascript
console.log(user.email);
```

Output:

```text
biswajit@gmail.com
```

And:

```javascript
console.log(admin.email);
```

Output:

```text
biswajit@gmail.com
```

---

# 3. Stack vs Heap

| Stack                                 | Heap                                                  |
| ------------------------------------- | ----------------------------------------------------- |
| Primitive values                      | Objects / reference values                            |
| Copy of value                         | Reference to object                                   |
| Separate values                       | Same object can be shared                             |
| Changing one doesn't affect the other | Changing object can be visible through both variables |

---

# 4. Easy Comparison

### Stack

```javascript
let a = "Hello";
let b = a;

b = "World";
```

```text
STACK

a → "Hello"

b → "World"
```

`a` is still `"Hello"`.

---

### Heap

```javascript
let user = {
    name: "Biswajit"
};

let admin = user;

admin.name = "Rahul";
```

```text
             ┌────────────────┐
user ───────→│ name: "Rahul"  │
             └────────────────┘
admin ──────→
```

Both see:

```text
"Rahul"
```

---

# 5. Main Difference

```text
             MEMORY
                │
        ┌───────┴───────┐
        ↓               ↓
      STACK            HEAP
        │               │
        ↓               ↓
   Primitive         Objects
        │               │
        ↓               ↓
      COPY           REFERENCE
        │               │
        ↓               ↓
 Separate values    Same object
```

---

# 🧠 Memory Trick

### STACK = COPY

```text
Primitive
    ↓
 Stack
    ↓
 Copy
    ↓
Independent value
```

### HEAP = REFERENCE

```text
Object
    ↓
 Heap
    ↓
Reference
    ↓
Same object
```

### One-line revision

> **Stack → Primitive → Copy of value**

> **Heap → Object → Reference to the same object**

---

# Complete Code

```javascript
// Stack Memory

let myYoutubeName = "Biswajit";

let anotherName = myYoutubeName;

anotherName = "Rahul";

console.log(myYoutubeName); // Biswajit
console.log(anotherName);   // Rahul


// Heap Memory

let user = {
    email: "user@gmail.com",
    id: 123,
    UPI_ID: "user@upi",
    role: "SDE - II"
};

let admin = user;

admin.email = "biswajit@gmail.com";

console.log(user.email);  // biswajit@gmail.com
console.log(admin.email); // biswajit@gmail.com
```

# ⭐ Final Revision

```text
STACK
Primitive → Copy → Independent

HEAP
Object → Reference → Same Object
```
