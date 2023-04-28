import { useState } from 'react'

import './Global.css'
import { Header } from './components/Header'
import { Task } from './components/Task'

export interface Itask {
  id:string;
  title:string;
  isCompleted: boolean
}

function App() {
  
  const [tasks, setTasks] = useState<Itask[]>([
    {
      id:'teste',
      title:'teste',
      isCompleted:true,
    },
    {
      id:'ashdas',
      title:'teste',
      isCompleted:false,
    },
    {
      id:'sahdasdasd',
      title:'teste',
      isCompleted:true,
    },
    {
      id:'dasdasdasd',
      title:'teste',
      isCompleted:true,
    }
  ]);

  function addTask(taskTitle:string) {
    setTasks([
      ...tasks,
      {
        id:crypto.randomUUID(),
        title:taskTitle,
        isCompleted:false,
      }
    ])
  }

  function deleteTaskById(taskId:string) {
    const newTask = tasks.filter((tasks)=> tasks.id != taskId);
    setTasks(newTask);
  }

  function toogleTaskCompletedById(taskId : string) {
    const newTasks = tasks.map( task =>{
      if(task.id === taskId) {
        return {
          ...task, 
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    });
    setTasks(newTasks);

  }

  return (
    <>
      <Header
        onAddTask= {addTask}
      />
      <Task
        tasks={tasks}
        onDelete = {deleteTaskById}
        onComplete = {toogleTaskCompletedById}
      />
    </>
  )
}

export default App
