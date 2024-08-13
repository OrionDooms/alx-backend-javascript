export default function createInt8TypedArray(length, position, value) {
  const buf = new ArrayBuffer(length);
  const temp = new DataView(buf);
  temp.setInt8(position, value);
  return temp;
}
