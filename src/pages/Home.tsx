import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { addAction, deleteAction } from '../redux/reducers/TodoReducer';



const Home = () => {
    const [task, setTask] = useState<string>('')
    const todo = useSelector((state: any) => state.todo)

    const dispatch = useDispatch();
    
    const handleSubmit = () => {
        dispatch(addAction(task, todo.length + 1))
    }

    const handleDelete = (id: number) => {
        dispatch(deleteAction(id))
    }
    console.log(todo)
    return (
        <>
            <div>
                <input type={"text"} value={task} onChange={(e) => setTask(e.target.value)} placeholder="task" />
                <button type='button' onClick={handleSubmit}>Submit</button>
            </div>
            {
                todo.map((item: any) => {
                    return <h2 key={item.id} onClick={() => handleDelete(item.id)}>{item.task}</h2>
                })
            }
        </>
    )
}

export default Home;
