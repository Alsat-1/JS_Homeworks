// Function padStart
function padStart(str, number, filter) {
	if (typeof str !== 'string') {
		return Error('padStart is not a function');
	}

	let filterOrEmptyString = filter || ' ';
	for (; filterOrEmptyString.length < number; filterOrEmptyString += filterOrEmptyString) { }
	const result = filterOrEmptyString += str;
	return result.slice(-number);
}

// Вызов ф-ции с 1м параметром
console.log(padStart('Javascript', 15));
// Вызов ф-ции с 2мя параметрами
console.log(padStart('Hello', 11, 'abc'));


// Function toPrecision
function toPrecision(number, digits) {
	if (typeof number !== 'number' || digits <= 0) {
		return Error('toPrecision is not a function');
	}

	const newNumber = number.toString();

	if (!digits) {
		return newNumber;
	} else {
		for (let i = 0; i < newNumber.length; i++) {
			if (newNumber[i] === '.') {
				return newNumber.slice(0, digits + 1);
			}
		}
	}
}

console.log(toPrecision(5.123456, 3));
console.log(toPrecision(10.3221, 5));