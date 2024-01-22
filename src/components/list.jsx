import PropTypes from 'prop-types';

const List = (props) => {

    const { taskList, deleted } = props;

    return (
        <section>
            {taskList.map((list) => (
                <div key={list.id}>
                    <h4>{list.title}</h4>
                    <p>{list.task}</p>
                    <p>{list.completed}</p>
                    <button onClick={() => deleted(list.id)}>Deleted task</button>
                </div>
            ))}
        </section>
    )
}

List.propTypes = {
    taskList: PropTypes.array,
    deleted: PropTypes.func
}

export default List;

