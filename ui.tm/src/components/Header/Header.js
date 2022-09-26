
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style['header']}>
            <h1 className={style['logo-header']}>Hschool</h1>

            <div className={style['header-buttons']}>
                <div className={style['header-nightmode']}></div>
                <p className={style['header-contact']}>contact</p>

                <div className={style['header-lng']}>
                    <div className={style['header-globe']}></div>
                    <div className={style['header-language']}>En</div>
                </div>

                <div className={style['header-signup-button']}>
                    <p className={style['header-sign-text']}>Sign Up</p>
                </div>
                <div className={style['header-login-button']}>
                    <p className={style['header-login-text']}>Login</p>
                </div>
            </div>

        </header>
    )
}

export default Header