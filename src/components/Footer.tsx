import React from 'react';
import { setVisibilityFilter } from '../actions/action';
import { connect } from 'react-redux';
import { Filter } from '../const/filterTypes';

class Footer extends React.Component<IFooterProps>{
  constructor(props) {
    super(props);
  }
  public render() {
    return (
      <div>
        <span style={{ marginLeft: "10px" }}>Show: </span>
        <button onClick={() => this.props.filterList(Filter.SHOW_ALL)} style={{ marginLeft: '2px' }}> All</button>
        <button onClick={() => this.props.filterList(Filter.SHOW_ACTIVE)} style={{ marginLeft: '2px' }}> Active</button>
        <button onClick={() => this.props.filterList(Filter.SHOW_COMPLETED)} style={{ marginLeft: '2px' }}> Completed</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  filterList: (filter: string) => dispatch(setVisibilityFilter(filter))
});


export default connect(mapStateToProps, mapDispatchToProps)(Footer);

export interface IFooterProps {
  filterList: (filter: string) => void;
}
