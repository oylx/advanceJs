class MobilePhoneFactory {
 createOS() {
  throw new Error('抽象工厂方法不允许直接调用，你要将我重写！')
 }

 createHardWare() {
  throw new Error('抽象方法不允许直接调用，你要将我重写！')
 }
}


class OS {
 controlHardWare() {
  throw new Error('抽象产品方法不允许直接调用，你需要将我重写!')
 }
}

class HardWare {
 operateByteOrder() {
  throw new Error('抽象产品方法不允许直接调用，你需要将我重写!')
 }
}

class QualcommHardWare extends HardWare {
 operateByOrder() {
  console.log('我会用高通的方式去连接')
 }
}

class MiWare extends HardWare {
 operateByteOrder() {
  super.operateByteOrder()
  console.log('我会用小米的方式去连接')
 }
}

class AndroidOS extends OS {
 controlHardWare() {
  console.log('我会用安卓的方式去操作硬件')
 }
}

class AppleOS extends OS {
 controlHardWare() {
  console.log('我会用🍎的方式去操作硬件')
 }
}

class FakeStarFactory extends MobilePhoneFactory {
 createOS() {
  return new AndroidOS()
 }

 createHardWare() {
  return new QualcommHardWare()
 }
}

class newStarFactory extends MobilePhoneFactory {
 createOS() {
  // 操作系统实现代码
 }

 createHardWare() {
  // 硬件实现代码
 }
}
