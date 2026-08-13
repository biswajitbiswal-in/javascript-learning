# JavaScript Functions & Parameters - Study Notes

## 1. Rest Parameters (`...`) Function

```javascript
function calculateCartPrice(vak1, val2, val3, ...num1) {
    console.log(num1)
}
// calculateCartPrice(100, 12, 21, 24, 4, 45, 4)
```

### Key Concepts:
- **Rest Parameters** (`...num1`): Collects all remaining arguments into an array
- The first 3 arguments go to `vak1`, `val2`, `val3`
- Arguments from the 4th position onwards are collected in `num1` array
- Example output: `num1 = [24, 4, 45, 4]`

### Rules:
- Rest parameter must be the **last parameter** in the function
- Only one rest parameter allowed per function
- Rest parameter is always an array (even if empty)

---

## 2. Object as Parameter

```javascript
const user = {
    name: "Biswajit",
    price: 100
}

function handleObject(anyObject) {
  console.log(`user name is ${anyObject.name} and price is ${anyObject.price}`)
}

// Two ways to call:
// handleObject(user)  // Pass object variable
handleObject({         // Pass object literal
    name: "biswajit",
    price: 499
})
```

### Key Concepts:
- **Object as Argument**: Pass entire objects to functions
- **Accessing Properties**: Use dot notation (`anyObject.name`)
- **Template Literals**: Use backticks (`) with `${}` for string interpolation
- **Flexibility**: Function accepts any object with matching properties

### Output:
```
user name is biswajit and price is 499
```

---

## 3. Array Parameter & Indexing

```javascript
const myNewArray = [100, 200, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 283, 35, 678, 4674]));
```

### Key Concepts:
- **Array Indexing**: Arrays are 0-indexed (first element is at index 0)
- **Index 1**: Returns the second element
- **Passing Arrays**: Pass array variable OR create inline array literal
- **Return Value**: Function returns specific array element

### Output:
```
283
```

| Index | Value |
|-------|-------|
| 0     | 100   |
| 1     | 283   | ← Returned
| 2     | 35    |
| 3     | 678   |
| 4     | 4674  |

---

## Quick Reference

| Concept | Syntax | Purpose |
|---------|--------|---------|
| Rest Parameters | `...paramName` | Collect multiple arguments into array |
| Object Property Access | `obj.property` | Get value from object key |
| Template Literals | `` `text ${var}` `` | String interpolation |
| Array Index | `array[n]` | Access element at position n |

---

## Summary
✅ Functions can accept: **primitives**, **objects**, **arrays**, **multiple values (rest params)**  
✅ Always remember: **Arrays are 0-indexed**  
✅ Use **rest parameters** to handle variable number of arguments
