// 2.1. Class
interface ExampleInterface {
  bar: string
}

class ExampleClass implements ExampleInterface {
  bar: string // omitting would error as it wouldn't match interface

  protected foo: string // only child classes can access

  constructor (public myName: string) { // `public` sets this.myName (`private` would make it protected)
    this.foo = myName.toUpperCase()
  }

  get value () { // access via implement.value
    return this.foo
  }

  static method () {
    return 'Static'
  }
}

// 2.2. Object Literals
const obj = {
  get hello () {
    return `Hello ${this.name}`
  },
  set hello (name: string) {
    this.name = name
  },
  name: 'Bob'
}

obj.hello = 'Barry'
obj.hello // Hello Barry

// 2.3. Iterators
for (let value of [1, 2, 3]) {
  console.log(value)
}

for (let char of 'test') {
  console.log(char)
}
