import AsymmetricMatcher from './matcher';

export function and(matchers: AsymmetricMatcher[]): AsymmetricMatcher {
  return AsymmetricMatcher.create(
    `AND(${matchers.map((matcher) => matcher.toAsymmetricMatcher()).join(', ')})`,
    (value) => matchers.every((matcher) => matcher.asymmetricMatch(value)) === true,
  );
}

export function or(matchers: AsymmetricMatcher[]): AsymmetricMatcher {
  return AsymmetricMatcher.create(
    `OR(${matchers.map((matcher) => matcher.toAsymmetricMatcher()).join(', ')})`,
    (value) => matchers.some((matcher) => matcher.asymmetricMatch(value)) === true,
  );
}

export function not(matchers: AsymmetricMatcher[]): AsymmetricMatcher {
  return AsymmetricMatcher.create(
    `NOT(${matchers.map((matcher) => matcher.toAsymmetricMatcher()).join(', ')})`,
    (value) => matchers.every((matcher) => matcher.asymmetricMatch(value)) === false,
  );
}
