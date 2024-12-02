import { ThemeProvider, CssBaseline } from '@mui/material'
import clientThemeConfig from '@utils/theme'
import PrivateContent from '@layouts/private/PrivateContent'

function App() {

  return (
      <ThemeProvider theme={clientThemeConfig}>
         <CssBaseline />
         <PrivateContent />
      </ThemeProvider>
  )
}

export default App
