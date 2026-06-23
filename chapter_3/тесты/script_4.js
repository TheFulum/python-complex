function checkAnswers() {
	const q1Answer = document.querySelector('input[name="q1"]:checked')
	const q2Answer = document.querySelector('input[name="q2"]:checked')
	const q3Answers = document.querySelectorAll('input[name="q3"]:checked')
	const q5Answer = document.getElementById('input5')
	const qOneAnswer = document.getElementById('input1')
	const q7Answers = document.querySelectorAll('input[name="q7"]:checked')
	const q8Answer = document.querySelector('input[name="q8"]:checked')
	const q9Answer = document.getElementById('select9')
	const q10Answers = document.querySelectorAll('input[name="q10"]:checked')
	const qFiveAnswer = document.getElementById('select2')

	const resultDisplay = document.getElementById('result')

	const q1CorrectAnswer = 'd'
	const qTwoCorrectAnswer = 'b'
	const q3CorrectAnswers = ['a', 'c']
	const q5CorrectAnswer = '@classmethod'
	const q5_2CorrectAnswer = 'classmethod'
	const qOneCorrectAnswer = 'property'
	const qOne_2CorrectAnswer = '@property'
	const q7CorrectAnswers = ['b', 'c']
	const q8CorrectAnswer = 'd'
	const q9CorrectAnswer = 'a'
	const q10CorrectAnswers = ['c', 'd']
	const qFiveCorrectAnswer = 'b'

	let correctCount = 0
	let incorrectCount = 0
	let errors = []

	if (
		!qOneAnswer ||
		!q2Answer ||
		!q3Answers.length ||
		!q5Answer ||
		!q1Answer ||
		!q7Answers.length ||
		!q8Answer ||
		!q9Answer ||
		!q10Answers.length
	) {
		alert('Пожалуйста, ответьте на все вопросы.')
		return
	}

	if (
		qOneAnswer.value === qOneCorrectAnswer ||
		qOneAnswer.value === qOne_2CorrectAnswer
	) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос 1')
	}

	if (q1Answer.value === q1CorrectAnswer) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос 2')
	}

	if (q2Answer.value === qTwoCorrectAnswer) {
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

	if (qFiveAnswer.value.toLowerCase() === qFiveCorrectAnswer.toLowerCase()) {
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
