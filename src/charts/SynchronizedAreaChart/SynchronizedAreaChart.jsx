import React from 'react'
import { Paper, Typography } from '@mui/material'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const CustomTooltip = ({ active, payload, type }) => {
  if (active && payload && payload.length) {
    return (
      <Paper elevation={3} sx={{ padding: '8px' }}>
        <Typography fontWeight={600}>{`${payload[0].payload.name}`}</Typography>
        <Typography>{`${type}: ${payload[0].value}`}</Typography>
        <Typography>{`Валюта: гривня`}</Typography>
      </Paper>
    )
  }
  return null
}

const SynchronizedAreaChart = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 80,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip type="Доходи" />} />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{ margin: '50px 0' }} />

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip type="Витрати" />} />
          <Area
            type="monotone"
            dataKey="expense"
            stroke="#f75f28"
            fill="#f75f28"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default SynchronizedAreaChart
