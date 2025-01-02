import { List, Box, Typography, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { CustomizedSidebar, CustomizedDivider } from '../styled'
import { useNavigate } from 'react-router-dom'
import { sidebarNavs } from './data'
import clientThemeConfig from '@utils/theme'
import useSelectedSidebarItem from '@hooks/useSelectedSidebarItem'
import uaLocale from '@utils/locales/ua'

const Sidebar = () => {
  const navigate = useNavigate()

  const selectedKey = useSelectedSidebarItem()

  return (
    <CustomizedSidebar anchor='left' variant='permanent' open={true}>
        <Box p={2} sx={{ display: 'flex' }}>
           <Typography>
             {uaLocale.networkTitle}
           </Typography>
        </Box>

        <CustomizedDivider variant='middle' sx={{ opacity: '0.9' }} />

        <Box p={2}>
          <List>
             {
              sidebarNavs.map(({ title, path, icon, key }) => (
                <ListItemButton 
                  key={key} 
                  onClick={() => navigate(path)} 
                  selected={key === selectedKey}
                  title={'sidebar-nav-item'}
                >
                  <ListItemIcon sx={{ color: clientThemeConfig.palette.secondary.contrastText }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText>{title}</ListItemText>
                </ListItemButton>
              ))
             }
           </List>
        </Box>
    </CustomizedSidebar>
  )
}

export default Sidebar