import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import style from './MainContentAuth.module.css';
import request from '../../hooks/http.hooks';
import { auth } from '../../context/auth';
const MainContentAuth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const doAuth = async () => {
        try {
            const response = await request('http://localhost:3001/api/users/auth', 'POST', { email: email, password: password })
            if (isAuth)
            if (response.length >0) navigate('/task')
            else alert(response)
        } catch (err) {
            console.log(err.message);
        }
    }
    return (

        <main className={style['MainContentAuth']}>
            <h1 className={style['MainContentAuth-welcome-txt']}>Welcome back!</h1>
            <div className={style['MainContentAuth-form']}>
                <input placeholder='   email' onChange={(event) => setEmail(event.target.value)} />
                <input placeholder='   password' type="password" onChange={(event) => setPassword(event.target.value)} />
                <div className={style['MainContentAuth-form-button']} onClick={doAuth}> Continue</div>
            </div>

        </main>
    )
}

export default MainContentAuth;