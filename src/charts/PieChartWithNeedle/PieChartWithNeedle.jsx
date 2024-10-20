import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import {
  Needle,
  Descriptions,
  RangeTypography,
  CurrentTypography,
  getAppropriateRangeColor,
  cx,
  cy
} from './data'

const PieChartWithNeedle = ({ data }) => {
  const { currentValue, min, max, type = '' } = data || {}
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const first = currentValue - min
    const second = max - currentValue
    const total = Math.floor((currentValue / max) * 100)

    setChartData([
      { name: 'a', value: first, color: getAppropriateRangeColor(total, type) },
      { name: 'b', value: second, color: '#E0E0E0' },
      { name: 'c', value: -1, color: '#00ff00' }
    ])
  }, [min, max, currentValue])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart style={{ position: 'relative' }}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={chartData}
          cx={`calc(100%-${cx}px)`}
          cy={cy}
          innerRadius={80}
          outerRadius={90}
          activeIndex={2}
          activeShape={<Needle value={currentValue} data={chartData} />}
          stroke="none"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} name={entry.name} />
          ))}
        </Pie>
      </PieChart>
      <Descriptions>
        <RangeTypography>{`$${min}`}</RangeTypography>
        <CurrentTypography>{`$${currentValue}`}</CurrentTypography>
        <RangeTypography>{`$${max}`}</RangeTypography>
      </Descriptions>
    </ResponsiveContainer>
  )
}

export default PieChartWithNeedle
