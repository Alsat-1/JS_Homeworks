// 1
const counter = (function (num = 0) {
	return function (res) {
		return num += res;
	};
})();
console.log(counter(3)); // 3
console.log(counter(5));// 8
console.log(counter(228));// 236

// 2
const getUpdatedArr = (function () {
	let arr = [];
	return function (value) {
		if (!value) {
			arr = [];
		} else {
			arr.push(value);
		}
		return arr;
	}
})();
console.log(getUpdatedArr(3));
console.log(getUpdatedArr(5));
console.log(getUpdatedArr({ name: 'Vasya' }));
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));