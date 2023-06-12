const arr1 = [
  '王梓源',
  '经沛霖',
  '周有智',
  '肖叶琛',
  '王则均',
  '余振阳',
  '许明睿',
  '徐沐阳',
  '周宇晨',
  '刘御玄',
  '孙陶梓洛',
  '周孝瑞',
  '张皓轩',
  '梁云翀',
  '彭诗涵',
  '沈梓妤',
  '贡逸阳',
  '徐子欣',
  '乔子筠',
  '张嘉雯',
  '张忻苒',
  '王举儿',
  '束滢',
  '潘禹辰',
  '李依诺',
  '周邵晞',
  '刘若溪',
  '葛沫绮',
  '周茉',
  '徐瑾萌',
  '杨昕淇'
]
const arr2 = [
  '沈梓妤',
  '经沛霖',
  '周茉',
  '徐沐阳',
  '许明睿',
  '周有智',
  '梁云翀',
  '王则均',
  '王梓源',
  '刘御玄',
  '梁云翀',
  '贡逸阳',
  '徐子欣',
  '束滢',
  '余振阳',
  '肖叶琛',
  '周邵晞',
  '周孝瑞',
  '徐瑾萌',
  '周宇晨',
  '张皓轩',
  '李依诺',
  '彭诗涵',
  '孙陶梓洛',
  '张嘉雯',
  '乔子筠',
  '杨昕淇'
]

const sortResult = (data, type) => {
  let result = []
  switch (type) {
    // 当比较的item为对象的某个属性时，value = item [key]

    // 1.中文(按第一个文字)
    case 'chinese':
      result = data.sort((item1, item2) => {
        const value1 = item1.charAt(0);
        const value2 = item2.charAt(0);
        // 这里localeCompare应该是不支持第二个参数的 但是并没有报错，请直接使用value1.localeCompare(value2)
        return value1.localeCompare(value2, 'zh-CN');
      })
      break;
    // 2.字母(按第一个字母且不区分大小写，请自行修改)
    case 'letter':
      result = data.sort((item1, item2) => {

        //2.1不区分大小写
        const value1 = item1.charAt(0).toLowerCase();
        const value2 = item2.charAt(0).toLowerCase();
        return value1.localeCompare(value2);

        //2.2区分大小写
        // const value1 = item1.charAt(0);
        // const value2 = item2.charAt(0);

        //测试2.2
        const arr = ['A','a','b','B']
        arr.sort(function (item1, item2) {
          return item1.localeCompare(item2);
        })
        //输出["a", "A", "b", "B"]
      })
      break;
    //3.数字
    case 'number':
      result = data.sort((item1, item2) => {
        const value1 = item1;
        const value2 = item2;
        return value1 - value2;
      })
      break;

    default:
      result = data;
      break;
  }
  return result;
}
const res1 = sortResult(arr1, 'chinese')
console.log(res1)


const res2 = sortResult(arr2, 'chinese')
console.log(res2)

res1.forEach(v => {
  if (!res2.includes(v)) {
    console.log(v)
  }
})
