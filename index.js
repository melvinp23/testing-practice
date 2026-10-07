export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

function capitalize(val) {
	return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function reverseString(val) {
	return val.split('').reverse().join('');
}

const calculator = {
	add: (a, b) => a + b,
	subtract: (a, b) => a - b,
	multiply: (a, b) => a * b,
	divide: (a, b) => {
		if (b === 0) {
			return 'Error: Division by zero is invalid';
		} else {
			return a / b;
		}
	},
};

function caesarCipher(str, shift) {
	const normalizedShift = ((shift % 26) + 26) % 26;

	return str
		.split('')
		.map(char => {
			const code = char.charCodeAt(0);

			// Handles Uppercase letters (A-Z: 65-90)
			if (code >= 65 && code <= 90) {
				return String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
			}

			// Handles Lowercase letters (a-z: 97-122)
			if (code >= 97 && code <= 122) {
				return String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
			}

			// Return Punctuation, spaces, and numbers unmodified
			return char;
		})
		.join('');
}

const cipher = caesarCipher('Hello World', 3);
console.log(cipher);

function analyzeArray(arr) {
	// Handle empty array safely to prevent returning NaN or errors
	if (!arr || arr.length === 0) return null;

	const length = arr.length;

	// Calculate sum, min, and man in a single loop traversal
	const [sum, min, max] = arr.reduce(
		([accSum, accMin, accMax], curr) => [
			accSum + curr,
			curr < accMin ? curr : accMin,
			curr > accMax ? curr : accMax,
		],
		// Initial values: [initialSum, initialMin, initialMax]
		[0, arr[0], arr[0]],
	);

	const average = sum / length;

	return { average, min, max, length };
}

const object = analyzeArray([1, 8, 3, 4, 2, 6]);
console.log(object);
