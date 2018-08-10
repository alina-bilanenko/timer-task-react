import React from 'react';
import {
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@material-ui/core';
import moment from 'moment/moment';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 0,
    overflowX: 'auto',
    boxShadow: 'inherit',
    borderRadius: 'inherit'
  },
  table: {
    minWidth: 700,
    color: '#1155cc'
  },
});

const TaskLog = (props) => {
  const { classes, tasksLog, deleteTaskLog } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Time start</TableCell>
            <TableCell>Time end</TableCell>
            <TableCell>Time spend</TableCell>
            <TableCell>Info</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasksLog.map((item, i) => (
            <TableRow key={i} className='row-tasks-log' hover>
              <TableCell>{i + 1}</TableCell>
              {Object.keys(item).map((el, j) => (
                <TableCell key={j}>{
                  moment.isMoment(item[el])
                    ? item[el].format('HH:mm:ss')
                    : item[el]
                }</TableCell>
              ))}
              <TableCell>
                <Button
                  size="small"
                  variant="outlined"
                  //onClick={timer.buttonText ? onClickStart : onClickStop}
                  color="inherit"
                  className='button-table'
                >
                  INFO
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => deleteTaskLog(i)}
                  color="inherit"
                  className='button-table'
                >
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(TaskLog);
