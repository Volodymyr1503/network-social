import React from 'react'
import { styled } from '@mui/material/styles'
import { Divider, Typography, Stack } from '@mui/material'
import clientThemeConfig from '@utils/theme'
import dayjs from 'dayjs'
import uaLocale from 'dayjs/locale/uk'

const MappedStatusColors = {
  active: clientThemeConfig.palette.success.main,
  expired: clientThemeConfig.palette.error.main
}

const MappedStatusText = {
  active: 'Активний',
  expired: 'Протермінований'
}

const Wrapper = styled(Stack)(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '64px',
  padding: '0 16px',
  position: 'relative'
}))

const Title = styled(Typography)(() => ({
  color: '#7B809A',
  fontSize: '14px',
  fontWeight: 300,
  lineHeight: 1.5,
  margin: '12px auto 0 0'
}))

const HDivider = styled(Divider)(() => ({
  height: '2px',
  margin: '8px 0',
  width: '100%'
}))

const getProgressColor = (value) => {
  if (value < 33) {
    return '#eb3731'
  }
  if (value > 67) {
    return '#037c31'
  }
  return '#a9a631'
}

const getProjectStatus = (startDate, endDate) => {
  const currentDate = dayjs()
  const isExpired = dayjs(endDate).isBefore(currentDate)

  if (isExpired) {
    return 'expired'
  }
  return 'active'
}

const ProjectStatus = ({ status }) => {
  const Status = styled('div')(() => ({
    backgroundColor: MappedStatusColors[status],
    borderRadius: '6px',
    color: 'white',
    marginLeft: 'auto',
    padding: '4px 8px',
    position: 'absolute',
    right: '16px',
    top: '16px'
  }))

  return <Status>{MappedStatusText[status]}</Status>
}

const LinearWrapper = ({ width, value }) => {
  const Linear = styled('div')(() => ({
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    height: '12px',
    position: 'relative',
    width: '100%',

    '::before': {
      backgroundColor: getProgressColor(value),
      borderRadius: '8px',
      content: "''",
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: `${width}%`
    }
  }))

  return <Linear />
}

const RangeChart = ({ data }) => {
  const { progress, tasks, start, end } = data

  return (
    <>
      <ProjectStatus status={getProjectStatus(start, end)} />
      <Wrapper>
        <LinearWrapper width={progress} value={progress} />
        <Title>{`Виконання - ${progress}%`}</Title>
        <Title>{`Задач загалом - ${tasks}`}</Title>
        <HDivider variant="middle" />
        <Stack
          direction={'row'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
        >
          <Title sx={{ margin: '6px 0' }}>
            <b>Початок: </b>
            {dayjs(start).locale(uaLocale).format('DD MMM, YYYY')}
          </Title>
          <Title sx={{ margin: '6px 0' }}>
            <b>Кінець: </b>
            {dayjs(end).locale(uaLocale).format('DD MMM, YYYY')}
          </Title>
        </Stack>
      </Wrapper>
    </>
  )
}

export default RangeChart
