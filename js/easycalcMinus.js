let str = ``
let count = 1
let twoArrMap = {}
for (let i = 0; i < 10000; i++) {
  let x = Math.ceil(Math.random() * 9)
  let y = Math.ceil(Math.random() * 5)
  if (x < y) continue
  if (!twoArrMap[x]) twoArrMap[x] = {}
  if (twoArrMap[x][y]) continue
  twoArrMap[x][y] = y
  str += `<div>${x} - ${y} = </div>`
  count += 1
}
document.body.innerHTML = str
console.log(str)
console.log(twoArrMap)
