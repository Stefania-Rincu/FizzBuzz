// This is our main function
function fizzbuzz(): void {
    // Iterate through numbers in interval [1, 10]
    for (let i:number = 1; i <= 100; i++) {
        // If a number is multiple of both 3 and 5, print 'FizzBuzz'
        if (i % 15 === 0)
            console.log("FizzBuzz");
        // If a number is multiple of 3, print 'Fizz'
        else if (i % 3 === 0)
            console.log("Fizz");
        // If a number is multiple of 5, print 'Buzz'
        else if (i % 5 === 0)
            console.log("Buzz");
        // Else, print the number
        else
            console.log(i);
    }
}

// Now, we run the main function:
fizzbuzz();