1 == 2
console.log(1 == 2)

1 != 2
console.log(1 != 2)

1 == 1
console.log(1 == 1)

"text" == 5
console.log("text" == 5)

"text" != 5
console.log("text" != 5)
"text" == "Text"
console.log("text" == "Text")
"text" == "text"
console.log("text" == "text")

true == "true"
console.log(true == "true")

true == false
console.log(true == false)

false == 0
console.log(false == 0)

false === 0
console.log(false === 0)

"" == false
console.log("" == false)

"" !== false
console.log("" !== false)

undefined === null
console.log(undefined === null)

undefined == null
console.log(undefined == null)

17 === true
console.log(17 === true)

"17" === true
console.log("17" === true)

let numberEver  = prompt("Это число четное?");
// //указать,что "0"не относится
 if (numberEver % 2 == 0){
  alert(true)}
 else {
  alert(false)
 }

let numberOdd = prompt("Это число нечетное?")
 if (numberOdd % 2 == 0){
  alert(false)}
 else{
  alert(true) 
};


let w = 15
    w = -w
 alert(w)
    w += '1'
 alert(w)
    w = ++w
 alert(w)


let z = "100";
console.log(typeof (z/"1"))
console.log(typeof Number(z))
console.log(typeof+z)


let x = 4
let y = 2
console.log((x + y)*(x - y))
console.log((x**3) + 3*(x**2)*y + 3*x*(y**2)+(y**3))


let numberA = prompt("задай число!")
    numberA =+numberA
let numberB = prompt("задай число!")
    numberB =+numberB
let numberC = prompt("задай число!")
    numberC =+numberC
alert(numberA + 10 + numberB + 10  + numberC + 10 )



 let a = 3
 let b = 4
 let c = 5

 if(a + b > c && b + c > a && a + c > b)
     {
     alert(true)
 }
 else{
     alert(false)
 }

