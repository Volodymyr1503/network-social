import { List, Box, Typography, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { CustomizedSidebar, CustomizedDivider } from './styled'
import sidebarNavs from './data'
import uaLocale from '@utils/locales/ua'

const Sidebar = () => {
  return (
    <CustomizedSidebar anchor='left' variant='persistent' open={true}>
        <Box p={2} sx={{ display: 'flex' }}>
           <Typography>
             {uaLocale.networkTitle}
           </Typography>
        </Box>

        <CustomizedDivider variant='middle' sx={{ opacity: '0.9' }} />

        <Box p={2}>
          <List>
             {
              sidebarNavs.map((navItem) => (
                <ListItemButton key={navItem.title}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>{navItem.title}</ListItemText>
                </ListItemButton>
              ))
             }
           </List>
        </Box>
    </CustomizedSidebar>
  )
}

export default Sidebar