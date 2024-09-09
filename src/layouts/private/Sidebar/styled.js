import { styled } from '@mui/material/styles'
import { Drawer, Divider, drawerClasses } from '@mui/material'
import { sidebarWidth } from '@utils/constants'


export const CustomizedSidebar = styled(Drawer)(({ theme }) => ({
    width: sidebarWidth,
    boxSizing: 'border-box',
    mt: 10,
    [`& .${drawerClasses.paper}`]: {
        width: sidebarWidth,
        background: theme.palette.secondary.mainGradient,
        boxSizing: 'border-box',
        color: theme.palette.secondary.contrastText
    },
}))

export const CustomizedDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.contrastText
}))