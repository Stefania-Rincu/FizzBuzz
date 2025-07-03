// This is our main function
function fizzbuzz(): void {
    // Iterate through numbers in interval [1, 10]
    for (let i:number = 1; i <= 143; i++) {
        // Keeps a list of the words that need to be printed
        let printLog:string[] = [];
        // Keeps the actual output
        let toPrint:string = '';

        // If a number is multiple of 3, add 'Fizz'
        if (i % 3 === 0)
            printLog.push('Fizz');

        // If a number is multiple of 13, add 'Feez'
        if (i % 13 === 0)
            printLog.push('Feez');

        // If a number is multiple of 5, add 'Buzz'
        if (i % 5 === 0)
            printLog.push('Buzz');

        // If a number is multiple of 7, add 'Bang'
        if (i % 7 === 0)
            printLog.push('Bang');

        // If a number is multiple of 11, add 'Bong'
        if (i % 11 === 0) {
            // If just 'Feez' or nothing was added, add 'Bong'
            if (printLog.length === 0 || (printLog.length === 1 && printLog[0] === 'Feez'))
                printLog.push('Bong');
            // Else remove everything and add 'Bong' and 'Feez' if needed
            else {
                printLog = ['Bong'];
                if (i % 13 === 0)
                    printLog.splice(0, 1, 'Feez');
            }
        }

        // Check if nothing was added to the printLog list (not a multiple of any "special" number)
        if (printLog.length === 0)
            toPrint = i.toString();
        else {
            // If a number is multiple of 17, reverse the order of the output
            if (i % 17 === 0)
                toPrint = printLog.reverse().join('');
            else
                toPrint = printLog.join('');
        }
        console.log(toPrint);
    }
}

// Now, we run the main function:
fizzbuzz();