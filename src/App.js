import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Outlet, Navigate,
} from 'react-router-dom';
import LoginPage from './Pages/LoginPage.jsx';
import PostsPage from './Pages/PostsPage.jsx';
import Nav from './components/NavbarComponents/Nav.jsx';
import { useAuth } from './context/AuthProvider';
import getRoutes from './routes/routes';

const App = () => {
  const LoginOutlet = ({ goPosts } = false) => {
    const { user } = useAuth();
    if (goPosts) {
      return user ? <Outlet /> : <Navigate to={getRoutes.loginPage()} />;
    }
    return user ? <Navigate to={getRoutes.postsPage()} /> : <Outlet />;
  };
  return (
      <div>
        <Nav />
        <Router>
          <Routes>
            <Route path={getRoutes.postsPage()} element={<LoginOutlet goPosts />} >
              <Route path="" element={<PostsPage />} />
            </Route>
            <Route path={getRoutes.loginPage()} element={<LoginOutlet />}>
              <Route path="" element={<LoginPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
  );
};

export default App;
