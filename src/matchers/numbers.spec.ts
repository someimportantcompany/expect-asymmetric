import { describe, test } from 'vitest';

import { shouldPassWith, shoudFailWith } from '../../test/routine';

import * as matchers from './numbers';

describe('#stringEquals', () => {
  test(
    'it should pass with valid input (one)',
    shouldPassWith({
      input: 1337,
      createMatcher: () => matchers.numberEquals(1337),
      matcherString: 'numberEquals(1337)',
    }),
  );

  test(
    'it should pass with valid input (many)',
    shouldPassWith({
      input: 1337,
      createMatcher: () => matchers.numberEquals([1336, 1337, 1338]),
      matcherString: 'numberEquals([1336, 1337, 1338])',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 1338,
      createMatcher: () => matchers.numberEquals(1337),
    }),
  );
});

describe('#numberGreaterThan', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: 1338,
      createMatcher: () => matchers.numberGreaterThan(1337),
      matcherString: 'numberGreaterThan(1337)',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 1335,
      createMatcher: () => matchers.numberGreaterThan(1337),
    }),
  );
});

describe('#numberLessThan', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: 1336,
      createMatcher: () => matchers.numberLessThan(1337),
      matcherString: 'numberLessThan(1337)',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 1338,
      createMatcher: () => matchers.numberLessThan(1337),
    }),
  );
});

describe('#numberBetween', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: 1337,
      createMatcher: () => matchers.numberBetween(1336, 1338),
      matcherString: 'numberBetween(1336, 1338)',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 1335,
      createMatcher: () => matchers.numberBetween(1336, 1338),
    }),
  );
});

describe('#numberFloat', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: 3.14159265,
      createMatcher: () => matchers.numberFloat(),
      matcherString: 'numberFloat()',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 3,
      createMatcher: () => matchers.numberFloat(),
    }),
  );
});

describe('#numberValidator', () => {
  const validator = matchers.numberValidator('testValidator', (value) => value % 10 === 0);

  test(
    'it should pass with valid input',
    shouldPassWith({
      input: 10,
      createMatcher: () => validator,
      matcherString: 'testValidator',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 11,
      createMatcher: () => validator,
    }),
  );
});
