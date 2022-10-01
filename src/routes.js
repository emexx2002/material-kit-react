import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import ProjectsTasks from './pages/ProjectsTasks';
import DashboardApp from './pages/DashboardApp';
import Projects from './pages/Projects';

// ----------------------------------------------------------------------

export default function Router() {

  const _confirmAuth = () => {
    // const now = dayjs().valueOf();
    const token = localStorage.getItem('Gh5tysgs-TKN-auth');
    // const expTime = localStorage.getItem(tokenExpiryDuration);
    // if (token && expTime) {
    // 	return !(now > +expTime);
    // } else {
    // 	localStorage.removeItem(tokenExpiryDuration);
    // 	localStorage.removeItem(tokenName);
    // 	return false;
    // }
    if (token) {
      return true;
      // eslint-disable-next-line
    } else {
      // localStorage.removeItem(tokenExpiryDuration);
      localStorage.removeItem('Gh5tysgs-TKN-auth');
      return false;
    }
  };
  return useRoutes([
    {
      path: '/dashboard',
      element: _confirmAuth() ? <DashboardLayout /> : <Navigate to='/' />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'projects', element: <Projects /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'projects/:id', element: <ProjectsTasks /> },
      ],
    },
    {
      path: '/',
      element: _confirmAuth() ? <Navigate to='/dashboard/app' /> : <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" /> },
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
        {path: 'register',element: <Register />,},
      ]
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
