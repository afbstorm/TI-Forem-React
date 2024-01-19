import PropTypes from 'prop-types';

const List = (props) => {

    const { taskList } = props;

    return (
        <section>
            {taskList.map((list) => (
                <div key={list.id}>
                    <h4>{list.title}</h4>
                    <p>{list.task}</p>
                    <p>{list.completed}</p>
                </div>
            ))}
        </section>
    )
}

List.propTypes = {
    taskList: PropTypes.array
}

export default List;

