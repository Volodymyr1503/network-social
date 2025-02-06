import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const StatusTextMap = {
  open: 'Відкритих',
  completed: 'Зроблених',
  inProgress: 'В процесі'
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid #ccc',
          padding: '10px'
        }}
      >
        <p>{`Дата: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${StatusTextMap[entry.name]}: ${entry.value}`}
          </p>
        ))}
      </div>
    )
  }

  return null
}

//TODO: When reusable components are ready:
//1. Add Dropdown with ability to project selecting to show data with tasks for it
//2. Add Picker with ability to period selecting to show data with tasks for it

const StackedAreaChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 80,
          right: 50,
          left: 10,
          bottom: 20
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="open"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="completed"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="inProgress"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default StackedAreaChart
