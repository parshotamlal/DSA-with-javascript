// Factorial

let pr = prompt("Enter the number :");

if (pr === null) {
    console.log("Cancelled");
} else {
    let n = Number(pr);

    if (isNaN(n)) {
        console.log("Entered an invalid number");
    } else if (n <= 0) {
        console.log("Number should be more than zero");
    } else {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact = fact * i;
        }
        console.log(`Fact of first ${n} natural numbers is: ${fact}`);
    }
}
