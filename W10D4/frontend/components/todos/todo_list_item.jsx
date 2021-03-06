import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';
import resizeBackground from './../../util/resizeBackground';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: false
        };
    }

    componentDidUpdate() {
        resizeBackground();
    }

    updateTodo() {
        const updatedTodo = Object.assign({}, this.props.todo);
        updatedTodo.done = !updatedTodo.done;
        this.props.receiveTodo(updatedTodo);
    }

    showDetails(event) {
        event.preventDefault();
        this.setState({detail: !this.state.detail});
    }
    
    render() {
        return (
            <div className="todo-list-item">
                <div className="show-todo-item">
                    <li onClick={this.showDetails.bind(this)} title={this.props.todo.title}>{this.props.todo.title}</li>
                    <button onClick={this.updateTodo.bind(this)}>{this.props.todo.done ? "Done" : "Undo"}</button>
                </div>
                {this.state.detail ? <TodoDetailViewContainer todo={this.props.todo} /> : ""}
            </div>
        );
    }
};

export default TodoListItem;