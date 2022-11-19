import Router from './components/common/Router';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
