import { describe, test } from 'vitest';

import { shouldPassWith, shoudFailWith } from '../../test/routine';

import * as matchers from './strings';

describe('#stringEquals', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: 'Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.',
      createMatcher: () =>
        matchers.stringEquals('Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.'),
      matcherString:
        'stringEquals("Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.")',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 'What are you trying to tell me? That I can dodge bullets?',
      createMatcher: () =>
        matchers.stringEquals("No, Neo. I'm trying to tell you that when you're ready, you won't have to."),
    }),
  );
});

describe('#stringStartsWith', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth.",
      createMatcher: () => matchers.stringStartsWith('Do not try and bend the spoon.'),
      matcherString: 'stringStartsWith("Do not try and bend the spoon.")',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth.",
      createMatcher: () => matchers.stringStartsWith('There is no spoon.'),
    }),
  );
});

describe('#stringEndsWith', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth.",
      createMatcher: () => matchers.stringEndsWith('Instead, only try to realize the truth.'),
      matcherString: 'stringEndsWith("Instead, only try to realize the truth.")',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth.",
      createMatcher: () => matchers.stringEndsWith('Do not try and bend the spoon.'),
    }),
  );
});

describe('#stringMatches', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth.",
      createMatcher: () => matchers.stringMatches(/spoon/i),
      matcherString: 'stringMatches(/spoon/i)',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth.",
      createMatcher: () => matchers.stringMatches(/There is no spoon/i),
    }),
  );
});

describe('#stringBase64Encoded', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: 'WW91IGFyZSB0aGUgT25lLCBOZW8=',
      createMatcher: () => matchers.stringBase64Encoded(),
      matcherString: 'stringBase64Encoded()',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: "You are 'The One', Neo",
      createMatcher: () => matchers.stringBase64Encoded(),
    }),
  );
});

describe('#stringDateISO8601', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: '2025-09-21T21:20:16.309Z',
      createMatcher: () => matchers.stringDateISO8601(),
      matcherString: 'stringDateISO8601()',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 'June 11th, 1999',
      createMatcher: () => matchers.stringDateISO8601(),
    }),
  );
});

describe('#stringEmail', () => {
  test(
    'it should pass with valid input (Thomas Anderson)',
    shouldPassWith({
      input: 'usertaanderson-68003@matrix.sys',
      createMatcher: () => matchers.stringEmail(),
      matcherString: 'stringEmail()',
    }),
  );

  test(
    'it should pass with valid input (Neo)',
    shouldPassWith({
      input: 'neo@subnet.org',
      createMatcher: () => matchers.stringEmail(),
      matcherString: 'stringEmail()',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 'theone@zion',
      createMatcher: () => matchers.stringEmail(),
    }),
  );
});

describe('#stringJSON', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: '{"hello": "world"}',
      createMatcher: () => matchers.stringJSON(),
      matcherString: 'stringJSON()',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input:
        "{Ohh, what's really going to bake your noodle later on is, would you still have broken it if I hadn't said anything?}",
      createMatcher: () => matchers.stringJSON(),
    }),
  );
});

describe('#stringJWT', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: 'eyJhbGciOiJIUzI1NiJ9.RlJFRSBZT1VSIE1JTkQ.edKefjjRqI9yxTTT6vpuWti040WoGzX5a-ofc36-acg',
      createMatcher: () => matchers.stringJWT(),
      matcherString: 'stringJWT()',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 'Free. Your. Mind',
      createMatcher: () => matchers.stringJWT(),
    }),
  );
});

describe('#stringMD5', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: '064ff83b22543ca5e9f7cfa1d702daa9',
      createMatcher: () => matchers.stringMD5(),
      matcherString: 'stringMD5()',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: '064ff83b22543c064ff83b22543ca5e9f7cfa1d702daa9a5e9f7cfa1d702daa9',
      createMatcher: () => matchers.stringMD5(),
    }),
  );
});

describe('#stringSHA1', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: '467d6b9adfe97245b65049168be0c26da8fe8d74',
      createMatcher: () => matchers.stringSHA1(),
      matcherString: 'stringSHA1()',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: '467d6b9adfe97245b6504467d6b9adfe97245b65049168be0c26da8fe8d749168be0c26da8fe8d74',
      createMatcher: () => matchers.stringSHA1(),
    }),
  );
});

describe('#stringULID', () => {
  test(
    'it should pass with valid input',
    shouldPassWith({
      input: '01ARZ3NDEKTSV4RRFFQ69G5FAV',
      createMatcher: () => matchers.stringULID(),
      matcherString: 'stringULID()',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth",
      createMatcher: () => matchers.stringULID(),
    }),
  );
});

describe('#stringUUID', () => {
  test(
    'it should pass with valid input (v1)',
    shouldPassWith({
      input: 'fb840792-9595-11f0-8de9-0242ac120002',
      createMatcher: () => matchers.stringUUID(),
      matcherString: 'stringUUID()',
    }),
  );

  test(
    'it should pass with valid input (v4)',
    shouldPassWith({
      input: '1e793422-c633-4cad-9b42-c89da4a44029',
      createMatcher: () => matchers.stringUUID(),
      matcherString: 'stringUUID()',
    }),
  );

  test(
    'it should pass with valid input (v7)',
    shouldPassWith({
      input: '019963a1-19a1-7f08-b58f-e5edf83c20d5',
      createMatcher: () => matchers.stringUUID(),
      matcherString: 'stringUUID()',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: "Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth",
      createMatcher: () => matchers.stringUUID(),
    }),
  );
});

describe('#stringValidator', () => {
  const validator = matchers.stringValidator('testValidator', (value) => value.toLowerCase() === value);

  test(
    'it should pass with valid input',
    shouldPassWith({
      input: 'hello world',
      createMatcher: () => validator,
      matcherString: 'testValidator',
    }),
  );

  test(
    'it should fail with invalid input',
    shoudFailWith({
      input: 'HELLO WORLD',
      createMatcher: () => validator,
    }),
  );
});
