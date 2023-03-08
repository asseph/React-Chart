import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { authenticated } = useSelector(state => state.auth);
  const location = useLocation();
  // Redirect them to the /login page, but save the current location
  // return authenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
  return <Outlet />;
};
export default PrivateRoute;
