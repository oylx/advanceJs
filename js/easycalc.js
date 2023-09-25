let str = ``
let count = 1
let twoArrMap = {}
for(let i=0; i< 10000; i++) {
  let x = Math.ceil(Math.random() * 5)
  let y = Math.ceil(Math.random() * 5)
  if (!twoArrMap[x]) twoArrMap[x]= {}
  if (twoArrMap[x][y]) continue
  twoArrMap[x][y] = y
  str += `${x} + ${y} =${count % 1 === 0 ? '\n' :'             '}`
  count += 1
}
console.log(str)
console.log(twoArrMap)
