import { useState } from 'react';
import { nanoid } from 'nanoid';
import List from './list';
import Form from './form';

const listItems = [
    {id: nanoid(), title: 'Formation', task: 'Prepare a React course', completed: false},
    {id: nanoid(), title: 'Hobby', task: 'Play some BG3', completed: false},
    {id: nanoid(), title: 'Laundry', task: 'Do the laundry', completed: false},
]

const Task = () => {

    const [list, setList] = useState(listItems);

    const handleDelete = (id) => {
        const updatedList = list.filter(item => item.id !== id);
        setList(updatedList);
    }

    const handleUpdate = (val) => {
        setList([...list, val])
    }

    return (
        <>
            <Form updateList={handleUpdate} />
            <List taskList={list} deleted={handleDelete} />
        </>
    )
}

export default Task;