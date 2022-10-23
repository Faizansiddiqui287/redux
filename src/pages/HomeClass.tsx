import React, {useState} from 'react';
import { connect } from 'react-redux'
import { addAction, deleteAction } from '../redux/reducers/TodoReducer';



const HomeClass = (props: any) => {
    const [task, setTask] = useState<string>('')
    
    const handleSubmit = () => {
        props.addData(task, props.todo.length + 1)
    }

    const handleDelete = (id: number) => {
        props.deleteData(id)
    }
    console.log('props', props)
    return (
        <>
            <div>
                <input type={"text"} value={task} onChange={(e) => setTask(e.target.value)} placeholder="task" />
                <button type='button' onClick={handleSubmit}>Submit</button>
            </div>
            {
                props.todo.map((item: any) => {
                    return <h2 key={item.id} onClick={() => handleDelete(item.id)}>{item.task}</h2>
                })
            }
        </>
    )
}


const mapStateToProps = (state: any) => {
    return {
        todo: state.todo,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addData: (t: string, l: number) => dispatch(addAction(t, l)),
        deleteData: (id: number) => dispatch(deleteAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeClass);
