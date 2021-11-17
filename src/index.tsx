import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import { HashRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import 'styled/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <HashRouter>
        <App />
      </HashRouter>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
