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

- As individual matchers:

```ts
import { expect } from 'vitest'
import { stringStartsWith } from 'expect-asymmetric'

expect("Hello, world!").toEqual(stringStartsWith("Hello"))
```

### Strings

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

#### `stringMatches(pattern: RegExp): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("Hello, world!").toEqual(matchers.stringMatches(/hello/i))
```

#### `stringIsULID(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("01ARZ3NDEKTSV4RRFFQ69G5FAV").toEqual(matchers.stringIsULID())
```

#### `stringIsUUID(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'

expect("019963a1-19a1-7f08-b58f-e5edf83c20d5").toEqual(matchers.stringIsUUID())
```

### Dates

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

#### `dateWithin(): AsymmetricMatcher`

```ts
import { expect } from 'vitest'
import matchers from 'expect-asymmetric'
import ms from 'ms'

const today = new Date()
expect(today).toEqual(matchers.dateWithin(today, ms('20m')))
expect(today.toISOString()).toEqual(matchers.dateWithin(today, ms('20m')))
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

expect.stringStartsWith(prefix)
  • expect.stringEndsWith(suffix)
  • expect.stringMatching(re)
  • expect.stringUUID(version?)
  • expect.stringULID()
  • expect.stringEmail()
  • expect.stringURL({ protocol?, hostname? })
  • expect.stringBase64()

Date / Time
  • expect.dateToday()
  • expect.dateYesterday()
  • expect.dateTomorrow()
  • expect.dateBefore(date)
  • expect.dateAfter(date)
  • expect.dateISO8601String()

Number
  • expect.numberBetween(min, max)
  • expect.numberCloseTo(value, tolerance)
  • expect.integer()
  • expect.positive()
  • expect.negative()
