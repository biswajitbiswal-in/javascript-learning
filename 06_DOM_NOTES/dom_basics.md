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
| `getAttribute()` | Get attribute value | String or null |
| `setAttribute()` | Set attribute value | undefined |
| `innerText` | Get visible text | String |
| `textContent` | Get all text | String |
| `innerHTML` | Get HTML content | String |

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

---

## Practice Examples

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

---

## Next Steps

- Learn about other selection methods: `querySelector()`, `querySelectorAll()`, `getElementsByClassName()`
- Explore event handling: `addEventListener()`, `onclick`
- Study DOM traversal: `parentElement`, `children`, `nextSibling`
- Master DOM manipulation: `appendChild()`, `removeChild()`, `createElement()`
