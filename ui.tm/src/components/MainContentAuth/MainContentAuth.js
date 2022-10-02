import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import style from './MainContentAuth.module.css';
import request from '../../hooks/http.hooks';
import { auth } from '../../context/auth';
import { Link } from 'react-router-dom';

const MainContentAuth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const doRegister = () => {
        navigate("/register")
    }

    
    const doAuth = async () => {
        try {
            const response = await request('http://localhost:3001/api/users/auth', 'POST', { email: email, password: password })
            const { id,fullname } = response[0];
            auth.userid = id;
            if (!auth.userid) throw new Error("Вы не авторизировались в системе")
            else navigate("/task", {state: {id:id, fullname: fullname,  }});
        } catch (err) {
            console.log(err.message);
            alert("Такой учетной записи не существует")
        }
    }

    return (
        <main className={style['MainContentAuth']}>
            <h1 className={style['MainContentAuth-welcome-txt']}>Welcome back!</h1>
            <div className={style['MainContentAuth-form']}>
                <input placeholder='email' onChange={(event) => setEmail(event.target.value)} />
                <input placeholder='password' type="password" onChange={(event) => setPassword(event.target.value)} />
            <div className={style['MainContentAuth-form-button']} onClick={doAuth}> Continue</div>
            </div>
            <div className={style['create']}>
                <p className={style['question']}>Not a member?</p>
                <p className={style['new-account']} onClick={doRegister}>Create an account</p> 
            </div>
        </main>
    )
}

export default MainContentAuth;