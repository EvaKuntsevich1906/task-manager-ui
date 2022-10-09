import style from './TasksShedule.module.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TaskSheduleItems from './TaskSheduleItems';


const TasksShedule = ({ tasks }) => {

    const { state } = useLocation();
    
    return (

        <div className={style['tasksShedule-content']}>

        <h1 className={style['tasksShedule-Tasks']}>Tasks: </h1>
         {tasks.length > 1 ? tasks.map((el,index)=> <TaskSheduleItems key={index} num={index} task={el} />) : null} 
       { console.log(`taskschedule ${tasks}`)}
    </div>
    )
}
export default TasksShedule;