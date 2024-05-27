/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, value] of array.entries()) {
    array[idx] = appendString + value;
  }

  return array;
}
