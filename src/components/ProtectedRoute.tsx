import { Navigate, Outlet } from 'react-router-dom';
import { useFirebaseAuth } from '../lib/useFirebaseAuth';

export default function ProtectedRoute() {
  const { user, loading } = useFirebaseAuth();

  if (loading) return null;
  if (!user) return <Navigate to="/admin/login" replace />;
  return <Outlet />;
}
