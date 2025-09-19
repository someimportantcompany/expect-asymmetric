import { describe, test, expect } from 'vitest';

import * as matchers from './strings';

describe('#stringStartsWith', () => {
  test('should pass with valid input', () => {
    const input = "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth.";
    const matcher = matchers.stringStartsWith('Do not try and bend the spoon.');
    expect({ input }).toEqual({ input: matcher });
    expect(matcher.toString()).toEqual('stringStartsWith("Do not try and bend the spoon.")');
    // Then you'll see, that it is not the spoon that bends, it is only yourself.
  });

  test('should fail with invalid input', () => {
    const input = "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth.";
    const matcher = matchers.stringStartsWith('There is no spoon.');
    expect(() => expect({ input }).toEqual({ input: matcher })).toThrow();
    expect(matcher.toString()).toEqual('stringStartsWith("There is no spoon.")');
  });
});

describe('#stringEndsWith', () => {
  test('should pass with valid input', () => {
    const input = "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth.";
    const matcher = matchers.stringEndsWith('Instead, only try to realize the truth.');
    expect({ input }).toEqual({ input: matcher });
    expect(matcher.toString()).toEqual('stringEndsWith("Instead, only try to realize the truth.")');
    // Then you'll see, that it is not the spoon that bends, it is only yourself.
  });

  test('should fail with invalid input', () => {
    const input = "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth.";
    const matcher = matchers.stringEndsWith('There is no spoon.');
    expect(() => expect({ input }).toEqual({ input: matcher })).toThrow();
    expect(matcher.toString()).toEqual('stringEndsWith("There is no spoon.")');
  });
});

describe('#stringMatches', () => {
  test('should pass with valid input', () => {
    const input = "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth";
    const matcher = matchers.stringMatches(/spoon/);
    expect({ input }).toEqual({ input: matcher });
    expect(matcher.toString()).toEqual('stringMatches(/spoon/)');
    // Then you'll see, that it is not the spoon that bends, it is only yourself.
  });

  test('should fail with invalid input', () => {
    const input = "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth";
    const matcher = matchers.stringMatches(/There is no spoon/);
    expect(() => expect({ input }).toEqual({ input: matcher })).toThrow();
    expect(matcher.toString()).toEqual('stringMatches(/There is no spoon/)');
  });
});

describe('#stringIsULID', () => {
  test('should pass with valid input', () => {
    const input = '01ARZ3NDEKTSV4RRFFQ69G5FAV';
    const matcher = matchers.stringIsULID();
    expect({ input }).toEqual({ input: matcher });
    expect(matcher.toString()).toEqual('stringIsULID()');
  });

  test('should fail with invalid input', () => {
    const input = "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth";
    const matcher = matchers.stringIsULID();
    expect(() => expect({ input }).toEqual({ input: matcher })).toThrow();
    expect(matcher.toString()).toEqual('stringIsULID()');
  });
});

describe('#stringIsUUID', () => {
  test('should pass with valid input (v1)', () => {
    const input = 'fb840792-9595-11f0-8de9-0242ac120002';
    const matcher = matchers.stringIsUUID();
    expect({ input }).toEqual({ input: matcher });
    expect(matcher.toString()).toEqual('stringIsUUID()');
  });

  test('should pass with valid input (v4)', () => {
    const input = '1e793422-c633-4cad-9b42-c89da4a44029';
    const matcher = matchers.stringIsUUID();
    expect({ input }).toEqual({ input: matcher });
    expect(matcher.toString()).toEqual('stringIsUUID()');
  });

  test('should pass with valid input (v7)', () => {
    const input = '019963a1-19a1-7f08-b58f-e5edf83c20d5';
    const matcher = matchers.stringIsUUID();
    expect({ input }).toEqual({ input: matcher });
    expect(matcher.toString()).toEqual('stringIsUUID()');
  });

  test('should fail with invalid input', () => {
    const input = "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth";
    const matcher = matchers.stringIsUUID();
    expect(() => expect({ input }).toEqual({ input: matcher })).toThrow();
    expect(matcher.toString()).toEqual('stringIsUUID()');
  });
});
