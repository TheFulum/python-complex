function checkAnswers() {
	const q1Answer = document.getElementById('input1')
	const q2Answer = document.querySelector('input[name="q2"]:checked')
	const q3Answers = document.querySelectorAll('input[name="q3"]:checked')
	const q4Answer = document.getElementById('select2')
	const q5Answer = document.getElementById('input5')
	const resultDisplay = document.getElementById('result')
	const qTwoAnswers = document.querySelectorAll('input[name="q1"]:checked')
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
		!q7Answers.length ||
		!q8Answer ||
		!q9Answer ||
		!q10Answers.length ||
		!qTwoAnswers.length
	) {
		alert('Пожалуйста, ответьте на все вопросы.')
		return
	}

	const q2CorrectAnswer = 'b'
	const q3CorrectAnswers = ['a', 'c']
	const q4CorrectAnswer = 'b'
	const q5CorrectAnswer = 'radd()'
	const q5_2CorrectAnswer = '__radd__()'
	const q1CorrectAnswer = 'add()'
	const q1_2CorrectAnswer = '__add__()'
	const q1_3CorrectAnswer = 'add'
	const q7CorrectAnswers = ['a', 'b']
	const q8CorrectAnswer = 'a'
	const q9CorrectAnswer = 'a'
	const q10CorrectAnswers = ['a', 'c']
	const qTwoCorrectAnswers = ['b', 'c']

	let correctCount = 0
	let incorrectCount = 0
	let errors = []

	if (
		q1Answer.value === q1CorrectAnswer ||
		q1Answer.value === q1_2CorrectAnswer ||
		q1Answer.value === q1_3CorrectAnswer
	) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос 1')
	}

	let qTwoCorrectCount = 0
	qTwoAnswers.forEach(answer => {
		if (qTwoCorrectAnswers.includes(answer.value)) {
			qTwoCorrectCount++
		}
	})
	if (qTwoCorrectCount === 2) {
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
