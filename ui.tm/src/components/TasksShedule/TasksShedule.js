import style from './TasksShedule.module.css';
import { getRequest } from '../../hooks/http.hooks';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const TasksShedule = ({ tasks }) => {

    const getTask = () => {
        const { state } = useLocation();
        const { effect } = useEffect();

        const gotAllTaskTask = async () => {
            const getAllTask = await getRequest("http://localhost:3001/api/tasks", 'GET', {


            })
            console.log(getAllTask);

        }
        return (

            <div className={style['tasksShedule-content']}>

                <h1 className={style['tasksShedule-Tasks']}>Tasks: </h1>
                <p className={effect.tasks}></p>

            </div>

        );
    }
}
    export default TasksShedule;