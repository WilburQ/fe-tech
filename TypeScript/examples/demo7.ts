/**
 * interface
 */

 interface Person {
  name: string;
  age: number;
  year: number;
  school ?: string;
  [propname: string]: any;
  say(): string
}

class man implements Person {
  name = "小李"
  age = 18
  year = 5
  sex = "女"
  say() {
    return 'hello'
  }
}

const person = {
  name: '李四',
  age: 18,
  year: 5,
  school: '北京大学',
  sex: '男',
  say() {
    return '你好'
  }
}

const resume = (person: Person) => {
  person.age < 24 && person.year >=3 && console.log(person.name + '进入面试')
  person.age >=24 || person.year <3 && console.log(person.name + '你被淘汰')
}

const getResume = (person: Person) => {
  console.log(person.name + '年龄是' + person.age)
  console.log(person.name + '经验是' + person.year)
  person.school && console.log(person.name + '学校是:' + person.school)
  person.sex && console.log(person.name + '性别是:' + person.sex)
}

resume(person)
getResume(person)