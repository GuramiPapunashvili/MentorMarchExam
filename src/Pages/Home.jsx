import { useEffect, useState } from "react";
import UI from "../Components/UI";
import './Home.css'

const Home = () => {
    const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem('task') || []))
    const [task,setTask] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTasks = [...(JSON.parse(localStorage.getItem('task'))|| []),task]
        localStorage.setItem('task', JSON.stringify(newTasks))
        setTasks(JSON.parse(localStorage.getItem('task')) || [])
    }

    useEffect (() => {
        
    },[tasks])

    const saveTasks = (updTasks) => {
        localStorage.setItem('task',JSON.stringify(updTasks))
        setTasks(updTasks)
    }

    const editTask = (i,newTask) => {
        const updatedTasks = [...tasks];
        updatedTasks[i] = newTask;
        saveTasks(updatedTasks)
    }

    const deleteTask = (i) => {
        const updatedTasks = tasks.filter((_,index) => index !== i)
        saveTasks(updatedTasks)
    }

    return (
        <>
            <UI/>
            <div className="bigBoy">
                <div className="APIMain">
                    <form className="bigForm">
                        <input type="text" placeholder="please enter your task..." onChange = {(e) => setTask(e.target.value)}/>
                        <button onClick={handleSubmit}>Confirm</button>
                    </form>
                    <ul className="toAlign">
                        {tasks.map((task,index) => (
                            <li key={index} className="toAlign">
                                {task}
                                <input type="text" placeholder="enter the text to edit..." onChange = {(e) => editTask(index,e.target.value)}/>
                                <button onClick={() => deleteTask(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
        
    )
}

export default Home;