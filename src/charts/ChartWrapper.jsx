import React from 'react'
import { Paper, Typography } from '@mui/material'

const ChartWrapper = ({ title, width, height, children }) => {
  return (
    <Paper sx={{ height, position: 'relative', width }} elevation={4}>
      <Typography
        sx={{ margin: '12px 18px', position: 'absolute' }}
        color="#344767"
        fontSize={24}
        fontWeight={'700'}
      >
        {title}
      </Typography>
      {children}
    </Paper>
  )
}

export default ChartWrapper
