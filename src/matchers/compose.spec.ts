import { describe, test } from 'vitest';

import { shouldPassWith, shoudFailWith } from '../../test/routine';

import * as matchers from './compose';
import * as rest from '../index';

describe('#and', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: 'noreply+jdrydn@github.com',
      createMatcher: () =>
        matchers.and([
          // String is an email
          rest.stringEmail(),
          // And ends with a particular suffix (domain)
          rest.stringEndsWith('@github.com'),
          // And includes a particular username
          rest.stringIncludes('jdrydn'),
        ]),
      matcherString: 'AND(stringEmail(), stringEndsWith("@github.com"), stringIncludes("jdrydn"))',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 'example-user@someimportantcompany',
      createMatcher: () =>
        matchers.and([
          // String is an email
          rest.stringEmail(),
          // And ends with a particular suffix (domain)
          rest.stringEndsWith('@github.com'),
          // And includes a particular username
          rest.stringIncludes('jdrydn'),
        ]),
    }),
  );
});

describe('#or', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: 'noreply@github.com',
      createMatcher: () =>
        matchers.or([
          // Ends with this suffix
          rest.stringEndsWith('@github.com'),
          // Or ends with this suffix
          rest.stringEndsWith('@github.io'),
          // Or ends with this suffix
          rest.stringEndsWith('@github.net'),
        ]),
      matcherString: 'OR(stringEndsWith("@github.com"), stringEndsWith("@github.io"), stringEndsWith("@github.net"))',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 'noreply@github.co',
      createMatcher: () =>
        matchers.or([
          // Ends with this suffix
          rest.stringEndsWith('@github.com'),
          // Or ends with this suffix
          rest.stringEndsWith('@github.io'),
          // Or ends with this suffix
          rest.stringEndsWith('@github.net'),
        ]),
    }),
  );
});

describe('#not', () => {
  test(
    'it should pass with valid input (one)',
    shouldPassWith({
      input: 'noreply@github',
      // String is not an email
      createMatcher: () => matchers.not(rest.stringEmail()),
      matcherString: 'NOT(stringEmail())',
    }),
  );

  test(
    'it should pass with valid input (many)',
    shouldPassWith({
      input: 'noreply@github.co',
      // String is not an email that ends with @github.com
      createMatcher: () => matchers.not([rest.stringEmail(), rest.stringEndsWith('@github.com')]),
      matcherString: 'NOT(stringEmail(), stringEndsWith("@github.com"))',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 'noreply@github.com',
      createMatcher: () => matchers.not([rest.stringEmail(), rest.stringEndsWith('@github.com')]),
    }),
  );
});
