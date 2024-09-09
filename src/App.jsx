import { ThemeProvider, Container, CssBaseline } from '@mui/material'
import clientThemeConfig from '@utils/theme'
import PrivateContent from '@layouts/private/PrivateContent'
import './App.css'

function App() {

  return (
    <Container>
      <ThemeProvider theme={clientThemeConfig}>
         <CssBaseline />
         <PrivateContent />
      </ThemeProvider>
    </Container>
  )
}

export default App
