import React from 'react'
import { Stack } from '@mui/material'
import ChartWrapper from '@charts/ChartWrapper'
import SimpleBarChart from '@charts/SimpleBarChart/SimpleBarChart'

const FitnessActivityChartsWrapper = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      <ChartWrapper
        height={'500px'}
        width={'100%'}
        title={'Хронологія прогресу'}
      >
        <SimpleBarChart />
      </ChartWrapper>
    </Stack>
  )
}

export default FitnessActivityChartsWrapper
