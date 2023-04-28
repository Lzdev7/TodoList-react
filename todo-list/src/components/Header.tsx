import logo from "../assets/rocket.svg"
import styles from './Header.module.css';
import {ChangeEvent, FormEvent, useState} from 'react';

interface Props {
    onAddTask: (taskTitle:string) => void;
}

export function Header({onAddTask} : Props) {

    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent){
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        
        setTitle(event.target.value);
    }

    return (
        <>
            <div>
                <header className={styles.header}>
                    <span><img src={logo}  /></span>
                    <h1>to<span>do</span></h1>
                </header>

                <div>

                        <form onSubmit={handleSubmit}>
                        <div className={styles.container}>
                            <input type="text"  className={styles.ageTask}
                            placeholder='Adicione uma tarefa'
                            onChange={onChangeTitle}
                            value={title}
                            />
                            
                            <button className={styles.buttoCreateTask}>Criar <span>+</span></button>
                        </div>
                        </form>
                    </div>

            </div>
        </>
    )
}