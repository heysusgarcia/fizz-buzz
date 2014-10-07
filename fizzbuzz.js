//fizz for numbers divisble by 3
//buzz for numbers divisible by 5
//fizz buzz for numbers divisible by both (15)

var fizzBuzz = function() {
  for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("fizz buzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz();
