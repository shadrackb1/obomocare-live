import React, { useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Image, Camera, UserCog, LogOut, Menu, X, FileText } from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from './Logo';
import { useFirebaseAuth } from '../lib/useFirebaseAuth';

const navItems = [
  { to: '/admin/dashboard', label: 'Media Gallery', icon: Image },
  { to: '/admin/team', label: 'Team Management', icon: UserCog },
  { to: '/admin/content', label: 'Page Content', icon: FileText },
];

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOutUser } = useFirebaseAuth();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    await signOutUser();
    navigate('/admin/login');
  };

  return (
    <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen flex">
      {/* Desktop Sidebar */}
      <aside className="w-64 bg-primary-container text-on-primary flex-shrink-0 flex flex-col h-screen hidden md:flex">
        <div className="h-20 flex items-center px-6 border-b border-on-primary/10">
          <Link to="/admin/dashboard">
            <Logo className="w-44 h-auto -ml-2" />
          </Link>
        </div>

        <nav className="flex-1 py-6 flex flex-col gap-1 overflow-y-auto">
          {navItems.map(({ to, label, icon: Icon }) => (
            <SidebarLink key={to} to={to} icon={<Icon size={20} />}>
              {label}
            </SidebarLink>
          ))}
        </nav>

        <div className="p-4 border-t border-on-primary/10 space-y-2">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-on-primary/70 hover:text-on-primary hover:bg-white/5 transition-colors text-sm"
          >
            <Camera size={18} />
            View Live Site
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-on-primary/70 hover:text-on-primary hover:bg-white/5 transition-colors text-sm w-full"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-primary-container h-16 flex items-center justify-between px-4 border-b border-on-primary/10">
        <Link to="/admin/dashboard">
          <Logo className="w-36 h-auto" />
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-on-primary p-2">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-primary-container border-t border-on-primary/10">
          <nav className="flex flex-col gap-1 p-4">
            {navItems.map(({ to, label, icon: Icon }) => (
              <SidebarLink key={to} to={to} icon={<Icon size={20} />} onClick={() => setMobileOpen(false)}>
                {label}
              </SidebarLink>
            ))}
            <div className="border-t border-on-primary/10 mt-2 pt-2">
              <Link to="/" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-on-primary/70 hover:text-on-primary hover:bg-white/5 transition-colors text-sm">
                <Camera size={18} /> View Live Site
              </Link>
              <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-on-primary/70 hover:text-on-primary hover:bg-white/5 transition-colors text-sm w-full">
                <LogOut size={18} /> Logout
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 min-h-screen bg-surface md:pb-12 pb-20 pt-16 md:pt-0">
        <header className="hidden md:flex h-16 bg-surface/90 backdrop-blur-md sticky top-0 z-40 border-b border-outline-variant/30 items-center justify-between px-8">
          <h1 className="font-display text-lg font-bold text-primary">Obomocare Admin</h1>
          {user && <span className="text-sm text-on-surface-variant">{user.email}</span>}
        </header>

        <div className="px-4 md:px-8 pt-6 md:pt-8 max-w-[1200px] mx-auto space-y-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ to, icon, children, onClick, ..._rest }: { to: string; icon: React.ReactNode; children: React.ReactNode; onClick?: () => void; [key: string]: unknown }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg transition-colors text-sm",
        isActive
          ? "bg-white/15 text-on-primary font-bold"
          : "text-on-primary/60 hover:text-on-primary hover:bg-white/5"
      )}
    >
      {icon}
      {children}
    </Link>
  );
}
