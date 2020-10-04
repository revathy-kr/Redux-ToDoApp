import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions/action';

const AddToDo = (props: any) => {
  let input: any;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        props.addToDo(input.value);
        input.value = '';
      }}>
        <input ref={node => input = node} style={{ marginLeft: "10px", marginRight: "2px" }} />
        <button type="submit">AddToDo</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToDo: (todo: string) => dispatch(addToDo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);