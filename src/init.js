import React from "react";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";

import App from "./App";

const init = async () => {
  const defaultLanguage = 'ru';
  await i18next.use(initReactI18next).init({
    lng: defaultLanguage,
    debug: false,
    resources: {}
  });
  return (
    <Provider>
      <div className="main">
        <App />
      </div>
    </Provider>
  )
};

export default init;