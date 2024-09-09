import React from 'react'
import Dropdown from '@components/Dropdown/Dropdown'
import { Button, Box, Grid2, Stack } from '@mui/material'
import Sidebar from './Sidebar/Sidebar'

const PrivateContent = () => {
    return (
        <Box>
           <Sidebar />
           <Box component='main' sx={{ display: 'flex', height: '100%', justifyContent: 'center', width: '100%' }}>
            <Stack spacing={2}>
                <Grid2>
                    Content grid

                    <Button variant='contained'>Test</Button>
                </Grid2>
            </Stack>
           </Box>
        </Box>
      )
}

export default PrivateContent