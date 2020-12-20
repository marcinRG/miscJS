import 'regenerator-runtime/runtime.js';

console.log('-------------------- Generators: continuous loop over array ---------------------');

function* loopOverArray(array) {
    let index = 0;
    while (true) {
        yield array[index++ % array.length];
    }
}

console.log('test ----');

const array = ['Lorem', 'ipsum', 'end'];
const iterator = loopOverArray(array);

console.log(`0: ${iterator.next().value} `);
console.log(`1: ${iterator.next().value} `);
console.log(`2: ${iterator.next().value} `);
console.log(`3: ${iterator.next().value} `); //should start from begin

console.log('---------------------------------------end -----------------------------------');
