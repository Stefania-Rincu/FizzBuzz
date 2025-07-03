// This is our main function
function fizzbuzz(): void {
    // Iterate through numbers in interval [1, 10]
    for (let i:number = 1; i <= 100; i++) {
        // Keeps a list of the words that need to be printed
        let printLog:string[] = [];
        // Keeps the actual output
        let toPrint:string = '';

        // If a number is multiple of 11, add 'Bong'
        // Beside 13 or 17, no other number influences the output
        if (i % 11 === 0) {
            printLog.push('Bong');

            // If a number is multiple of 13, add 'Feez' before 'Bong'
            if (i % 13 === 0)
                printLog.splice(0, 0, 'Feez');

            // If a number is multiple of 17, reverse the order of the output
            if (i % 17 === 0)
                toPrint = printLog.reverse().join('');
            else
                toPrint = printLog.join('');

            console.log(toPrint);
        }
        else {
            // If a number is multiple of 3, add 'Fizz'
            if (i % 3 === 0)
                printLog.push('Fizz');

            // If a number is multiple of 5, add 'Buzz'
            if (i % 5 === 0)
                printLog.push('Buzz');

            // If a number is multiple of 7, add 'Bang'
            if (i % 7 === 0)
                printLog.push('Bang');

            // If a number is multiple of 13, add 'Feez' in from of the first word that starts with 'B' or at the end if no match
            if (i % 13 === 0) {
                let index:number = printLog.findIndex((word) => word.startsWith('B'));
                if (index === -1)
                    printLog.push('Feez');
                else
                    printLog.splice(index, 0, 'Feez');
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
}

// Now, we run the main function:
fizzbuzz();