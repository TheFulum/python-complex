function checkAnswers() {
	const q2Answer = document.querySelector('input[name="q2"]:checked')
	const q3Answer = document.querySelector('input[name="q3"]:checked')
	const q4Answer = document.getElementById('select2')
	const q5Answer = document.getElementById('input5')

	const resultDisplay = document.getElementById('result')

	if (!q2Answer || !q3Answer || !q4Answer || !q5Answer) {
		resultDisplay.textContent = alert('Пожалуйста, ответьте на все вопросы.')
		return
	}

	const q2CorrectAnswer = 'a'
	const q3CorrectAnswer = 'a'
	const q3_2CorrectAnswer = 'c'
	const q4CorrectAnswer = 'b'
	const q5CorrectAnswer = 'пять'
	const q5_2CorrectAnswer = 'Пять'

	let correctCount = 0
	let incorrectCount = 0

	if (q2Answer.value === q2CorrectAnswer) {
		correctCount++
	} else {
		incorrectCount++
	}

	if (
		q3Answer.value === q3CorrectAnswer ||
		q3Answer.value === q3_2CorrectAnswer
	) {
		correctCount++
	} else {
		incorrectCount++
	}
	if (q4Answer.value === q4CorrectAnswer) {
		correctCount++
	} else {
		incorrectCount++
	}
	if (
		q5Answer.value === q5CorrectAnswer ||
		q5Answer.value === q5_2CorrectAnswer
	) {
		correctCount++
	} else {
		incorrectCount++
	}

	resultDisplay.textContent = alert(
		`Правильных ответов: ${correctCount}\n Неправильных ответов: ${incorrectCount}`
	)
}
