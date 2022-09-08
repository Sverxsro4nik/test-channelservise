import React from 'react';
import ReactDOM from 'react-dom/client';

import init from './init';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const initialProject = await init();
  root.render(
    <React.StrictMode>
      {initialProject}
    </React.StrictMode>,
  );
};

app();
