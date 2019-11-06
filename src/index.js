import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);
