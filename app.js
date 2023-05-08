console.log("Hello World!");
//
// let a = 5; //number
// a = "hello"; //string
// a = false; //boolean
// let a = 5 + "5";
// console.log(a, typeof a);
// a = a - 5;
// console.log(a, typeof a);
// a = "abc";
// a /= 2;
// console.log(a, typeof a);
// a = "123";
// //a -= 0;
// a = +a;
// console.log(a, typeof a);

// if (a = 1) {
//     console.log("a is true");
// }
// console.log(a);
// let a = 1; 
// let b = 3;
// let c = "1";
// if (a < b <= c) {
//     console.log ("a < b < c is true")
// }
// if (2 < "abc") {
//     console.log('2 < "abc" is true')
// }
// if (2 > "abc") {
//     console.log('2 > "abc" is true')
// }
// if (2 == "abc") {
//     console.log('2 == "abc" is true')
// }
// let a = "abc";
// a = !!a;
// console.log(a, typeof a);
//console.log (2 + 10 * false / true)
//console.log(3 - (4 + "1"));
//let a =new Number(3);
//console.log(a=a + 5, typeof a);
// let a = 0.3456789;
// console.log(a,typeof a);
// a = a.toFixed(2); 
// console.log(a + 5,typeof a);
// a = +a;
// console.log(a + 5,typeof a);
// a = !!new Number(0);
// console.log(a,typeof a);
// a = !!0;
// console.log(a,typeof a);
//Math.trunc, Math.round, 
let a = "256 * 320";
// console.log(+a);
// console.log(parseInt(a));
a = "257.4a";
//console.log(+a, parseInt(a), parseFloat(a));
// console.log('A'.charCodeAt(0));
// console.log(String.fromCodePoint(65, 66, 67))
// console.log(Number.name);
// console.log((123).toString(16))
//Use symbols "A", "S"
//print out ananas 
//console.log(("A" + +"A" + "AS").toLowerCase())

function myToStringInt(number, radix) {
    //number - any number
    //radix - computation base if radix < 2 or radix > 36 then radix = 10
    //removes fractional part, 34.25 => 34 ; 34.75 => 35 
    //toString method is diallowed
    //return string as a view presentation of the integer part of a given number in accordance with the given radix
}
console.log((123456789).toString(36));
console.log(myToStringInt + 10);
