export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const values = Object.values(source);
  const valusOfInt = values.map(value => Number(value));
  return valusOfInt.reduce((accumulator, currentValue) => accumulator + currentValue);
}
