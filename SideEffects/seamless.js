let arr = [7, 105, 3, 5, 9, 10, 20];

let myImutable = Immutable(arr); //sort cannot be called on imutable structure

const diff = (a, b) => { return a - b };


const myMutable = myImutable.asMutable();
myMutable.push('ivan');


console.log(myImutable);
console.log(myMutable);
