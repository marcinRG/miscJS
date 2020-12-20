import 'regenerator-runtime/runtime.js';

console.log('------------ Generators: Iterate over object properties -----------------------------');

function * getObjectPropertyValues(obj) {
    yield* Object.values(obj);
}

function * objectPropertyValueToMap(obj) {
    for (const prop in obj) {
        yield [prop, obj[prop]];
    }
}

console.log('--- test ----');


const obj = {
    name: 'Xers',
    date: 1894,
    value: 456,
    description: 'Lorem ipsum, et cetera'
};

let iterator = getObjectPropertyValues(obj);
console.log(`0: ${iterator.next().value} `);
console.log(`1: ${iterator.next().value} `);
console.log(`2: ${iterator.next().value} `);
console.log(`3: ${iterator.next().value} `);

console.log('--- test2 ----');

const obj2 = {
    name: 'Xers2',
    date: 2580,
    value: 8898,
    description: 'Lorem ipsum',
    [Symbol.iterator] : function() {return getObjectPropertyValues(this)}
};

console.log('for of loop to list all object property values');
for (const value of obj2) {
    console.log(value);
}
console.log('spread obj');
console.log([...obj2]);

console.log('--- test3 object property value as map----');
const obj3 = {
    name: 'David',
    surname: 'Bowie',
    occupation: 'singer',
    age: 890,
    city: 'London'
};
obj3[Symbol.iterator] =  function() {
    return objectPropertyValueToMap(this);
};
console.log(...obj3);

console.log('---------------------------------------end -----------------------------------');
