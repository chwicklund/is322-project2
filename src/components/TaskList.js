import React from 'react';
import { connect } from 'react-redux';
import { markDone } from '../actions';

import TaskItem from './TaskItem';
import AddTask from "./AddTask";

class TaskList extends React.Component {

  markDone = (task) => {
    this.props.markDone(task.id);
  }

  render() {
    const { title, column } = this.props;
    const taskItems = this.props.tasks.filter(taskItem => taskItem.columns = column).map(task => {
      return <TaskItem  task={task} key={task.id} markDone={this.markDone} />
    });

    return (
        <div className="card">
          <h3>{column}</h3>
          <ul className="task-list list-group">
              { taskItems }
          </ul>
        </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks

  };
}

export default connect(mapStateToProps, { markDone })(TaskList);

/*
{taskItems.filter(taskItem => taskItem.column == column).map(filteredTask => (
                  <li>
                      {filteredTask.title}
                  </li>
              ))}
 */