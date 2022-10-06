import { Link } from 'react-router-dom';
import style from './Header.module.css';
import HeaderItem from './HeaderItem';


const Header = () => {

    const link = [`contact`, `En`];
    if (window.location.href === "http://localhost:3000/") {

        return (

            <header className={style['header']}>

                <h1 className={style['logo-header']}>Hschool</h1>

                <div className={style['header-nightmode']}></div>

                <div className={style['header-contact-flex']}>
                    {link.map((el, index) => <HeaderItem key={index} title={el} />)}</div>

                <div className={style[`authorization`]}>
                    <div className={style['header-signup-button']}>
                        <p className={style['header-sign-text']}>Sign Up</p>
                    </div>

                    <div className={style['header-login-button']}>
                        <p className={style['header-login-text']}>Login</p>
                    </div>
                </div>

            </header>
        )
    } else {
        return (<header className={style['header']}>

            <h1 className={style['logo-header']}>Hschool</h1>

            <div className={style[`logout`]}>
                <div className={style['header-logout-button']}>
                    <p className={style['header-logout-text']}>Sign Up</p>
                </div>
            </div>

        </header>
        )
    }
}

export default Header;