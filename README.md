# Variables, Primitive Types, & Operators


### Getting Started

1. Fork this repo and `git clone` it down to your computer.
1. Create two files `index.html` and `script.js`.
1. Include `script.js` in `index.html` using a `<script>` tag.
1. Open `index.html` in your web browser and open the console.
1. After answering each section below, `git commit` your work.
1. When you're finished or when time is up, push your work to your remote repo and file a Pull Request.

---

### Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables
- job title
- geographic location
- favourite sport
- side project

Using the variables you defined, output your fortune to the console like so:

``` js
"You will be a Programmer in Portugal, playing Tennis while building a Flying Car."
```

---

### Temperature Converter

Google the formula for converting from Celsius to Fahrenheit and vice versa.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output:

``` js
"__°C is __°F".
```

Now store a fahrenheit temperature into a variable.
Convert it to celsius and output:

``` js
"__°F is __°C".
```

---

### Age Calculator

- Create a variable that contains your birth year.
- Create a variable that contains an arbitrary, future year.
- Calculate your 2 possible ages for that year based on the stored values.
- For example, if you were born in 1996, then in 2022 you'll be either 25 or 26, depending on the month.
- Output to the screen, substituting the correct values like so:
  ``` js
  "I will be either __ or __ in YYYY".
  ```

---

### Data Types

For each expression, predict what you think the output will be in a comment (`//`) ***without first running the command***. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

#### Example

```js
typeof "potato"
// Prediction: Vegetable
// Actual: String
```

What is the output of each of the expressions below?

```js
typeof 15
// Prediction:
// Actual:

typeof 5.5
// Prediction:
// Actual:

typeof NaN
// Prediction:
// Actual:

typeof "hello"
// Prediction:
// Actual:

typeof true
// Prediction:
// Actual:

typeof 1 != 2
// Prediction:
// Actual:

console.log("hamburger" + "s")
// Prediction:
// Actual:

console.log("hamburgers" - "s")
// Prediction:
// Actual:

console.log("1" + "3")
// Prediction:
// Actual:

console.log("1" - "3")
// Prediction:
// Actual:

console.log("johnny" + 5)
// Prediction:
// Actual:

console.log("johnny" - 5)
// Prediction:
// Actual:

console.log(99 * "luftbaloons")
// Prediction:
// Actual:

console.log(5 + true)
// Prediction:
// Actual:

console.log(5 + false)
// Prediction:
// Actual:
```

What's going on in the second half of the previous question (`"hamburgers" - "s"` onwards)? Are there any "rules" we can pull from those examples? [Further reading](https://javascript.info/type-conversions).
