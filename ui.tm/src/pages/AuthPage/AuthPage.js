import MainContentAuth from "../../components/MainContentAuth/MainContentAuth";
import style from './AuthPage.module.css';
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import TaskListImage from "../../components/TaskListImage/TaskListImage";

const AuthPage = () => {
    return (
        <div className={style['auth-page']}>
            <Header></Header>
            <div className={style['AuthPageContent-block']}>
                <div className={style['AuthPageContent-block-left']}>
                    <MainContentAuth />
                </div>
                <div className={style['AuthPageContent-block-right']}> <TaskListImage/></div>
            </div>
            <Link to={'/'}>Main</Link>
            <Link to={'/register'}>register</Link>
            <Link to={'/login'}>login</Link>
            <Link to={'/task'}>task</Link>
        </div>
    );
};
export default AuthPage;