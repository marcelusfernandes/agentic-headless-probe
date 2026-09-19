/** Limits `value` to the closed range [min, max]. */
export const clamp = (value, min, max) => {
  if (min > max) {
    throw new RangeError(`min (${min}) must not be greater than max (${max})`);
  }

  if (value < min) return min;
  if (value > max) return max;
  return value;
};
