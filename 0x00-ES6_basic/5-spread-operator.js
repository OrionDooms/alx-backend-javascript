export default function concatArrays(array1, array2, string) {
  const str = [...array1, ...array2, ...string];
  return (str);
}
