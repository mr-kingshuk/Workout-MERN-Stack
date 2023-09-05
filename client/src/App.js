import { Routes, Route } from 'react-router-dom';

import Home from './Components/Pages/Home.js';
import Header from './Components/Components/Header.js';
import Login from './Components/Pages/Login.js';
import SignUp from './Components/Pages/SignUp.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pages">
        <Routes>
          <Route
            path='/'
            element={<Home />} />
          <Route
            path='/login'
            element={<Login />} />
          <Route
            path='/signup'
            element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;