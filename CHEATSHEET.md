# JS Cheatsheet — Restaurant Menu Project

## Async / Promises

### `async function`
Marks a function as "allowed to pause and wait." Required if you want to use `await` inside it.
Used in: `data.js`

### `await`
Pauses execution until a promise resolves, then gives you the real value instead of the placeholder.
Used in: `data.js`, on both `fetch(...)` and `response.json()`

### `fetch(url)`
Requests a file/resource. Returns a Response object (not the data itself yet) — needs `.json()`
or `.text()` to actually get usable content.
Used in: `data.js`

### `.then(callback)`
Runs code once a promise resolves. Alternative to `await` when you're not inside an async function.

## Arrays & Objects

### Zero-indexing
First item in an array is `[0]`, not `[1]`.

### Dot notation vs bracket notation
`menu.restaurant.name` vs `menu["restaurant"]["name"]` — same thing, dot notation used when you
know the key name ahead of time.

### Does a function return a Promise?
Not all slow functions do, only ones designed that way (fetch, .json()).
Older functions like setTimeout use callbacks instead. Check MDN's
"Return value" section to know for sure.

### .forEach(callback)
Runs a block of code once for every item in an array. Used to loop over
menu.categories, and nested inside, over category.dishes — this is how
"for each category, for each dish" gets written in JS.
Used in: data.js

## Notes to self
- This is a personal project to learn javascipt so I'll be writing down stuff I see...
