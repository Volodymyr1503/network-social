import uLocale from "@utils/locales/ua"
import { getFormattedDate } from '@utils/handlers'
import uaLocale from 'dayjs/locale/uk'

const { monthlyOverview } = uLocale.dashboard.tasks

const rangeChartData = [
  {
    label: 'Домашні справи',
    data: { progress: 57, tasks: 21, start: '2021-03-21', end: '2024-03-21' },
  },
  {
    label: 'Робота',
    data: { progress: 31, tasks: 80, start: '2021-03-21', end: '2024-03-21' },
  },
  {
    label: 'Самоосвіта',
    data: { progress: 77, tasks: 23, start: '2021-03-21', end: '2026-03-21' },
  }
]

const data = [
  {
    name: getFormattedDate('2024-10-02', uaLocale),
    open: 40,
    completed: 24,
    inProgress: 24
  },
  {
    name: getFormattedDate('2024-10-07', uaLocale),
    open: 30,
    completed: 13,
    inProgress: 22
  },
  {
    name: getFormattedDate('2024-10-13', uaLocale),
    open: 20,
    completed: 98,
    inProgress: 22
  },
  {
    name: getFormattedDate('2024-10-19', uaLocale),
    open: 27,
    completed: 39,
    inProgress: 20
  },
  {
    name: getFormattedDate('2024-10-23', uaLocale),
    open: 18,
    completed: 48,
    inProgress: 21
  },
  {
    name: getFormattedDate('2024-10-27', uaLocale),
    open: 23,
    completed: 38,
    inProgress: 25
  },
  {
    name: getFormattedDate('2024-10-30', uaLocale),
    open: 34,
    completed: 43,
    inProgress: 21
  }
]

const layoutData = [
  {
    chartName: 'RangeChart',
    style: {
      height: '200px',
      width: '100%'
    },
    children: [
      ...rangeChartData
    ]
  },
  {
    chartName: 'StackedAreaChart',
    label: monthlyOverview,
    data,
    style: {
      height: '500px',
      width: '100%'
    }
  }
]

export default {
  layoutData
}