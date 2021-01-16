import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import IState from './types/IState'
import TasksList from './components/TasksList/TasksList'
import { fetchAll } from './redux/actions/actions'

const App = () => {
	const dispatch = useDispatch()
	const tasksInState: IState = {
		tasks: useSelector((state: IState) => state.tasks),
	}
	useEffect(() => {
		dispatch(fetchAll())
	}, [dispatch])
	return (
		<div className="container">
			<h1 className="mt-3 text-center">To Do List</h1>
			<AddTaskForm />
			<TasksList {...tasksInState} />
		</div>
	)
}

export default App
