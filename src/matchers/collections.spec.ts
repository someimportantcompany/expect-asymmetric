import { describe, test } from 'vitest';

import { shouldPassWith, shoudFailWith } from '../../test/routine';

import * as matchers from './collections';

describe('#arrayContains', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: [4, 8, 15, 16, 23, 42],
      createMatcher: () => matchers.arrayContains(8),
      matcherString: 'arrayContains(8)',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: [4, 8, 15, 16, 23, 42],
      createMatcher: () => matchers.arrayContains('Hello, world'),
    }),
  );
});

describe('#arrayEmpty', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: [],
      createMatcher: () => matchers.arrayEmpty(),
      matcherString: 'arrayEmpty()',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: [4, 8, 15, 16, 23, 42],
      createMatcher: () => matchers.arrayEmpty(),
    }),
  );
});

describe('#objectEmpty', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: {},
      createMatcher: () => matchers.objectEmpty(),
      matcherString: 'objectEmpty()',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: { hello: 'world' },
      createMatcher: () => matchers.objectEmpty(),
    }),
  );
});

describe('#objectHasProperty', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: { hello: 'world' },
      createMatcher: () => matchers.objectHasProperty('hello'),
      matcherString: 'objectHasProperty("hello")',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: { hello: 'world' },
      createMatcher: () => matchers.objectHasProperty('foo'),
    }),
  );
});

describe('#objectWithProperty', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: { hello: 'world' },
      createMatcher: () => matchers.objectWithProperty('hello', 'world'),
      matcherString: 'objectWithProperty("hello", "world")',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: { hello: 'world' },
      createMatcher: () => matchers.objectWithProperty('hello', 'world2'),
    }),
  );
});
