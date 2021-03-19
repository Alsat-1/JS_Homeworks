// 1 Function trim
function trim(str) {
	if (typeof str !== 'string') {
		return Error('trim is not a function');
	}

	if (str.startsWith(' ') || str.endsWith(' ')) {
		return str.replaceAll(/^\s+|\s+$/g, '');
	}
	return str;
}

console.log(trim('   I am a developer   '));

// 2 Function parseInt
function parseInt1(str, radix = 10) {
	if (typeof str !== 'string' || !str) {
		return Error('parseInt is not a function');
	}

	if (str.startsWith(' ') || str.endsWith(' ')) {
		return Number(str);
	}

	if (str.includes('.')) {
		return Number(str.slice(0, str.indexOf('.')))
	}

	const final = str.split('').map(el => Number(el)).join('');
	if (final.startsWith(NaN)) {
		return NaN;
	} if (final.endsWith(NaN)) {
		return +str.slice(0, final.indexOf(NaN));
	} return +final;
}

console.log(parseInt1('431')); // 431
console.log(parseInt1('56.78')); // 56
console.log(parseInt1('abc3222')); // NaN
console.log(parseInt1('272abc')); // 272


// 3 Function toLowerCase
function toLowerCase(str) {
	if (typeof str !== 'string') {
		return Error('toLowerCase is not a function');
	}

	let result = '';

	for (let i = 0; i < str.length; i++) {
		const codeElement = str.charCodeAt(i);
		if (codeElement > 64 && codeElement < 91) {
			result += String.fromCharCode(codeElement + 32);
		} else {
			result += str[i];
		}
	}
	return result;
}

console.log(toLowerCase('HeLlO WorlD'));

// 4-5 Function-constructor

function Emploee(id, name, surname, salary, workExperience, isPrivileges, gender) {
	this.id = id;
	this.name = name;
	this.surname = surname;
	this.salary = salary;
	this.workExperience = workExperience;
	this.isPrivileges = isPrivileges;
	this.gender = gender;
}

Emploee.prototype.getFullName = function () {
	return `${this.surname} ${this.name}`;
}

Emploee.prototype.getSalaryRate = function () {
	if (this.workExperience < 3 && this.salary <= 200) {
		return 'low';
	} else if (this.workExperience >= 3 && this.workExperience < 7 && this.salary > 4000) {
		return 'moderate';
	} else if (this.isPrivileges == true && this.workExperience >= 7 && this.salary > 7000) {
		return 'high';
	} else {
		return 'something else';
	}
}

const employeeObj = new Emploee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');
console.log(employeeObj);
console.log(employeeObj.getFullName())
console.log(employeeObj.getSalaryRate())

// 6 Function Calculate
function calculate(p, y) {
	const exponential = Math.E;
	const k = Math.log(p ** 2 + y ** 3) + Math.pow(exponential, p);
	return k;
}

console.log(calculate(2, 3));

// Classwork

// 1
function smile(str, amount) {
	return str.repeat(amount);
}
console.log(smile('laugh', 2));

const smile2 = function (str, amount) {
	return str.repeat(amount);
}
console.log(smile2('laugh', 3));

const smile3 = (str, amount) => str.repeat(amount);
console.log(smile3('laugh', 4));

const smile4 = new Function('str', 'amount', 'return str.repeat(amount)');
console.log(smile4('laugh', 5));

// 2
function getMin(...nums) {
	return Math.min(...nums);
}
console.log(getMin(2, 3, 4, 5, 6, 7, 8, 9));

const getMin2 = function (...nums) {
	return Math.min(...nums);
}
console.log(getMin2(3, 4, 5, 6, 7, 8, 9));


const getMin3 = (...nums) => Math.min(...nums);
console.log(getMin3(4, 5, 6, 7, 8, 9));

const getMin4 = new Function('...nums', 'return Math.min(...nums)');
console.log(getMin4(5, 6, 7, 8, 9));

// 3
function buildPyramid(n) {
	for (let i = 1; i <= n; i++) {
		let newPyramid = "";
		for (let j = 1; j <= (2 * n - 1); j++) {
			(j >= n + 1 - i && j <= n - 1 + i) ? newPyramid += '#' : newPyramid += '-';
		}
		console.log(newPyramid);
	}
}
buildPyramid(3);

const buildPyramid2 = function (n) {
	for (let i = 1; i <= n; i++) {
		let newPyramid = "";
		for (let j = 1; j <= (2 * n - 1); j++) {
			(j >= n + 1 - i && j <= n - 1 + i) ? newPyramid += '#' : newPyramid += '-';
		}
		console.log(newPyramid);
	}
}
buildPyramid2(4);

const buildPyramid3 = n => {
	for (let i = 1; i <= n; i++) {
		let newPyramid = "";
		for (let j = 1; j <= (2 * n - 1); j++) {
			(j >= n + 1 - i && j <= n - 1 + i) ? newPyramid += '#' : newPyramid += '-';
		}
		console.log(newPyramid);
	}
}

buildPyramid3(5);

const buildPyramid4 = new Function('n', `for (let i = 1; i <= n; i++) {
	let newPyramid = "";
	for (let j = 1; j <= (2 * n - 1); j++) {
		(j >= n + 1 - i && j <= n - 1 + i) ? newPyramid += '#' : newPyramid += '-';
	}
	console.log(newPyramid);
}`);

buildPyramid4(6);

// 4
function unsplit(arr) {
	let newArr = arr.reduce((acc, el) => {
		acc.push(...el);
		return acc;
	}, [])
	return newArr;
}
console.log(unsplit([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));

const unsplit2 = function (arr) {
	let newArr = arr.reduce((acc, el) => {
		acc.push(...el);
		return acc;
	}, [])
	return newArr;
}
console.log(unsplit2([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14]]));

const unsplit3 = arr => {
	let newArr = arr.reduce((acc, el) => {
		acc.push(...el);
		return acc;
	}, [])
	return newArr;
}
console.log(unsplit3([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14], [15, 16, 17]]));

const unsplit4 = new Function('arr', `let newArr = arr.reduce((acc, el) => {
	acc.push(...el);
	return acc;
}, [])
return newArr;`);
console.log(unsplit4([[1, 2, 3, 4], [5, 6, 7, 8]]));
