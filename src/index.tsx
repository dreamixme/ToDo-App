import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { store } from './store';
import MUIThemeProvider from './utils/mui.theme';
import reportWebVitals from './reportWebVitals';

import ErrorBoundary from './components/ErrorBoundary';
import Routes from './routes';
import './assets/styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ErrorBoundary name="Whole Application">
    <ThemeProvider theme={MUIThemeProvider}>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </ThemeProvider>
  </ErrorBoundary>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
