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

	const q2CorrectAnswer = 'b'
	const q3CorrectAnswers = ['a', 'b', 'd']
	const q4CorrectAnswer = 'a'
	const q5CorrectAnswer = 'abs'
	const q5_2CorrectAnswer = 'abs()'
	const q1CorrectAnswer = 'Int'
	const q1_2CorrectAnswer = 'int'
	const q7CorrectAnswers = ['a', 'd']
	const q8CorrectAnswer = 'c'
	const q9CorrectAnswer = 'a'
	const q10CorrectAnswers = ['a', 'b']

	let correctCount = 0
	let incorrectCount = 0
	let errors = []

	if (
		q1Answer.value === q1CorrectAnswer ||
		q1Answer.value === q1_2CorrectAnswer
	) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос = 1')
	}

	if (
		select1_1.value === '3' &&
		select1_2.value === '2' &&
		select1_3.value === '3' &&
		select1_4.value === '3'
	) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос = 2')
	}

	if (q2Answer.value === q2CorrectAnswer) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос = 3')
	}

	let q3CorrectCount = 0
	q3Answers.forEach(answer => {
		if (q3CorrectAnswers.includes(answer.value)) {
			q3CorrectCount++
		}
	})
	if (q3CorrectCount === 3) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос = 4')
	}

	if (q4Answer.value === q4CorrectAnswer) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос = 5')
	}

	if (
		q5Answer.value === q5CorrectAnswer ||
		q5Answer.value === q5_2CorrectAnswer
	) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос = 6')
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
		errors.push('Неправильный ответ на вопрос = 7')
	}

	if (q8Answer.value === q8CorrectAnswer) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос = 8')
	}

	if (q9Answer.value.toLowerCase() === q9CorrectAnswer.toLowerCase()) {
		correctCount++
	} else {
		incorrectCount++
		errors.push('Неправильный ответ на вопрос = 9')
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
		errors.push('Неправильный ответ на вопрос = 10')
	}

	const modalBody = document.getElementById('testResultModalBody')
	modalBody.innerHTML = `
    <p>Правильных ответов: ${correctCount}</p>
    <p>Неправильных ответов: ${incorrectCount}</p>
    ${
			errors.length > 0
				? '<p>Ошибки:</p><ul><li>' + errors.join('</li><li>') + '</li></ul>'
				: ''
		}
`

	$('#testResultModal').modal('show')
}

function closeModal() {
	var modal = document.getElementById('testResultModal')
	modal.style.display = 'none'
}
