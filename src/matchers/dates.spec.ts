import { describe, test, expect } from 'vitest';
import { subMilliseconds, subDays } from 'date-fns';

import * as matchers from './dates';

describe('#dateToday', () => {
  test('should pass with valid input', () => {
    const input = subMilliseconds(new Date(), 20);
    const matcher = matchers.dateToday();
    expect({ input }).toEqual({ input: matcher });
    expect(matcher.toString()).toEqual(`dateToday(new Date("${input.toISOString().split('T').shift()!}"))`);
  });

  test('should fail with invalid input', () => {
    const today = new Date();
    const input = subDays(today, 20);
    const matcher = matchers.dateToday();
    expect(() => expect({ input }).toEqual({ input: matcher })).toThrow();
    expect(matcher.toString()).toEqual(`dateToday(new Date("${today.toISOString().split('T').shift()!}"))`);
  });
});

describe('#dateWithin', () => {
  test('should pass with valid input', () => {
    const target = new Date();
    const input = subMilliseconds(target, 20);
    const matcher = matchers.dateWithin(target, 20);
    expect({ input }).toEqual({ input: matcher });
    expect(matcher.toString()).toEqual(`dateWithin(new Date("${target.toISOString()}"), 20)`);
  });

  test('should fail with invalid input', () => {
    const target = new Date();
    const input = subDays(target, 20);
    const matcher = matchers.dateWithin(target, 20);
    expect(() => expect({ input }).toEqual({ input: matcher })).toThrow();
    expect(matcher.toString()).toEqual(`dateWithin(new Date("${target.toISOString()}"), 20)`);
  });
});
