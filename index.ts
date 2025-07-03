//import prompt from "./user-prompt"
import {createInterface} from "readline";

// Function that constructs the output based on a list of messages and a boolean flag
function constructOutput(messages: string[], revert: boolean): string {
    return revert ? messages.reverse().join('') : messages.join('');
}

// Function that constructs the list of messages and returns the actual output
function messageToPrint(num: number, rulesToUse: number[]): string {
    // Keeps the list of messages
    const messageList: string[] = [];
    // Flag used to know if the output needs to be reversed
    const revert: boolean = (17 in rulesToUse && num % 17 === 0);

    // If a number is a multiple of 11, then just 13 or 11 influences the output
    if (11 in rulesToUse && num % 11 === 0) {
        messageList.push('Bong');

        // If a number is multiple of 11 and 13, add 'Feez' before 'Bong'
        if (13 in rulesToUse && num % 13 === 0)
            messageList.splice(0, 0, 'Feez');

        // Call the function that constructs the output
        return constructOutput(messageList, revert);
    }

    // If a number is multiple of 3, add 'Fizz'
    if (3 in rulesToUse && num % 3 === 0)
        messageList.push('Fizz');

    // If a number is multiple of 13, add 'Feez'
    if (13 in rulesToUse && num % 13 === 0)
        messageList.push('Feez');

    // If a number is multiple of 5, add 'Buzz'
    if (5 in rulesToUse && num % 5 === 0)
        messageList.push('Buzz');

    // If a number is multiple of 7, add 'Bang'
    if (7 in rulesToUse && num % 7 === 0)
        messageList.push('Bang');

    if (messageList.length === 0)
        return num.toString();

    return constructOutput(messageList, revert);
}

// This is our main function
function fizzbuzz(maxValue: number, rulesToUse: number[]): void {
    // Iterate through numbers in interval [1, maxValue]
    for (let i:number = 1; i <= maxValue; i++) {
        const output: string = messageToPrint(i, rulesToUse);
        console.log(output);
    }
}

// let maxNumber = await prompt("Enter number: ");
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter maximum number: ",
    (answer: string) => {
    try {
        const maxNumber = parseInt(answer, 10);
        rl.question("Introduce rules to be used using space between each number (options: 3 5 7 11 13 17): ", (rules: string) => {
            const rulesList: number[] = rules.split(' ').map(rule => parseInt(rule, 10));
            fizzbuzz(maxNumber, rulesList);
            rl.close()});
    } catch (e) {
        console.error("Introduce a number!");
        rl.close();
    }
});
