// Function that constructs the output based on a list of messages and a boolean flag
function constructOutput(messages: string[], revert: boolean): string {
    return revert ? messages.reverse().join('') : messages.join('');
}

// Function that constructs the list of messages and returns the actual output
function messageToPrint(num: number): string {
    // Keeps the list of messages
    const messageList: string[] = [];
    // Flag used to know if the output needs to be reversed
    const revert: boolean = (num % 17 === 0);

    // If a number is a multiple of 11, then just 13 or 11 influences the output
    if (num % 11 === 0) {
        messageList.push('Bong');

        // If a number is multiple of 11 and 13, add 'Feez' before 'Bong'
        if (num % 13 === 0)
            messageList.splice(0, 0, 'Feez');

        // Call the function that constructs the output
        return constructOutput(messageList, revert);
    }

    // If a number is multiple of 3, add 'Fizz'
    if (num % 3 === 0)
        messageList.push('Fizz');

    // If a number is multiple of 13, add 'Feez'
    if (num % 13 === 0)
        messageList.push('Feez');

    // If a number is multiple of 5, add 'Buzz'
    if (num % 5 === 0)
        messageList.push('Buzz');

    // If a number is multiple of 7, add 'Bang'
    if (num % 7 === 0)
        messageList.push('Bang');

    if (messageList.length === 0)
        return num.toString();

    return constructOutput(messageList, revert);
}

// This is our main function
function fizzbuzz(): void {
    // Iterate through numbers in interval [1, 255]
    for (let i:number = 1; i <= 255; i++) {
        const output: string = messageToPrint(i);
        console.log(output);
    }
}

// Now, we run the main function:
fizzbuzz();