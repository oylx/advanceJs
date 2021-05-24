import * as chai from 'chai'
import Promise from '../promise-demo/promise'

const assert = chai.assert

describe('Promise', () => {
  it('是一个类', () => {
    assert.isFunction(Promise)
    assert.isObject(Promise.prototype)
  });
  it('new Promise()如果接收的不是一个函数就报错', () => {
    assert.throw(() => {
      const a = new Promise(undefined)
    })
    assert.throw(() => {
      const a = new Promise(1)
    })
    assert.throw(() => {
      const a = new Promise(false)
    })
  })
  it('new Promise会生成一个对象，对象有then方法', () => {
    const promise = new Promise(() => {})
    assert.isFunction(promise.then)
  })
});
