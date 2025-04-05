let random = (Math.random()*100 +1);
let guess = -1;
while(guess !== random || guess < 1 || guess>100 ) {
    guess = Number(prompt("Enter a Number Beteen 1 to 100"));
    console.log("try between 1 to 100");
    continue
}
if (guess<random) {
    console.log("guess is low Try again!!!");
    
} else if (guess>random) {
    console.log("guess is high Try again...");
    
}else if(guess === null) {
    console.log("cancelled");
}
 else {
    console.log("congratulation you guessed it Right");
    
}