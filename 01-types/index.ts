// 1.1. Basic types
var myBool: boolean = true
var myAge: number = 34
var myName: string = 'Dan'
var myChildren: string[] = [ 'Ariel', 'Felix' ]

// 1.2. Enums
enum Gender { Male, Female }
var myGender: Gender = Gender.Male

// 1.3. Any
var notSureArray: any[] = [ 1, true, 'Hello' ]
var notSure: any = 4
notSure = 'Now a string'

// 1.4. Void
function myFunction (): void {
  console.log('myFunction returns nothing')
}

// 1.5. Function Declaration
function add (a: number, b: number): number {
  return a + b
}

// 1.6. Optional Params
function sayHello (name?: string) {
  name ? console.log(`Hello ${name}`) : console.log('Hello')
}

// 1.7. Inferred Types
var y = 10

// 1.8. Type Shorthand
type Bar = { x: number }
var bar: Bar = { x: 1 }

// 1.9. Interfaces
interface Team {
  name: string
  list: string[]
  getPlayer (num: number): string
}

var team: Team = {
  name: 'Melbourne',
  list: [ 'May', 'Jones', 'Salem', 'Harmes' ],
  getPlayer: function (num) {
    return this.list[num]
  }
}

// 1.10. Type Assertions
interface Foo {
  x: number
  y: number
}

var foo = {} as Foo
foo.x = 1
foo.y = 2

// 1.11. Extend Interfaces
interface Animal {
  legs: number
}

interface Dog extends Animal {
  bark: string
}

var fido = {
  legs: 3,
  bark: 'Woof! I only have 3 legs'
}

// 1.12. Type Guards
// implement a runtime check that of an interface
// Typescript also respects `typeof`
function isString (str: any): str is string {
  return typeof str === 'string'
}

function isDog (obj: Dog): obj is Dog {
  return typeof obj.bark === 'string'
}

if (isDog(fido)) {
  console.log(fido.bark)
}

function identity <T> (arg: T): T {
  return arg
}

// 1.13. Generics
function toArray <T> (arr: T | T[]): T[] {
  if (Array.isArray(arr)) {
    return arr
  } else {
    return [ arr ] as T[]
  }
}

interface Map <T> {
  [key: string]: T
}

var dictionary: Map<string> = {}
dictionary.foo = 'bar'

// 1.14. Union Types
// can use properties that exist on both
var value: string | string[] = 'test'
var valueLength: number = value.length // exists on both array and string

// 1.15. Intersection Types
// combines types
type A = { foo: string }
type B = { bar: string }

var ab: A & B = { foo: 'foo', bar: 'bar' }

// 1.16. Tuples
var tuple: [ string, number ] = [ 'Dan', 34 ]

// 1.17. This
class Calculator {
  constructor (protected value: number = 0) {}

  result (): number {
    return this.value
  }

  add (amount: number) {
    this.value += amount
    return this
  }
}

var calc = new Calculator(5)
calc.add(10).result() // 15
