function getResponse1() {
	var rightRes = 0
	var resultInPercents = 0

	var input1_1 = document.getElementById('input1_1') //1
	var input1_2 = document.getElementById('input1_2') //1
	var input1_3 = document.getElementById('input1_3') //1
	var input1_4 = document.getElementById('input1_4') //1

	var input2_1 = document.getElementById('input2_1') //2
	var input2_2 = document.getElementById('input2_2') //2
	var input2_3 = document.getElementById('input2_3') //2
	var input2_4 = document.getElementById('input2_4') //2

	var input3_1 = document.getElementById('input3_1') //4
	var input3_2 = document.getElementById('input3_2') //4
	var input3_3 = document.getElementById('input3_3') //4
	var input3_4 = document.getElementById('input3_4') //4

	var input4_1 = document.getElementById('input4_1') //5
	var input4_2 = document.getElementById('input4_2')
	var input4_3 = document.getElementById('input4_3')
	var input4_4 = document.getElementById('input4_4')

	var input5_1 = document.getElementById('input5_1') //6
	var input5_2 = document.getElementById('input5_2') //6
	var input5_3 = document.getElementById('input5_3') //6
	var input5_4 = document.getElementById('input5_4') //6

	var input6_1 = document.getElementById('input6_1') //1
	var input6_2 = document.getElementById('input6_2') //1
	var input6_3 = document.getElementById('input6_3') //6
	var input6_4 = document.getElementById('input6_4') //1

	var input7_1 = document.getElementById('input7_1') //1
	var input7_2 = document.getElementById('input7_2') //1
	var input7_3 = document.getElementById('input7_3') //1
	var input7_4 = document.getElementById('input7_4') //1

	var input8_1 = document.getElementById('input8_1') //1
	var input8_2 = document.getElementById('input8_2') //1
	var input8_3 = document.getElementById('input8_3') //1
	var input8_4 = document.getElementById('input8_4') //1

	var input9_1 = document.getElementById('input9_1') //1
	var input9_2 = document.getElementById('input9_2') //1
	var input9_3 = document.getElementById('input9_3') //1
	var input9_4 = document.getElementById('input9_4') //1

	var input10_1 = document.getElementById('input10_1') //1
	var input10_2 = document.getElementById('input10_2') //1
	var input10_3 = document.getElementById('input10_3') //1
	var input10_4 = document.getElementById('input10_4') //1

	var res1 = '1 - Неверно'
	var res2 = '2 - Неверно'
	var res3 = '3 - Неверно'
	var res4 = '4 - Неверно'
	var res5 = '5 - Неверно'
	var res6 = '6 - Неверно'
	var res7 = '7 - Неверно'
	var res8 = '8 - Неверно'
	var res9 = '9 - Неверно'
	var res10 = '10 - Неверно'

	if (
		!input1_1.checked &
		!input1_2.checked &
		input1_3.checked &
		!input1_4.checked
	) {
		//1
		rightRes++
		res1 = ' 1 - Верно'
	}

	if (
		!input2_1.checked &
		!input2_2.checked &
		input2_3.checked &
		!input2_4.checked
	) {
		//1
		rightRes++
		res2 = ' 2 - Верно'
	}

	if (
		!input3_1.checked &
		!input3_2.checked &
		input3_3.checked &
		!input3_4.checked
	) {
		//1
		rightRes++
		res3 = ' 3 - Верно'
	}

	if (
		!input4_1.checked &
		input4_2.checked &
		!input4_3.checked &
		!input4_4.checked
	) {
		//1
		rightRes++
		res4 = ' 4 - Верно'
	}

	if (
		!input5_1.checked &
		!input5_2.checked &
		!input5_3.checked &
		input5_4.checked
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
		input7_2.checked &
		!input7_3.checked &
		!input7_4.checked
	) {
		//1
		rightRes++
		res7 = ' 7 - Верно'
	}

	if (
		input8_1.checked &
		!input8_2.checked &
		!input8_3.checked &
		!input8_4.checked
	) {
		//1
		rightRes++
		res8 = ' 8 - Верно'
	}

	if (
		input9_1.checked &
		!input9_2.checked &
		!input9_3.checked &
		!input9_4.checked
	) {
		//1
		rightRes++
		res9 = ' 9 - Верно'
	}

	if (
		!input10_1.checked &
		!input10_2.checked &
		!input10_3.checked &
		input10_4.checked
	) {
		//1
		rightRes++
		res10 = ' 10 - Верно'
	}

	resultInPercents = (rightRes / 10) * 100

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
			'\n' +
			res9 +
			'\n' +
			res10 +
			'\n Правильных ответов: ' +
			rightRes +
			' из 10\n'
	)
}
