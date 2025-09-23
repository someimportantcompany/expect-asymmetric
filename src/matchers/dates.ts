import assert from 'assert';

import AsymmetricMatcher from '../matcher';
import { extractDatePortion, strVal } from './utils';

function isValidDate(value: unknown): boolean {
  return value instanceof Date && !isNaN(value.getTime());
}

export const dateEquals = (expected: Date | Date[]) => {
  if (Array.isArray(expected)) {
    assert(expected.every(isValidDate), 'Expected all expected values passed to dateEquals to be a Date');

    return new AsymmetricMatcher(`dateEquals([${expected.map(strVal).join(', ')}])`, (actual) => {
      const date = actual instanceof Date ? actual : new Date(String(actual));
      if (isNaN(date.getTime())) {
        return false;
      }

      return expected.map((d) => d.getTime()).includes(date.getTime());
    });
  } else {
    assert(isValidDate(expected), 'Expected value passed to dateEquals to be a Date');

    return new AsymmetricMatcher(`dateEquals(${strVal(expected)})`, (actual) => {
      const date = actual instanceof Date ? actual : new Date(String(actual));
      if (isNaN(date.getTime())) {
        return false;
      }

      return date.getTime() === expected.getTime();
    });
  }
};

export const dateToday = () => {
  const targetDate = extractDatePortion(new Date());

  return new AsymmetricMatcher(`dateToday(new Date("${targetDate}"))`, (actual) => {
    const date = actual instanceof Date ? actual : new Date(String(actual));
    if (!isValidDate(date)) {
      return false;
    }

    return extractDatePortion(date) === targetDate;
  });
};

export const dateYesterday = () => {
  const targetDate = extractDatePortion(new Date(Date.now() - 86400 * 1000));

  return new AsymmetricMatcher(`dateYesterday(new Date("${targetDate}"))`, (actual) => {
    const date = actual instanceof Date ? actual : new Date(String(actual));
    if (isNaN(date.getTime())) {
      return false;
    }

    return extractDatePortion(date) === targetDate;
  });
};

export const dateTomorrow = () => {
  const targetDate = extractDatePortion(new Date(Date.now() + 86400 * 1000));

  return new AsymmetricMatcher(`dateTomorrow(new Date("${targetDate}"))`, (actual) => {
    const date = actual instanceof Date ? actual : new Date(String(actual));
    if (isNaN(date.getTime())) {
      return false;
    }

    return extractDatePortion(date) === targetDate;
  });
};

export const dateGreaterThan = (expected: Date) => {
  return new AsymmetricMatcher(`dateGreaterThan(${strVal(expected)})`, (actual) => {
    const date = actual instanceof Date ? actual : new Date(String(actual));
    if (isNaN(date.getTime())) {
      return false;
    }

    return date.getTime() > expected.getTime();
  });
};

export const dateLessThan = (expected: Date) => {
  return new AsymmetricMatcher(`dateLessThan(${strVal(expected)})`, (actual) => {
    const date = actual instanceof Date ? actual : new Date(String(actual));
    if (isNaN(date.getTime())) {
      return false;
    }

    return date.getTime() < expected.getTime();
  });
};

export const dateWithin = (target: Date, tolerance: number) => {
  return new AsymmetricMatcher(`dateWithin(${strVal(target)}, ${tolerance})`, (actual) => {
    const date = actual instanceof Date ? actual : new Date(String(actual));
    if (isNaN(date.getTime())) {
      return false;
    }

    const diff = Math.abs(date.getTime() - target.getTime());
    return diff <= tolerance;
  });
};

export const dateValidator = (description: string, validator: (value: Date) => boolean) => {
  return new AsymmetricMatcher(description, (actual) => {
    const date = actual instanceof Date ? actual : new Date(String(actual));
    if (isNaN(date.getTime())) {
      return false;
    }

    return validator(date);
  });
};
