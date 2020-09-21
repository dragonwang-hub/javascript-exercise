// TODO 20: 在这里写实现代码
import Person from './person';

export default class Student extends Person {
  constructor(name, age, classOfTeacher) {
    super(name, age);
    this.klass = classOfTeacher;
  }

  introduce() {
    if (this.klass === undefined) {
      return `${this.basicIntroduce()} I am a Teacher. I teach No Class.`;
    }
    return `${this.basicIntroduce()} I am a Teacher. I teach Class ${this.klass}.`;
  }
}
