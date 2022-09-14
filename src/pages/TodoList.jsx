import React, { useState } from 'react';
import '../style/todolist.css';
import ToDoForm from '../UI/ToDoForm';
import ToDo from '../UI/ToDo';
function TodoList() {
	const [todos, setTodos] = useState([])

	const addTask = (userInput) => {
		if (userInput) {
			const newItem = {
				id: Math.random().toString(36).substr(2, 9),
				task: userInput,
				complete: false
			}
			setTodos([...todos, newItem])
		}
	}

	const removeTask = (id) => {
		setTodos([...todos.filter((todo) => todo.id !== id)])
	}

	const handleToggle = (id) => {
		setTodos([
			...todos.map((todo) =>
				todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
			)
		])
	}

	return (
		<div className="TodoList">
			<div className="todo-title">
				Список задач: {todos.length}
			</div>
			<ToDoForm addTask={addTask} />
			{todos.map((todo) => {
				return (
					<ToDo
						todo={todo}
						key={todo.id}
						toggleTask={handleToggle}
						removeTask={removeTask}
					/>
				)
			})}
		</div>
	);
}

export default TodoList;