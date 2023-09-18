## Description

This rule implements custom JSDoc formatting rules that cannot be applied using standard eslint-plugin-jsdoc tools.

## Rule details

The rule requires that JSDoc param description should not have a capital letter at the beginning.

## Examples

Examples of **incorrect** code for this rule:

### ❌ Incorrect

```js
/*eslint @v4fire/format-description: ["error"]*/

/**
 * Some description
 * @param b - Some param description
 */
function a(b) {

}
```

Examples of **correct** code for this rule:

### ✅ Correct

```js
/*eslint @v4fire/format-description: ["error"]*/

/**
 * Some description
 * @param - some param description
 */
function a() {

}
```
