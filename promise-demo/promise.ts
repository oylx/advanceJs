class Promise2 {
  constructor(fn) {
    if (typeof fn !== 'function') {
      throw new Error('我只接受函数')
    }
  }

  then() {

  }
}

export default Promise2
