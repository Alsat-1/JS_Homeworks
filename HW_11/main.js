// 1

// 1.1
// let arr = ['Привет, ', 'мир', '!'];
// let result = '';
// for (let i = 0; i < arr.length; i++) {
// 	result += arr[i];
// }
// console.log(result);

// 1.2
// let arr = ['Привет, ', 'мир', '!'];
// let res = arr.join('');
// console.log(res);

// 2

// 2.1
// let language = 'ru';
// if (language === 'ru') {
// 	var langArr = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
// } if (language === 'en') {
// 	langArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// }
// console.log(langArr);

// 2.2
// let language = 'en';
// switch (language) {
// 	case 'ru':
// 		var arr = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
// 		break;
// 	case 'en':
// 		arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// 		break;
// }
// console.log(arr);

// 2.3
// let language = 'ru';
// const arr = {
// 	'ru': ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'],
// 	'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
// };
// console.log(arr[language]);

// 2.4
// let language = 'ru';
// const arr = [
// 	['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'],
// 	['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
// ];
// console.log(arr[1]);

// 3 
// 3.1 Первый вариант
// const floors = prompt('Сколько этажей в доме?', ''),
// 	entrance = prompt('Сколько подъездов?', ''),
// 	apartmentCount = prompt('Какое кол-во квартир на лестничной площадке?', ''),
// 	apartmentNumber = prompt('Введите номер квартиры', '');

// let entranceNumber = Math.ceil(apartmentNumber / (floors * apartmentCount));

// if ((floors > 1 && floors < 25) && (entrance > 1 && entrance < 10) && (apartmentCount > 1 && apartmentCount < 20)) {
// 	if (apartmentNumber < floors * entrance * apartmentCount && !isNaN(apartmentNumber || floors || entrance || apartmentCount) &&
// 		(apartmentNumber || floors || entrance || apartmentCount !== null) && (apartmentNumber || floors || entrance || apartmentCount !== '')) {
// 		alert(`Ваша квартира находится в ${entranceNumber} подъезде`);
// 	}
// 	else {
// 		alert('error');
// 	}
// } else {
// 	alert('Err');
// }

// 3.2 Второе решение, про которое вы говорили сегодня на уроке, чтобы при каждом вводе что-то выдавало пользователю, если он ошибся
// let floors = prompt('Сколько этажей в доме?', '')
// if ((floors < 1 || floors > 25) || isNaN(floors) || (floors == null) || (floors == '')) {
// 	alert('Количество этажей должно быть от 1 до 25')
// } else {
// 	let entrance = prompt('Сколько подъездов?', '')
// 	if ((entrance < 1 || entrance > 10) || isNaN(entrance) || (entrance == null) || (entrance == '')) {
// 		alert('Количество подъездов должно быть от 1 до 10')
// 	} else {
// 		let apartmentCount = prompt('Какое кол-во квартир на лестничной площадке?', '')
// 		if ((apartmentCount < 1 || apartmentCount > 20) || isNaN(apartmentCount) || (apartmentCount == null) || (apartmentCount == '')) {
// 			alert('Количество квартир на лестничной площадке должно быть от 1 до 20')
// 		} else {
// 			let apartmentNumber = prompt('Введите номер квартиры', '');
// 			if ((apartmentNumber > floors * entrance * apartmentCount) || isNaN(apartmentNumber) || (apartmentNumber == null) || (apartmentNumber == '')) {
// 				alert('Такой квартиры в данном доме не существует')
// 			} else {
// 				let entranceNumber = Math.ceil(apartmentNumber / (floors * apartmentCount));
// 				alert(`Ваша квартира находится в ${entranceNumber} подъезде`);
// 			}
// 		}
// 	}
// }
