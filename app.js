const ar = [];
ar[10] = 100;
ar [0] = 'hello';
ar[3] = [];
ar.length = 0;
ar[0] = 1;
const ar2 = [[1,6], [2,0,0], [3, 1]];
//add at array end
ar[ar.length] = 10;
let s = ar.push(...ar2);
ar[10];
//method "map"
//console.log([1, 2, 3].map(n => n ** 2));
function getRandomIntNumber(min, max, minInclusive=true, maxInclusive=false) {
 //TODO
}
function getArrayRandomIntNumbers(nNumbers, min, max, minInclusive=true,
     maxInclusive=false) {
 //TODO apply only function getRandomIntNumber and Array method map
}
let ar1 =[];
ar1.push(1, 2, 3);
ar1.length = 100;
ar1 = [...ar1]

ar1.length = 5;
//console.log(ar1)
function getOrderedList(array) {
    //returns HTML string of element <ol> with items form 
    //a given array elements
    //example: input- [1, 2, 3]
    //output "<ol><li>1</li><li>2</li><li>3</li></ol>"
}
console.log([1, 2, 3].join(''))
