import { test, expect, vi } from 'vitest';

import AsymmetricMatcher from './matcher';

const example = {
  first: '1st',
  second: 2,
  third: true,
};

test('it should run the matcher function', () => {
  const fn = vi.fn((value) => typeof value === 'string' && value === example.first);
  const matcher = new AsymmetricMatcher('matcher', fn);

  expect(example).toEqual({
    first: matcher,
    second: 2,
    third: true,
  });

  expect(fn).toHaveBeenCalledOnce();
  expect(fn).toHaveBeenCalledWith(example.first);
  expect(matcher.toString()).toEqual('matcher');
});
