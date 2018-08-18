import React from 'react'
import moment from 'moment/moment'
import { fieldsTasksLog } from 'constFields'
import { connect } from 'react-redux'
import { tab } from 'actions/actionTab'
import { Link } from 'react-router-dom'
import { stylesTasksLog } from 'styles'
import {
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@material-ui/core'
import PropTypes from 'prop-types'

const TaskLog = props => {
  const { classes, tasksLog, changeTasksLog } = props

  const deleteTaskLog = ind => {
    const newTasksLog = tasksLog.filter((item, i) => {
      return ind !== i
    })
    changeTasksLog(newTasksLog)
  }

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
            <TableRow key={i} className={classes.rowTasksLog} hover>
              <TableCell className={classes.cellTasksLog}>{i + 1}</TableCell>
              {Object.keys(item).map((el, j) => (
                <TableCell key={j} className={classes.cellTasksLog}>
                  {el === fieldsTasksLog.dateStart ||
                  el === fieldsTasksLog.dateEnd
                    ? moment(item[el]).format('HH:mm:ss')
                    : item[el]}
                </TableCell>
              ))}
              <TableCell className={classes.cellTasksLog}>
                <Link to={`/tasks/${i + 1}`}>
                  <Button
                    size='small'
                    variant='outlined'
                    color='inherit'
                    className={classes.buttonTable}
                  >
                    INFO
                  </Button>
                </Link>
              </TableCell>
              <TableCell className={classes.cellTasksLog}>
                <Button
                  size='small'
                  variant='outlined'
                  onClick={() => deleteTaskLog(i)}
                  color='inherit'
                  className={classes.buttonTable}
                >
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

const mapStateToProps = ({ tab: { tasksLog } }) => ({ tasksLog })

const mapDispatchToProps = {
  changeTasksLog: tab.tasksLog
}

TaskLog.propTypes = {
  classes: PropTypes.object,
  tasksLog: PropTypes.array,
  changeTasksLog: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(stylesTasksLog)(TaskLog))
