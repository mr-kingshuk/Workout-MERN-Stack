import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Header from './Components/Header.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path='/' element = {<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;