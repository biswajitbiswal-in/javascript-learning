# JavaScript Objects — Notes

Notes covering object creation, nested objects, merging objects, arrays of objects, and useful `Object` methods.

---

## 1. Creating an Object

Objects can be created in two ways:

```javascript
// const tinderUser = new Object()   // constructor syntax (rarely used)

const tinderUser = {}                // object literal syntax (preferred)
tinderUser.id = "12qw"
tinderUser.name = "Gautam"
tinderUser.loggedIn = true
```

- `{}` is called **object literal** syntax — the most common way to create objects.
- Properties can be added later using dot notation: `object.key = value`.

---

## 2. Nested Objects

Objects can contain other objects as values, and you can go as deep as needed:

```javascript
const regularUser = {
    Email: "biswajit@gamil.com",
    fullName: {
        userFullName: {
            firstName: "Biswajit",
            lastName: "Biswal"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName)
// Output: "Biswajit"
```

Access nested values by chaining dot notation through each level.

---

## 3. Merging Objects

There are two common ways to combine multiple objects into one:

```javascript
const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "d", 5: "e", 6: "f" }

// ❌ Wrong way — creates a nested object, not a merge
// const obj3 = { obj1, obj2 }

// ✅ Option 1: Object.assign()
// const obj3 = Object.assign({}, obj1, obj2)

// ✅ Option 2: Spread operator (cleaner, more modern)
const obj3 = { ...obj1, ...obj2 }

console.log(obj3)
// Output: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f" }
```

| Method | Syntax | Notes |
|---|---|---|
| `Object.assign()` | `Object.assign({}, obj1, obj2)` | First argument is the target object — pass `{}` to avoid mutating `obj1` |
| Spread operator | `{ ...obj1, ...obj2 }` | Shorter, more readable, commonly preferred |

⚠️ Simply writing `{ obj1, obj2 }` does **not** merge objects — it creates a new object with `obj1` and `obj2` as nested keys.

---

## 4. Array of Objects

A very common real-world pattern — an array where each element is an object:

```javascript
const user = [
    {
        name: "basu",
        id: "ba23"
    },
    {
        name: "kasu",
        id: "ka23"
    }
]

console.log(user[0].id)
// Output: "ba23"
```

Access an object inside the array using its index, then access its property using dot notation: `array[index].property`.

---

## 5. Useful `Object` Methods

Given:

```javascript
const tinderUser = {
    id: "12qw",
    name: "Gautam",
    loggedIn: true
}
```

| Method | Description | Example Output |
|---|---|---|
| `Object.keys(obj)` | Returns an array of the object's **keys** | `["id", "name", "loggedIn"]` |
| `Object.values(obj)` | Returns an array of the object's **values** | `["12qw", "Gautam", true]` |
| `Object.entries(obj)` | Returns an array of `[key, value]` pairs | `[["id","12qw"], ["name","Gautam"], ["loggedIn",true]]` |
| `obj.hasOwnProperty(key)` | Checks if a property exists directly on the object | `true` |

```javascript
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("loggedIn"))
// Output: true
```

---

## 🔑 Key Takeaways

- Prefer **object literal `{}`** syntax over `new Object()`.
- Nested objects are accessed by chaining dot notation.
- Use the **spread operator (`...`)** to merge objects — it's cleaner than `Object.assign()`.
- Arrays of objects are accessed as `array[index].property`.
- `Object.keys()`, `Object.values()`, and `Object.entries()` are essential for iterating over object data.
- `hasOwnProperty()` safely checks if a key exists on an object before using it.
