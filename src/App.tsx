import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';
import SamplePage from './components/pages/SamplePage';
import GlobalStyle from './styles/ GlobalStyle';
import theme from './styles/defaultTheme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sample-page" element={<SamplePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
