import { useState } from "react"
import UI from "../Components/UI"
import './TaskList.css'


const TaskList = () => {
    const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem('task') || []))
    const saveTasks = (updTasks) => {
        localStorage.setItem('task',JSON.stringify(updTasks))
        setTasks(updTasks)   
    }
    const complete = (index) => {
        const updateTasks = [...tasks]
        updateTasks[index].completed = !updateTasks[index].completed
        saveTasks(updateTasks)
        console.log(updateTasks[index].completed)
    }
    return(
        <>
            <UI/>
            <div className="bigBoy">
                <div className="TaskMain">
                    { tasks ? 
                        (<ul className="toAlign">
                            {tasks.map((task,index) => (
                                <li key={index}>
                                    {task}
                                    <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => complete(index)}
                                    />
                                </li>
                            ))}
                        </ul>) : 
                        <h1>No tasks</h1>
                    }
                </div>
            </div>
        </>
    )
}

export default TaskList