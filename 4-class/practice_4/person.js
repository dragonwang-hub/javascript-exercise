// TODO 15: 在这里写实现代码
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return this.basicIntroduce();
  }

  basicIntroduce() {
    const basicintroduce = `My name is ${this.name}. I am ${this.age} years old.`;
    return basicintroduce;
  }
}
