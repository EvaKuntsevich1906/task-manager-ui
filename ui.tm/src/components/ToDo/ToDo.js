import style from './ToDo.module.css';

const ToDo = () => {
    return (
        <div className={style['wrapper']}>
            <p className={style['label']}>To do:</p>
            <div className={style['block-flex-column']}>

                <div className={style['block-flex-column']}>
                    <p>Create:</p>
                    <div>
                        <input placeholder='task' />
                    </div>
                </div>

                <div className={style['block-flex-column']}>
                    <p>Update:</p>
                    <div className={style['flex']}>
                        <div>
                            <input placeholder='Number' />
                        </div>
                        <div>
                            <input placeholder='task' />
                        </div>
                    </div>
                </div>

                <div className={style['block-flex-column']}>
                    <p>Delete:</p>
                    <div>
                        <input placeholder='Number' />
                    </div>
                </div>

            </div>
            <div className={style['save-btn']}> +  save</div>
        </div>
    );
}

export default ToDo;