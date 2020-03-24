console.log('------------ Iterators Exercises module -----------------------------');

const obj = {
    name: 'Xers',
    date: 1894,
    value: 456,
    description: 'Lorem ipsum, et cetera',
    [Symbol.iterator]: function () {
        const self = this;
        const keys = Object.keys(self);
        let step = 0;
        const iterator = {
            next: function () {
                if (step < keys.length) {
                    const value = {value: self[keys[step]], done: false};
                    step++;
                    return value;
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
        return iterator;
    }
};

//spread object with defined iterator
console.log('spread obj with defined iterator');
console.log([...obj]);

//expl. using iterator
console.log('expl. using iterator');
let iterator = obj[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//loop for of
console.log('for of loop, object with iterator');
for (const value of obj) {
    console.log('value:' + value);
}
//iterators over map properties
const map = new Map([[1, 'one'], [2, 'two']]);
for (const [key, value] of map) {
    console.log(`key: ${key} value: ${value}`);
}
console.log('------------ End -----------------------------');
