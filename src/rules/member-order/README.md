## Description

This rule sorts the methods of the class: handler methods (starting with on) must be declared at the end of the class.

Handler methods should be placed at the end of the class, as they carry the least amount of information.

This rule considers the access levels of methods (protected/public).

## Examples

### ❌ Incorrect

```typescript
/* eslint @v4fire/member-order: ["error"]*/

class Foo {
	bar() {

	}

	onBar() {

	}
}
```

```typescript
/* eslint @v4fire/member-order: ["error"]*/

class Foo {
	bar() {

	}

	protected fooBar() {

	}

	protected onFooBar() {

	}

	onBar() {

	}
}
```

### ✅ Correct

```typescript
/* eslint @v4fire/member-order: ["error"]*/

class Foo {
	onBar() {

	}

	bar() {

	}
}
```

```typescript
/* eslint @v4fire/member-order: ["error"]*/

class Foo {
	bar() {

	}

	onBar() {

	}

	barFoo() {
		
	}

	protected onFooBar() {

	}

	protected fooBar() {

	}
}
```
