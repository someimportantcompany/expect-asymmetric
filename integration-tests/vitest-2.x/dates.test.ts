import { test, expect } from 'vitest';
import { subMilliseconds } from 'date-fns';

import matchers from '../../';

test('#dateToday', () => {
  const input = subMilliseconds(new Date(), 20);
  expect(input).toEqual(matchers.dateToday());
});

test('#dateWithin', () => {
  const target = new Date();
  const input = subMilliseconds(target, 20);
  expect(input).toEqual(matchers.dateWithin(target, 20));
});
