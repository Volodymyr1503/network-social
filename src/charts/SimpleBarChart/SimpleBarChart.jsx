import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { getFormattedDate } from '@utils/handlers'
import uaLocale from 'dayjs/locale/uk'

const data = [
  {
    name: getFormattedDate('2024-10-02', uaLocale),
    bmi: 32,
    distance: 3,
    trainingTime: 3
  },
  {
    name: getFormattedDate('2024-10-07', uaLocale),
    bmi: 31,
    distance: 5,
    trainingTime: 3
  },
  {
    name: getFormattedDate('2024-10-13', uaLocale),
    bmi: 30,
    distance: 8,
    trainingTime: 4
  },
  {
    name: getFormattedDate('2024-10-19', uaLocale),
    bmi: 30,
    distance: 8,
    trainingTime: 3
  },
  {
    name: getFormattedDate('2024-10-23', uaLocale),
    bmi: 28,
    distance: 18,
    trainingTime: 3
  },
  {
    name: getFormattedDate('2024-10-27', uaLocale),
    bmi: 26,
    distance: 16,
    trainingTime: 5
  },
  {
    name: getFormattedDate('2024-10-30', uaLocale),
    bmi: 24,
    distance: 20,
    trainingTime: 4
  }
]

const SimpleBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 90,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="distance" fill="#439DEE" />
        <Bar dataKey="bmi" fill="#63B967" />
        <Bar dataKey="trainingTime" fill="#E93B77" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default SimpleBarChart
