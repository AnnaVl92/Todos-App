import React from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/actions"
import { useForm } from 'react-hook-form';
import { FormData } from "../../redux/types/FormData"

function AddTaskForm () {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = (data:FormData) => {
        const newTask = {
            text: data.text
        };
        dispatch(addTask(newTask))
    };
 
    return (
        <form className="mb-5" onSubmit={ handleSubmit(onSubmit) }>
            <div className="mb-3">
                <label
                    className="form-label"
                    htmlFor="text"
                >
                    Add task:
                </label>
                <input
                    name="text"
                    className="form-control"
                    type="text"
                    ref={register}
                />
            </div>
            <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
        </form>
    );
}

export default AddTaskForm;