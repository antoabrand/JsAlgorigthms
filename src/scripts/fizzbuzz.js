function fizzBuzz(num) {
  for (var i = 1; i < num + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz: " + i +" " + " is - divisible by 3 and 5");
    } else if (i % 3 === 0) {
      console.log("Fizz: " + i +" " + " is - divisible by 3");
    } else if (i % 5 === 0) {
      console.log("Buzz: " + i +" " + " is - divisible by 5");
    } else {
      console.log(i);
    }
  }
}


