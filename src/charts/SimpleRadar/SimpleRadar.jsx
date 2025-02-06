import React from 'react'
import { Paper } from '@mui/material'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts'

const radarData = [
  {
    type: 'incomingFriendshipRequest',
    title: 'Вхідні запити',
    value: 61,
    total: 120
  },
  {
    type: 'upcomingFriendshipRequest',
    title: 'Вихідні запити',
    value: 81,
    total: 120
  },
  {
    type: 'rejectedIncomingFriendshipRequest',
    title: 'Відхилені вхідні запити',
    value: 42,
    total: 120
  },
  {
    type: 'rejectedUpcomingFriendshipRequest',
    title: 'Відхилені вихідні запити',
    value: 98,
    total: 120
  },
  {
    type: 'recommendedFriendshipRequest',
    title: 'Рекомендації',
    value: 81,
    total: 120
  }
]

const SimpleRadar = () => {
  return (
    <Paper sx={{ height: '300px', width: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="type" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Paper>
  )
}

export default SimpleRadar
