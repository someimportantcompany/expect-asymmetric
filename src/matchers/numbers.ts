import assert from 'assert';

import AsymmetricMatcher from '../matcher';

export const numberEquals = (expected: number | number[]) => {
  if (Array.isArray(expected)) {
    assert(
      expected.every((v) => typeof v === 'number'),
      'Expected all expected values passed to numberEquals to be a number',
    );

    return new AsymmetricMatcher(`numberEquals([${expected.join(', ')}])`, (actual) => {
      return typeof actual === 'number' && expected.includes(actual);
    });
  } else {
    assert(typeof expected === 'number', 'Expected value passed to numberEquals to be a number');

    return new AsymmetricMatcher(`numberEquals(${expected})`, (actual) => {
      return typeof actual === 'number' && actual === expected;
    });
  }
};

export const numberGreaterThan = (expected: number) => {
  return new AsymmetricMatcher(`numberGreaterThan(${expected})`, (actual) => {
    return typeof actual === 'number' && actual > expected;
  });
};

export const numberLessThan = (expected: number) => {
  return new AsymmetricMatcher(`numberLessThan(${expected})`, (actual) => {
    return typeof actual === 'number' && actual < expected;
  });
};

export const numberBetween = (min: number, max: number) => {
  return new AsymmetricMatcher(`numberBetween(${min}, ${max})`, (actual) => {
    return typeof actual === 'number' && actual > min && actual < max;
  });
};

export const numberFloat = () => {
  return new AsymmetricMatcher('numberFloat', (actual) => {
    return typeof actual === 'number' && actual % 1 !== 0;
  });
};

export const numberValidator = (description: string, validator: (value: number) => boolean) => {
  return new AsymmetricMatcher(description, (actual) => {
    return typeof actual === 'number' && validator(actual);
  });
};
