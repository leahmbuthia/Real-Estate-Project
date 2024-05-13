import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Corrected import
import App from './App.jsx';
import './index.css';
import  { persistor,store } from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
    </PersistGate>
  </Provider>
);
