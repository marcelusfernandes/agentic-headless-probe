import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clamp } from '../src/clamp.mjs';

test('clamp returns the value when it is within range', () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test('clamp returns min when the value is below range', () => {
  assert.equal(clamp(-1, 0, 10), 0);
});

test('clamp returns max when the value is above range', () => {
  assert.equal(clamp(11, 0, 10), 10);
});

test('clamp throws a RangeError when min is greater than max', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
});
