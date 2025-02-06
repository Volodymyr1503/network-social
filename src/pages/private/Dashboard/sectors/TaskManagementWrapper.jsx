import React from 'react'
import { getTasksUtils } from '../data'

const { onRenderTasksLayout } = getTasksUtils()

const TaskManagementWrapper = () => {
  return (
    <>
      { onRenderTasksLayout() }
    </>
  )
}

export default TaskManagementWrapper
