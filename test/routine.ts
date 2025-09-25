import { expect } from 'vitest';

export function shouldPassWith({
  input,
  createMatcher,
  matcherString,
}: {
  input: unknown;
  createMatcher: () => unknown;
  matcherString: string;
}) {
  return () => {
    const matcher = createMatcher();
    expect(input).toEqual(matcher);
    expect(matcher.toString()).toEqual(matcherString);
  };
}

export function shoudFailWith({
  input,
  createMatcher,
  matcherString,
}: {
  input: unknown;
  createMatcher: () => unknown;
  matcherString?: string;
}) {
  return () => {
    const matcher = createMatcher();
    expect(() => expect(input).toEqual(matcher)).toThrow();
    if (typeof matcherString === 'string') {
      expect(matcher.toString()).toEqual(matcherString);
    }
  };
}
