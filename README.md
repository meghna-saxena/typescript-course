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

console.log(add('2','3'));

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
___________

## Install typescript
Globally install typescript:

`npm install - g typescript`
TS is a programming lanaguage only because of compiler which can compile TS code to JS, so with this command we install `ts compiler` which can transform `.ts` code

`tsc` commands invokes ts compiler to compile the code

- Strong IDE analyses your code and throws descriptive error

-  In typescript file, when you're sure that certain element is there in the html document, use `! as <typecasting>`

```ts
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
```