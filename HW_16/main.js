const studentArr = [{
	name: 'Сергей',
	surname: 'Войлов',
	ratingPoint: 1000,
	schoolPoint: 1000,
	course: 2,
},
{
	name: 'Татьяна',
	surname: 'Коваленко',
	ratingPoint: 880,
	schoolPoint: 700,
	course: 1,
},
{
	name: 'Анна',
	surname: 'Кугир',
	ratingPoint: 1430,
	schoolPoint: 1200,
	course: 3,
},
{
	name: 'Станислав',
	surname: 'Щелоков',
	ratingPoint: 1130,
	schoolPoint: 1060,
	course: 2,
},
{
	name: 'Денис',
	surname: 'Хрущ',
	ratingPoint: 1000,
	schoolPoint: 990,
	course: 4,
},
{
	name: 'Татьяна',
	surname: 'Капустник',
	ratingPoint: 650,
	schoolPoint: 500,
	course: 3,
},
{
	name: 'Максим',
	surname: 'Меженский',
	ratingPoint: 990,
	schoolPoint: 1100,
	course: 1,
},
{
	name: 'Денис',
	surname: 'Марченко',
	ratingPoint: 570,
	schoolPoint: 1300,
	course: 4,
},
{
	name: 'Антон',
	surname: 'Завадский',
	ratingPoint: 1090,
	schoolPoint: 1010,
	course: 3
},
{
	name: 'Игорь',
	surname: 'Куштым',
	ratingPoint: 870,
	schoolPoint: 790,
	course: 1,
},
{
	name: 'Инна',
	surname: 'Скакунова',
	ratingPoint: 1560,
	schoolPoint: 200,
	course: 2,
},
];

class Student {
	static listOfStudents = [];
	constructor(enrollee) {
		Student.listOfStudents.push(enrollee);
		Student.listOfStudents = Student.listOfStudents.sort((a, b) => b.ratingPoint - a.ratingPoint || b.schoolPoint - a.schoolPoint);

		this.name = enrollee.name;
		this.surname = enrollee.surname;
		this.ratingPoint = enrollee.ratingPoint;
		this.schoolPoint = enrollee.schoolPoint;
		this.setIdAndSelfPayment();
	}

	setIdAndSelfPayment() {
		for (let studentIndex in Student.listOfStudents) {
			if (studentIndex > 4) {
				Student.listOfStudents[studentIndex].isSelfPayment = true;
			} else {
				Student.listOfStudents[studentIndex].isSelfPayment = false;
			}
			Student.listOfStudents[studentIndex].id = +studentIndex + 1;
		}
	}
}

for (let student of studentArr) {
	new Student(student);
}

console.log(Student.listOfStudents);


// 2
class CustomString {
	reverse(str) {
		let newStr = str.split('');
		let arr = [];
		for (let item of newStr) {
			arr.unshift(item);
		}
		return arr.join('');
	};

	ucFirst(str) {
		return str[0].toUpperCase() + str.slice(1);
	};


	ucWords(str) {
		let newStr = '';
		for (let i = 0; i < str.length; i++) {
			if (str[i - 1] === ' ' || i === 0) {
				newStr += str[i].toUpperCase();
			}
			else {
				newStr += str[i];
			}
		}
		return newStr;
	};
}

const myString = new CustomString();
console.log(myString.reverse('qwerty')); //выведет 'ytrewq'
console.log(myString.ucFirst('qwerty')); //выведет 'Qwerty'
console.log(myString.ucWords('qwerty qwerty qwerty')); //выведет 'Qwerty Qwerty Qwerty