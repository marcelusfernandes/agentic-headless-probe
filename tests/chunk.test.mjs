import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chunk } from '../src/chunk.mjs';

test('chunk splits an array into consecutive groups of at most size items', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test('chunk of an empty array is an empty array', () => {
  assert.deepEqual(chunk([], 3), []);
});

test('chunk throws a RangeError when size is not a positive integer', () => {
  assert.throws(() => chunk([1, 2, 3], 0), RangeError);
  assert.throws(() => chunk([1, 2, 3], -1), RangeError);
  assert.throws(() => chunk([1, 2, 3], 1.5), RangeError);
  assert.throws(() => chunk([1, 2, 3], NaN), RangeError);
});

test('chunk does not mutate the input array', () => {
  const input = [1, 2, 3, 4, 5];
  const copy = [...input];
  chunk(input, 2);
  assert.deepEqual(input, copy);
});
