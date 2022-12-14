import { useNavigate } from 'react-router-dom';
import style from './MainContent.module.css';


const MainContent = () => {
    const navigate = useNavigate();
    const startFunc = () => {
        navigate("/login")  
    }

    return (
        <main className={style['main']}>
            <div className={style['text-main-maincontent']}>

                <div className={style['headline-main-maincontent']}>Task Management &
                    To-Do List</div>

                <div className={style['headline-text-main-maincontent']}>This productive tool is designed to help
                    you better manage your tas conveniently!</div>
                <div className={style['start-btn-main-maincontent']}>

                    <div className={style['text-arrow-main-maincontent']} onClick={startFunc} >
                        <div className={style['start-btn-text-main-maincontent']}>Let’s Start</div>
                        <div className={style['start-btn-arrow-main-maincontent']}>
                        </div>
                    </div>
   
            
                </div>
            </div>
            <div className={style['wave-image-footer-maincontent']}></div>
            <div className={style['image-main-maincontent']}> </div>

        </main>
    )
}

export default MainContent