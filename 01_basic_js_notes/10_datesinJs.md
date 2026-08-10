# JavaScript Dates

## 1. What is a Date?

A **Date** in JavaScript is used to work with:

* Date
* Time
* Day
* Month
* Year
* Timestamps

JavaScript provides the built-in `Date` object for this.

---

# 2. Getting the Current Date and Time

```javascript
let myDate = new Date();

console.log(myDate);
```

`new Date()` gives the **current date and time**.

---

# 3. `toString()`

Converts the Date into a readable string containing date, time, and timezone information.

```javascript
console.log(myDate.toString());
```

Example output:

```text
Mon Aug 10 2026 20:20:00 GMT+0530 (India Standard Time)
```

### Remember

> `toString()` → Full date + time information

---

# 4. `toDateString()`

Returns only the **date part** in a readable format.

```javascript
console.log(myDate.toDateString());
```

Example:

```text
Mon Aug 10 2026
```

### Remember

> `toDateString()` → Date only

---

# 5. `toISOString()`

Returns the date in **ISO format**.

```javascript
console.log(myDate.toISOString());
```

Example:

```text
2026-08-10T14:50:00.000Z
```

The `Z` represents **UTC time**.

### Remember

> `toISOString()` → Standard date/time format

---

# 6. `toJSON()`

Returns the date in a JSON-compatible string format.

```javascript
console.log(myDate.toJSON());
```

Example:

```text
2026-08-10T14:50:00.000Z
```

It is commonly useful when sending dates as data.

---

# 7. `toLocaleString()`

Returns the date and time in a **local format**.

```javascript
console.log(myDate.toLocaleString());
```

Example:

```text
10/8/2026, 8:20:00 PM
```

The exact format can depend on your location/settings.

### Remember

> `toLocaleString()` → Local date + time

---

# Date Formatting Methods

| Method             | Gives             |
| ------------------ | ----------------- |
| `toString()`       | Full date + time  |
| `toDateString()`   | Date only         |
| `toISOString()`    | ISO format        |
| `toJSON()`         | JSON date string  |
| `toLocaleString()` | Local date + time |

---

# 8. Creating a Specific Date

You can create your own date using `new Date()`.

### Using numbers

```javascript
let myCreatedDate = new Date(2025, 1, 28);

console.log(myCreatedDate);
```

### ⚠️ Important: Month Starts at 0

In JavaScript:

```text
0  → January
1  → February
2  → March
3  → April
...
11 → December
```

So:

```javascript
new Date(2025, 1, 28);
```

means:

```text
28 February 2025
```

### 🧠 Remember

> **JavaScript months start from 0.**

```text
January  → 0
February → 1
December → 11
```

---

# 9. Creating Date with Time

You can also give hours and minutes.

```javascript
let myCreatedDate = new Date(2025, 1, 28, 8, 7);

console.log(myCreatedDate.toLocaleString());
```

The order is:

```text
year, month, day, hour, minute
```

So:

```javascript
new Date(2025, 1, 28, 8, 7);
```

means:

```text
28 February 2025
8:07 AM
```

---

# 10. Creating Date Using a String

You can also provide a date string.

```javascript
let myCreatedDate = new Date("2003-02-07");

console.log(myCreatedDate.toLocaleString());
```

Here:

```text
2003 → Year
02   → Month
07   → Day
```

So the date is:

```text
7 February 2003
```

### Easy format

```text
YYYY-MM-DD
```

Example:

```text
2025-08-10
```

means:

```text
10 August 2025
```

---

# 11. `Date.now()`

`Date.now()` gives the **current timestamp in milliseconds**.

```javascript
let myTimeStamp = Date.now();

console.log(myTimeStamp);
```

You may see a large number like:

```text
1754837400000
```

Don't worry about remembering the exact number.

### What is a Timestamp?

A timestamp is a number representing time.

JavaScript's timestamp is measured in:

> **Milliseconds since January 1, 1970 UTC.**

---

# 12. `getTime()`

`getTime()` gives the timestamp of a particular Date object.

```javascript
let myCreatedDate = new Date("2003-02-07");

console.log(myCreatedDate.getTime());
```

It gives the number of milliseconds between:

```text
January 1, 1970
        ↓
Specified date
```

### Difference

```javascript
Date.now()
```

→ Current timestamp

```javascript
myCreatedDate.getTime()
```

→ Timestamp of `myCreatedDate`

---

# 13. Convert Milliseconds to Seconds

JavaScript timestamps are in milliseconds.

To convert milliseconds into seconds:

```javascript
Date.now() / 1000
```

Example:

```javascript
console.log(Date.now() / 1000);
```

To get a whole number:

```javascript
console.log(Math.floor(Date.now() / 1000));
```

### Why `Math.floor()`?

Because we don't want the decimal part.

```text
1234567890.456
        ↓
Math.floor()
        ↓
1234567890
```

---

# 14. Getting the Month

`getMonth()` returns the month number.

```javascript
let newDate = new Date();

console.log(newDate.getMonth());
```

Remember:

```text
January → 0
February → 1
March → 2
...
December → 11
```

Therefore, if you want the normal month number `1–12`, use:

```javascript
console.log(newDate.getMonth() + 1);
```

### Example

If the current month is August:

```text
getMonth() → 7
```

Add 1:

```text
7 + 1 = 8
```

So:

```text
August → 8
```

---

# 15. Getting Other Date Information

JavaScript provides several `get` methods.

### `getFullYear()`

Gets the year.

```javascript
console.log(newDate.getFullYear());
```

Example:

```text
2026
```

---

### `getMonth()`

Gets the month.

```javascript
console.log(newDate.getMonth());
```

Example:

```text
7
```

Remember:

> January = `0`

---

### `getDate()`

Gets the day of the month.

```javascript
console.log(newDate.getDate());
```

Example:

```text
10
```

---

### `getDay()`

Gets the day of the week.

```javascript
console.log(newDate.getDay());
```

The values are:

```text
Sunday    → 0
Monday    → 1
Tuesday   → 2
Wednesday → 3
Thursday  → 4
Friday    → 5
Saturday  → 6
```

---

### `getHours()`

Gets the hour.

```javascript
console.log(newDate.getHours());
```

---

### `getMinutes()`

Gets the minutes.

```javascript
console.log(newDate.getMinutes());
```

---

### `getSeconds()`

Gets the seconds.

```javascript
console.log(newDate.getSeconds());
```

---

# 16. Date Getter Quick Table

| Method              | Gives               |
| ------------------- | ------------------- |
| `getFullYear()`     | Year                |
| `getMonth()`        | Month `0–11`        |
| `getDate()`         | Day of month `1–31` |
| `getDay()`          | Day of week `0–6`   |
| `getHours()`        | Hour                |
| `getMinutes()`      | Minutes             |
| `getSeconds()`      | Seconds             |
| `getMilliseconds()` | Milliseconds        |
| `getTime()`         | Timestamp           |

---

# 17. `toLocaleString()` with Options

You can customize how the date is displayed.

Your code:

```javascript
newDate.toLocaleString("default", {
    day: "numeric",
    weekday: "long"
});
```

This asks JavaScript to show:

* The day number
* The full weekday name

Example:

```text
Monday, 10
```

### ⚠️ Important

You need to `console.log()` it to see the result:

```javascript
console.log(
    newDate.toLocaleString("default", {
        day: "numeric",
        weekday: "long"
    })
);
```

---

# 18. More Formatting Options

You can show different parts of the date.

```javascript
console.log(
    newDate.toLocaleString("default", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    })
);
```

Example:

```text
Monday, August 10, 2026
```

You can also include time:

```javascript
console.log(
    newDate.toLocaleString("default", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    })
);
```

---

# 🧠 Date Flow

```text
                    DATE
                      │
          ┌───────────┴───────────┐
          ↓                       ↓
     Current Date             Specific Date
          │                       │
    new Date()              new Date(...)
          │                       │
          ↓                       ↓
     Date + Time             Your Date
```

---

# ⭐ Most Important Date Concepts

```text
new Date()
    ↓
Current date and time
```

```text
Date.now()
    ↓
Current timestamp
    ↓
Milliseconds
```

```text
getTime()
    ↓
Timestamp of a Date object
```

```text
getMonth()
    ↓
0 - 11
    ↓
January = 0
December = 11
```

```text
toLocaleString()
    ↓
Local readable date/time
```

---

# 🧠 Super Easy Memory

### Creating a date

```javascript
new Date()
```

→ Current date

### Current timestamp

```javascript
Date.now()
```

→ Current time in milliseconds

### Get information

```javascript
getFullYear() → Year
getMonth()    → Month
getDate()     → Day
getDay()      → Weekday
getHours()    → Hour
getMinutes()  → Minutes
getSeconds()  → Seconds
```

### Display date

```javascript
toString()
toDateString()
toISOString()
toLocaleString()
```

---

# Complete Example

```javascript
// Current Date
let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());


// Creating a Specific Date
let myCreatedDate = new Date(2025, 1, 28);

console.log(myCreatedDate.toLocaleString());


// Creating Date with Time
let dateWithTime = new Date(2025, 1, 28, 8, 7);

console.log(dateWithTime.toLocaleString());


// Creating Date using String
let anotherDate = new Date("2003-02-07");

console.log(anotherDate.toLocaleString());


// Current Timestamp
let myTimeStamp = Date.now();

console.log(myTimeStamp);


// Timestamp of a specific date
console.log(anotherDate.getTime());


// Timestamp in seconds
console.log(Math.floor(Date.now() / 1000));


// Getting Month
let newDate = new Date();

console.log(newDate.getMonth() + 1);


// Formatting Date
console.log(
    newDate.toLocaleString("default", {
        day: "numeric",
        weekday: "long"
    })
);
```

# Final Revision

```text
DATE
│
├── new Date()          → Current date/time
├── Date.now()          → Current timestamp
├── getTime()           → Timestamp of date
│
├── getFullYear()       → Year
├── getMonth()          → Month (0–11)
├── getDate()           → Day of month
├── getDay()            → Day of week (0–6)
├── getHours()          → Hour
├── getMinutes()        → Minutes
├── getSeconds()        → Seconds
│
├── toString()          → Full date/time
├── toDateString()      → Date only
├── toISOString()       → ISO format
├── toJSON()            → JSON format
└── toLocaleString()    → Local format
```

### ⭐ Three things to remember first

> **`new Date()` → gives date and time**

> **`Date.now()` → gives current timestamp in milliseconds**

> **`getMonth()` → starts from 0, so January = 0**
