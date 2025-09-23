import AsymmetricMatcher from '../matcher';
import { strVal } from './utils';

export function arrayContains(expected: unknown) {
  return new AsymmetricMatcher(`arrayContains(${strVal(expected)})`, (actual) => {
    if (!Array.isArray(actual) || actual.length === 0) {
      return false;
    }

    return actual.includes(expected);
  });
}

export function arrayEmpty() {
  return new AsymmetricMatcher('arrayEmpty()', (actual) => {
    return Array.isArray(actual) && actual.length === 0;
  });
}

export function objectEmpty() {
  return new AsymmetricMatcher('objectEmpty()', (actual) => {
    return Object.prototype.toString.call(actual) === '[object Object]' && Object.keys(actual).length === 0;
  });
}

export function objectHasProperty(key: string) {
  return new AsymmetricMatcher(`objectHasProperty("${key}")`, (actual) => {
    return (
      Object.prototype.toString.call(actual) === '[object Object]' &&
      Object.prototype.hasOwnProperty.call(actual, key) === true
    );
  });
}

export function objectWithProperty(key: string, value: unknown) {
  return new AsymmetricMatcher(`objectWithProperty("${key}", ${strVal(value)})`, (actual) => {
    return (
      Object.prototype.toString.call(actual) === '[object Object]' &&
      Object.prototype.hasOwnProperty.call(actual, key) === true &&
      actual[key] === value
    );
  });
}
