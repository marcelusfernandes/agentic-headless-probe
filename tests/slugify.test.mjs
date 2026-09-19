import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slugify.mjs';

test('slugify lowercases and hyphenates a title', () => {
  assert.equal(slugify('Hello, World!'), 'hello-world');
});

test('slugify collapses runs of non-alphanumeric characters into one hyphen', () => {
  assert.equal(slugify('a---b   c!!!d'), 'a-b-c-d');
});

test('slugify never starts or ends with a hyphen', () => {
  assert.equal(slugify('  --Leading and trailing--  '), 'leading-and-trailing');
});

test('slugify of the empty string is the empty string', () => {
  assert.equal(slugify(''), '');
});
