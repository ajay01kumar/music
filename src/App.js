import Header from './Components/Header/Header';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Layout from './Layout';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>

  );
}

export default App;
