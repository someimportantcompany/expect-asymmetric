import AsymmetricMatcher from './matcher';

import * as strings from './matchers/strings';
import * as dates from './matchers/dates';
import * as compose from './compose';

export * from './matchers/strings';
export * from './matchers/dates';
export * from './compose';

export function customMatcher(description: string, compare: (value: unknown) => boolean) {
  return new AsymmetricMatcher(description, compare);
}

export default {
  ...strings,
  ...dates,
  ...compose,
  customMatcher,
};
