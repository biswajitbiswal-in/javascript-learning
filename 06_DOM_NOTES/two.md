# DOM Manipulation in JavaScript - Learning Notes

## Overview
This note covers **Document Object Model (DOM)** concepts and how to access, traverse, and manipulate HTML elements using JavaScript.

---

## What is DOM?
**DOM (Document Object Model)** is a programming interface that represents HTML/XML documents as a tree structure. It allows JavaScript to interact with and modify web page elements dynamically.

---

## Key Concepts Used in the Code

### 1. **Selecting Elements**

#### `document.querySelector(".selector")`
- Selects the **first element** that matches the CSS selector
- Returns `null` if no match found
- Used in the code to get the `.parent` div and first `.day` element

**Example:**
```javascript
const parent = document.querySelector(".parent");
const dayOne = document.querySelector(".day"); // Gets first .day only
```

---

### 2. **Accessing Child Elements**

#### `element.children`
- Returns a **live HTMLCollection** of all direct child elements
- Does NOT include text nodes (empty spaces, line breaks)
- Can be accessed like an array with index: `children[0]`, `children[1]`, etc.

**Example:**
```javascript
for (let i = 0; i < parent.children.length; i++) {
   console.log(parent.children[i].innerText);
}
// Output: Monday, Tuesday, Wednesday, Thursday
```

#### `element.childNodes`
- Returns a **NodeList** of ALL child nodes
- Includes **text nodes** (whitespace, line breaks) AND element nodes
- More comprehensive but less commonly used than `children`

**Example:**
```javascript
console.log("NODES:", parent.childNodes);
// Includes whitespace nodes between elements
```

---

### 3. **Accessing Text Content**

#### `element.innerText`
- Gets or sets the **visible text** inside an element
- Ignores HTML tags, only shows rendered text
- Respects CSS display property (hidden content not included)

**Example:**
```javascript
console.log(parent.children[0].innerText); // Output: "Monday"
```

#### `element.innerHTML`
- Gets or sets HTML content (tags included)
- Can modify structure of elements
- **Caution:** Potential security risk if used with untrusted input

---

### 4. **First and Last Element Navigation**

#### `element.firstElementChild`
- Returns the **first child element** (skips text nodes)
- Equivalent to `element.children[0]`

**Example:**
```javascript
console.log(parent.firstElementChild);
// Returns: <div class="day">Monday</div>
```

#### `element.lastElementChild`
- Returns the **last child element** (skips text nodes)
- Equivalent to `element.children[element.children.length - 1]`

**Example:**
```javascript
console.log(parent.lastElementChild);
// Returns: <div class="day">Thursday</div>
```

---

### 5. **Parent Element Navigation**

#### `element.parentElement`
- Returns the **direct parent element**
- Returns `null` if element has no parent
- Useful for traversing UP the DOM tree

**Example:**
```javascript
const dayOne = document.querySelector(".day");
console.log(dayOne.parentElement);
// Returns: <div class="parent">...</div>
```

---

### 6. **Sibling Element Navigation**

#### `element.nextElementSibling`
- Returns the **next sibling element** at the same level
- Returns `null` if no next sibling exists
- Skips text nodes

**Example:**
```javascript
const dayOne = document.querySelector(".day"); // Monday
console.log(dayOne.nextElementSibling);
// Returns: <div class="day">Tuesday</div>
```

#### `element.previousElementSibling`
- Returns the **previous sibling element**
- Returns `null` if no previous sibling exists

---

### 7. **Modifying Styles**

#### `element.style.propertyName`
- Changes CSS properties of an element dynamically
- Uses camelCase naming (e.g., `background-color` → `backgroundColor`)

**Example:**
```javascript
parent.children[1].style.color = "orange";
// Changes Tuesday's text color to orange
```

---

## Quick Reference Table

| Method/Property | Returns | Includes Text Nodes? | Use Case |
|---|---|---|---|
| `children` | HTMLCollection | ❌ No | Get direct child elements |
| `childNodes` | NodeList | ✅ Yes | Get all child nodes |
| `firstElementChild` | Element | ❌ No | Access first child |
| `lastElementChild` | Element | ❌ No | Access last child |
| `parentElement` | Element | N/A | Go up the tree |
| `nextElementSibling` | Element | ❌ No | Access next sibling |
| `innerText` | String | - | Get/set visible text |
| `innerHTML` | String | - | Get/set HTML content |

---

## Complete Code Explanation

```javascript
// 1. Select the parent container
const parent = document.querySelector(".parent");
console.log(parent);

// 2. Loop through all child elements and log their text
for (let i = 0; i < parent.children.length; i++) {
   console.log(parent.children[i].innerText);
   // Output: Monday, Tuesday, Wednesday, Thursday
}

// 3. Change color of the 2nd child (index 1 = Tuesday)
parent.children[1].style.color = "orange";

// 4. Get first and last children
console.log(parent.firstElementChild);   // Monday
console.log(parent.lastElementChild);    // Thursday

// 5. Select first day and navigate
const dayOne = document.querySelector(".day");
console.log(dayOne.parentElement);       // Parent div
console.log(dayOne.nextElementSibling);  // Tuesday element

// 6. Log all child nodes (including text nodes)
console.log("NODES:", parent.childNodes);
```

---

## Key Takeaways

✅ **Use `.children`** for accessing only element nodes  
✅ **Use `.childNodes`** when you need text nodes too  
✅ **Use `.innerText`** to get/set visible text content  
✅ **Navigate with parentElement and sibling methods** to traverse the DOM tree  
✅ **Modify `.style` property** to change CSS dynamically  
✅ **querySelector() selects the FIRST match** - use `querySelectorAll()` for multiple matches

---

## Common Mistakes to Avoid

❌ Forgetting that `children` is **array-like but not an array** (can't use array methods directly)  
❌ Confusing `innerHTML` with `innerText` (one includes HTML tags, one doesn't)  
❌ Using `childNodes` when you only want elements (includes whitespace)  
❌ Forgetting that `.querySelector()` returns only the **first match**

---

*Learning DOM manipulation is fundamental to front-end development. Practice navigating and modifying the tree to build dynamic web applications!*
