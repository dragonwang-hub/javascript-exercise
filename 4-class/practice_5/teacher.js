// TODO 20: 在这里写实现代码
import Person from './person';

export default class Student extends Person {
  constructor(name, age, classOfTeacher) {
    super(name, age);
    this.klass = classOfTeacher;
  }

  introduce() {
    return `${super.introduce()} I am a Teacher. I teach ${
      this.klass === undefined ? `No Class` : `Class ${this.klass}`
    }.`;
  }
}
