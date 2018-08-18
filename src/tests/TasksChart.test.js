import { dataForTaskChart } from 'functions'
import { dataForChart, taskLog } from 'constsForTest'

it('Should build an array for the graph from the table', () => {
  expect(dataForTaskChart(taskLog)).toEqual(dataForChart)
})
