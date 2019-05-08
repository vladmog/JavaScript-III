/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
    "this" refers to window/console object. Cn be negated with 'use strict';

* 2. Implicit Binding
    "this" refers to object before the dot in the expression its called in
* 3. New Binding
    "this" refers to the object that's being created in the interance of a constructor function
* 4. Explicit Binding
    .call and .apply define "this"
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
let me = {
    name: "Vlad",
    greeting: function(){
      console.log(`hi I'm ${this.name}`)
    }
}
me.greeting();

// Principle 3
// code example for New Binding
let Me = function(name, age){
    this.name = name;
    this.age = age;
  }
  
  let vlad = new Me ("Vlad", 24);
  console.log(vlad)

// Principle 4
// code example for Explicit Binding
function greeting (){
    console.log(`hi I'm ${this.name}`)
  }

let me = {
  name: "Vlad",
  
}
greeting.call(me);