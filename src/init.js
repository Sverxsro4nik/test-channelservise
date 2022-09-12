import React from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import store from './slices/index';
import { AuthProvider } from './context/AuthProvider';

const Global = createGlobalStyle`
@font-face: {
  font-family: 'Inter',
  src: url('./assets/Inter-ExtraBold.ttf'),
  font-weight: 800,
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter, sans-serif;
}
`;

const init = async () => {
  const defaultLanguage = 'ru';
  await i18next.use(initReactI18next).init({
    lng: defaultLanguage,
    debug: false,
    resources: {},
  });
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="main">
          <Global />
          <App />
        </div>
      </AuthProvider>
    </Provider>
  );
};

export default init;
