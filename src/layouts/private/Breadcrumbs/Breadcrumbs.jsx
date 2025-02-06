import React from 'react'
import { Home } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { Breadcrumbs as MUIBreadcrumbs, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useBreadcrumbs from '@hooks/useBreadcrumbs'
import clientThemeConfig from '@utils/theme'
import classNames from 'classnames'

const StyledChipBreadcrumb = styled('div')(({ theme }) => {
  return {
    alignItems: 'center',
    backgroundColor: theme.palette.grey[400],
    borderRadius: '12px',
    color: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'center',
    padding: '6px 12px',

    '&:hover': {
      cursor: 'pointer'
    },

    '&.last': {
      backgroundColor: theme.palette.grey[300],
      cursor: 'default',
      pointerEvents: 'none'
    }
  }
})

const Breadcrumbs = () => {
  const navigate = useNavigate()

  const breadcrumbs = useBreadcrumbs()

  return (
    <div className="breadcrumbs-wrapper">
      <MUIBreadcrumbs maxItems={4}>
        <StyledChipBreadcrumb onClick={() => navigate('/')}>
          <Home
            fontSize="middle"
            color={clientThemeConfig.palette.primary.main}
          />
        </StyledChipBreadcrumb>
        {breadcrumbs.map((el, idx) => {
          return (
            <StyledChipBreadcrumb
              key={el.title}
              onClick={() => navigate(el.path)}
              className={classNames('', {
                last: idx === breadcrumbs.length - 1
              })}
            >
              <Typography sx={{ fontSize: '11px' }}>{el.title}</Typography>
            </StyledChipBreadcrumb>
          )
        })}
      </MUIBreadcrumbs>
    </div>
  )
}

export default Breadcrumbs
