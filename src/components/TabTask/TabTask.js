import React from 'react';
import TaskLog from 'components/TabTask/TasksLog';
import TaskChart from 'components/TabTask/TasksChart';
import { AppBar, Tabs, Tab, withStyles } from '@material-ui/core';
import { Route } from 'react-router'
import { tabs } from 'consts'
import { stylesTab } from "styles";

const TabTask = props => {
  const handleChange = (event, val) => {
    props.history.push(`/app/${val}`);
  };

  const tabName = props.match.params.name;
  const { classes } = props;

  if (!tabName || ![tabs.tasksLog, tabs.tasksChart].includes(tabName)) {
    props.history.push('/app/tasks-log');
    return null
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Tabs value={tabName} onChange={handleChange}>
          <Tab label="TASKS LOG" className={classes.fieldHeader} value='tasks-log'/>
          <Tab label="TASKS CHART" className={classes.fieldHeader} value='tasks-chart'/>
        </Tabs>
      </AppBar>
      <Route exact path='/app/tasks-log' component={TaskLog} />
      <Route exact path='/app/tasks-chart' component={TaskChart} />
    </div>
  );
};

export default withStyles(stylesTab)(TabTask);
