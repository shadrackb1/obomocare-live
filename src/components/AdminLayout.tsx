import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart2, 
  HeartHandshake, 
  FileText, 
  CreditCard, 
  Users,
  Settings,
  Bell,
  Image
} from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from './Logo';

export default function AdminLayout() {
  return (
    <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-primary-container text-on-primary flex-shrink-0 flex flex-col h-screen hidden md:flex border-r border-on-primary/10">
        <div className="h-20 flex items-center px-6">
          <Link to="/admin/dashboard" className="block w-full">
            <Logo className="w-48 h-auto -ml-4" />
          </Link>
        </div>
        
        <nav className="flex-1 py-6 flex flex-col gap-2 overflow-y-auto">
          <AdminNavLink to="/admin/dashboard" icon={<LayoutDashboard size={20} />}>Dashboard</AdminNavLink>
          <AdminNavLink to="/admin/impact" icon={<BarChart2 size={20} />}>Impact Reports</AdminNavLink>
          <AdminNavLink to="/admin/programs" icon={<HeartHandshake size={20} />}>Programs</AdminNavLink>
          <AdminNavLink to="/admin/stories" icon={<FileText size={20} />}>Stories</AdminNavLink>
          <AdminNavLink to="/admin/donations" icon={<CreditCard size={20} />}>Donations</AdminNavLink>
          <AdminNavLink to="/admin/volunteers" icon={<Users size={20} />}>Volunteers</AdminNavLink>
          <AdminNavLink to="/admin/media" icon={<Image size={20} />}>Media</AdminNavLink>
        </nav>
        
        <div className="p-6 border-t border-on-primary/10">
          <Link to="/" className="flex items-center gap-3 text-on-primary-container hover:text-on-primary transition-colors mb-4">
            <Settings size={20} />
            Exit Admin
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto bg-surface pb-12">
        <header className="h-20 bg-surface/90 backdrop-blur-md sticky top-0 z-40 border-b border-outline-variant/30 flex items-center justify-between px-margin-mobile md:px-margin-desktop">
          <div>
            <h1 className="font-headline-md font-display text-primary-container">Welcome back, Admin.</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </header>

        <div className="px-margin-mobile md:px-margin-desktop pt-8 max-w-[1400px] mx-auto space-y-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function AdminNavLink({ to, icon, children }: { to: string, icon: React.ReactNode, children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-3 px-6 py-3 transition-colors border-l-4",
        isActive 
          ? "bg-white/10 border-secondary-container text-on-primary font-bold" 
          : "border-transparent text-on-primary-container hover:text-on-primary hover:bg-white/5"
      )}
    >
      {icon}
      {children}
    </Link>
  );
}
