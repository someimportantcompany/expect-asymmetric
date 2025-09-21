import { describe, test, expect } from 'vitest';
import { subMilliseconds, subDays } from 'date-fns';

import * as matchers from './dates';
import { extractDatePortion } from './utils';

describe('#dateToday', () => {
  const today = new Date();

  test('should pass with valid input', () => {
    const input = subMilliseconds(today, 20);
    const matcher = matchers.dateToday();
    expect({ input }).toEqual({ input: matcher });
    expect(matcher.toString()).toEqual(`dateToday(new Date("${extractDatePortion(today)}"))`);
  });

  test('should fail with invalid input', () => {
    const input = subDays(today, 20);
    const matcher = matchers.dateToday();
    expect(() => expect({ input }).toEqual({ input: matcher })).toThrow();
    expect(matcher.toString()).toEqual(`dateToday(new Date("${extractDatePortion(today)}"))`);
  });
});

describe('#dateYesterday', () => {
  const yesterday = subDays(new Date(), 1);

  test('should pass with valid input', () => {
    const input = subMilliseconds(yesterday, 20);
    const matcher = matchers.dateYesterday();
    expect({ input }).toEqual({ input: matcher });
    expect(matcher.toString()).toEqual(`dateYesterday(new Date("${extractDatePortion(yesterday)}"))`);
  });

  test('should fail with invalid input', () => {
    const input = subDays(yesterday, 20);
    const matcher = matchers.dateYesterday();
    expect(() => expect({ input }).toEqual({ input: matcher })).toThrow();
    expect(matcher.toString()).toEqual(`dateYesterday(new Date("${extractDatePortion(yesterday)}"))`);
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
