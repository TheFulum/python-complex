function getResponse1() {
	var rightRes = 0
	var resultInPercents = 0

	var input1_1 = document.getElementById('input1_1') //1
	var input1_2 = document.getElementById('input1_2') //1

	var input2_1 = document.getElementById('input2_1') //2
	var input2_2 = document.getElementById('input2_2') //2
	var input2_3 = document.getElementById('input2_3') //2
	var input2_4 = document.getElementById('input2_4') //2
	var input2_5 = document.getElementById('input2_5') //2

	var input3_1 = document.getElementById('input3_1') //4
	var input3_2 = document.getElementById('input3_2') //4
	var input3_3 = document.getElementById('input3_3') //4
	var input3_4 = document.getElementById('input3_4') //4
	var input3_5 = document.getElementById('input3_5') //4

	var input4_1 = document.getElementById('input4_1') //5

	var input5_1 = document.getElementById('input5_1') //6
	var input5_2 = document.getElementById('input5_2') //6
	var input5_3 = document.getElementById('input5_3') //6
	var input5_4 = document.getElementById('input5_4') //6
	var input5_5 = document.getElementById('input5_5') //6

	var res1 = '1 - Неверно'
	var res2 = '2 - Неверно'
	var res3 = '3 - Неверно'
	var res4 = '4 - Неверно'
	var res5 = '5 - Неверно'

	if (
		(input1_1.value == 'механизмы') &
		(input1_2.value == 'технологического')
	) {
		//1
		rightRes++
		res1 = ' 1 - Верно'
	}

	if (
		!input2_1.checked &
		!input2_2.checked &
		input2_3.checked &
		!input2_4.checked &
		!input2_5.checked
	) {
		//2
		rightRes++
		res2 = ' 2 - Верно'
	}

	if (
		input3_1.checked &
		!input3_2.checked &
		!input3_3.checked &
		!input3_4.checked &
		!input3_5.checked
	) {
		//3
		rightRes++
		res3 = ' 3 - Верно'
	}

	if (input4_1.value == 'воздействий') {
		//4
		rightRes++
		res4 = ' 4 - Верно'
	}

	if (
		!input5_1.checked &
		input5_2.checked &
		!input5_3.checked &
		!input5_4.checked &
		!input5_5.checked
	) {
		//5
		rightRes++
		res5 = ' 5 - Верно'
	}

	resultInPercents = (rightRes / 5) * 100

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
			'\n Правильных ответов: ' +
			rightRes +
			' из 5\n'
	)
}

// function getResponse2() {
//     var rightRes = 0;
//     var resultInPercents = 0;

//     var input1_1 = document.getElementById("input1_1"); //1
//     var input1_2 = document.getElementById("input1_2"); //1

//     var input2_1 = document.getElementById("input2_1"); //2
//     var input2_2 = document.getElementById("input2_2"); //2
//     var input2_3 = document.getElementById("input2_3"); //2
//     var input2_4 = document.getElementById("input2_4"); //2
//     var input2_5 = document.getElementById("input2_5"); //2

//     var input3_1 = document.getElementById("input3_1");//3
//     var input3_2 = document.getElementById("input3_2");//3
//     var input3_3 = document.getElementById("input3_3");//3
//     var input3_4 = document.getElementById("input3_4");//3

//     var input4_1 = document.getElementById("input4_1");//4
//     var input4_2 = document.getElementById("input4_2");//4
//     var input4_3 = document.getElementById("input4_3");//4
//     var input4_4 = document.getElementById("input4_4");//4

//     var select1_1 = document.getElementById("select1_1")//5
//     var select1_2 = document.getElementById("select1_2")//5

//     var res1 = "1 - Неверно";
//     var res2 = "2 - Неверно";
//     var res3 = "3 - Неверно";
//     var res4 = "4 - Неверно";
//     var res5 = "5 - Неверно";

//     if (input1_1.value == "УЧПУ" & input1_2.value == "привода") { //1
//         rightRes++;
//         res1 = " 1 - Верно";
//     }

//     if (input2_1.checked & input2_2.checked & input2_3.checked & !input2_4.checked & !input2_5.checked) { //2
//         rightRes++;
//         res2 = " 2 - Верно";
//     }

//     if (input3_1.value == "привода" & input3_2.value == "усилители" & input3_3.value == "сигналы" & input3_4.value == "станке") { //3
//         rightRes++;
//         res3 = " 3 - Верно";
//     }

//     if (!input4_1.checked & input4_2.checked & !input4_3.checked & !input4_4.checked) { //4
//         rightRes++;
//         res4 = " 4 - Верно";
//     }

//     if (select1_1.value == "2" & select1_2.value == "1") { //5
//         rightRes++;
//         res5 = " 5 - Верно";
//     }

//     resultInPercents = (rightRes / 5) * 100

//     alert('Вы прошли тест на ' + resultInPercents + ' %.'
//     + '\n Результаты: '
//     + '\n' + res1
//     + '\n' + res2
//     + '\n' + res3
//     + '\n' + res4
//     + '\n' + res5
//     + '\n Правильных ответов: ' + rightRes + ' из 5\n'
//     );
// }

// function getResponse3() {
//     var rightRes = 0;
//     var resultInPercents = 0;

//     var input1_1 = document.getElementById("input1_1"); //1
//     var input1_2 = document.getElementById("input1_2"); //1
//     var input1_3 = document.getElementById("input1_3"); //1
//     var input1_4 = document.getElementById("input1_4"); //1

//     var input2_1 = document.getElementById("input2_1"); //2
//     var input2_2 = document.getElementById("input2_2"); //2
//     var input2_3 = document.getElementById("input2_3"); //2

//     var input3_1 = document.getElementById("input3_1");//3
//     var input3_2 = document.getElementById("input3_2");//3
//     var input3_3 = document.getElementById("input3_3");//3
//     var input3_4 = document.getElementById("input3_4");//3
//     var input3_5 = document.getElementById("input3_5");//3

//     var select1_1 = document.getElementById("select1_1")//4
//     var select1_2 = document.getElementById("select1_2")//4

//     var input4_1 = document.getElementById("input4_1");//5
//     var input4_2 = document.getElementById("input4_2");//5
//     var input4_3 = document.getElementById("input4_3");//5

//     var res1 = "1 - Неверно";
//     var res2 = "2 - Неверно";
//     var res3 = "3 - Неверно";
//     var res4 = "4 - Неверно";
//     var res5 = "5 - Неверно";

//     if (input1_1.value == "обеспечением" & input1_2.value == "неизменной" & input1_3.value == "операционной" & input1_4.value == "электроавтоматики") { //4
//         rightRes++;
//         res1 = " 1 - Верно";
//     }

//     if (input2_1.value == "обработку" & input2_2.value == "конструкции" & input2_3.value == "управления") { //2
//         rightRes++;
//         res2 = " 2 - Верно";
//     }

//     if (!input3_1.checked & !input3_2.checked & input3_3.checked & !input3_4.checked & !input3_5.checked) { //3
//         rightRes++;
//         res3 = " 3 - Верно";
//     }

//     if (select1_1.value == "1" & select1_2.value == "2") { //4
//         rightRes++;
//         res4 = " 4 - Верно";
//     }

//     if (input4_1.value == "устройств" & input4_2.value == "числового" & input4_3.value == "шкафа") { //5
//         rightRes++;
//         res5 = " 5 - Верно";
//     }

//     resultInPercents = (rightRes / 5) * 100

//     alert('Вы прошли тест на ' + resultInPercents + ' %.'
//     + '\n Результаты: '
//     + '\n' + res1
//     + '\n' + res2
//     + '\n' + res3
//     + '\n' + res4
//     + '\n' + res5
//     + '\n Правильных ответов: ' + rightRes + ' из 5\n'
//     );
// }
