# expect-asymmetric

Asymmetric matchers for expect (Jest/Vitest)

These matchers work inside `expect.toEqual()` / `expect.toMatchObject()`, letting you ignore noise (IDs, dates,
timestamps, etc.) and assert only what matters.

Asymmetric matchers are the same kind of objects you get from `expect.stringContaining()` or `expect.any(Number)` — but
here you can define your own.

## Install

```
$ npm install --save-dev expect-asymmetric
$ yarn add -D expect-asymmetric
$ pnpm add -D expect-asymmetric
```

## Usage

```ts
import ms from 'ms'
import { expect, test } from 'vitest'
import matchers from 'expect-asymmetric'

test('example with custom matchers', () => {
  const result = {
    id: 'f93f5f83-64c0-4f57-9f53-542c9055bb3f',
    createdAt: new Date(),
    email: 'user@example.com',
  }

  expect(result).toEqual({
    id: matchers.stringUUID(),
    createdAt: matchers.dateWithin(new Date(), ms('2s')),
    email: matchers.stringMatching(/@example\.com$/),
  })
})
```

## Matchers

You can import matchers from this package either by:

- As a complete import (this is how the documentation is written):

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("Hello, world!").toEqual(matchers.stringStartsWith("Hello"))
```

- Or as individual functions:

```ts
import { expect } from 'vitest'
import { stringStartsWith } from 'expect-asymmetric'

expect("Hello, world!").toEqual(stringStartsWith("Hello"))
```

### Strings

#### `stringEquals(expected: string | string[]): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("Hello, world!").toEqual(matchers.stringEquals("Hello, world!"))

// This is identical to:
expect("Hello, world!").toEqual("Hello, world!")
// But provided so you can use matchers.not with this
```

#### `stringStartsWith(prefix: string): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("Hello, world!").toEqual(matchers.stringStartsWith("Hello"))
```

#### `stringEndsWith(suffix: string): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("Hello, world!").toEqual(matchers.stringEndsWith("world!"))
```

#### `stringIncludes(contains: string): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("Hello, world!").toEqual(matchers.stringIncludes('ello, world'))
```

#### `stringMatches(pattern: RegExp): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("Hello, world!").toEqual(matchers.stringMatches(/hello/i))
```

#### `stringBase64Encoded(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("WW91IGFyZSB0aGUgT25lLCBOZW8=").toEqual(matchers.stringBase64Encoded())
```

#### `stringDateISO8601(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("YYYY-MM-DDTHH:mm:ss.sssZ").toEqual(matchers.stringDateISO8601())
```

#### `stringEmail(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("noreply+jdrydn@github.io").toEqual(matchers.stringEmail())
```

#### `stringJSON(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect('{"hello": "world"}').toEqual(matchers.stringJSON())
```

#### `stringJWT(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

const jwt = 'eyJhbGciOiJIUzI1NiJ9.RlJFRSBZT1VSIE1JTkQ.edKefjjRqI9yxTTT6vpuWti040WoGzX5a-ofc36-acg'
expect(jwt).toEqual(matchers.stringJWT())
```

#### `stringMD5(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

const md5 = '064ff83b22543c064ff83b22543ca5e9f7cfa1d702daa9a5e9f7cfa1d702daa9'
expect(md5).toEqual(matchers.stringMD5())
```

#### `stringSHA1(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

const sha1 = '467d6b9adfe97245b6504467d6b9adfe97245b65049168be0c26da8fe8d749168be0c26da8fe8d74'
expect(sha1).toEqual(matchers.stringSHA1())
```

#### `stringULID(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect('01ARZ3NDEKTSV4RRFFQ69G5FAV').toEqual(matchers.stringULID())
```

#### `stringUUID(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect('fb840792-9595-11f0-8de9-0242ac120002').toEqual(matchers.stringUUID())
```

### Numbers

#### `numberEquals(expected: number | number[]): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect(42).toEqual(matchers.numberEquals(42))
// This is identical to:
expect(42).toEqual(42)
// But provided so you can use matchers.not with this
```

#### `numberGreaterThan(expected: number): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect(42).toEqual(matchers.numberGreaterThan(40))
```

#### `numberLessThan(expected: number): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect(42).toEqual(matchers.numberLessThan(45))
```

#### `numberBetween(min: number, max: number): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect(42).toEqual(matchers.numberLessThan(40, 45))
```

#### `numberFloat(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect(3.14159265).toEqual(matchers.numberFloat())
```

### Booleans

#### `booleanEquals(expected: boolean): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect(true).toEqual(matchers.booleanEquals(true))
// This is identical to:
expect(true).toEqual(true)
// But provided so you can use matchers.not with this
```

### Dates

#### `dateEquals(expected: Date | Date[]): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

const now = new Date()
expect(now).toEqual(matchers.dateEquals(now))
// This is identical to:
expect(now).toEqual(now)
// But provided so you can use matchers.not with this
```

#### `dateToday(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

const today = new Date()
expect(today).toEqual(matchers.dateToday())
expect(today.toISOString()).toEqual(matchers.dateToday())
```

#### `dateYesterday(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

const yesterday = new Date(Date.now() - 86400 * 1000)
expect(yesterday).toEqual(matchers.dateYesterday())
expect(yesterday.toISOString()).toEqual(matchers.dateYesterday())
```

#### `dateGreaterThan(expected: Date): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

const now = new Date('2025-09-25T21:45:00.000Z')
const then = new Date('2025-09-25T20:00:00.000Z')
expect(now).dateGreaterThan(matchers.dateGreaterThan(then))
```

#### `dateLessThan(expected: Date): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

const now = new Date('2025-09-25T21:45:00.000Z')
const then = new Date('2025-09-25T22:00:00.000Z')
expect(now).dateGreaterThan(matchers.dateLessThan(then))
```

#### `dateWithin(target: Date, tolerance: number): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'
import ms from 'ms'

const today = new Date()
expect(today).toEqual(matchers.dateWithin(today, ms('20m')))
expect(today.toISOString()).toEqual(matchers.dateWithin(today, ms('20m')))
```

### Collections

#### `arrayContains(expected: unknown): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect([4, 8, 15, 16, 23, 42]).toEqual(matchers.arrayContains(42))
```

#### `arrayEmpty(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect([]).toEqual(matchers.arrayEmpty())
```

#### `objectEmpty(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect({}).toEqual(matchers.objectEmpty())
```

#### `objectHasProperty(key: string): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect({ hello: 'world' }).toEqual(matchers.objectHasProperty('hello'))
```

#### `objectWithProperty(key: string, value: unknown): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect({ hello: 'world' }).toEqual(matchers.objectWithProperty('hello', 'world'))
```

### Compose

#### `and(matchers: AsymmetricMatcher[]): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("someone@example.com").toEqual(matchers.and([
  matchers.stringStartsWith("someone@"),
  matchers.stringEndsWith("@example.com"),
]))
```

#### `or(matchers: AsymmetricMatcher[]): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("someone@example.com").toEqual(matchers.or([
  matchers.stringEndsWith("@example.com"),
  matchers.stringEndsWith("@example.co.uk"),
  matchers.stringEndsWith("@example.local"),
]))
```

#### `not(matchers: AsymmetricMatcher[]): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("someone@example.com").toEqual(matchers.not([
  matchers.stringEndsWith("@example.co.uk"),
  matchers.stringEndsWith("@example.local"),
]))
```

### Custom

You can use custom validators to check specific values.

- The `description` property will be shown to the developer when this matcher fails.

#### `stringValidator(description: string, compare: (value: string) => boolean): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

const isCaseInsensitive = matches.stringValidator('isCaseInsensitive', (value) => value.toLowerCase() === value)
expect("hello world").toEqual(isCaseInsensitive)
```

This works great with [`validator.js`](https://npm.im/validator), for example:

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'
import isSemVer from 'validator/es/lib/isSemVer';

expect("1.0.0").toEqual(matches.stringValidator('isSemVer', isSemVer))
```

#### `numberValidator(description: string, compare: (value: number) => boolean): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("hello world").toEqual(matches.numberValidator('isOdd', (value) => value % 2 === 1))
```

#### `booleanValidator(description: string, compare: (value: boolean) => boolean): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("hello world").toEqual(matches.numberValidator('example', (value) => value === true))
```

#### `customMatcher(description: string, compare: (value: unknown) => boolean): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect(new CustomClass()).toEqual(matches.customMatcher('example', (value) => value instanceof CustomClass))
```

## Notes

Any questions or suggestions please [open an issue](https://github.com/someimportantcompany/expect-asymmetric/issues).
