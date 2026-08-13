# 🟨 JavaScript — Object Destructuring

> **Topic:** Object Destructuring
> **Written by:** Biswajit Biswal
> **Series:** JavaScript Learning Journey

---

## 1. What is Destructuring?

> **Destructuring** means pulling values **out of an object or array** into separate variables — cleanly and quickly.

### Without Destructuring (Old way):

```js
const course = {
    courseName       : "Web Development with Chai aur Code",
    price            : 999,
    courseInstructor : "Biswajit"
}

// To get the instructor, you had to write:
console.log(course.courseInstructor); // Biswajit
```

### With Destructuring (New way ✅):

```js
const { courseInstructor } = course;

console.log(courseInstructor); // Biswajit
```

> 💡 Instead of writing `course.courseInstructor` every time, you pull it out once and use it directly.

---

## 2. Basic Syntax

```js
const { propertyName } = objectName;
```

### Example:

```js
const course = {
    courseName       : "Web Development with Chai aur Code",
    price            : 999,
    courseInstructor : "Biswajit"
}

const { courseName, price, courseInstructor } = course;

console.log(courseName);        // Web Development with Chai aur Code
console.log(price);             // 999
console.log(courseInstructor);  // Biswajit
```

---

## 3. Renaming While Destructuring ⭐

> You can give the variable a **new name** using `:` while destructuring.

```js
const { courseInstructor : instructor } = course;

console.log(instructor); // Biswajit
```

### How it works:

```
const { courseInstructor : instructor } = course;
              ↓                 ↓
        property name     new variable name
        (from object)     (what you call it)
```

### Visual:

```
course object
┌─────────────────────────────┐
│  courseInstructor: "Biswajit" │  ──→  instructor = "Biswajit"
└─────────────────────────────┘
```

> 💡 The **original object is not changed** — you just created a new variable with a different name.

---

## 4. Why Rename?

Sometimes the property name is too long or clashes with another variable.

```js
// Without rename — long name every time
const { courseInstructor } = course;

// With rename — short, clean name
const { courseInstructor : instructor } = course;

console.log(instructor); // Much cleaner ✅
```

---

## 5. Default Values

> If a property **doesn't exist** in the object, you can set a default value.

```js
const course = {
    courseName : "Web Development",
    price      : 999
}

const { courseInstructor = "Unknown" } = course;

console.log(courseInstructor); // Unknown  ← used default because it didn't exist
```

---

## 6. Object Inside API Response

> In real projects, APIs send data as objects. Destructuring makes it easy to use.

```js
// API sends this:
{
    name  : "biswajit",
    price : 100
}
```

```js
// You destructure it like this:
const { name, price } = apiResponse;

console.log(name);  // biswajit
console.log(price); // 100
```

---

## 7. Array of Objects

> APIs often send an **array of objects** — multiple items at once.

```js
[
    { name: "Biswajit", price: 100 },
    { name: "Rahul",    price: 200 },
    { name: "Ipsita",   price: 300 }
]
```

> You loop through the array and destructure each object:

```js
const users = [
    { name: "Biswajit", price: 100 },
    { name: "Rahul",    price: 200 },
    { name: "Ipsita",   price: 300 }
]

users.forEach(({ name, price }) => {
    console.log(`${name} → ₹${price}`);
});

// Output:
// Biswajit → ₹100
// Rahul    → ₹200
// Ipsita   → ₹300
```

---

## 8. Destructuring in Function Parameters

> Instead of passing the full object, destructure directly in the function.

```js
// ❌ Old way
function showCourse(course) {
    console.log(course.courseInstructor);
}

// ✅ Better way — destructure in parameter
function showCourse({ courseInstructor : instructor, price }) {
    console.log(instructor); // Biswajit
    console.log(price);      // 999
}

showCourse(course);
```

---

## 9. Complete Example — Your Code Explained

```js
// Object
const course = {
    courseName       : "Web Development with Chai aur Code",
    price            : 999,
    courseInstructor : "Biswajit"
}

// ❌ Old way — too verbose
console.log(course.courseInstructor);

// ✅ Destructuring — clean
const { courseInstructor } = course;
console.log(courseInstructor); // Biswajit

// ✅ Destructuring with rename
const { courseInstructor : instructor } = course;
console.log(instructor); // Biswajit
```

---

## ⭐ Quick Revision

```
Object Destructuring
│
├── Basic
│     const { name } = obj;
│
├── Rename
│     const { name : newName } = obj;
│
├── Default value
│     const { name = "Unknown" } = obj;
│
├── In function params
│     function fn({ name, price }) { }
│
└── Array of objects
      users.forEach(({ name }) => { })
```

---

## 💡 Key Rules to Remember

```
✅  Use { } for object destructuring
✅  Property name must MATCH the object key
✅  Use : to rename the variable
✅  Use = to set a default value
✅  Works inside function parameters too
✅  Original object is NEVER changed
```

---

## 🔁 Side by Side Comparison

| Situation | Without Destructuring | With Destructuring |
|---|---|---|
| Get one value | `course.courseInstructor` | `const { courseInstructor } = course` |
| Rename | `const x = course.courseInstructor` | `const { courseInstructor: x } = course` |
| Default | `const x = course.x \|\| "default"` | `const { x = "default" } = course` |
| In function | `function f(obj) { obj.name }` | `function f({ name }) { name }` |

---

*Notes by Biswajit Biswal · JavaScript Learning Journey · 2025*
