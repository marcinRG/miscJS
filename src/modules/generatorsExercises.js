console.log('------------ Generators Exercises module -----------------------------');

function* generatorEx() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

let iterator = generatorEx();
console.log(iterator.next().value);

console.log('------------ End -----------------------------');
