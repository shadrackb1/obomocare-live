import { Link, useNavigate } from 'react-router-dom';
import { Lock, BadgeAlert, KeyRound, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import Logo from '../components/Logo';

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth delay
    setTimeout(() => {
      navigate('/admin/dashboard');
    }, 1000);
  };

  return (
    <div className="bg-primary-container min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-on-primary">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-50 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary-container/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#000615]/40 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <main className="relative z-10 w-full max-w-md px-margin-mobile md:px-0">
        <div className="text-center mb-10 flex justify-center flex-col items-center">
          <Link to="/">
            <Logo className="w-64 h-auto" />
          </Link>
          <p className="text-xs text-inverse-primary mt-3 tracking-widest uppercase opacity-80 font-semibold">
            Institutional Access
          </p>
        </div>

        <div className="bg-primary-container/40 backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-container/20 via-secondary-container to-secondary-container/20"></div>
          
          <div className="mb-8 flex items-center justify-center gap-3">
            <Lock className="text-secondary-container" size={24} />
            <h2 className="font-display text-2xl font-bold">Secure Administration Portal</h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-inverse-primary mb-2 opacity-90" htmlFor="access_key">
                Access Key
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BadgeAlert className="text-outline-variant opacity-70" size={18} />
                </div>
                <input 
                  className="block w-full pl-10 pr-3 py-3 border border-outline-variant/30 bg-[#000615]/20 rounded-lg text-on-primary placeholder-outline-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all" 
                  id="access_key" 
                  placeholder="Enter institutional ID" 
                  required 
                  type="text" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-inverse-primary mb-2 opacity-90" htmlFor="security_token">
                Security Token
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <KeyRound className="text-outline-variant opacity-70" size={18} />
                </div>
                <input 
                  className="block w-full pl-10 pr-3 py-3 border border-outline-variant/30 bg-[#000615]/20 rounded-lg text-on-primary placeholder-outline-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all" 
                  id="security_token" 
                  placeholder="Enter physical or digital token" 
                  required 
                  type="password" 
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input className="h-4 w-4 rounded border-outline-variant/30 bg-[#000615]/20 text-secondary-container focus:ring-secondary-container" id="remember_device" type="checkbox" />
                <label className="ml-2 block text-sm text-inverse-primary opacity-80" htmlFor="remember_device">
                  Trust this device
                </label>
              </div>
              <Link className="text-secondary-container hover:text-white transition-colors text-sm font-medium" to="/contact">
                Token recovery
              </Link>
            </div>

            <div className="pt-4">
              <button 
                className="w-full flex justify-center items-center gap-2 py-3 border border-transparent rounded-lg font-bold text-on-primary bg-secondary-container hover:bg-[#9d4300] transition-colors" 
                type="submit"
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Lock size={20} />}
                {loading ? 'Authenticating...' : 'Authenticate'}
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-inverse-primary opacity-60">
              Restricted Access. Authorized personnel only.<br/>
              Activities are monitored and logged.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-6 text-sm opacity-70">
          <Link className="hover:text-white transition-colors" to="/">Back to Main Site</Link>
          <Link className="hover:text-white transition-colors" to="/contact">IT Support</Link>
        </div>
      </main>
    </div>
  );
}
