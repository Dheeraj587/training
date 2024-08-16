console.log('js');  
// datatype
// primitive
// 1.string
// 2.Number
// 3.boolean
// 4.bigint
// non-primitive
//1.array
//2.object

//string
//variable declaration
//always use camelcase
let firstName='dheeraj';
console.log(firstName);
console.log(typeof firstName);
let age=20;
console.log(typeof age);
//booloean type
let isJsFun=true;
console.log(typeof isJsFun)
//undefined
let college;
console.log(typeof college)
//null
let department=null;
console.log(typeof department)
//keyword used to declare the variable
//note VAR <LET <CONST
//1.VAR
//in case var we can redeclare and reassign the variable
var lastName="singh";
lastName='sharma';
console.log(lastName)
//revien-redelcare
var fruit='mango';
console.log(fruit)
var fruit='grapes';
console.log(fruit)
//LET
//WE cannot redeclare in leet
let company='meta';
company='netflix';
console.log(company)
//const
//we cannot reassign and redeclare

// NOTE const
// NOTE ❌reassign ❌redeclare
const laptop='hp'
book ='dell'
console.log(laptop)


// NOTE Arithematic (+,-,*,%,/,**)
// NOTE ASSIGNMENT (=,+=,-=,*=,/=)
let x=5;
x += 5  //x=x+5
console.log(x)


//NOTE LOOSE EQUALITY(==)
const a=5
const b ='5'
//Always avoid to use
console.log(a==b)

//NOTE STRICT EQUALITY
console.log(a===b)

//NOTE !=
console.log(5 !='5')  //❌
console.log(5 !=='5')  //✔


//NOTE LOGICAL(|| , &&,!)

// prompt, alert
// prompt("enter your name")
alert('hello')

const firstNamee = prompt('enter your name')
console.log(firstNamee)

username='admin'
password='admin123'

//note create two prompt one for username and password use && logical opertor to check if username === 'admmin' and password 'admin123' if both conditions are true then print console.log ('authentication successful) else console.log ('authentication failed')

// note type coersion and type conversion 
// not impicit(type coersion) when js intermally convert the type of variable from one datatype to another 
const c=3+'3'
console.log(typeof c)

const subs=7-'4'
console.log(subs)

const bol=true+1
console.log(bol)
console.log(typeof bol)

const d=+'5'
console.log(d)
console.log(typeof d)

// note type converson 
const num=5
console.log(typeof String(num))

const str='true'
console.log(typeof Boolean(str))
