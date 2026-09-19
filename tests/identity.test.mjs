import { test } from 'node:test';
import assert from 'node:assert/strict';
import { identity } from '../src/identity.mjs';

test('identity returns what it was given', () => {
  assert.equal(identity(7), 7);
});
