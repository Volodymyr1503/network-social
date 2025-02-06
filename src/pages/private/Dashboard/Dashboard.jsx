import React from 'react'

import MainTrendCards from './sectors/MainTrendCards'

import { getDashboardUtils } from './data'

const { mainTopics, onRenderDashboardLayout } = getDashboardUtils()

const Dashboard = () => {
  return (
    <div style={{ width: '100%' }}>
      <MainTrendCards items={mainTopics} />

      {onRenderDashboardLayout()}
    </div>
  )
}

export default Dashboard
