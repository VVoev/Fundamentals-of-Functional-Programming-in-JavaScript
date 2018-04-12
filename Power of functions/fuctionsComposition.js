

const difference = (a, b) => {
    return a - b;
}

const abs = (number) => {
    return Math.abs(number);
}

const multiPlyItByFive = (number) => {
    return number * 5;
}

const printIt = (number) => {
    console.log(number);
    return number;
}

const alertIt = (number) => {
    alert(number);
}

const absoluteDifference = (a, b) => {
    return alertIt(printIt(multiPlyItByFive(abs(difference(a, b)))));
}

const alfa = 'abc';
const isEmpty = R.pipe(
    R.defaultTo(''),
    R.trim,
    R.isEmpty
);

const result = isEmpty(alfa);