import style from './TasksShedule.module.css';

const TaskSheduleItems = ({num, task}) => {
 
    return (
        <>
        <p>{num + 1}.{task}</p>
        </>
    )
}

export default TaskSheduleItems;