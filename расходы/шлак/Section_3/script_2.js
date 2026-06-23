function getResponse() {
	var rightRes = 0
	var resultInPercents = 0

	var input1_1 = document.getElementById('input1_1') //1
	var input1_2 = document.getElementById('input1_2') //1
	var input1_3 = document.getElementById('input1_3') //1
	var input1_4 = document.getElementById('input1_4') //1

	var input2 = document.getElementById('input2') //2

	var select1_1 = document.getElementById('select1_1') //3
	var select1_2 = document.getElementById('select1_2') //3
	var select1_3 = document.getElementById('select1_3') //3
	var select1_4 = document.getElementById('select1_4') //3

	var input3_1 = document.getElementById('input3_1') //4
	var input3_2 = document.getElementById('input3_2') //4

	var input5_1 = document.getElementById('input5_1') //6
	var input5_2 = document.getElementById('input5_2') //6
	var input5_3 = document.getElementById('input5_3') //6
	var input5_4 = document.getElementById('input5_4')

	var input6_1 = document.getElementById('input6_1') //7
	var input6_2 = document.getElementById('input6_2') //7
	var input6_3 = document.getElementById('input6_3') //7
	var input6_4 = document.getElementById('input6_4') //7

	var input7_1 = document.getElementById('input7_1') //9
	var input7_2 = document.getElementById('input7_2') //9
	var input7_3 = document.getElementById('input7_3') //9
	var input7_4 = document.getElementById('input7_4') //9

	var select8_1 = document.getElementById('select8_1') //3
	var select8_2 = document.getElementById('select8_2') //3

	var res1 = '1 - Неверно'
	var res2 = '2 - Неверно'
	var res3 = '3 - Неверно'
	var res4 = '4 - Неверно'
	var res5 = '5 - Неверно'
	var res6 = '6 - Неверно'
	var res7 = '7 - Неверно'
	var res8 = '8 - Неверно'

	if (
		!input1_1.checked &
		input1_2.checked &
		!input1_3.checked &
		!input1_4.checked
	) {
		//1
		rightRes++
		res1 = ' 1 - Верно'
	}
	if (input2.value == 'носитель информации') {
		//2
		rightRes++
		res2 = ' 2 - Верно'
	}

	if (
		(select1_1.value == '1') &
		(select1_2.value == '3') &
		(select1_3.value == '4') &
		(select1_4.value == '2')
	) {
		//3
		rightRes++
		res3 = ' 3 - Верно'
	}
	if (
		(input3_1.value == 'Объем памяти') &
		(input3_2.value == 'скорость передачи данных')
	) {
		//4
		rightRes++
		res4 = ' 4 - Верно'
	}
	if (
		input5_1.checked &
		!input5_2.checked &
		!input5_3.checked &
		!input5_4.checked
	) {
		//1
		rightRes++
		res5 = ' 5 - Верно'
	}
	if (
		!input6_1.checked &
		input6_2.checked &
		!input6_3.checked &
		!input6_4.checked
	) {
		//1
		rightRes++
		res6 = ' 6 - Верно'
	}
	if (
		!input7_1.checked &
		!input7_2.checked &
		input7_3.checked &
		input7_4.checked
	) {
		//1
		rightRes++
		res7 = ' 7 - Верно'
	}

	if (select2.value == '1') {
		//8
		rightRes++
		res8 = ' 8 - Верно'
	}

	resultInPercents = (rightRes / 8) * 100

	alert(
		'Вы прошли тест на ' +
			resultInPercents +
			' %.' +
			'\n Результаты: ' +
			'\n' +
			res1 +
			'\n' +
			res2 +
			'\n' +
			res3 +
			'\n' +
			res4 +
			'\n' +
			res5 +
			'\n' +
			res6 +
			'\n' +
			res7 +
			'\n' +
			res8 +
			'\n Правильных ответов: ' +
			rightRes +
			' из 8\n'
	)
}
