import React from 'react'
import { Typography } from '@mui/material'

import CardsLayout from './CardsLayout'
import { topicMoneyCards } from './data'

const Dashboard = () => {
  return (
    <div style={{ width: '100%' }}>
      <Typography variant='h3'>Гаманець</Typography>

      <CardsLayout items={topicMoneyCards} />
    </div>
  )
}

export default Dashboard