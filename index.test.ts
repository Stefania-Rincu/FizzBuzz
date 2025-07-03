import {messageToPrint} from './index'

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(messageToPrint(3, [3, 5, 7, 11, 13, 17])).toBe('Fizz');
});

test('fizzbuzz returns "Buzz" for 5', () => {
    expect(messageToPrint(5, [3, 5, 7, 11, 13, 17])).toBe('Buzz');
});

test('fizzbuzz returns "Bang" for 7', () => {
    expect(messageToPrint(7, [3, 5, 7, 11, 13, 17])).toBe('Bang');
});

test('fizzbuzz returns 7 for 7', () => {
    expect(messageToPrint(7, [3, 5, 11, 13, 17])).toBe('7');
});

test('fizzbuzz returns "Bong" for 11', () => {
    expect(messageToPrint(11, [3, 5, 7, 11, 13, 17])).toBe('Bong');
});

test('fizzbuzz returns "FizzBuzz" for 15', () => {
    expect(messageToPrint(15, [3, 5, 7, 11, 13, 17])).toBe('FizzBuzz');
});

test('fizzbuzz returns "FizzBang" for 21', () => {
    expect(messageToPrint(21, [3, 5, 7, 11, 13, 17])).toBe('FizzBang');
});

test('fizzbuzz returns "Bong" for 33', () => {
    expect(messageToPrint(33, [3, 5, 7, 11, 13, 17])).toBe('Bong');
});

test('fizzbuzz returns "FezzBuzz" for 65', () => {
    expect(messageToPrint(65, [3, 5, 7, 11, 13, 17])).toBe('FezzBuzz');
});

test('fizzbuzz returns "FizzFezzBuzz" for 195', () => {
    expect(messageToPrint(195, [3, 5, 7, 11, 13, 17])).toBe('FizzFezzBuzz');
});

test('fizzbuzz returns "FezzBong" for 143', () => {
    expect(messageToPrint(143, [3, 5, 7, 11, 13, 17])).toBe('FezzBong');
});

test('fizzbuzz returns "BuzzFizz" for 255', () => {
    expect(messageToPrint(255, [3, 5, 7, 11, 13, 17])).toBe('BuzzFizz');
});