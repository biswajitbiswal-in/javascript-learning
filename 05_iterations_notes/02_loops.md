# JavaScript Loops: While and Do-While

## While Loop

A **while loop** repeats a block of code as long as a specified condition is `true`. It checks the condition first, and if it's false, the loop doesn't execute at all.

### Syntax
```javascript
while (condition) {
    // code to execute
}
```

### Example 1: Numeric Counter
```javascript
let index = 0
while (index <= 10) {
    console.log(`Value of the index is ${index}`);
    index = index + 2  // increment by 2
}
```
**Output:**
```
Value of the index is 0
Value of the index is 2
Value of the index is 4
Value of the index is 6
Value of the index is 8
Value of the index is 10
```

### Example 2: Array Iteration
```javascript
let myArr = ["biswajit", "rahul", "rajesh"]
let arr = 0 
while (arr < myArr.length) {
    console.log(`value of ${myArr[arr]}`);
    arr = arr + 1
}
```
**Output:**
```
value of biswajit
value of rahul
value of rajesh
```

**Explanation:**
- `myArr.length` returns 3 (number of elements in array)
- Loop continues while `arr < 3`
- Each iteration accesses an array element using the index

---

## Do-While Loop

A **do-while loop** executes the code block first, then checks the condition. This means the code runs **at least once**, even if the condition is false from the start.

### Syntax
```javascript
do {
    // code to execute
} while (condition);
```

### Example: Do-While Execution
```javascript
let score = 11
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);
```

**Output:**
```
score is 11
```

**Explanation:**
- The `do` block executes once, printing "score is 11"
- Then the condition `score <= 10` is checked
- Since 11 is not ≤ 10, the loop terminates
- The loop runs **once** even though the condition was false initially

---

## Key Differences

| Feature | While | Do-While |
|---------|-------|----------|
| **Condition Check** | Before execution | After execution |
| **Minimum Executions** | 0 (may never run) | 1 (always runs at least once) |
| **Use Case** | When you may not need to execute at all | When you need to execute at least once |

---

## Tips & Best Practices

1. **Always increment/decrement** to avoid infinite loops
   ```javascript
   // ✅ Good - loop will end
   let i = 0;
   while (i < 5) {
       console.log(i);
       i++;  // Important!
   }
   
   // ❌ Bad - infinite loop!
   let i = 0;
   while (i < 5) {
       console.log(i);  // i never changes
   }
   ```

2. **Use `for` loops for known iterations** (cleaner for arrays)
   ```javascript
   // Better than while for this use case
   for (let i = 0; i < myArr.length; i++) {
       console.log(myArr[i]);
   }
   ```

3. **Do-while is useful for:**
   - Menu systems (ask user, then check input)
   - Input validation (get input, then validate)
   ```javascript
   let userInput;
   do {
       userInput = prompt("Enter a number 1-10:");
   } while (isNaN(userInput) || userInput < 1 || userInput > 10);
   ```
