import React from 'react'
import { Stack } from '@mui/material'
import { CustomizedAvatar } from '../styled'
import ContextMenuHOC from '@HOCs/ContextMenuHOC'
import { getAvatarOptions } from '@utils/handlers'

import { AccountCircle } from '@mui/icons-material';

const Avatar = () => {
    return (
        <CustomizedAvatar>
            <AccountCircle color='#010101' />
        </CustomizedAvatar>
    )
}

const AvatarPanel = () => {
  return (
    <Stack direction={'row'} spacing={2}>
        <ContextMenuHOC options={getAvatarOptions()}>
            <Avatar />
        </ContextMenuHOC>
    </Stack>
  )
}

export default AvatarPanel