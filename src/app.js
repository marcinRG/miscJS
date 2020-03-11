import {tagFunction, tmpl} from './modules/templatesExercises';
import './app.scss';
//Templates
let a = 12;
let b = 35;

tagFunction`Text val: \n a: ${a} + val b: ${b} \n = sum (a+b) ${a + b}`;

const personsData = [
    {first: 'Jane', last: 'Bond'},
    {first: 'Lars', last: 'Croft'},
];

console.log(tmpl(personsData));

//Symbols
console.log(23 ** 2);
const mySymbol = Symbol('My first symbol');
const otherSymbol = Symbol('My first symbol');
console.log(otherSymbol);
console.log(mySymbol);
