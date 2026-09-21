# JavaScript DOM Events: Revision Notes

> Based on the **Dream Gallery** project: a list of images where clicking an image removes it.

---

## 1. What is an Event?

An **event** is something that happens in the browser: a click, a key press, a mouse move, a form submit, and so on. JavaScript lets us **listen** for these events and **run a function** when they happen.

```
User clicks on image  →  Browser creates an Event object  →  Our function runs
```

---

## 2. Three Ways to Attach an Event

### a) Inline HTML (avoid)
```html
<img onclick="alert('hi')">
```
Mixes HTML and JS. Hard to maintain.

### b) `onclick` property
```js
document.getElementById('lambo-urus').onclick = function () {
    alert("This is your urus");
};
```
- Simple.
- **Problem:** only ONE handler per event. A second `onclick =` overwrites the first.

### c) `addEventListener()` (best)
```js
element.addEventListener(eventType, callback, useCapture);
```

```js
document.getElementById('lambo-urus').addEventListener('click', (e) => {
    console.log(e);
}, false);
```

| Part | Meaning |
|------|---------|
| `'click'` | Event type (a string, **without** the `on` prefix) |
| `(e) => {...}` | Callback function. `e` is the event object |
| `false` | `useCapture`. `false` = bubbling phase (default), `true` = capturing phase |

**Why it is better:**
- You can attach **multiple** listeners to the same element.
- You control the bubbling/capturing phase.
- You can remove it later with `removeEventListener()`.

> Old Internet Explorer used `attachEvent()`, and jQuery uses `.on()`. Modern JS uses `addEventListener()`.

---

## 3. The Event Object (`e`)

Every handler receives an event object with useful information.

### Basic info
| Property | What it gives |
|----------|---------------|
| `e.type` | Type of event (`"click"`) |
| `e.timeStamp` | When it happened |
| `e.defaultPrevented` | `true` if `preventDefault()` was called |

### Which element?
| Property | What it gives |
|----------|---------------|
| `e.target` | The element that was **actually clicked** (the innermost one) |
| `e.currentTarget` | The element the **listener is attached to** |
| `e.srcElement` / `e.toElement` | Old/legacy versions of `target` |

**Key difference (very important):**
```js
ul.addEventListener('click', (e) => {
    e.target;         // the <img> you clicked
    e.currentTarget;  // the <ul> (where the listener lives)
});
```

### Mouse position
| Property | Relative to |
|----------|-------------|
| `e.clientX`, `e.clientY` | The browser viewport (visible window) |
| `e.screenX`, `e.screenY` | The whole monitor screen |

### Keyboard / modifier keys
| Property | What it tells |
|----------|---------------|
| `e.altKey` | Was Alt held? |
| `e.ctrlKey` | Was Ctrl held? |
| `e.shiftKey` | Was Shift held? |
| `e.keyCode` | Numeric key code (**deprecated**, use `e.key` instead) |

---

## 4. Event Propagation: Bubbling & Capturing

When you click an element, the event travels through its parents in **two phases**:

```
            WINDOW
              ↓   (1) CAPTURING phase: top → down
           DOCUMENT
              ↓
            <ul>
              ↓
            <li>
              ↓
            <img>  ← TARGET (you clicked here)
              ↑
            <li>
              ↑   (2) BUBBLING phase: bottom → up  (DEFAULT)
            <ul>
              ↑
           DOCUMENT
```

- **Bubbling (default):** the event starts at the target and goes **up** to the parents.
- **Capturing:** the event goes **down** from the top to the target. Enable it by passing `true` as the third argument.

### Example from the code
```js
// Listener on the parent <ul>
document.getElementById('images').addEventListener('click', (e) => {
    console.log("clicked inside the ul");
});

// Listener on the child <img>
document.getElementById('lambo-urus').addEventListener('click', (e) => {
    console.log("clicked inside the lambo");
});
```
Clicking the Lambo image prints:
```
clicked inside the lambo
clicked inside the ul      ← bubbled up to the parent
```

### `e.stopPropagation()`
Stops the event from travelling further (to the parents).
```js
document.getElementById('lambo-urus').addEventListener('click', (e) => {
    console.log("clicked inside the lambo");
    e.stopPropagation();   // the <ul> listener will NOT run now
});
```

---

## 5. `e.preventDefault()`

Some elements have a **default browser behaviour**:
- `<a>` navigates to its `href`
- `<form>` submits and reloads the page
- Checkbox toggles

`preventDefault()` cancels that default action.

```js
document.getElementById('google').addEventListener('click', (e) => {
    console.log("Google clicked");
    e.preventDefault();      // link will NOT open google.com
    e.stopPropagation();     // parents will NOT be notified
}, false);
```

| Method | What it stops |
|--------|---------------|
| `preventDefault()` | The browser's **default action** (like following a link) |
| `stopPropagation()` | The event from **bubbling/capturing** to other elements |

They are independent. Using one does not do the other.

---

## 6. Event Delegation (the final code)

This is the **main idea** of the final code.

### The problem
We have 5 images. Should we add 5 separate listeners? What if new images are added later dynamically? Those would have no listener.

### The solution
Attach **ONE listener to the parent** (`<ul>`). Thanks to **bubbling**, clicks on any child reach the parent. Then use `e.target` to find out which child was clicked.

```js
document.querySelector('#images').addEventListener('click', function (e) {
    console.log(e.target.parentNode);

    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode;      // the <li> that wraps the <img>
        removeIt.parentNode.removeChild(removeIt); // ask the <ul> to remove that <li>
    }
});
```

### Step-by-step walkthrough

1. `document.querySelector('#images')` selects the `<ul>` with id `images`.
2. `addEventListener('click', ...)` listens for clicks on the `<ul>` (and anything inside it, via bubbling).
3. `e.target` is the exact element clicked (could be `<img>`, `<li>`, or empty space in the `<ul>`).
4. `e.target.tagName === 'IMG'` is a **guard check**. We only act if an image was clicked. (`tagName` returns **uppercase**, so compare with `'IMG'`, not `'img'`.)
5. `e.target.parentNode` is the `<li>` containing the image.
6. `removeIt.parentNode.removeChild(removeIt)` means: go to the `<li>`'s parent (`<ul>`) and tell it to remove that `<li>` child.

### Two ways to remove an element

```js
// Old way: parent removes child
removeIt.parentNode.removeChild(removeIt);

// Modern way: element removes itself (shorter)
removeIt.remove();
```
Both do the same thing. In the code the commented line `// removeIt.remove()` is the modern alternative.

### Why delegation is great
- **One** listener instead of many (better performance).
- Works for elements added **later** (dynamic content).
- Less code, easier to maintain.

---

## 7. Selecting Elements (quick recap)

| Method | Example | Returns |
|--------|---------|---------|
| `getElementById` | `document.getElementById('google')` | One element |
| `querySelector` | `document.querySelector('#images')` | First match (any CSS selector) |
| `querySelectorAll` | `document.querySelectorAll('img')` | All matches (NodeList) |

---

## 8. Bugs / Improvements in the HTML

Small things worth fixing:

| Issue | Where | Fix |
|-------|-------|-----|
| Extra quote `""` | `<body style="background-color: #414141;"">` | Use a single closing quote: `"...;">` |
| `<a>` directly inside `<ul>` | The "Hunt in Google" link | Only `<li>` is allowed directly inside `<ul>`. Wrap it: `<li><a ...>...</a></li>` |
| Missing space between attributes | `width="200px"height="320px"` | Add a space: `width="200px" height="320px"` |
| `<script>` after `</body>` | Bottom of the file | Put the script **inside** `<body>` just before `</body>` |
| Same `alt="photoshop"` on all images | Every `<img>` | Use meaningful text such as `alt="Mercedes G-Wagon"` (helps accessibility) |
| `width="200px"` | `<img>` | HTML attribute takes plain number: `width="200"` |

---

## 9. Cheat Sheet

```js
// 1. Select
const el = document.querySelector('#id');

// 2. Listen
el.addEventListener('click', (e) => {

    e.target;            // what was actually clicked
    e.currentTarget;     // where the listener is attached
    e.preventDefault();  // stop default browser action
    e.stopPropagation(); // stop bubbling to parents

}, false);               // false = bubbling (default), true = capturing

// 3. Remove element
el.remove();
```

### One-line summaries
- **Event**: something that happens (click, keypress...).
- **Listener**: a function waiting for an event.
- **Bubbling**: event goes child → parent.
- **Capturing**: event goes parent → child.
- **stopPropagation**: stops it travelling.
- **preventDefault**: stops the browser's default behaviour.
- **Delegation**: one listener on the parent handles all children via `e.target`.

---

## 10. Practice Ideas

1. Change the code so clicking an image **adds a border** instead of removing it (`e.target.style.border = '3px solid red'`).
2. Use `e.ctrlKey`: only remove the image if **Ctrl** is held while clicking.
3. Add a **"Restore"** button that brings back the removed images.
4. Use `e.clientX` / `e.clientY` to show the mouse position on screen with `mousemove`.
5. Try changing `false` to `true` in the parent/child listeners and observe how the console order changes.
