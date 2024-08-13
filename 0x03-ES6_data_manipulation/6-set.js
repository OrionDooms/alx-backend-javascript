export default function setFromArray(items) {
  const temp = new Set();
  for (const item of items) {
    temp.add(item);
  }
  return temp;
}
