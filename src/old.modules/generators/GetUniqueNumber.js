import 'regenerator-runtime/runtime.js';

console.log('------------ Generators: Generate unique number -----------------------------');

function* getUniqueNumber() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

console.log('--- test ----');


const iterator = getUniqueNumber();

console.log(`0: ${iterator.next().value} `);
console.log(`1: ${iterator.next().value} `);
console.log(`2: ${iterator.next().value} `);
console.log(`3: ${iterator.next().value} `);

console.log('---------------------------------------end -----------------------------------');

