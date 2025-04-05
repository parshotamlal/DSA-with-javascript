//// for loop 

// SUM OF n NATURAL NUMBER
// SUM OF n NATURAL NUMBER
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
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        console.log(`Sum of first ${n} natural numbers is: ${sum}`);
    }
}
