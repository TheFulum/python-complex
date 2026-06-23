document.addEventListener('DOMContentLoaded', function () {
	const items = document.querySelectorAll('.item')
	const dropzones = document.querySelectorAll('.dropzone')
	const resultDisplay = document.getElementById('result')

	let draggedItem = null

	items.forEach(item => {
		item.addEventListener('dragstart', function () {
			draggedItem = this
		})
		item.addEventListener('dragend', function () {
			draggedItem = null
		})
	})

	dropzones.forEach(dropzone => {
		dropzone.addEventListener('dragover', function (e) {
			e.preventDefault()
		})
		dropzone.addEventListener('dragenter', function (e) {
			e.preventDefault()
			this.style.background = '#f0f0f0'
		})
		dropzone.addEventListener('dragleave', function () {
			this.style.background = 'none'
		})
		dropzone.addEventListener('drop', function () {
			this.appendChild(draggedItem)
			this.style.background = 'none'
		})
	})

	document.getElementById('check-btn').addEventListener('click', function () {
		let correct = true
		dropzones.forEach(dropzone => {
			const itemId = dropzone.dataset.id
			if (
				dropzone.children.length !== 1 ||
				dropzone.children[0].dataset.id !== itemId
			) {
				correct = false
			}
		})
		resultDisplay.textContent = correct ? 'Правильно!' : 'Неправильно!'
	})
})
