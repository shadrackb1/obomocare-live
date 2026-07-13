import { useNavigate, Link } from 'react-router-dom';
import { Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import Logo from '../components/Logo';

const ADMIN_PASSWORD = '12345678';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('obomocare_admin', 'true');
        navigate('/admin/dashboard');
      } else {
        setError('Invalid password. Please try again.');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <Logo className="w-48 h-auto mx-auto" />
          </Link>
          <p className="text-sm text-on-surface-variant mt-3 tracking-wide uppercase font-semibold">
            Admin Portal
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-outline-variant/20 p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
              <Lock className="text-on-primary" size={18} />
            </div>
            <h1 className="font-display text-xl font-bold text-primary">Sign In</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1.5" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  className="w-full px-4 py-3 pr-10 border border-outline-variant/40 rounded-lg text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-all bg-surface"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant/60 hover:text-on-surface transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-secondary-container text-on-primary font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? (
                <><Loader2 className="animate-spin" size={18} /> Authenticating...</>
              ) : (
                <><Lock size={18} /> Login</>
              )}
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
            &larr; Back to site
          </Link>
        </div>
      </div>
    </div>
  );
}
