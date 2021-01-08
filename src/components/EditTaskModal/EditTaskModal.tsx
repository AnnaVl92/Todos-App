import * as React from 'react';
import EditTaskForm from "./EditTaskForm/EditTaskForm"
import * as Icon from 'react-feather';

const EditTaskModal = () => (
    <React.Fragment>
        <button
            type="button"
            aria-label="Edit"
            className="btn btn-outline-secondary d-flex align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#editTaskModal"
        >
            <Icon.Edit2 size={20} />
        </button>
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
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <EditTaskForm />
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default EditTaskModal;