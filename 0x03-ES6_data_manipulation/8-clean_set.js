export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !set || !startString) {
    return '';
  }
  const temp = [];
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      temp.push(item.slice(startString.length));
    }
  }
  return temp.join('-');
}
