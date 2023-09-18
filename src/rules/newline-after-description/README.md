## Description

Enforces a consistent padding of the block description.

This rule formats jsdoc by separating the description block from other tags with a blank line.

A blank line is only inserted if there are more than one tag or the description block takes more than one line.

## Examples

### ❌ Incorrect

```ts
/* eslint @v4fire/newline-after-description: ["error"]*/

/**
 * Some description about function
 * @param a
 * @param b
 */
function (a, b) {

}
```

```ts
/* eslint @v4fire/newline-after-description: ["error"]*/

/**
 * Some description about function
 * and more and more
 * @param a
 */
function (a) {

}
```

```ts
/* eslint @v4fire/newline-after-description: ["error"]*/

/**
 * Some description about function
 *
 * @param a
 */
function (a) {

}
```


### ✅ Correct

```ts
/* eslint @v4fire/newline-after-description: ["error"]*/

/**
 * Some description about function
 *
 * @param a
 * @param b
 */
function (a, b) {

}
```

```ts
/* eslint @v4fire/newline-after-description: ["error"]*/

/**
 * Some description about function
 * and more and more
 *
 * @param a
 */
function (a) {

}
```

```ts
/* eslint @v4fire/newline-after-description: ["error"]*/

/**
 * Some description about function
 * @param a
 */
function (a) {

}
