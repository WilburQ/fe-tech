/**
 * 构造函数
 */
class Person2 {
  public name: string;
  constructor(name: string) {
    this.name = name
  }
}
class Teacher2 extends Person2 {
  constructor(public age: number) {
    super('张三')
  }
}
const teacher = new Teacher2(28)
console.log(teacher.name)
console.log(teacher.age)