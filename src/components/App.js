import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import TaskList from './TaskList';
import AddTask from './AddTask';
import { setTasks, tasksError } from "../actions";

class App extends React.Component {

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('https://my-json-server.typicode.com/chwicklund/is322-project2/tasks')
      .then(response => {
        this.props.setTasks(response.data);
      }).catch(error => {
        this.props.tasksError();
      });
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <AddTask />
          </div>
          <div className="row">

            <div className="col-sm-3">
              <TaskList column="To-Do"/>
            </div>

            <div className="col-sm-3">
              <TaskList column="In-Progress"/>
            </div>

            <div className="col-sm-3">
              <TaskList column="Review"/>
            </div>

            <div className="col-sm-3">
              <TaskList column="Done"/>
            </div>

          </div>
        </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {

    errorMessage: state.errors.getTasks
  };
}

export default connect(mapStateToProps, { setTasks, tasksError })(App);