import * as React from 'react';
import Display from './Display';
import { toggleToDo } from '../actions/action';
import { connect } from 'react-redux';
import { Filter } from '../const/filterTypes';

class ToDo extends React.Component<IToDoProps, {}> {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  // public componentDidMount() {
  //   // this.props.getAllTodos();
  // }

  // public componentDidUpdate(prevProps, prevState) {
  //   if (this.props.todos.items !== prevProps.todos.items) {
  //     this.props.getAllTodos();
  //   }
  // }

  public render() {
    return (
      <div>
        <ul style={{ display: "table" }}>
          {this.props.todos && this.props.todos.map(todo =>
            <Display
              key={todo.ID}
              {...todo}
              onClick={() => this.props.toggleTodo(todo)}
              text={todo.Title}
              ID={todo.ID}
              delete={this.props.deleteToDo}
            />
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: todosSelector(state)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: todo => dispatch(toggleToDo(todo)),
  getAllTodos: dispatch(),
  deleteToDo: (Id) => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);

const todosSelector = (state) => {
  if (state.visibilityFilter === Filter.SHOW_ACTIVE) {
    return state.todos.filter((todo: any) => todo.Completed === false);
  } else if (state.visibilityFilter === Filter.SHOW_COMPLETED) {
    return state.todos.filter((todo: any) => todo.Completed === true);
  }
  return state.todos;
};

export interface IToDoProps {
  description?: string;
  todos?: any;
  toggleTodo?: (todos: any) => void;
  getAllTodos?: () => void;
  deleteToDo?: (ID: number) => void;
}