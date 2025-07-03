//import prompt from "./user-prompt"
import {createInterface} from "readline";

// Function that constructs the output based on a list of messages and a boolean flag
function constructOutput(messages: string[], revert: boolean): string {
    return revert ? messages.reverse().join('') : messages.join('');
}

// Function that constructs the list of messages and returns the actual output
export function messageToPrint(num: number, rulesToUse: number[]): string {
    // Keeps the list of messages
    const messageList: string[] = [];
    // Flag used to know if the output needs to be reversed
    const revert: boolean = (rulesToUse.includes(17) && num % 17 === 0);

    // If a number is a multiple of 11, then just 13 or 11 influences the output
    if (rulesToUse.includes(11) && num % 11 === 0) {
        messageList.push('Bong');

        // If a number is multiple of 11 and 13, add 'Fezz' before 'Bong'
        if (rulesToUse.includes(13) && num % 13 === 0)
            messageList.splice(0, 0, 'Fezz');

        // Call the function that constructs the output
        return constructOutput(messageList, revert);
    }

    // If a number is multiple of 3, add 'Fizz'
    if (rulesToUse.includes(3) && num % 3 === 0)
        messageList.push('Fizz');

    // If a number is multiple of 13, add 'Fezz'
    if (rulesToUse.includes(13) && num % 13 === 0)
        messageList.push('Fezz');

    // If a number is multiple of 5, add 'Buzz'
    if (rulesToUse.includes(5) && num % 5 === 0)
        messageList.push('Buzz');

    // If a number is multiple of 7, add 'Bang'
    if (rulesToUse.includes(7) && num % 7 === 0)
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
            const rulesList: number[] = rules.split(' ').map(rule => parseInt(rule.trim(), 10));
            console.log(rulesList);
            console.log(rulesList.includes(11));
            fizzbuzz(maxNumber, rulesList);
            rl.close()});
    } catch (e) {
        console.error("Introduce a number!");
        rl.close();
    }
});