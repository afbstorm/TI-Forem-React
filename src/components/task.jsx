import { useState } from 'react';
import { nanoid } from 'nanoid';
import List from './list';

const listItems = [
    {id: nanoid(), title: 'Formation', task: 'Prepare a React course', completed: false},
    {id: nanoid(), title: 'Hobby', task: 'Play some BG3', completed: false},
    {id: nanoid(), title: 'Laundry', task: 'Do the laundry', completed: false},
]

const Task = () => {

    const [list, setList] = useState(listItems);

    return (
        <List taskList={list} />
    )
}

export default Task;