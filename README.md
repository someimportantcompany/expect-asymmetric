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
