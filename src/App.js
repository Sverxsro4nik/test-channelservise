import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage.jsx';
import Nav from './components/Nav.jsx';


const App = () => {
  return (
      <div>
        <Nav />
        <Router>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App;