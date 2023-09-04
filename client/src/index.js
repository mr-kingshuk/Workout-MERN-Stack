import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutContextProvider } from './Components/Context/WorkoutContext';
import { AuthContextProvider } from './Components/Context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutContextProvider>
        <App />
      </ WorkoutContextProvider>
    </AuthContextProvider>

  </React.StrictMode>
);