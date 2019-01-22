//objs
var person = {
  firstName: 'Tony',
  lastName: 'Andrade',
  getName: function (fName, lName) {
    console.log('Num of args: ' + arguments.length);
    if (arguments.length === 0) {
      var fullName = this.firstName + ' ' + this.lastName;
      return fullName;
    } else {
      var fullName = fName + ' ' + lName;
      return fullName;
    }
  }
}
//for demoing function borrowing
var person2 = {
  firstName: 'Tanya',
  lastName: 'Doe'
}

//accordingn to arguments passed or not - "func overloading" :)
function logName(fName, lName) {
  if (arguments[0] === undefined) {
    console.log('Logged :' + this.getName());
  } else {
    console.log('Logged :' + this.getName(fName, lName));
  }
}

//use bind() - creates new obj and assigns to var loggedName
var loggedName = logName.bind(person);
loggedName();
loggedName('Martin', 'Lawrence'); //pass arguments

//use call(<newThis>, args : any) 
logName.call(person, 'John', 'Meyer');

//use apply with iffe
(function (fName, lName) {
  if (arguments[0] === undefined) {
    console.log('Logged :' + this.getName());
  } else {
    console.log('Logged :' + this.getName(fName, lName));
  }
}).apply(person, ['Tommy', 'Lee']);

//function borrowing
console.log(person.getName.apply(person2));

