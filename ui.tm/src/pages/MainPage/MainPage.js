import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './MainPage.module.css';
import MainContent from "../../components/MainContent/MainContent";
import { Link } from 'react-router-dom';
const MainPage = () => {

    return (
        <div className={style['main-page']}>
            <Header />
            <MainContent></MainContent>

            <Footer />
            <Link to={'/'}>Main</Link>
            <Link to={'/register'}>register</Link>
            <Link to={'/login'}>login</Link>
            <Link to={'/task'}>task</Link>
        </div>
    );
};

export default MainPage;