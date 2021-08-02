// /**
//  * interface
//  */

// interface Person {
//   name: string;
//   age: number;
//   year: number;
//   school ?: string 
// }

// const person = {
//   name: '李四',
//   age: 18,
//   year: 5,
//   school: '北京大学'
// }

// const resume = (person: Person) => {
//   person.age < 24 && person.year >=3 && console.log(person.name + '进入面试')
//   person.age >=24 || person.year <3 && console.log(person.name + '你被淘汰')
// }

// const getResume = (person: Person) => {
//   console.log(person.name + '年龄是' + person.age)
//   console.log(person.name + '经验是' + person.year)
//   person.school && console.log(person.name + '学校是:' + person.school)
// }

// resume(person)
// getResume(person)