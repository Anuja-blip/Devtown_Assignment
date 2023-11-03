import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import {AppProvider} from "./Context/ContextProduct"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <AppProvider>
    <React.StrictMode>
      <App />
     </React.StrictMode>
  </AppProvider> 
);
