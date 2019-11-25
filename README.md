# Typescript

## What is typescript & why to use it?

- Typescript is a `javascript superset`, means its a programming langauge that's has been built up on javascript.
  Its not a brand new language.
- Adds new features and advantages to javascript

One disadvantage:
It cant be execute by javascript environments like web browsers, similarly nodejs also cant execute typescript

So, typescript is a programming lanaguage as well as a powerful tool/ compiler which compiles typescript code to javascript

### Next question?

How typescript then add features if after compilation you get regular javascript?

- Features are compiled to JS "workarounds", that means your nice syntax is compiled to more complicated javascript syntax

- Add types and possible `errors are found earlier before script is run` (compilation error) and error occurs in runtime in browser

### Why typescript?

Consider this example:

```js
function add(num1, num2) {
  return num1 + num2;
}

console.log(add("2", "3"));

// this will lead to unwanted behavior since you're concatenating 2 strings
// '2' + '3'
// "23"
```

You can prevent/mitigate such errors, by checking `typeof` inside if statements during runtime

- Add if check to add function validate & sanitize user input -> developers can still write invalid code -> but typescript is a tool that helps to catch these errors during development

## Important notes for web development:

- In javascript the `value of input is always string`, no matter if input type was number, value would be evaluated as string

- Always, add defer property to `<script>` tag, cause javascript is single-threaded, if its looking for html elements like button to add event listners to, it will throw error, since your page has stopped parsing. Or add script in body.

- `Async scripts` are executed as soon as the script is loaded, so it doesn't guarantee the order of execution (a script you included at the end may execute before the first script file )
  `Defer scripts` guarantees the order of execution in which they appear in the page.

- To convert string to number use `+` before the param. Example:

```js
function add(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return +num1 + +num2;
    // convert to number by adding + before the param
  }
}
```

---

## Install typescript

Globally install typescript:

`npm install - g typescript`
TS is a programming lanaguage only because of compiler which can compile TS code to JS, so with this command we install `ts compiler` which can transform `.ts` code

`tsc` commands invokes ts compiler to compile the code

- Strong IDE analyses your code and throws descriptive error

- In typescript file, when you're sure that certain element is there in the html document, use `! as <typecasting>`

```ts
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
```

## Typescript advantages - Overview

- TS adds `types` which is super important. With types we need to be explicit about how things work, and can avoid unnecessary errros. In addition, modern IDE have built-in types support

- Can use next-gen js features (compiled down for older browsers, e.g babel)

- Use non-javascript features like interfaces and generics. They dont compile to js, but they are only needed during development to give clearer errors.

- Gives meta-programming features like decorators

- Rich configuration options - compiler and how to configure it

- Modern tooling/ide's that helps even in non-typescript projects

#### What _advantages_ are there to using TypeScript?

It provides strong typing, with powerful type intference capabilities.

It enables IDEs to provide code completion, advanced code refactoring, and static checking.

It provides support for the latest JavaScript features, while compiling code into more compatible expressions.

It provides the ability to define interfaces.

---

## Course Outline

- Typescript basics
- Compiler and configuration (deep dive)
- Working with next-gen JS
- Classes and interfaces
- Advanced types and TS features
- Generics
- Decorators
- Working w/ namespaces and modules
- Webpack (build tool) and typescript
- Third-party libraries and typescript
- React + typescript & nodejs + typescript

### Prerequisites

Good editor/IDE

- VScode has good TS support built-in. It shows error, even before you save the file and the code is compiled

- If typescript is installed globally, it compiles all the ts files anywhere in the system, by running `tsc filename`

- How to avoid manually re-comiling and reloading the webpage?

  - Create package.json by running `npm init -y`
  - Install dev-dependency `lite-server` by running `npm install --save-dev lite-server`
  - Add script in package.json ->

  ```json
  {
    "scripts": {
      "start": "lite-server"
    }
  }
  ```

  - lite-server is a simple light-weight development server which serves index.html file, and does hot-reloading
  - It usually serves the file on `localhost: 3000`, if port if available

---

---

## Typescript basics and basic types

### Using types:

JS has some data types, Typescript add many more types to JS

Typescript also enable to write our own types

### Core types:

- number

  - There is only one type both in JS and TS. No specific types for integers or floats.
    Example: `1, 5.3, -10` all have `number` type

- string

  - Text values
  - Accepts in all 3 ways:

    ```js
    "Hi", "Hi", `hi`;
    ```

- boolean
  - true, false
  - Just these two, no truthy or falsy values
    example 0 is falsy, but its not related to false value of boolean type. Truthy and falsy are js concepts during runtime when some conditionals are met under if statements

---

Note:

Typescript's type system helps only during development (i.e before the code gets compiled)

Don't open `app.js` and `app.ts` at the same time in editor, it throws error for duplicate redeclaration of variables

---

### Typescript types vs Javascript types

Javascript has `typeof` operator to check the types.

```js
if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  throw new Error('Incorrect input)
}
```

so it fails at `runtime`, if incorrect type is passed

The key difference is:

- JS is `dynamically-typed`. Types can change during runtime, so `errors during runtime`.
- TS is `statically-typed`. Incorrect types throw `errors during development`.

Important: 

### Type Casing
In TypeScript, you work with types like string or number.

Important: It is string and number (etc.), NOT String, Number etc.

The core primitive types in TypeScript are all lowercase!

__________________

### Type assignment and type inference

Typescript infers types implicitely with what first value is assigned to a variable.

> Example:

``` 
let num1 = 5;
//means num1 type is number
```

If some other type is reassigned TS will throw error

Explicit types should be defined in function's parameters. 

No need to explicitely define the types for variables.

const age: number = 29;

TypeScript would be able to infer the type (and hence you should omit ":number") but here, we actually also have an explicit type assignment.

JS has no compilation step but at runtime, you can check for certain types (e.g. in if conditions). TS on the other hand allows you to catch certain errors during development since it checks types during compilation as well.
