import React from 'react';
import TaskLog from 'components/TabTask/TasksLog';
import { TaskChart } from 'components/TabTask/TasksChart';
import { withStyles, AppBar, Tabs, Tab } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    fontSize: '1rem',
  },
});

const TabTask = props => {
  const handleChange = (event, val) => {
    props.changeTab(val);
  };

  return (
    <div className="tab">
      <AppBar position="static" className="tab-header">
        <Tabs value={props.openTabNumber} onChange={handleChange}>
          <Tab label="TASKS LOG" className="tab-field-header" />
          <Tab label="TASKS CHART" className="tab-field-header" />
        </Tabs>
      </AppBar>
      {props.openTabNumber === 0 && (
        <TaskLog
          tasksLog={props.tasksLog}
          deleteTaskLog={props.deleteTaskLog}
        />
      )}
      {props.openTabNumber === 1 && (
        <TaskChart dataForChart={props.dataForChart} />
      )}
    </div>
  );
};

export default withStyles(styles)(TabTask);
