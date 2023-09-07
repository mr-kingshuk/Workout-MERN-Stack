import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Components/Pages/Home.js';
import Header from './Components/Components/Header.js';
import Login from './Components/Pages/Login.js';
import SignUp from './Components/Pages/SignUp.js';

import { useAuthContext } from './Components/Hooks/useAuthContext.js';

function App() {
  //redirecting the user if they are logged in or not
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Header />
      <div className="pages">
        <Routes>
          <Route
            path='/'
            element={user ? <Home /> : <Navigate to = "/login" /> } />
          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to = "/" /> } />
          <Route
            path='/signup'
            element={!user ? <SignUp /> : <Navigate to = "/" /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;