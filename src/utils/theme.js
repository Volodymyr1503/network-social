import { createTheme } from '@mui/material/styles'

const clientThemeConfig = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e91e63'
    },
    secondary: {
      main: '#7b809a',
      mainGradient: 'linear-gradient(#3E3D45, #202020)',
      contrastText: '#fff'
    },
    error: {
      main: '#f44335'
    },
    warning: {
      main: '#fb8c00'
    },
    info: {
      main: '#03a9f4'
    },
    success: {
      main: '#4caf50'
    }
  },
  components: {}
})

export default clientThemeConfig
