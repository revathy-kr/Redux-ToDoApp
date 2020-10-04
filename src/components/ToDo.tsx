import * as React from 'react';
import Display from './Display';
import { toggleToDo } from '../actions/action';
import { connect } from 'react-redux';
import Filter from '../const/filterTypes';

class ToDo extends React.Component<IToDoProps, {}> {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  // public componentDidMount() {
  //   // this.props.getAllTodos();
  // }

  public componentDidUpdate(prevProps, prevState) {
    console.log(this.props.todos);

    if (this.props.todos.items !== prevProps.todos.items) {
      console.log(this.props.todos);
      
      // this.props.getAllTodos();
    }
  }

  public render() {
    return (
      <div>
        <ul style={{ display: "table" }}>
          {this.props.todos && this.props.todos.map(todo =>
            <Display
              key={todo.id}
              {...todo}
              onClick={() => this.props.toggleTodo(todo.id)}
              text={todo.text}
              id={todo.id}
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
  toggleTodo: id => dispatch(toggleToDo(id)),
  // getAllTodos: dispatch(),
  deleteToDo: (Id) => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);

const todosSelector = (state) => {
  console.log("156456",state.visibilityFilter);

  if (state.visibilityFilter === Filter.SHOW_ACTIVE) {    
    return state.todos.filter((todo: any) => todo.completed === false);
  } else if (state.visibilityFilter === Filter.SHOW_COMPLETED) {
    return state.todos.filter((todo: any) => todo.completed === true);
  }
  return state.todos;
};

export interface IToDoProps {
  description?: string;
  todos?: any;
  toggleTodo: (id: number) => void;
  // getAllTodos?: () => void;
  deleteToDo?: (id: number) => void;
}