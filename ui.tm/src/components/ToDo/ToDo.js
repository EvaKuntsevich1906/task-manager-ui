import style from './ToDo.module.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import request from '../../hooks/http.hooks';

const ToDo = () => {
const {state} = useLocation();
    const [createTask, setCreateTask] = useState("");
    const [updateNumber, setUpdateNumber] = useState("");
    const [updateTask, setUpdateTask] = useState("");
    const [deleteNumber, setDeleteNumber] = useState("");

    const changeTask =  async () => {
        const createdTask = await request ("http://localhost:3001/api/tasks/create", 'POST', {
                task: createTask,
                user_id: state.id
         } )
         console.log(createdTask);
    }
    return (
        <div className={style['toDo-content']}>

            <p className={style['toDo-headline']}>To do:</p>

            <div className={style['toDo-form-block']}>

                <div className={style['toDo-form']}>
                    <p className={style['toDo-form-txt']}>Create:</p>
                    <input className={style['toDo-create-del-inp']} placeholder="task" onChange={(event) => setCreateTask(event.target.value)}></input>
                </div>

                <div className={style['toDo-form']}>
                    <p className={style['toDo-form-txt']}>Update:</p>
                    <div className={style['toDo-form-update-two-inp']}>
                        <input className={style['toDo-upd-inp']} placeholder="number" onChange={(event) => setUpdateNumber(event.target.value)}></input>
                        <input className={style['toDo-upd-inp']} placeholder="task" onChange={(event) => setUpdateTask(event.target.value)}></input>
                    </div>
                </div>

                <div className={style['toDo-form']}>
                    <p className={style['toDo-form-txt']}>Delete:</p>
                    <input className={style['toDo-create-del-inp']} placeholder="Number" onChange={(event) => setDeleteNumber(event.target.value)}></input>
                </div>
            </div>

            <div className={style['toDo-save-btn']} onClick={changeTask}>
                <p className={style['']}>+ save </p>
            </div>
        </div>
    );
}

export default ToDo;