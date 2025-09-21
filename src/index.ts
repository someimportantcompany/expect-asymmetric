import AsymmetricMatcher from './matcher';

import * as strings from './matchers/strings';
import * as numbers from './matchers/numbers';
import * as booleans from './matchers/booleans';
import * as dates from './matchers/dates';
import * as collections from './matchers/collections';
import * as compose from './matchers/compose';

export * from './matchers/strings';
export * from './matchers/numbers';
export * from './matchers/booleans';
export * from './matchers/dates';
export * from './matchers/collections';
export * from './matchers/compose';

export function customMatcher(description: string, compare: (value: unknown) => boolean) {
  return new AsymmetricMatcher(description, compare);
}

export default {
  ...strings,
  ...numbers,
  ...booleans,
  ...dates,
  ...collections,
  ...compose,
  customMatcher,
};
