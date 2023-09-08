import './App.css';

import Login from './components/Login';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}




export default App;
