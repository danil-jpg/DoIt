import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './styles/index.scss';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { store } from './store/store.js';

// const store1 = createStore()

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App store={store} />
  </HashRouter>
);
