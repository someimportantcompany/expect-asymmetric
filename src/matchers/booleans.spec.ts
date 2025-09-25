import { describe, test } from 'vitest';

import { shouldPassWith, shoudFailWith } from '../../test/routine';

import * as matchers from './booleans';

describe('#booleanEquals', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: false,
      createMatcher: () => matchers.booleanEquals(false),
      matcherString: 'booleanEquals(false)',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: true,
      createMatcher: () => matchers.booleanEquals(false),
    }),
  );
});

describe('#booleanValidator', () => {
  const validator = matchers.booleanValidator('testValidator', (value) => value === true);

  test(
    'it should pass with valid input',
    shouldPassWith({
      input: true,
      createMatcher: () => validator,
      matcherString: 'testValidator',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: false,
      createMatcher: () => validator,
    }),
  );
});
