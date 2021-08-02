/**
 * 数组
 */

const numberArr : number[] = [1, 2, 3]

const stringArr : string[] = ['a', 'b', 'c']

const undefinedArr : undefined[] = [undefined]

const arr : (number | string)[] = [1, 'a']

// 类型别名
type Lady = { name: string, age: number }
// 或者定义类
class Madam { name: string; age: number; }

const mans : Lady[]= [
  { name: '小李', age: 18 },
  { name: '小王', age: 19 }
]

