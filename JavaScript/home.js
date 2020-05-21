console.log('hello')
alert('yooo')

// variables
var b = 'smoothie';
console.log(b);

var num = 45
console.log(num);

// changing html using js
document.getElementById('sometext').innerHTML = "Helo World"; 

// user input
var age = prompt('What is your age?');
document.getElementById('sometext').innerHTML = age;

// Numbers in JS
var num1 = 5;       // int value
var num2 = 5.7;     // float value
console.log(5*10);  // multiply
console.log(10/5);  // divide
num1 = num1 + 1     // Increment
num1--;             // Decrement
num1 += 12          // Increment
console.log(num1%5) // Remainder

/* Functions
1. Create  a function.
2. Call the function.
*/
// Create
function fun() {
    console.log('This is a function.');
}
// Call
fun();

/* Create a function that takes in your name and 
says Hello followed by your name.

Name : "ABC"
Return : "Hello ABC"
*/

function greeting() {
    var name = prompt("What is your name?");
    var result = "Hello " + name;               // String Concat
    console.log(result);
}

greeting();

// Arguments in function
function sumnum(num1, num2) {
    var result= num1+num2;
    console.log(result);
}

sumnum(10, 20);
sumnum("Hello ","World!");
sumnum(10, '10');

// while loop

var num = 0;
while(num<100){
    num+=1;
    console.log(num);
}


// for loop

for(let num=0; num<=100; num++){
    console.log(num);
}



// Data Types

let yourAge = 20;                           // number
let yourName = "ABC";                       // string
let name = {first: 'ABC', last: 'Doe'};     // object
let truth = false;                          // boolean
let groceries = ['Apple','Orange']          // Array
let random;                                 // Undefined
let nothing = null;                         // NULL

// Strings
let fruit = 'banana';
let morefruit = 'banana\napple';            // line break

console.log(fruit.length);                  // length
console.log(fruit.indexOf('an'));           // Gives the index else -1
console.log(fruit.slice(2, 6));             // Slicing a String
console.log(fruit.replace('ban', '123'));   // find and replace
console.log(fruit.toUpperCase());           // To upper case
console.log(fruit.toLowerCase());           // to lower case
console.log(fruit.charAt(2));               // char at index
console.log(fruit[2]);                      // char at index
console.log(fruit.split(''));               // split the string by char
 
// Arrays
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
/* another way of declaring array
let fruits = new Array('banana', 'apple', 'orange', 'pineapples');
*/

console.log(fruits[1]);                    // access value at index
fruits[0] = 'pear';                        // changing value

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// array common methods
console.log('to string', fruits.toString())             // converting array to string
console.log(fruits.join(' - '))                         // joing array elements
console.log(fruits.pop())                               // removes the last element
console.log(fruits.push('strawberries'));               // appending element in array
fruits[fruits.length] = 'papaya'                        // another method for appending
console.log(fruits)
fruits.shift();                                         // remove first element from array
fruits.unshift('kiwi');                                 // adds first element in the array

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allgroceries = fruits.concat(vegetables);           // adding two arrays

console.log(allgroceries.slice(1, 4));                  // slicing array
console.log(allgroceries.reverse());                    // reversing array
console.log(allgroceries.sort())                        // sorting via first char of every element

let somenum = [12,123,12312,31,31,23,12,3,1];
console.log(somenum.sort(function(a, b) {return a-b})); // sorting number in asc
console.log(somenum.sort(function(a, b) {return b-a})); // sorting number in desc

let emptyarray = new Array();
for(let num = 0; num<=10; num++){
    emptyarray.push(num);
}
console.log(emptyarray);

// Objects
// Dictionaries in Python

let student = {
    first: 'ABC',
    second: 'DEF',
    age: 20,
    height: 165,
    info : function () {
        return this.first+ '\n' + this.second;
    }
};
console.log(student['first']);
console.log(student.second);

student.first  = 'XYZ';                  // changing value
student.age++;                           // incrimenting value
console.log(student.info());             // equivalent to self in python

// Conditionals, Control flows(If-Else)

// && AND
// || OR

//var age = prompt('What is your age?');
var age = 33;
if (age<18){
    console.log('You are underage');
}
else if( (age>=18) && (age<60)){
    console.log('Enjoy!!');
}
else{
    console.log('You are old');
}

// Switch Statement
// differentiate between weekday vs weekend
// day 0 --> Sunday --> Weenend
// day 6 --> Saturday --> Weenend
// day 1 --> Monday --> Weekday
// day 2 --> Tuesday --> Weekday
// day 3 --> Wednesday --> Weekday
// day 4 --> Thursday --> Weekday
// day 5 --> Friday --> Weenend

switch (6){
    case 0:
        text = 'Sunday Weekend';
        break;
    case 5:
        text = 'Friday Weekend';
        break;
    case 6:
        text = 'Saturday Weekend';
        break;
    default:
        text = 'WEEKDAY';
}

console.log(text);