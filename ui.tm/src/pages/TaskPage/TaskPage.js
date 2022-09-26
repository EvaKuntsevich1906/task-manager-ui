// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import style from './TaskPage.module.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ToDo from '../../components/ToDo/ToDo';

const TaskPage = () => {
    return (
        <div className={style['task-page']}>
             <Header />
             <ToDo/>
            <Link to={'/'}>Main</Link>
            <Link to={'/register'}>register</Link>
            <Link to={'/login'}>login</Link>
            <Link to={'/task'}>task</Link>
        </div>
    );
};

export default TaskPage;