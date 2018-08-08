import React from 'react';
// import { TaskLog } from "components/TabTask/TasksLog";
// import { TaskChart } from "components/TabTask/TasksChart";
// import PropTypes from 'prop-types';
import { withStyles, AppBar, Tabs, Tab, Typography } from '@material-ui/core';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

const TabTask = props => {
  let value = 0;

  const handleChange = (event, val) => {
    console.log(val);
    value = val;
  };

  const { classes, openTabNumber } = props;

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Item One</TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
    </div>
  );
};

export default withStyles(styles)(TabTask);
