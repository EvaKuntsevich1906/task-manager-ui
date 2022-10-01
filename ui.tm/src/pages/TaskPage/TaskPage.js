import style from './TaskPage.module.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ToDo from '../../components/ToDo/ToDo';
import TaskCounter from '../../components/TaskCounter/TaskCounter';
import TasksShedule from '../../components/TasksShedule/TasksShedule';
import Menu from '../../components/Menu/Menu';
import HeaderItem from '../../components/Header/HeaderItem';
// import Footer from "../../components/Footer/Footer";

const TaskPage = () => {
    return (
        <div className={style['task-page']}>
            <Menu></Menu>
            <div className={style['task-page-header']}>
                <h1>Hschool</h1>
                
              <Header>  <HeaderItem title={`logout`}></HeaderItem> 
              </Header>
               <div className={style['task-page-main']}>
                <TaskCounter></TaskCounter>
                <ToDo></ToDo>
                <TasksShedule></TasksShedule></div>
                </div>
        </div>
    );
};

export default TaskPage;