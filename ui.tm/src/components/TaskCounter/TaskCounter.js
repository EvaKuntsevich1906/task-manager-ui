import style from './TaskCounter.module.css';

const TaskCounter = ({name}) => {
    console.log(name);

    return (
        <div className={style['taskCounter-content']}>
            <p className={style['taskCounter-text']}>Tasks Manager</p>
            <p className={style['taskCounter-description']}> Hello {name}! Add new tasks
                with task manager from Hschool</p>
            <div className={style['taskCounter-list']}>
                <div className={style['taskCounter-date-icon']}></div>
                <div className={style['taskCounter-date-number']}>12</div>
            </div>
        </div>
    );
}

export default TaskCounter;