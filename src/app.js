import './app.scss';
// import './modules/iteratorsExercises';
// import './modules/generatorsExercises';

let person = {};
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 'Koko'
});

//person.name = 'Ziko';
//Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
console.log('Person obj');
console.log(person);
let descriptor = Object.getOwnPropertyDescriptor(person, 'name');

console.log('descritor for Person');
console.log(descriptor);

let objX = {
    name: 'Kozo',
    surName: 'Bozo'
}

let objY = {
    years: 45,
    description: 'Lorem ipsum'
}

let person2 = {};

Object.assign(person2, objX, objY);

console.log('PERSON 2 obj')
console.log(person2);

Object.assign(person2, {
    set name(value) {
        console.log(`setting name to value ${value}`);
    }
});

console.log('PERSON 2 set name to new value');
person2.name = 'Bobo';

console.log('PERSON 2 obj');
console.log(person2);


console.log('-----------------------------------------');
let personX = {
    name: 'Matt',
    age: 27
};

let personName = personX.name,
    personAge = personX.age;
console.log(personName);
console.log(personAge);
console.log('-----------------------------------------');

let {name: personName2, age: personAge2} = personX;
console.log(personName2); // Matt
console.log(personAge2); // 27
console.log('-----------------------------------------');
let {name, age} = personX;
console.log(name); // Matt
console.log(age); // 27
console.log('-----------------------------------------');
console.log('-----------------------------------------');
console.log('-----------------------------------------');
const target = {
    someValue: 34,
    textValue: 'Lorem ipsum'
}

const handler = {
    get(trapTarget, property, receiver) {
        console.log(`handler get property: ${property} - ${trapTarget[property]}`);
        console.log(receiver);
        return 'value:' + trapTarget[property];
    }
};
console.log('- ***************************** -');
const proxy = new Proxy(target, handler);
console.log(`proxy: ${proxy.textValue}`);
console.log(`target: ${target.textValue}`);
console.log('-----------------------------------------');
console.log(`proxy: ${proxy.someValue}`);
console.log(`target: ${target.someValue}`);
console.log('-----------------------------------------');

console.log('- ***************************** -');

class User {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    sayHello() {
        console.log(this.name + ' ' + this.surname);
    }
}

const UserHandler = {

    construct(target, argumentsList, newTarget) {
        console.log('Proxy constructor');
        return Reflect.construct(...arguments);
    },
    get(trapTarget, property) {
        console.log(`handler get property: ${property} - ${trapTarget[property]}`);
        return Reflect.get(...arguments);
    }
};


const UserProxy = new Proxy(User, UserHandler);

let x = new UserProxy('Koko', 'Maximum');
let y = new UserProxy('Koko', 'Maximum');
console.log(x.name);



