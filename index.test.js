import {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
} from './index.js';

test('Capitalize string', () => {
	expect(capitalize('melvin')).toBe('Melvin');
});

test('Reverse string', () => {
	expect(reverseString('jobel')).toBe('leboj');
});

describe('Calculator Object Tests', () => {
	describe('addition', () => {
		test('Add two numbers', () => {
			expect(calculator.add(5, 5)).toBe(10);
		});
	});

	describe('subtraction', () => {
		test('Subtract two numbers', () => {
			expect(calculator.subtract(7, 5)).toBe(2);
		});
	});

	describe('multiplication', () => {
		test('Multiply two numbers', () => {
			expect(calculator.multiply(2, 8)).toBe(16);
		});
	});

	describe('division', () => {
		test('Divide two numbers', () => {
			expect(calculator.divide(18, 2)).toBe(9);
		});
	});
});

describe('Caesar Cipher Test', () => {
	test(`Cipher "Hello World" and shift it by 3`, () => {
		expect(caesarCipher('Hello World', 3)).toBe('Khoor Zruog');
	});
});

test('Analyze Array [1, 8, 3, 4, 2, 6]', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
