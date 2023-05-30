## Description

Class method functions don't preserve the class scope when passed as standalone variables ("unbound").

If your function does not access `this`, [you can annotate it with `this: void`](https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function), or consider using an arrow function instead.

Otherwise, passing class methods around as values can remove type safety by failing to capture `this`.

This rule reports when a class method is referenced in an unbound manner.

This rule forked from the base rule of eslint with the same name but with support of `ignore` option.

## Examples

### ❌ Incorrect

```ts
class MyClass {
  public log(): void {
    console.log(this);
  }
}

const instance = new MyClass();

// This logs the global scope (`window`/`global`), not the class instance
const myLog = instance.log;
myLog();

// This log might later be called with an incorrect scope
const { log } = instance;

// arith.double may refer to `this` internally
const arith = {
  double(x: number): number {
    return x * 2;
  },
};
const { double } = arith;
```

### ✅ Correct

```ts
class MyClass {
  public logUnbound(): void {
    console.log(this);
  }

  public logBound = () => console.log(this);
}

const instance = new MyClass();

// logBound will always be bound with the correct scope
const { logBound } = instance;
logBound();

// .bind and lambdas will also add a correct scope
const dotBindLog = instance.logBound.bind(instance);
const innerLog = () => instance.logBound();

// arith.double explicitly declares that it does not refer to `this` internally
const arith = {
  double(this: void, x: number): number {
    return x * 2;
  },
};
const { double } = arith;
```

## Options

### `ignoreStatic`

Examples of **correct** code for this rule with `{ ignoreStatic: true }`:

```ts
class OtherClass {
  static log() {
    console.log(OtherClass);
  }
}

// With `ignoreStatic`, statics are assumed to not rely on a particular scope
const { log } = OtherClass;

log();
```

### `ignore`

Examples of **correct** code for this rule with `{ ignore: [Object] }`

```ts
class OtherClass {
  val = 0;

  isTruthyValue(checker) {
    return checker(val);
  }

  magicMethod(val) {
    const isMagic = this.isTruthyValue(Object.isObject);
    return isMagic;
  }
}
```
