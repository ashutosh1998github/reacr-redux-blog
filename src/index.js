import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es';
import App from './App';
import reduxStore from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<Provider store={reduxStore}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>
);

