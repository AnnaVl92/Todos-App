import * as React from 'react'
import EditTaskForm from './EditTaskForm/EditTaskForm'

const EditTaskModal = () =>
	<div
		className="modal fade"
		id="editTaskModal"
		tabIndex={-1}
		aria-labelledby="editTaskModalLabel"
		aria-hidden="true"
	>
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title">Modal title</h5>
					<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
				</div>
				<div className="modal-body">
					<EditTaskForm />
				</div>
			</div>
		</div>
	</div>

export default EditTaskModal
