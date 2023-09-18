## Description

This rule implements custom JSDoc formatting rules that cannot be applied using standard `eslint-plugin-jsdoc` tools.

## Rule details

The rule requires that single-line JSDoc description should not have a period at the end and starting with a capital letter.

## Examples

Examples of **incorrect** code for this rule:

### ❌ Incorrect

```js
/*eslint @v4fire/format-description: ["error"]*/

/**
 * Some description.
 */
function a() {

}
```

```js
/*eslint @v4fire/format-description: ["error"]*/

/**
 * some description
 */
function a() {

}
```


```js
/*eslint @v4fire/format-description: ["error"]*/

/**
 * some description.
 */
function a() {

}
```

Examples of **correct** code for this rule:

### ✅ Correct

```js
/*eslint @v4fire/format-description: ["error"]*/

/**
 * Some description
 */
function a() {

}
```
