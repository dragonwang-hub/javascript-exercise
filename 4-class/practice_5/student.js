// TODO 19: 在这里写实现代码
import Person from './person';

export default class Student extends Person {
  constructor(name, age, classOfStu) {
    super(name, age);
    this.klass = classOfStu;
  }

  introduce() {
    const introduceOfStudent = `${this.basicIntroduce()} I am a Student. I am at Class ${
      this.klass
    }.`;
    return introduceOfStudent;
  }
}
