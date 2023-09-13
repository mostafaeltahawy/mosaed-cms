import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';

interface PrivateRouteProps {
  path: string;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
  const auth = useAuth();

  if (!auth.currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route {...rest}>{children}</Route>
    </Routes>
  );
};

export default PrivateRoute;
