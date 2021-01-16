import * as React from 'react'
import * as Icon from 'react-feather'
import { useDispatch } from 'react-redux'
import { format } from 'date-fns'
import ITask from '../../../types/ITask'
import EditTaskModal from '../../EditTaskModal/EditTaskModal'
import { deleteTask, fetchTaskById } from '../../../redux/actions/actions'

const TasksListItem = (task:ITask) => {
	const dispatch = useDispatch()

	return (
		<div className="card mb-3">
			<div className="card-body">
				<h5 className="card-title d-flex justify-content-between align-items-center">
					{task.title}
					<div className="btn-group d-flex align-items-center" role="group">
						<button
							type="button"
							title="Edit task"
							aria-label="Edit"
							className="btn btn-outline-secondary d-flex align-items-center"
							data-bs-toggle="modal"
							data-bs-target="#editTaskModal"
							onClick={() => {
								dispatch(fetchTaskById(task.id))
							}}
						>
							<Icon.Edit2 size={20} />
						</button>
						<EditTaskModal />
						<button
							type="button"
							title="Delete task"
							aria-label="Delete task"
							className="btn btn-outline-secondary d-flex align-items-center"
							onClick={() => {
								dispatch(deleteTask(task.id))
							}}
						>
							<Icon.X size={20} />
						</button>
					</div>
				</h5>
				<p className="card-text">{task.description}</p>
				<p className="card-text">
          Created:
					{format(task.creationDate, 'PPp')}
				</p>
			</div>
		</div>
	)
}

export default TasksListItem
