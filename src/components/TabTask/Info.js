import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dateFormat, isNumeric } from 'functions';
import { stylesInfo } from 'styles';
import {
  Grid,
  Paper,
  Typography,
  Button,
  withStyles,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const Info = props => {
  const {
    classes,
    tasksLog,
    match: {
      params: { id },
    },
  } = props;

  return (
    <Grid container alignItems="center" justify="center" direction="column">
      <Grid item>
        <Link to={'/timer/'}>
          <Button variant="contained" className={classes.button}>
            <Icon className={classes.leftIcon}>
              <i className="fas fa-long-arrow-alt-left" />
            </Icon>
            HOME
          </Button>
        </Link>
        <Paper className={classes.root} elevation={1}>
          {(!isNumeric(id) || id <= 0 || id > tasksLog.length) && (
            <Typography variant="headline" gutterBottom>
              This page does not exist!
            </Typography>
          )}
          {isNumeric(id) &&
            id > 0 &&
            id <= tasksLog.length && (
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Task</TableCell>
                    <TableCell>Time start</TableCell>
                    <TableCell>Time end</TableCell>
                    <TableCell>Time spend</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={id}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.wrap}
                    >
                      {tasksLog[id - 1].taskName}
                    </TableCell>
                    <TableCell>
                      {dateFormat(tasksLog[id - 1].dateStart)}
                    </TableCell>
                    <TableCell>
                      {dateFormat(tasksLog[id - 1].dateEnd)}
                    </TableCell>
                    <TableCell>{tasksLog[id - 1].countTimer}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ tab: { tasksLog } }) => ({ tasksLog });

export default connect(mapStateToProps)(withStyles(stylesInfo)(Info));
