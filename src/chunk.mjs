/**
 * Splits an array into consecutive arrays of at most `size` items.
 * The input array is never mutated.
 *
 * @param {ReadonlyArray<unknown>} list
 * @param {number} size - a positive integer
 * @returns {Array<Array<unknown>>}
 */
export const chunk = (list, size) => {
  if (!Number.isInteger(size) || size <= 0) {
    throw new RangeError('size must be a positive integer');
  }

  const chunks = [];
  for (let start = 0; start < list.length; start += size) {
    chunks.push(list.slice(start, start + size));
  }
  return chunks;
};
