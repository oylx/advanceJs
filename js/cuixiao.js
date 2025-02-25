const arr = [
  { index: 1, time: '2024.09.14', name: '班费自愿缴纳', cost: 4500, purpose: '班级需要' },
  { index: 2, time: '2024.09.18', name: '购买时钟', cost: -9.99, purpose: '班级需要' },
  { index: 3, time: '2024.10.08', name: '购买舞蹈道具', cost: -230, purpose: '运动会表演' },
  { index: 4, time: '2024.10.18', name: '购买运动会横幅', cost: -30, purpose: '运动会表演' },
  { index: 5, time: '2024.11.6', name: '集体打印试卷', cost: -9.5, purpose: '学习用途' },
  { index: 6, time: '2024.11.27', name: '集体购买作业本', cost: -120, purpose: '学习用途' },
  { index: 7, time: '2024.12.1', name: '打印7套语文试卷', cost: -65, purpose: '学习用途' },
  { index: 8, time: '2024.12.9', name: '打印19套数学试卷', cost: -148, purpose: '学习用途' },
  { index: 9, time: '2024.12.24', name: '打印13套语文试卷', cost: -179.4, purpose: '学习用途' },
  { index: 10, time: '2025.02.11', name: '购买黑板报装饰材料', cost: -93, purpose: '班级需要' },
  { index: 11, time: '2025.02.11', name: '购买黑板报装饰材料', cost: -65.96, purpose: '班级需要' },
  { index: 12, time: '2025.02.11', name: '打印班级学号标签', cost: -270, purpose: '学习用途' },
  { index: 12, time: '2025.02.18', name: '数学亮点试卷', isNew: true, cost: -756, purpose: '学习用途' },
  { index: 12, time: '2025.02.24', name: '语文亮点试卷', isNew: true, cost: -810, purpose: '学习用途' },
]

let newCost100 = 0
let allCost100 = 0
let left100 = 0
let lastLeft100 = 0
for (let i = 0; i < arr.length; i++) {
  const { cost, isNew = false } = arr[i]
  if (isNew) newCost100 += cost * 100
  else lastLeft100 += cost * 100
  allCost100 += i === 0 ? 0 : cost * 100
  left100 += cost * 100
}
const left = left100 / 100
const newCost = newCost100 / 100
const allCost = allCost100 / 100
const lastLeft = lastLeft100 / 100
console.log('===============================')
console.log(`到目前所有花费${allCost * -1}`)
console.log('===============================')
console.log(`本次共花费${newCost * -1}`)
console.log(`上次结余${lastLeft}`)
console.log(`目前剩余${left}`)
console.log('===============================')

const wenan1 = `大家上午/下午好，公示下班费情况`
let strArr = arr.reduce((prev, next) => {
  if (next.isNew) {
    const { name, cost} = next
    prev += `${name}(${cost}),`
  }
  return prev
}, '')
let a = '集体购买作业本(120)，打印7套语文试卷(65)，打印19套数学试卷(148)，共花费333，上次结余4220.51，目前剩余3887.51～'
const wenan2 = `${strArr}本次共花费${newCost * -1}，上次结余${lastLeft}，目前剩余${left}～感谢韩悦希妈妈[强][强][强]`

console.log(wenan1)
console.log(wenan2)






















































