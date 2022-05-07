import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class AddTask extends React.Component {
  state = { newTask: '' }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.addTask(this.state.newTask);
    this.setState({ newTask: '' })
  }

  render() {
    return (
      <form className="task-input form-group" onSubmit={this.onFormSubmit}>
        <label htmlFor="newTask">Enter New Task</label>
        <input type="text" className="form-control"
               name="newTask"
               value={this.state.newTask}
               onChange={(e) => this.setState({ newTask: e.target.value })} />
          <select name="column-type"
                  value={this.state.newTask}
                  onChange={(e) => this.setState({ newTask: e.target.value })}>
          <option value="todo">To-Do</option>
          <option value="inp">In-Progress</option>
          <option value="review">Review</option>
          <option value="done">Done</option>
      </select>

      </form>
    );
  }
}

export default connect(null, { addTask })(AddTask);