import style from './TaskPage.module.css';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ToDo from '../../components/ToDo/ToDo';
import TaskCounter from '../../components/TaskCounter/TaskCounter';
import TasksShedule from '../../components/TasksShedule/TasksShedule';
import Menu from '../../components/Menu/Menu';
import HeaderItem from '../../components/Header/HeaderItem';

const TaskPage = () => {
    const { state } = useLocation();
    console.log(`state ${state.id}`);
    const user = state.user
    return (
        <div className={style['task-page']}>
            
            <div className={style['task-menu-wrap']}><Menu></Menu></div>

            <div className={style['task-header-main']}>
                <Header><HeaderItem title={`logout`} /></Header>
                <div className={style['task-page-main']}>
                    <div className={style['task-taskcounter-wrap']}><TaskCounter name={state.fullname} /></div>
                    <div className={style['task-todo-wrap']} id={state.id}><ToDo /></div>
                    <div className={style['task-todo-wrap']}><TasksShedule /></div>
                </div>
            </div>
            <div className={style['background-gradient']}></div>
            <div className={style['background-image']}></div>
        </div>
    )
};

export default TaskPage;