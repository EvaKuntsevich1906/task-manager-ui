import { useState } from 'react';
import style from './MainContentRegister.module.css';
import request from '../../hooks/http.hooks';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MainContentRegister = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dbpassword, setDbPassword] = useState('');
    const navigate = useNavigate();

    const doRegistr = async () => {
        try {

            const checkName = (fullName) => {
                if (fullName.length === 0) throw new Error(`Вы не ввели имя`);
                return true
            }

            const checkEmail = (email) => {
                if (email.length === 0) throw new Error(`Вы не ввели электронную почту`);
                if (!/^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,6}$/g.test(email)) throw new Error(`Некорректно введен адрес электронной почты`)
                return true
            }

            const checkPassword = (password, dbpassword) => {
                if (password.length <= 7 && dbpassword.length <= 7) throw new Error(`Пароль содержит недостаточное количество символов`);
                if (password !== dbpassword) throw new Error(`Введенные пароли не совпадают`);
                return true
            }
            if (checkName(fullName) && checkEmail(email) && checkPassword(password, dbpassword)) {

            const response = await request('http://localhost:3001/api/users/registr', 'POST', { fullName: fullName, email: email, password: password })
            }

        } catch (err) {
            console.log(err.message);
        }
    }


    const doLogin = () => {
            navigate("/login")  
    }
    return (
        <main className={style['MainContentRegister']}>

            <div className={style['MainContentRegister-info']}>

                <div className={style['MainContentRegister-signIn']}>
                    <span className={style['MainContentRegister-txt']}>Already have an account?</span>
                     <span className={style['MainContentRegister-btn']} onClick={doLogin}> Sign In</span>
                </div>

                <div className={style['MainContentRegister-txt-welcome']}>
                    <span className={style['MainContentRegister-txt-welcomeTO']}> Welcome to </span>
                    <span className={style['MainContentRegister-txt-hschool']}> Hschool </span>
                </div>

                <div className={style['MainContentRegister-txt-weekplan']}>Join and plan your week with Hschool</div>
            </div>

            <div className={style['MainContentRegister-form']}>

                <input placeholder='  FullName' onChange={(event) => setFullName(event.target.value)} />
                <input placeholder='  Email Adress' onChange={(event) => setEmail(event.target.value)} />
                <input placeholder='  Password' type="password" onChange={(event) => setPassword(event.target.value)} />
                <input placeholder='  Confitm Password' type="password" onChange={(event) => setDbPassword(event.target.value)} />

                <div className={style['MainContentRegister-form-button']} onClick={doRegistr}>
                    <p>Create an account</p></div>
            </div>

        </main>
    )
}

export default MainContentRegister;

