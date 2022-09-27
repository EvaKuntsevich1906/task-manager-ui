import style from './TaskPage.module.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ToDo from '../../components/ToDo/ToDo';
import TaskCounter from '../../components/TaskCounter/TaskCounter';
import TasksShedule from '../../components/TasksShedule/TasksShedule';
import Menu from '../../components/Menu/Menu';
// import Footer from "../../components/Footer/Footer";

const TaskPage = () => {
    return (
        <div className={style['task-page']}>
             <Header></Header>
             <Menu></Menu>

             <TaskCounter></TaskCounter>
             <ToDo></ToDo>
             <TasksShedule></TasksShedule>
        </div>
    );
};

export default TaskPage;