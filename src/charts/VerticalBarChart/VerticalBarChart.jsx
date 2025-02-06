import React from 'react'
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const VerticalBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        layout="vertical"
        width={400}
        height={80}
        data={data}
        margin={{
          top: 60,
          right: 40,
          bottom: 20,
          left: 40
        }}
      >
        <CartesianGrid stroke="#f5f5f5" width={10} />
        <XAxis type="number" />
        <YAxis
          dataKey="name"
          type="category"
          scale="band"
          tickLine={false}
          tick={({ x, y, payload }) => {
            return (
              <text x={x - 65} y={y + 35} fill="#666">
                {payload.value}
              </text>
            )
          }}
        />
        <Tooltip />
        <Bar dataKey="count" barSize={12} fill="#413ea0" />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default VerticalBarChart
