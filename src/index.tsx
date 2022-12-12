import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'sanitize.css/sanitize.css';
import { App } from 'app';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';
import reportWebVitals from 'reportWebVitals';
import './locales/i18n';
import { BrowserRouter } from 'react-router-dom';
import { AxiosInterceptor } from 'utils/globalAxios';
import ErrorBoundary from 'ErrorBoundary';
import HttpsRedirect from 'app/components/HttpsRedirect';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <HelmetProvider>
        <React.StrictMode>
          <BrowserRouter>
            <AxiosInterceptor>
              <HttpsRedirect>
                <App />
              </HttpsRedirect>
            </AxiosInterceptor>
          </BrowserRouter>
        </React.StrictMode>
      </HelmetProvider>
    </Provider>
  </ErrorBoundary>,
  MOUNT_NODE,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
