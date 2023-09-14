let counter = document.getElementById("counter");
let counter2 = document.getElementById("counter2");
let counter3 = document.getElementById("counter3");
let counter4 = document.getElementById("counter4");


var number = 0;

setInterval(function() {
    number++;
    if (number >= 984) {
    return true
  }
  document.getElementById("counter").innerHTML = number;
}, 0.05);

