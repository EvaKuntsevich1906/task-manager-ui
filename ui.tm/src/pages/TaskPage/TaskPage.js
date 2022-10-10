import style from './TaskPage.module.css';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ToDo from '../../components/ToDo/ToDo';
import TaskCounter from '../../components/TaskCounter/TaskCounter';
import TasksShedule from '../../components/TasksShedule/TasksShedule';
import Menu from '../../components/Menu/Menu';
import HeaderItem from '../../components/Header/HeaderItem';
import { useEffect, useState } from 'react';
import { postRequest } from '../../hooks/http.hooks';

const TaskPage = () => {
    const { state } = useLocation();
    const user_id = state.id;
    const [AllTask, setAllTask] = useState([]);


    useEffect(() => {
        const usegotAllTask = gottAllTask(user_id);
      
    }, []);

    const gottAllTask = async (user_id) => {
        const getAllTask = await postRequest("http://localhost:3001/api/tasks", 'POST', {
            user_id: user_id
        }
        )

        
        const parsedTasks = getAllTask.map(el=>el.task)
        setAllTask(parsedTasks)
        return getAllTask;
    }

    console.log(AllTask)

    return (
        <div className={style['task-page']}>

            <div className={style['task-menu-wrap']}><Menu></Menu></div>

            <div className={style['task-header-main']}>
                <Header><HeaderItem title={`logout`} /></Header>
                <div className={style['task-page-main']}>
                    <div className={style['task-taskcounter-wrap']}><TaskCounter name={state.fullname} /></div>
                    <div className={style['task-todo-wrap']} id={state.id}><ToDo /></div>
                    <div className={style['task-todo-wrap']}><TasksShedule tasks={AllTask}/></div>
                </div>
            </div>
            <div className={style['background-gradient']}></div>
            <div className={style['background-image']}></div>
        </div>
    )
};

export default TaskPage;