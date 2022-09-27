import style from './ToDo.module.css';

const ToDo = () => {

    return (
        <div className={style['toDo-content']}>

            <p className={style['toDo-headline']}>To do:</p>

            <div className={style['toDo-form-block']}>

                <div className={style['toDo-form']}>
                    <p className={style['toDo-form-txt']}>Create:</p>
                    <input className={style['toDo-create-del-inp']} placeholder="   task"></input>
                </div>

                <div className={style['toDo-form']}>
                    <p className={style['toDo-form-txt']}>Update:</p>
                    <div className={style['toDo-form-update-two-inp']}>
                        <input className={style['toDo-upd-inp']} placeholder="   Number"></input>
                        <input className={style['toDo-upd-inp']} placeholder="   task"></input>
                    </div>
                </div>

                <div className={style['toDo-form']}>
                    <p className={style['toDo-form-txt']}>Delete:</p>
                    <input className={style['toDo-create-del-inp']} placeholder="   Number"></input>
                </div>
            </div>

            <div className={style['toDo-save-btn']}>
                <p className={style['']}>+ save </p>
            </div>
        </div>
    );
}

export default ToDo;