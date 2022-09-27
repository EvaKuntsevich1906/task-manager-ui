import style from './TaskPage.module.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ToDo from '../../components/ToDo/ToDo';
import TaskCounter from '../../components/TaskCounter/TaskCounter';
// import Footer from "../../components/Footer/Footer";

const TaskPage = () => {
    return (
        <div className={style['task-page']}>
             <Header></Header>

             <ToDo></ToDo>
             <TaskCounter></TaskCounter>
        </div>
    );
};

export default TaskPage;