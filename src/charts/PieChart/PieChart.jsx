import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  ResponsiveContainer,
  PieChart as PieWrapper,
  Pie,
  Cell,
  Legend
} from 'recharts'

const style = {
  top: '50%',
  right: '10px',
  transform: 'translate(0, -50%)',
  lineHeight: '36px'
}

const PieChart = ({ data = [] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieWrapper>
        <Pie dataKey="value" data={data} fill="#8884d8">
          {data?.map((entry) => {
            return <Cell key={uuidv4()} fill={entry.fill} />
          })}
        </Pie>
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </PieWrapper>
    </ResponsiveContainer>
  )
}

export default PieChart
