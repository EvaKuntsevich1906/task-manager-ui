
import style from './MainContentAuth.module.css';

const MainContentAuth = () => {
    return (
        <main className={style['MainContentAuth']}>
            <h1 className={style['MainContentAuth-welcome-txt']}>Welcome back!</h1>
            <div className={style['MainContentAuth-form']}>
                <input placeholder='   email' />
                <input placeholder='   password' type = "password" />
                <div className={style['MainContentAuth-form-button']}> Continue</div>
            </div>

        </main>
    )
}

export default MainContentAuth;