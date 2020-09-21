export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const status = { status: 'processed' };
  Object.assign(source.properties, status);

  const serialNumber = { serialNumber: '12345' };
  Object.assign(source, serialNumber);
  return source;
}
