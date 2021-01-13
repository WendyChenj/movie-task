import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { store } from './common/store/store';
import './index.css';
import App from './App';
import theme from './theme';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  </Provider>,
  document.getElementById('root'),
);
