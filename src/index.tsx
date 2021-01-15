import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Material UI Setup and Imports
import theme from './theme';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
// Redux Imports
import { Provider } from 'react-redux';
import { store } from './common/store/store';
// React Router Imports
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </StylesProvider>
  </Provider>,
  document.getElementById('root'),
);
