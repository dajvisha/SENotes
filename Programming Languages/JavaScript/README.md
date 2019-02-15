# JavaScript

<img src="https://bit.ly/2ziR5mN" width="250"/>

**JavaScript** is a:
* **Weakly Typed Language** 
    * No explicit type assignment
    * Data types can be switched dynamically
* **Object-Oriented Language**
    * Data can be organized in logical objects
    * Primitive and reference types
* **Versatil Language**
    * Runs in browser & directly on a PC/Server
    * Can perform a broad variety of tasks 

### JavaScript History

* **1996**: LiveScript change to JavaScript.
* **1997**: ES1 (ECMAScript 1) became the first version of JavaScript.
	* ECMAScript: The language standard.
	* JavaScript: The language in practice.
* **2009**: ES5 (ECMAScript 5).
* **2015**: ES6/2015 (ECMAScript 2015) was released; the biggest update to the language.
* **2015**: Changed to an annual release cycle.
* **2016, 2017, 2018, 2019, ...**: Release of ES2016, ES2017, ES2018, ES2019, ...

**ES Version**:

* **ES5**:
	* Fully supported in all browsers. 
	* Ready to be used today.
* **ES6/ES2015, ES7/ES2016, ES8/ES2017**:
	* Well supported in all modern browsers.
	* No support in older browsers.
	* Can use most features in production with **transpiling** and **polyfilling** (converting to ES5). 
* **ES9/ES2018, ES10/ES2019**: 
	* Future versions, together called ESNext.
	* Some features supported in modern browsers. 
	* Can already use some features in production with **transpiling** and **polyfilling**.


### Data Types and Variables

JavaScript has **dynamic typing**, data types are automatically assigned to variables. JavaScript is case sensitive. JavaScript uses camelCase.

#### Data types

* **Number**: Floating point numbers, for decimals and integers
* **String**: Sequence of characters, used for text
* **Boolean**: Logical data type that can be only true or false
* **Undefined**: Data type of a variable that does not have a value yet
* **Null**: Also means 'non-existent'

### Var, Let and Const

Description here. 

### Difference between === and ==

Description here.
Type coercion 23 == '23' => true, 23 === '23' => false

### Truthy and Flasy Values 

* **Falsy values**: undefined, null, 0, '', NaN
* **Truthy values**: Not falsy values

### Objects

```js
// New Object Sintax
const person_a = new Object();
person_a.name = 'Max';
person_a['age'] = 29;
person_a.greet = function() {
	console.log('Hi! I am' + person_a.name);
}

// Object literal
const person_b = {
	name: 'Max',
	birthYear: 1995, 
	age: function() {
		this.age = 2019 - this.birthYear;
	}
	greet_a: function() {
		console.log('Hi! I am' + this.name);
	},
	greet_b() {
		console.log('Hi! I am' + this.name);
	},
	// This will return undefined, it refers to the global scope
	greet_c: () => {
		console.log('Hi! I am' + this.name);
	}
}

person_b.age();
person_b.greet_a();
```


```js
// ----------------------------------------
// Notes: JavaScript
// ----------------------------------------

// ----------------------------------------
// Section: Calling JS code
// ----------------------------------------

// <script src=" {fileDirection} "></script>
// <script> {codeBody} </script>

// ----------------------------------------
// Section: IO
// ----------------------------------------

// ***** Alert
alert( {message} );

// ***** Document write
document.write( {message} );

// ***** Console log
console.log( {message} );

// ***** Prompt
var {variableName} = prompt( {message} );

// ----------------------------------------
// Section: Variables
// ----------------------------------------

// ***** Variable declaration
var {variableName} = {value};

// ***** Constants declaration
const {constName} = {value};

// ***** Lets declaration
let {letName} = {value};

// Useful functions
typeof {variableName}

// ----------------------------------------
// Section: Strings
// ----------------------------------------

// ***** String literals
var {stringName} = '{string}';
var {stringName} = "{string}";

// ***** Template literals
var {templateLiteralName} = `{string}`;

// ***** Interpolation
var {stringName} = `${ {value} }`;

// ***** Properties
var {variableName} = {stringName}.length;

// ***** Methods
var {variableName} = {stringName}.toLowerCase();
var {variableName} = {stringName}.toUpperCase();

// ----------------------------------------
// Section: Numbers
// ----------------------------------------

// ***** Parsing
var {variableName} = parseInt( {stringName} );
var {variableName} = parseFloat( {stringName} );

// ***** Math object
var {variableName} = Math.round( {value} );
var {variableName} = Math.floor( {value} );
var {variableName} = Math.random();

// ----------------------------------------
// Section: Arrays
// ----------------------------------------

// Notes:
//	1.	Arrays can have different value types

// ***** Declaring an array
var {arrayName} = [ {arrayItem} ];
var {arrayName} = [ [{arrayItem}], [{arrayItem}] ];

// ***** Accesing items of an array
var {variableName} = {arrayName}[ {value} ];

// ***** Adding items of an array
{arrayName}.push( {value},{value} );
{arrayName}.unshift( {value},{value} );

// ***** Removing items of an array
var {variableName} = {arrayName}.pop();
var {variableName} = {arrayName}.unshift();

// ***** Properties
var {variableName} = {arrayName}.length;

// ***** Methods
var {variableName} = {arrayName}.map();
var {variableName} = {arrayName}.join( {value} );
var {variableName} = {arrayName}.concat( {arrayName} );
var {variableName} = {arrayName}.indexOf( {value} );

// ----------------------------------------
// Section: Objects
// ----------------------------------------

// ***** Creating an object
var {objectName} = {
	{key} : {value},
	{key} : {value}
};

// ***** Accesing values 
var {variableName} = {objectName}[ {key} ];
var {variableName} = {objectName}.{key};

// ***** Array of objects
var {arrayName} = [
	{ {key} : {value} },
	{ {key} : {value} }
];

// ***** FOR IN with objects
for( var {key} in {object} ) {
	{codeBody}
}

// ----------------------------------------
// Section: Functions
// ----------------------------------------

// ***** Function declaration
function {functionName}( {parameter} ) {
	{codeBody}
	return {value};
}

// ***** Function expression
var {functionName} = function ({parameter}) {
	{codeBody}
	return {value};
};

// ***** Arrow function expression
// Notes:
//	1.	Use the second structure with only one parameter y one line of code
const {functionName} = ({parameter}) => {
	{codeBody}
	return {value};
}

const {functionName} = {parameter} => {codeBody};

// ----------------------------------------
// Section: Conditional statements
// ----------------------------------------

// Notes:
//	1.	=== is Strict Equal to
//	2.	!== is Strict Not Equal to
//	3.	break is to crash a loop

// ***** TERNARY statement
var {varName} = {conditionalStatement} ? {true} : {false};

// ***** IF statement
if ( {conditionalStatement} ) {
	{codeBody}
} else if {
	{codeBody}
} else {
	{codeBody}
}

// ***** SWITCH statement
// You can use a boolean as value and conditionalStatements as caseValues
switch ( {value} ) {
    case {caseValue}:
        {codeBody}
        break;
    default:
        {codeBody}
}

// ***** WHILE statement
var counter = {value};
while ( {conditionalStatement} ) {
	{codeBody}
	counter += {value};
}

// ***** DO WHILE statement
do {
	{codeBody}
} while ( {conditionalStatement} )

// ***** FOR statement
for(var counter = {value}; {conditionalStatement}; counter += {value} ) {
	{codeBody}
}

// ----------------------------------------
// Section: DOM (Document Object Model)
// ----------------------------------------

// ***** Getting elements from the HTML file
var {elementName} = document.getElementById('{idElement}');
var {collectionName} = document.getElementsByTagName('{tagElement}');
var {collectionName} = document.getElementsByClassName('{classElement}');
var {collectionName} = document.querySelectorAll('{cssSelector}');
var {elementName} = document.querySelector('{cssSelector}');

// ***** Useful things
{htmlElement}.value;
{htmlElement}.textContent = "{value}";
{htmlElement}.innerHTML = "{value}";
{htmlElement}.{attributeName} = "{value}";

// ***** Event Listener
{htmlElement}.addEventListener('{eventName}', () => {
	{codeBody}
});

// ***** Modifying HTML elements
{htmlElement}.style.{attribute} = '{value}';
```
