import React from 'react'
import { styled } from '@mui/material/styles'
import { Divider, Stack, Typography } from '@mui/material'
import { getSingularOrPluralText, getText } from '../data'

const LayoutWrapper = styled('div')(() => ({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(192px, 290px))',
  gridGap: '24px'
}))

const Card = styled('div')(() => ({
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '3px 4px 2px 0px rgba(0, 0, 0, 0.25)',
  padding: '12px 8px',
  position: 'relative',
  width: '100%'
}))

const Icon = styled('div')(() => ({
  alignItems: 'center',
  borderRadius: '12px',
  boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.25)',
  color: '#fff',
  content: '""',
  display: 'flex',
  height: '64px',
  justifyContent: 'center',
  left: '16px',
  position: 'absolute',
  top: '-16px',
  width: '64px'
}))

const MainTrendCards = ({ items = [] }) => {
  return (
    <LayoutWrapper>
      {items.map((current) => {
        return (
          <Card key={current.key}>
            <Icon style={{ background: current.iconCardBg }}>
              {current.icon}
            </Icon>
            <Stack justifyContent={'flex-end'}>
              <Typography
                color="#7B809A"
                fontSize={14}
                sx={{ marginLeft: 'auto' }}
              >
                {current.title}
              </Typography>
              <Typography
                color="#344767"
                fontSize={24}
                fontWeight={'700'}
                sx={{ marginLeft: 'auto' }}
              >
                {current.amount}
              </Typography>
            </Stack>
            <Divider sx={{ margin: '12px 0' }} />
            <Typography color="#7B809A" fontSize={16} fontWeight={'300'}>
              {current.notifications ? (
                <b>{getText(getSingularOrPluralText, current.notifications)}</b>
              ) : (
                'Нема нових сповіщень'
              )}
            </Typography>
          </Card>
        )
      })}
    </LayoutWrapper>
  )
}

export default MainTrendCards
