import { Itask } from '../App';
import styles from './Task.module.css';
import { Tasks } from './Tasks';

interface Props {
  tasks: Itask[];
  onDelete: (taskId : string) => void;
  onComplete : ( taskId : string) => void;
}

export function Task({ tasks, onDelete , onComplete } : Props) {

    const tasksQuatity = tasks.length;
    const completedTasks = tasks.filter((task)=> task.isCompleted).length;
    
  return (
    <>

      <div className={styles.containerTaskValue}>
                    <div className={styles.taskCreate}>
                        <p>Tarefas criadas</p>
                        <span>{tasksQuatity}</span>
                    </div>
                    <div className={styles.taskCompleted}>
                        <p>Concluidas</p>
                            <div className={styles.taskCompletedTotal}>
                                <span>{completedTasks}</span>
                                <span>de</span>
                                <span>{tasksQuatity}</span>
                            </div> 
                          
                    </div>
                </div>

      <div className={styles.task}>
          {tasks.map((task)=>(
            <Tasks key={task.id} task={task} onDelete={onDelete} onComplete={onComplete}/>
          ))}
      </div>
    </>
  )
}