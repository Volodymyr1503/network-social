import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover
} from '@mui/material'

const ListWrapper = styled(Box)(() => ({
  backgroundColor: '#fff',
  boxShadow: '0 0 2px 0 black',
  minWidth: '144px',
  padding: '8px'
}))

const StyledListItem = styled(ListItem)(({ theme }) => ({
  cursor: 'pointer',
  borderBottom: `1px solid ${theme.palette.secondary.main}`,

  ':last-child': {
    borderBottom: 'none'
  },

  ':hover': {
    backgroundColor: '#F0F2F5'
  }
}))

const OptionsDropdown = ({ items = [], close }) => {
  return (
    <ListWrapper>
      <List sx={{ padding: '0' }}>
        {items.map((option) => {
          return (
            <StyledListItem
              key={option.key}
              onClick={() => {
                option.handler()
                close()
              }}
            >
              <ListItemIcon
                sx={{ marginRight: '4px', minWidth: '0', width: 'max-content' }}
              >
                {option.icon}
              </ListItemIcon>
              <ListItemText>{option.label}</ListItemText>
            </StyledListItem>
          )
        })}
      </List>
    </ListWrapper>
  )
}

const ContextMenuHOC = ({ options, children }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <div onClick={handleClick}>{children}</div>
      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <OptionsDropdown items={options} close={handleClose} />
      </Popover>
    </div>
  )
}

export default ContextMenuHOC
