# DOM Basics Guide

## What is the DOM?

The **Document Object Model (DOM)** is a programming interface that represents web page content as a tree of objects. It allows JavaScript to interact with and manipulate HTML elements on a webpage.

---

## Selecting Elements

### `getElementById()`
Selects an element by its `id` attribute. Returns a single element or `null`.

```javascript
const title = document.getElementById('title');
```

**Key Properties:**
- `id` - the element's id attribute
- `tagName` - the HTML tag name (e.g., 'H1', 'DIV', 'BUTTON')

```javascript
document.getElementById('title').id          // 'title'
document.getElementById('title').tagName     // 'H1'
```

---

### `querySelector()`
Selects the **first element** that matches a CSS selector. Returns an element or `null`.

```javascript
// Select by element tag
document.querySelector('ul')          // First <ul>
document.querySelector('li')          // First <li>

// Select by id (use #)
document.querySelector('#title')      // Element with id="title"

// Select by class (use .)
document.querySelector('.active')     // First element with class="active"
```

**Can be used on elements too (search within):**
```javascript
const myUl = document.querySelector('ul');
const firstLi = myUl.querySelector('li');  // First <li> inside myUl
```

**Modify the selected element:**
```javascript
const turnGreen = document.querySelector('li');
turnGreen.style.backgroundColor = "green";
turnGreen.style.padding = "10px";
```

---

### `querySelectorAll()`
Selects **all elements** that match a CSS selector. Returns a **NodeList**.

```javascript
// Select all <li> elements
document.querySelectorAll('li')       // NodeList(3) [li, li, li]

// Select all elements with a class
document.querySelectorAll('.firstHeading')  // NodeList(1) [h1.firstHeading]

// Select all <h3> elements
document.querySelectorAll('h3')       // NodeList(28) [h3, h3, h3, ...]
```

**Store in a variable:**
```javascript
const tempLiList = document.querySelectorAll('li');
console.log(tempLiList);  // NodeList(3) [li, li, li]
```

---

### `getElementsByClassName()`
Selects **all elements** with a specific class name. Returns an **HTMLCollection** (not NodeList).

```javascript
// Select all elements with class "active"
document.getElementsByClassName('active');  // HTMLCollection

// Select all elements with class "list"
const myArr = document.getElementsByClassName('list');
console.log(myArr);  // HTMLCollection(4) [li.list, li.list, li.list, li.list]
```

**Key Characteristics:**
- Returns **HTMLCollection** (not NodeList)
- HTMLCollection is **live** - updates automatically when DOM changes
- **Does NOT have `.forEach()` method**
- Must convert to array to use array methods

**Access individual elements:**
```javascript
const listItems = document.getElementsByClassName('list');

// Access by index
listItems[0].style.backgroundColor = 'red';
listItems[1].style.backgroundColor = 'blue';
listItems[2].style.backgroundColor = 'green';

// Get length
console.log(listItems.length);  // 4
```

**Real example:**
```javascript
const myArr = document.getElementsByClassName('list');

// Direct loop (works without conversion)
for (let i = 0; i < myArr.length; i++) {
    myArr[i].style.backgroundColor = 'red';
}
```

---

### `getElementsByTagName()`
Selects **all elements** with a specific tag name. Returns an **HTMLCollection** (not NodeList).

```javascript
// Select all <li> elements
document.getElementsByTagName('li');   // HTMLCollection

// Select all <h3> elements
document.getElementsByTagName('h3');   // HTMLCollection

// Select all <div> elements
document.getElementsByTagName('div');  // HTMLCollection
```

**Key Characteristics:**
- Returns **HTMLCollection** (not NodeList)
- HTMLCollection is **live** - updates when DOM changes
- **Does NOT have `.forEach()` method**
- Useful for selecting all elements of a specific type

**Access individual elements:**
```javascript
const allHeadings = document.getElementsByTagName('h3');

// Access by index
allHeadings[0].style.color = 'orange';
allHeadings[1].style.color = 'blue';

// Get total count
console.log(allHeadings.length);  // 28
```

**Real example:**
```javascript
// Get all paragraph elements
const paragraphs = document.getElementsByTagName('p');

// Loop through using traditional for loop
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = '16px';
    paragraphs[i].style.lineHeight = '1.6';
}

// Or loop through with for...of after converting to array
const paragraphArray = Array.from(paragraphs);
for (const p of paragraphArray) {
    p.style.color = 'darkgray';
}
```

**Nested search:**
```javascript
// Get all <li> elements inside a specific <ul>
const myUl = document.querySelector('ul');
const liItems = myUl.getElementsByTagName('li');  // Only <li> inside myUl

liItems[0].style.backgroundColor = 'lightblue';
```

---

## Working with NodeList

A **NodeList** is a collection of elements, similar to an array but **not** an array.

### Key Properties:
- Has `.length` property
- Has `.forEach()` method
- Can access elements by index: `nodeList[0]`, `nodeList[1]`, etc.

### Accessing Individual Elements:
```javascript
const tempLiList = document.querySelectorAll('li');

// Access by index
tempLiList[0].style.color = 'red';      // Change first <li>
tempLiList[1].style.color = 'blue';     // Change second <li>

// Get text content
console.log(tempLiList[0].innerText);   // Get first <li> text
```

### Looping with `forEach()`:

**Arrow Function Syntax:**
```javascript
const tempLiList = document.querySelectorAll('li');

tempLiList.forEach((l) => {
    l.style.backgroundColor = 'red';
});
```

**Regular Function Syntax:**
```javascript
tempLiList.forEach(function (l) {
    l.style.backgroundColor = 'red';
});
```

### Common Mistake - Don't do this:
```javascript
// ❌ WRONG - NodeList doesn't have style property
tempLiList.style.color = 'sky';  // TypeError!

// ✅ CORRECT - Access individual elements
tempLiList[0].style.color = 'sky';
```

---

## Working with HTMLCollection

**HTMLCollection** is another collection type (different from NodeList). Methods like `getElementsByClassName()` and `getElementsByTagName()` return HTMLCollection, not NodeList.

### Key Differences:
- HTMLCollection is **live** - updates automatically when DOM changes
- HTMLCollection does NOT have `.forEach()` method
- Must convert to array to use array methods like `map()`, `filter()`, `reduce()`

### Converting HTMLCollection to Array:

**Method 1: Using `Array.from()`**
```javascript
const myArr = document.getElementsByClassName('list');
// myArr is HTMLCollection, not an array

// Convert to array
const myArray = Array.from(myArr);

// Now you can use array methods
myArray.forEach((li) => {
    li.style.backgroundColor = 'red';
});
```

**Method 2: Using Spread Operator `[...]`**
```javascript
const myArr = document.getElementsByClassName('list');

// Convert to array using spread operator
const myArray = [...myArr];

// Now you can use forEach
myArray.forEach((li) => {
    li.style.backgroundColor = 'red';
});
```

### Real-World Example: Convert & Operate

```javascript
// Get HTMLCollection of all elements with class "list"
const myArr = document.getElementsByClassName('list');
console.log(myArr);  // HTMLCollection(4) [li.list, li.list, li.list, li.list]

// Convert to array
const myArray = Array.from(myArr);

// Now perform operations on the array
myArray.forEach(function (li) {
    li.style.backgroundColor = 'red';
});

// Or use other array methods
myArray.map((li) => {
    li.style.padding = '10px';
    return li.innerText;
});

// Filter and modify only specific elements
const filteredArray = myArray.filter((li, index) => index % 2 === 0);
filteredArray.forEach((li) => {
    li.style.borderRadius = '8px';
});
```

### When to Convert to Array:
- You need `.forEach()` (HTMLCollection doesn't have it)
- You want to use array methods: `.map()`, `.filter()`, `.reduce()`, `.find()`, `.some()`, `.every()`
- You need to reverse the order or sort
- You want to chain multiple operations

---

### Real-World Example:

```javascript
// Select all h3 elements
const h = document.querySelectorAll('h3');

// Change color of ALL h3 elements
h.forEach((heading) => {
    heading.style.color = 'orange';
});

// Get text from first h3
console.log(h[0].innerText);  // 'Creation at Netscape'

// Change text of all h3 elements
h.forEach((heading) => {
    heading.innerText = 'New Heading';
});
```

---

### CSS Selector Reference:

| Selector | Example | Selects |
|----------|---------|---------|
| Element | `querySelector('li')` | All `<li>` elements |
| ID | `querySelector('#myId')` | Element with `id="myId"` |
| Class | `querySelector('.active')` | First element with `class="active"` |
| All with Class | `querySelectorAll('.active')` | All elements with `class="active"` |
| Attribute | `querySelector('[data-id]')` | Element with `data-id` attribute |

---

---

## Getting & Setting Attributes

### `getAttribute()`
Retrieves the value of a specific attribute.

```javascript
element.getAttribute('class');
element.getAttribute('data-value');
```

### `setAttribute()`
Sets or modifies an attribute value. **Requires 2 arguments: attribute name and value.**

```javascript
// ✅ Correct - requires 2 arguments
element.setAttribute('class', 'test');
element.setAttribute('class', 'headings');
element.setAttribute('data-id', '123');

// ❌ Wrong - missing second argument
element.setAttribute('class');  // TypeError: 2 arguments required
```

---

## Modifying Styles

### Using the `style` Property

Access inline styles through the `style` object. Use **camelCase** for CSS properties.

```javascript
const title = document.getElementById('title');

// ✅ Correct - camelCase
title.style.backgroundColor = 'green';
title.style.borderRadius = '10px';
title.style.color = 'blue';

// ❌ Wrong - hyphenated names don't work
title.style.background-color = 'red';  // SyntaxError
```

**Common CSS Properties (in camelCase):**
- `backgroundColor` (not background-color)
- `borderRadius` (not border-radius)
- `fontSize` (not font-size)
- `marginTop` (not margin-top)
- `paddingLeft` (not padding-left)
- `textAlign` (not text-align)

---

## Reading Content

### `innerText`
Returns visible text content of an element (respects CSS display).

```javascript
title.innerText
```

### `textContent`
Returns all text content, including hidden text.

```javascript
title.textContent
```

### `innerHTML`
Returns the HTML markup inside an element.

```javascript
title.innerHTML  // Returns HTML string
```

---

## Quick Reference

| Method | Purpose | Returns |
|--------|---------|---------|
| `getElementById()` | Select by id | Element or null |
| `querySelector()` | Select first match (CSS selector) | Element or null |
| `querySelectorAll()` | Select all matches (CSS selector) | NodeList |
| `getElementsByClassName()` | Select by class name | HTMLCollection |
| `getElementsByTagName()` | Select by tag name | HTMLCollection |
| `getAttribute()` | Get attribute value | String or null |
| `setAttribute()` | Set attribute value | undefined |
| `innerText` | Get visible text | String |
| `textContent` | Get all text | String |
| `innerHTML` | Get HTML content | String |
| `Array.from()` | Convert HTMLCollection to array | Array |

---

## Common Mistakes to Avoid

1. **Forgetting camelCase in styles**
   ```javascript
   // ❌ Wrong
   element.style.background-color = 'red';
   
   // ✅ Correct
   element.style.backgroundColor = 'red';
   ```

2. **setAttribute with one argument**
   ```javascript
   // ❌ Wrong
   element.setAttribute('class');
   
   // ✅ Correct
   element.setAttribute('class', 'active');
   ```

3. **Forgetting to store element reference**
   ```javascript
   // Less efficient - DOM lookup happens every time
   document.getElementById('title').style.color = 'red';
   document.getElementById('title').style.fontSize = '20px';
   
   // Better - store reference once
   const title = document.getElementById('title');
   title.style.color = 'red';
   title.style.fontSize = '20px';
   ```

4. **Trying to use style on a NodeList directly**
   ```javascript
   // ❌ WRONG - NodeList doesn't have style property
   const tempLiList = document.querySelectorAll('li');
   tempLiList.style.color = 'sky';  // TypeError!
   
   // ✅ CORRECT - Access individual element by index
   tempLiList[0].style.color = 'sky';
   
   // ✅ CORRECT - Use forEach to loop through
   tempLiList.forEach((li) => {
       li.style.color = 'sky';
   });
   ```

5. **Wrong CSS selector syntax**
   ```javascript
   // ❌ Wrong - missing # or .
   document.querySelectorAll('firstHeading');      // Returns empty NodeList
   
   // ✅ Correct - use # for id
   document.querySelector('#firstHeading');
   
   // ✅ Correct - use . for class
   document.querySelectorAll('.firstHeading');
   ```

6. **Forgetting semicolon in forEach**
   ```javascript
   // ❌ Wrong - colon instead of semicolon
   h.forEach((l) => {
       l.style.color = 'orange':
   });  // SyntaxError!
   
   // ✅ Correct
   h.forEach((l) => {
       l.style.color = 'orange';
   });
   ```

7. **Trying to use forEach on HTMLCollection directly**
   ```javascript
   // ❌ WRONG - HTMLCollection doesn't have forEach()
   const myArr = document.getElementsByClassName('list');
   myArr.forEach((li) => {
       li.style.backgroundColor = 'red';
   });  // TypeError: myArr.forEach is not a function
   
   // ✅ CORRECT - Convert to array first
   const myArray = Array.from(myArr);
   myArray.forEach((li) => {
       li.style.backgroundColor = 'red';
   });
   
   // ✅ CORRECT - Use spread operator
   const myArray = [...myArr];
   myArray.forEach((li) => {
       li.style.backgroundColor = 'red';
   });
   ```

8. **Confusing querySelector (returns NodeList) with getElementsByClassName (returns HTMLCollection)**
   ```javascript
   // Returns NodeList (has forEach)
   const list1 = document.querySelectorAll('.list');
   list1.forEach((item) => {});  // ✅ Works
   
   // Returns HTMLCollection (no forEach)
   const list2 = document.getElementsByClassName('list');
   list2.forEach((item) => {});  // ❌ TypeError!
   ```

---

## Practice Examples

### Example 1: Using getElementById and setAttribute

```javascript
// Select the title element
const title = document.getElementById('title');

// Change its class
title.setAttribute('class', 'highlighted');

// Modify multiple styles
title.style.backgroundColor = 'yellow';
title.style.borderRadius = '8px';
title.style.padding = '10px';

// Get its content
console.log(title.innerText);
console.log(title.textContent);
console.log(title.innerHTML);
```

### Example 2: Using querySelector for single selection

```javascript
// Select the first ul element
const myUl = document.querySelector('ul');

// Select the first li inside that ul
const firstLi = myUl.querySelector('li');

// Modify it
firstLi.style.backgroundColor = 'green';
firstLi.style.padding = '10px';
```

### Example 3: Using querySelectorAll with forEach

```javascript
// Select all list items
const tempLiList = document.querySelectorAll('li');

// Change background of all li elements
tempLiList.forEach(function (li) {
    li.style.backgroundColor = 'red';
});
```

### Example 4: Select by class and modify all

```javascript
// Select all elements with class "firstHeading"
const g = document.querySelectorAll('.firstHeading');

// Get text from first one
console.log(g[0].innerText);  // 'JavaScript'

// Change color of all heading elements
const h = document.querySelectorAll('h3');
h.forEach((heading) => {
    heading.style.color = 'orange';
});
```

### Example 5: Using arrow function with forEach

```javascript
// Select all h3 elements
const myArr = document.querySelectorAll('li.list');

// Loop through each and change styles
myArr.forEach((li) => {
    li.style.backgroundColor = 'red';
});
```

### Example 6: Convert HTMLCollection to Array and Operate

```javascript
// Get HTMLCollection using getElementsByClassName
const myArr = document.getElementsByClassName('list');
console.log(myArr);  // HTMLCollection(4) [li.list, li.list, li.list, li.list]

// ❌ This would fail - HTMLCollection has no forEach
// myArr.forEach((li) => { li.style.backgroundColor = 'red'; });

// ✅ Convert to array using Array.from()
const myArray = Array.from(myArr);

// Now you can use forEach
myArray.forEach(function (li) {
    li.style.backgroundColor = 'red';
});

// Or use spread operator for conversion
const myArray2 = [...myArr];

// Now use array methods
myArray2.forEach((li) => {
    li.style.padding = '10px';
});

// Use other array methods
myArray2.map((li) => li.innerText);  // Get all text
myArray2.filter((li, index) => index % 2 === 0);  // Get every other element
```

### Example 7: Using getElementsByClassName without conversion

```javascript
// Select all elements with class "active"
const activeElements = document.getElementsByClassName('active');

// Loop using traditional for loop (no conversion needed)
for (let i = 0; i < activeElements.length; i++) {
    activeElements[i].style.backgroundColor = 'yellow';
    activeElements[i].style.padding = '10px';
}

// Get count
console.log(activeElements.length);  // Number of active elements
```

### Example 8: Using getElementsByTagName

```javascript
// Get all <h3> heading elements
const h = document.getElementsByTagName('h3');
console.log(h);  // HTMLCollection(28) [h3, h3, h3, ...]

// Change styles using traditional for loop
for (let i = 0; i < h.length; i++) {
    h[i].style.color = 'orange';
}

// Get first heading
console.log(h[0].innerText);  // 'Creation at Netscape'

// Access specific elements
h[0].style.fontSize = '24px';
h[1].style.fontSize = '22px';
```

### Example 9: Nested getElementsByTagName search

```javascript
// Get a specific list element
const myUl = document.querySelector('ul');

// Get all <li> elements ONLY within that specific <ul>
const liItems = myUl.getElementsByTagName('li');
console.log(liItems);  // HTMLCollection(3) [li, li, li]

// Change styles of list items
for (let i = 0; i < liItems.length; i++) {
    liItems[i].style.backgroundColor = 'lightblue';
    liItems[i].style.padding = '8px';
    liItems[i].style.margin = '5px';
}
```

### Example 10: Comparing different selection methods

```javascript
// All of these select the same elements but return different types:

// Returns NodeList - has forEach()
const result1 = document.querySelectorAll('.item');
result1.forEach((item) => { item.style.color = 'red'; });  // ✅ Works

// Returns HTMLCollection - NO forEach()
const result2 = document.getElementsByClassName('item');
// result2.forEach((item) => {});  // ❌ TypeError!

// Must convert to array first
const result3 = Array.from(result2);
result3.forEach((item) => { item.style.color = 'red'; });  // ✅ Works

// Or use traditional for loop
for (let i = 0; i < result2.length; i++) {
    result2[i].style.color = 'red';  // ✅ Works
}
```

---

## Next Steps

- Learn about other selection methods: `getElementsByClassName()`, `getElementsByTagName()`
- Explore event handling: `addEventListener()`, `onclick`, `onchange`
- Study DOM traversal: `parentElement`, `children`, `nextSibling`, `previousSibling`
- Master DOM manipulation: `appendChild()`, `removeChild()`, `createElement()`, `insertBefore()`
- Understand NodeList vs Array and when to convert: `Array.from()`, spread operator `[...]`
- Practice combining selectors: `.querySelector('ul li.active')`
