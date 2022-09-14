import { useState } from 'react'

function ToDoForm({ addTask }) {
	const [userInput, setUserInput] = useState('')

	const handleChange = (e) => {
		setUserInput(e.currentTarget.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		addTask(userInput)
		setUserInput("")
	}

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleSubmit(e)
		}
	}

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input className="todo-input"
				value={userInput}
				type="text"
				onChange={handleChange}
				onKeyDown={handleKeyPress}
				placeholder="Введите значение..."
			/>
			<button className="todo-button">Сохранить</button>
		</form>
	)
}

export default ToDoForm