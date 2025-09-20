import { test, expect } from '@jest/globals';
import matchers from '../../dist';

test('#stringStartsWith', () => {
  expect('Hello world').toEqual(matchers.stringStartsWith('Hello'));
});

test('#stringEndsWith', () => {
  expect('Hello world').toEqual(matchers.stringEndsWith('world'));
});

test('#stringMatches', () => {
  expect('Hello world').toEqual(matchers.stringMatches(/^Hello/));
});

test('#stringIsULID', () => {
  expect('01ARZ3NDEKTSV4RRFFQ69G5FAV').toEqual(matchers.stringIsULID());
});

test('#stringIsUUID', () => {
  // v1
  expect('fb840792-9595-11f0-8de9-0242ac120002').toEqual(matchers.stringIsUUID());
  // v4
  expect('1e793422-c633-4cad-9b42-c89da4a44029').toEqual(matchers.stringIsUUID());
  // v7
  expect('019963a1-19a1-7f08-b58f-e5edf83c20d5').toEqual(matchers.stringIsUUID());
});
