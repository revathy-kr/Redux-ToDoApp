import React from 'react';

class Display extends React.Component<IDisplayToDoProps, IDisplayToDoState> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div style={{ display: "table-row" }}>
      <li key={this.props.id}>
        <span onClick={this.props.onClick}
          style={{
            display: "table-cell",
            textDecoration: this.props.completed ? 'line-through' : 'none'
          }}>
          {this.props.text}
        </span>
        {/* <span style={{ display: "table-cell" }}>
          <IconButton
            // className={`${styles.headerBtn}`}
            iconProps={{
              iconName: "Delete"
            }}
            onClick={() => this._showDialog()}
          />
        </span> */}
      </li>
    </div>
    );
  }
}

export default Display;


export interface IDisplayToDoProps {
  onClick: () => void;
  completed?: boolean;
  text: string;
  id: number;
  delete: (Id) => void;
}

export interface IDisplayToDoState {
  hideDialog: boolean;
}