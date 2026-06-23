function checkAnswers() {
	const q2Answer = document.querySelector('input[name="q2"]:checked') //2
	const q3Answers = document.querySelectorAll('input[name="q3"]:checked') //3
	const q4Answer = document.getElementById('select2') //4
	const q5Answer = document.getElementById('input5') //5
	const resultDisplay = document.getElementById('result')
	const q7Answers = document.querySelectorAll('input[name="q7"]:checked') //6
	const q8Answer = document.querySelector('input[name="q8"]:checked') //7
	const q9Answer = document.getElementById('select9') //8
	const q10Answers = document.querySelectorAll('input[name="q10"]:checked') //9
	const qTenAnswer = document.getElementById('select10') //10
	const q6Answer = document.querySelector('input[name="q6"]:checked') //1

	if (
		!q6Answer ||
		!q2Answer ||
		!q3Answers.length ||
		!q4Answer ||
		!q5Answer ||
		!q7Answers.length ||
		!q8Answer ||
		!q9Answer ||
		!q10Answers.length ||
		!qTenAnswer
	) {
		alert('Пожалуйста, ответьте на все вопросы.')
		return
	}
	const q6CorrectAnswer = 'a'
	const q2CorrectAnswer = 'c'
	const q3CorrectAnswers = ['a', 'c']
	const q4CorrectAnswer = 'a'
	const q5CorrectAnswer = 'open()'
	const q5_2CorrectAnswer = 'Open()'

	const q7CorrectAnswers = ['a', 'b']
	const q8CorrectAnswer = 'a'
	const q9CorrectAnswer = 'b'
	const q10CorrectAnswers = ['b', 'd']
	const qTenCorrectAnswer = 'a'

	let correctCount = 0
	let incorrectCount = 0
	let errors = []

	if (q6Answer.value === q6CorrectAnswer) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос  1')
	}

	if (q2Answer.value === q2CorrectAnswer) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос  2')
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
		errors.push('Неправильный ответ на вопрос  3')
	}

	if (q4Answer.value === q4CorrectAnswer) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос  4')
	}

	if (
		q5Answer.value === q5CorrectAnswer ||
		q5Answer.value === q5_2CorrectAnswer
	) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос  5')
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
		errors.push('Неправильный ответ на вопрос  6')
	}

	if (q8Answer.value === q8CorrectAnswer) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос  7')
	}

	if (q9Answer.value.toLowerCase() === q9CorrectAnswer.toLowerCase()) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос  8')
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
		errors.push('Неправильный ответ на вопрос  10')
	}

	if (qTenAnswer.value.toLowerCase() === qTenCorrectAnswer.toLowerCase()) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос  8')
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
