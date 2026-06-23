function checkAnswers() {
	const q1Answer = document.getElementById('input1')
	const q2Answer = document.querySelector('input[name="q2"]:checked')
	const q3Answers = document.querySelectorAll('input[name="q3"]:checked')
	const q4Answer = document.getElementById('select2')
	const q5Answer = document.getElementById('input5')
	const resultDisplay = document.getElementById('result')
	const select1_1 = document.getElementById('select1_1')
	const select1_2 = document.getElementById('select1_2')
	const select1_3 = document.getElementById('select1_3')
	const select1_4 = document.getElementById('select1_4')
	const q7Answers = document.querySelectorAll('input[name="q7"]:checked')
	const q8Answer = document.querySelector('input[name="q8"]:checked')
	const q9Answer = document.getElementById('select9')
	const q10Answers = document.querySelectorAll('input[name="q10"]:checked')

	if (
		!q2Answer ||
		!q3Answers.length ||
		!q4Answer ||
		!q5Answer ||
		!q1Answer ||
		!select1_1 ||
		!select1_2 ||
		!select1_3 ||
		!select1_4 ||
		!q7Answers.length ||
		!q8Answer ||
		!q9Answer ||
		!q10Answers.length
	) {
		alert('Пожалуйста, ответьте на все вопросы.')
		return
	}

	const q2CorrectAnswer = 'a'
	const q3CorrectAnswers = ['a', 'd']
	const q4CorrectAnswer = 'a'
	const q5CorrectAnswer = 'in'
	const q5_2CorrectAnswer = 'In'

	const q1_2CorrectAnswer = 'Словарь'
	const q1_3CorrectAnswer = 'словарь'
	const q7CorrectAnswers = ['c', 'd']
	const q8CorrectAnswer = 'c'
	const q9CorrectAnswer = 'b'
	const q10CorrectAnswers = ['a', 'c']

	let correctCount = 0
	let incorrectCount = 0
	let errors = []

	if (
		q1Answer.value === q1_2CorrectAnswer ||
		q1Answer.value === q1_3CorrectAnswer
	) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос 1')
	}

	if (
		select1_1.value === '1' &&
		select1_2.value === '3' &&
		select1_3.value === '2' &&
		select1_4.value === '3'
	) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос 2')
	}

	if (q2Answer.value === q2CorrectAnswer) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос 3')
	}

	let q3CorrectCount = 0
	q3Answers.forEach(answer => {
		if (q3CorrectAnswers.includes(answer.value)) {
			q3CorrectCount++
		}
	})
	if (q3CorrectCount === 2) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос 4')
	}

	if (q4Answer.value === q4CorrectAnswer) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос 5')
	}

	if (
		q5Answer.value === q5CorrectAnswer ||
		q5Answer.value === q5_2CorrectAnswer
	) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос 6')
	}

	let q7CorrectCount = 0
	q7Answers.forEach(answer => {
		if (q7CorrectAnswers.includes(answer.value)) {
			q7CorrectCount++
		}
	})
	if (q7CorrectCount === 2) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос 7')
	}

	if (q8Answer.value === q8CorrectAnswer) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос 8')
	}

	if (q9Answer.value.toLowerCase() === q9CorrectAnswer.toLowerCase()) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос 9')
	}

	let q10CorrectCount = 0
	q10Answers.forEach(answer => {
		if (q10CorrectAnswers.includes(answer.value)) {
			q10CorrectCount++
		}
	})
	if (q10CorrectCount === 2) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос 10')
	}

	let errorText =
		errors.length > 0 ? '\n\nОшибки в заданиях:\n' + errors.join('\n') : ''
	alert(
		'Ваша оценка: ' +
			correctCount +
			'\nНеправильные ответы: ' +
			incorrectCount +
			errorText
	)
}
