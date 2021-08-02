/**
 * 类型注解
 * 类型推断
 */

// let count : number;
// count = 123;
// let countInterface = 123

// 可以自己推断，不需要加注解
// const one = 1;
// const two = 2;
// const total = one + two;

// 无法自己推断类型，需要加注解
function getTotal(one: number, two: number) {
  return one + two
}
const total = getTotal(1, 2)

// 自动推断类型
const people1 = {
  name: '张三',
  age: 18
}