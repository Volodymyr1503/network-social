import { styled } from '@mui/material/styles'
import { Drawer, Divider, Box, drawerClasses } from '@mui/material'
import { headerHeight, sidebarWidth } from '@utils/constants'


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

export const CustomizedMain = styled(Box)(() => ({
    alignItems: 'start',
    backgroundColor: '#F0F2F5',
    display: 'flex',
    justifyContent: 'flex-start',
    height: `calc(100vh - ${headerHeight}px)`,
    marginLeft: `${sidebarWidth}px`,
    marginTop: `${headerHeight}px`,
    padding: '36px 10px',
}))

export const CustomizedHeader = styled(Box)(() => ({
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
    display: 'flex',
    height: `${headerHeight}px`,
    justifyContent: 'space-between',
    marginLeft: `${sidebarWidth}px`,
    position: 'fixed',
    padding: '0 10px',
    width: '100%',
    top: 0
}))

export const CustomizedAvatar = styled("div")(({ theme }) => ({
    color: theme.palette.text.primary,
    cursor: 'pointer',
    position: 'fixed',
    right: '16px',
    top: '15px'
}))