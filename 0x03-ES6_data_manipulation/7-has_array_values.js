export default function hasValuesFromArray(set, list) {
  return !list.some((item) => !set.has(item));
}
