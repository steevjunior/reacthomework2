import React from "react";
import "./todo.css";
export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      title: props.title
    };
  }

  setEditMode = () => {
    this.setState({
      editing: true
    });
  };

  onChange = e => {
    let title = this.state.title;
    title = e.target.value;
    this.setState({ title });
  };

  onClickSave = () => {
    this.props.handleEdit(this.props.id, this.state.title);
    this.setState({
      editing: false
    });
  };

  renderItem(completed, id, title, handleChecked, handleDelete) {
    return (
      <li
        className="itemlist"
        style={{
          backgroundColor: completed ? "green" : "moccasin",
          color: completed ? "white" : "black",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          width: 300,
          marginBottom: "1vh"
        }}
        onDoubleClick={() => this.setEditMode()}
      >
        <div onClick={() => handleChecked(id)}>{title}</div>
        <button onClick={() => handleDelete(id)}>x</button>
      </li>
    );
  }

  renderEdit(completed) {
    return (
      <li
        style={{
          color: completed ? "red" : "black",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          width: 300,
          marginBottom: "1vh"
        }}
      >
        <input value={this.state.title} onChange={this.onChange} />
        <button onClick={this.onClickSave}>save</button>
      </li>
    );
  }

  render() {
    const {
      completed,
      id,
      title,
      handleChecked,
      handleDelete,
      handleEdit
    } = this.props;
    return this.state.editing
      ? this.renderEdit(completed, id, handleEdit)
      : this.renderItem(completed, id, title, handleChecked, handleDelete);
  }
}
