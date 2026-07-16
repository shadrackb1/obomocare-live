import { Navigate, Outlet } from 'react-router-dom';
import { useFirebaseAuth } from '../lib/useFirebaseAuth';
import { Loader2 } from 'lucide-react';

export default function ProtectedRoute() {
  const { user, loading } = useFirebaseAuth();

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <Loader2 className="animate-spin text-secondary-container" size={32} />
    </div>
  );
  if (!user) return <Navigate to="/admin/login" replace />;
  return <Outlet />;
}
