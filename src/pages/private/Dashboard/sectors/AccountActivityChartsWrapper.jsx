import React from 'react'
import { Stack } from '@mui/material'
import { getAccountUtils } from '../data'

const { onRenderChartsLayout } = getAccountUtils()

const AccountActivityChartsWrapper = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {onRenderChartsLayout()}
    </Stack>
  )
}

export default AccountActivityChartsWrapper
