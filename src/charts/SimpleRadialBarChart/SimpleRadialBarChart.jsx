import React from 'react'
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer
} from 'recharts'

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '36px'
}

const SimpleRadialBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={12}
        data={data}
      >
        <RadialBar minAngle={8} background clockWise dataKey="uv" />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default SimpleRadialBarChart
