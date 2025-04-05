
    var pr = prompt("Enter a number");

    if (pr === null) {
        document.write("Cancelled");
    } else {
        var n = Number(pr);
        if (isNaN(n)) {
            document.write("Invalid input");
        } else {
            if (n > 0) {
                var sum = 0;
                var original = n;

                while (n > 0) {
                    var rem = n % 10;
                    var fact = 1;

                    for (var i = 1; i <= rem; i++) {
                        fact *= i;
                    }

                    sum += fact;
                    n = Math.floor(n / 10);
                }

                document.write("Sum of factorials of digits of " + original + " is: " + sum);
            } else {
                document.write("Enter a positive number");
            }
        }
    }
