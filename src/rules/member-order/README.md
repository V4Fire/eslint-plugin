## Description

This rule sorts the methods of the class: handler methods (starting with on) must be declared at the end of the class.

Handler methods should be at the end of the class since they carry the least amount of information.

The rule takes into account the access level of methods (protected / public).

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
