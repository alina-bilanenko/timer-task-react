import React from 'react';
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core';
import { stylesTasksChart } from "styles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const TaskChart = ({ dataForChart, classes }) => {
  return (
    <div className={classes.root}>
      <BarChart
        width={1200}
        height={400}
        data={dataForChart}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis dataKey="name" />
        <YAxis ticks={[0, 15, 30, 45, 60]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#3450c7" name="Minutes in this hours" />
      </BarChart>
    </div>
  );
};

const mapStateToProps = ({ tab: {dataForChart} }) => ({dataForChart});

export default connect(
  mapStateToProps,
)(withStyles(stylesTasksChart)(TaskChart));