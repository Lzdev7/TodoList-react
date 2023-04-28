
import { Itask } from '../App';
import styles from './Tasks.module.css';

import trash from '../assets/trash.svg'

interface Props {
    task: Itask;
    onDelete: (taskId : string) => void;
    onComplete : ( taskId : string) => void;
}

export function Tasks({ task, onDelete , onComplete }: Props) {


    return (
        <>
            <div>

                <div className={styles.tasks}>
                         <div className={styles.ageTask}>
                            <button className={styles.buttonCheckedTask} onClick={()=> onComplete(task.id)}>
                                {task.isCompleted ? <h1 className={styles.confimedTask}>&#10003;</h1> : <div/>}
                            </button>
                            <div className={styles.contentTask}>
                                <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
                            </div>
                                <div className={styles.divTrash}>
                            <button onClick={()=> onDelete(task.id)}> 
                                <img src={trash} />
                            </button>
                                 </div>
                         </div>
                </div>

                </div>
            
        </>
    )
}