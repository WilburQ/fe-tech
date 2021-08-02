/**
 * 类
 */
class Animal {
  content = '小动物的叫声'
  sayHello() {
    return this.content
  }
}

class dog extends Animal {
  sayHello() {
    return super.sayHello() + '是:'
  }
  sayWang() {
    return '汪汪汪'
  }
}

const cat = new dog()
console.log(cat.sayHello())
console.log(cat.sayWang())