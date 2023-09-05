import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { WorkoutContextProvider } from './Components/Context/WorkoutContext';
import { AuthContextProvider } from './Components/Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <WorkoutContextProvider>
          <App />
        </ WorkoutContextProvider>
      </AuthContextProvider>
    </BrowserRouter>

  </React.StrictMode>
);