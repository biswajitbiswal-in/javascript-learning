# DOM Notes 2 — Adding, Editing, Replacing & Removing List Items

## What this code does (in plain words)
Starts with a `<ul>` containing HTML, CSS, JavaScript. Then uses JS to:
1. Add new items two different ways
2. Edit/replace an existing item
3. Remove an item

## 1️⃣ Adding items — function version

```js
function addLang(langName){
    const li = document.createElement("li")
    li.innerHTML = `${langName}`
    document.querySelector(".ul").appendChild(li)
}
addLang("Python")
addLang("C++")
```
- Creates an `<li>`, sets its content using `innerHTML` (a template string here, but works like plain text since there are no tags).
- `document.querySelector(".ul")` finds the `<ul>` by its class.
- `appendChild(li)` inserts the new `<li>` at the end.
- Called twice → adds "Python" and "C++" to the list.

## 2️⃣ Adding items — optimized/arrow function version

```js
const addOptiLang = (langName) => {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(langName))
    document.querySelector(".ul").appendChild(li)
}
addOptiLang("Java")
```
- Same idea, but arrow function + `createTextNode` instead of `innerHTML`.
- **Why "optimized"?** Using `createTextNode` is slightly safer than `innerHTML` because it treats the input as plain text only — no risk of accidentally injecting HTML/script (avoids XSS-type issues). Good habit for real projects.

➡️ After these steps, list = HTML, CSS, JavaScript, Python, C++, Java

## 3️⃣ Editing/Replacing an item — `replaceWith`

```js
const secondLang = document.querySelector("Li:nth-child(3)")
const newLi = document.createElement("li");
newLi.textContent = "DOCKER";
secondLang.replaceWith(newLi)
```
- `querySelector("Li:nth-child(3)")` selects the **3rd `<li>`** (JavaScript at this point). ⚠️ Note: CSS selectors are case-insensitive for tag names, so `Li` works, but lowercase `li` is the correct/conventional way to write it.
- Instead of editing it directly, a brand **new** `<li>` is created with text "DOCKER".
- `.replaceWith(newLi)` swaps the old `<li>` (JavaScript) with the new one (DOCKER) entirely.
- The commented-out line `//secondLang.innerHTML = "DOCKER"` shows the simpler alternative — just change the content directly instead of replacing the whole node.

➡️ List now: HTML, CSS, DOCKER, Python, C++, Java

## 4️⃣ Editing with `outerHTML`

```js
const secondLang2 = document.querySelector("Li:first-child")
secondLang2.outerHTML = "<li>SOME</li>"
```
- Selects the **first** `<li>` (HTML).
- `outerHTML` replaces the **entire element** (tag + content) with new raw HTML — different from `innerHTML`, which only replaces what's *inside* the tag.

➡️ List now: SOME, CSS, DOCKER, Python, C++, Java

## 5️⃣ Removing an item

```js
document.querySelector("li:last-child").remove()
```
- Selects the **last** `<li>` (Java) and removes it completely from the page using `.remove()`.

➡️ Final list: SOME, CSS, DOCKER, Python, C++

## Key takeaways to remember

| Task | Method |
|---|---|
| Create new element | `document.createElement("tag")` |
| Add plain text safely | `createTextNode(text)` + `appendChild()` |
| Add text/HTML quickly | `element.innerHTML = "..."` |
| Insert element into page | `parent.appendChild(child)` |
| Replace a whole element | `oldEl.replaceWith(newEl)` |
| Replace tag + content via string | `element.outerHTML = "<li>...</li>"` |
| Remove an element | `element.remove()` |

**Selectors used:**
- `.querySelector(".ul")` → by class
- `.querySelector("li:nth-child(3)")` → nth position
- `.querySelector("li:first-child")` → first item
- `.querySelector("li:last-child")` → last item

**Rule of thumb:**
- `innerHTML` = replace what's inside → can inject HTML tags (be careful with user input)
- `outerHTML`/`replaceWith` = replace the whole element itself
- `textContent`/`createTextNode` = safest way to insert plain text only
