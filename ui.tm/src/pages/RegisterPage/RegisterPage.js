import { Link } from 'react-router-dom';
import MainContentRegister from '../../components/MainContentRegister/MainContentRegister';
import style from "./RegisterPage.module.css"
import TaskListImage from "../../components/TaskListImage/TaskListImage";

const RegisterPage = () => {

    return (
        
        <div className={style['register-page']}>
            <div className={style['RegisterPageContent-block']}>
                <div className={style['RegisterContent-block-left']}>
                    <MainContentRegister />
                </div>
                <div className={style['RegisterPageContent-block-right']}> <TaskListImage/></div>
            </div>
            <Link to={'/'}>Main</Link>
            <Link to={'/login'}>login</Link>
            <Link to={'/task'}>task</Link>
        // </div>
    );
    };
export default RegisterPage