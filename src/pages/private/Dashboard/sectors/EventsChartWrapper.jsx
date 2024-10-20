import React from 'react'
import { Stack } from '@mui/material'
import ChartWrapper from '@charts/ChartWrapper'
import CustomActiveShapePieChart from '@charts/CustomActiveShapePieChart/CustomActiveShapePieChart'

const eventsMockData = [
  { name: 'Відвідані', value: 14, fill: '#439DEE' },
  { name: 'Пропущені', value: 5, fill: '#63B967' },
  { name: 'Майбутні', value: 28, fill: '#E93B77' }
]

const EventsChartWrapper = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      <ChartWrapper height={'300px'} width={'30%'} title={'Статус'}>
        <CustomActiveShapePieChart data={eventsMockData} />
      </ChartWrapper>
    </Stack>
  )
}

export default EventsChartWrapper
