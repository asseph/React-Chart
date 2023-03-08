import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const CheckPermission = ({ permission = null, children }) => {
  const {
    user: { role },
  } = useSelector(state => state.auth);

  // sino requiere permiso dejar pasar 😅
  if (permission === null) return children;

  // comprobamos permiso
  let hasNotPermission = permission.find(item => role === item);

  // console.log(hasNotPermission);
  // return hasNotPermission ? <Navigate to="/" /> : children;
  return children;
};

export default CheckPermission;
