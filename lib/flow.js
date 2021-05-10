const age = 111;

if (age >= 100) {
  console.log('Nice try, back of the queue!');
}
else if (age >= 18) {
  console.log("Yay, you can go out and drink!");
}
else {
  console.log("Too bad, you can go back home now...");
}


let digit = "0";

// === STRICT COMPARISON
if (digit === 0) {
  console.log("This was evaluated to true");
}
else {
  console.log("This was evaluated to false");
}

// == LOOSE COMPARISON
if (digit == 0) {
  console.log("This was evaluated to true");
}
else {
  console.log("This was evaluated to false");
}
