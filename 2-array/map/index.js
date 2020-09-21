export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const result = collection.map(element => String.fromCharCode(96 + parseInt(element, 10)));
  return result;
}
