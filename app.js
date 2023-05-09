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
    //
    const sign = number < 0 ? '-' : '';
    number = Math.abs(number); //negative to positive
    number = Math.round(number); //rounding to close integer number
    if (radix < 2 || radix > 36) {
        radix = 10;
    }
    let res = '';
    do {
        res = getSymbol(number, radix) + res;
        number = Math.trunc(number / radix);
    } while (number != 0);
    return sign + res;
}
function getSymbol(number, radix) {
    const aCode = 'a'.charCodeAt(0);
    const delta = aCode - 10;
    const remainder = number % radix;
    return remainder < 10 ? remainder + '' : String.fromCharCode(remainder + delta);
}
// console.log((123456789).toString(36));
// console.log(myToStringInt(123456789, 36));
// console.log(myToStringInt(-123456789, 36));
// console.log(myToStringInt(-123456789.5234, 36));
// console.log(myToStringInt(0, 36));
// "string" or 'string' with no string interpolation 'a' - string
//`...${<expression>}...`
const strNum = '#100';
const redix = 16;
//console.log(`string with number ${strNum} for redix ${redix} is ${parseInt(strNum, redix)}`)
function myParseInt(strNum, redix) {
    //the same behavior as standard parseInt
    strNum = strNum.trim();
    let index = strNum.charAt(0) == '-' || strNum.charAt(0) == '+' ? 1 : 0;
    let res = redix > 1 && redix < 37 ? getDigitCode(strNum, index, redix) : NaN;

    if (!isNaN(res)) {
        let digit;
        index++;
        while (index < strNum.length &&
            !isNaN(digit = getDigitCode(strNum, index, redix))) {
            res = res * redix + digit;
            index++;
        }
        if(strNum[0] == '-') {
            res = -res
        }

    }
    return res;
}
function getDigitCode(strNum, index, redix) {
    const delta = 'a'.charCodeAt(0) - 10;
    const symbol = strNum.charAt(index).toLowerCase();
    const code = symbol >= '0' && symbol <= '9' ? +symbol : symbol.charCodeAt(0) - delta;
    return code >= 0 && code < redix ? code : NaN;
}

//console.log(`string with number ${strNum} for redix ${redix} is ${myParseInt(strNum, redix)}`)

//console.log(eval("let d = function() {return function {return 10}}; Math.sqrt(4) * (100 - d()())"));
console.log(`3 == "3" is ${3 == "3"}`)
console.log(`3 === "3" is ${3 === "3"}`)