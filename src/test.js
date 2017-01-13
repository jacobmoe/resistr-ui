class LetsWriteES6 {
  constructor() {
    this.what = "World"
  }

  hello() {
    console.log(this.what + ' world!')
  }
}

const a = new LetsWriteES6
a.hello()
