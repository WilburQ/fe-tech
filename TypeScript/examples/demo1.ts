/**
 * 四种基本类型
 */

const count : number = 123
const myName : string = 'hello'

// 对象类型
const people: {
  name: string,
  age: number
} = {
  name: '张三',
  age: 18
}

// 数组类型
const peoples : string [] = ['李四', '王五', '小李']

// 类
class Person {}
const lisi : Person = new Person()

// 函数类型
const callLisi : () => string = () => { return '打电话给李四' }
