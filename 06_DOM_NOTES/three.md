# DOM Manipulation Notes (createElement, TextNode, etc.)

## What this code does (in plain words)
It creates a new `<div>` in JavaScript (not in the HTML file), styles it, adds text to it, and then inserts it into the page.

## Line-by-line

```js
const div = document.createElement('div')
```
Creates a brand new `<div>` element in memory. It doesn't exist on the page yet — it's just sitting in the `div` variable.

```js
console.log(div)
```
Just prints the element to the console so you can inspect it. Not required for the page to work.

```js
div.className = "box"
```
Sets the `class` attribute → `<div class="box">`. Used for CSS styling/selecting.

```js
div.id = Math.round(Math.random()*10+1)
```
Sets a random `id` (a number between 1 and 11). Note: IDs are usually strings and should be unique — using `Math.random()` for an id is more of a demo/practice thing, not something you'd do in real projects.

```js
div.setAttribute("title","this is a box")
```
Adds a `title` attribute → shows a tooltip when you hover over the div in the browser.

```js
div.style.backgroundColor = "red"
```
Applies inline CSS directly → `background-color: red`.

```js
//div.innerText = "Hello Biswajit"
```
Commented out. `innerText` would have been a quick way to set text directly. It's disabled here because the next two lines do the same thing a different way.

```js
const text = document.createTextNode("Hello Biswajit")
div.appendChild(text)
```
Creates a **text node** (just plain text, not HTML) and attaches it inside the div. This is the more "manual"/low-level way of adding text compared to `innerText` or `textContent`.

```js
document.body.appendChild(div)
```
🔑 **The most important line.** Everything above just built the div in memory — this line actually **inserts it into the visible page** (inside `<body>`).

## Key takeaway to remember
- `createElement` → makes an element (not visible yet)
- Attributes/styles/classes → configure it
- `createTextNode` + `appendChild` → manual way to add text
- `document.body.appendChild(div)` → makes it show up on the actual page

**Rule of thumb:** If you create something with JS but never `appendChild` it to the document, it will never appear on the page.

## Quick comparison: 3 ways to add text
| Method | What it does |
|---|---|
| `innerText` | Sets visible text directly (simple, common) |
| `textContent` | Similar to innerText, but ignores CSS visibility |
| `createTextNode` + `appendChild` | More manual, used when building nodes piece by piece |
