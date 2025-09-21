import AsymmetricMatcher from '../matcher';

export function booleanEquals(expected: boolean) {
  return new AsymmetricMatcher('booleanEquals', (actual) => {
    return typeof actual === 'boolean' && actual === expected;
  });
}
