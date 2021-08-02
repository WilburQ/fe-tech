/**
 * 类的内部和外部
 */
class Person {
  // protected
  protected name: string;
  public sayHello() {
    console.log(this.name + 'say hello')
  }
}

class Teacher extends Person {
  public sayBye() {
    this.name
  }
}

const man = new Person()
// man.name = '小李' // 报错
man.sayHello()
// console.log(man.name) // 报错