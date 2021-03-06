import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo, removeTodo, fetchTodos, createTodo, updateTodo } from './../../actions/todo_actions'
import { allTodos } from './../../reducers/selectors';

const mapStateToProps = state => ({
    todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: todo => dispatch(createTodo(todo)),
    updateTodo: todo => dispatch(updateTodo(todo))
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps);
const connectedComponentResults = connectedComponent(TodoList);

export default connectedComponentResults;

//or
//export default connect(mapStateToProps, mapDispatchToProps)(TodoList)