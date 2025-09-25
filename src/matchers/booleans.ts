import AsymmetricMatcher from '../matcher';

export function booleanEquals(expected: boolean) {
  return new AsymmetricMatcher(`booleanEquals(${expected.toString()})`, (actual) => {
    return typeof actual === 'boolean' && actual === expected;
  });
}

export const booleanValidator = (description: string, validator: (value: boolean) => boolean) => {
  return new AsymmetricMatcher(description, (actual) => {
    return typeof actual === 'boolean' && validator(actual);
  });
};
