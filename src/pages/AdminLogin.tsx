import { useNavigate, Link } from 'react-router-dom';
import { Lock, Eye, EyeOff, Loader2, Mail } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import { useFirebaseAuth } from '../lib/useFirebaseAuth';

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 300_000;

function getAttempts(): { count: number; until: number } {
  try {
    const raw = localStorage.getItem('obomocare_login_attempts');
    if (!raw) return { count: 0, until: 0 };
    const data = JSON.parse(raw);
    if (data.until && Date.now() > data.until) return { count: 0, until: 0 };
    return data;
  } catch {
    return { count: 0, until: 0 };
  }
}

function recordAttempt() {
  const { count } = getAttempts();
  const next = { count: count + 1, until: count + 1 >= MAX_ATTEMPTS ? Date.now() + LOCKOUT_MS : 0 };
  localStorage.setItem('obomocare_login_attempts', JSON.stringify(next));
  return next;
}

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user, signIn, resetPassword } = useFirebaseAuth();
  const navigate = useNavigate();

  const { count: attempts, until } = getAttempts();
  const isLocked = until > 0;

  useEffect(() => {
    if (user) navigate('/admin/dashboard', { replace: true });
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked) {
      const secs = Math.ceil((until - Date.now()) / 1000);
      setError(`Too many attempts. Try again in ${secs}s.`);
      return;
    }
    setError('');
    setLoading(true);
    try {
      await signIn(email, password);
      localStorage.removeItem('obomocare_login_attempts');
      navigate('/admin/dashboard', { replace: true });
    } catch (err: unknown) {
      const result = recordAttempt();
      const remaining = MAX_ATTEMPTS - result.count;
      const message = err instanceof Error ? err.message : 'Login failed';
      if (remaining <= 0) {
        setError('Too many failed attempts. Locked for 5 minutes.');
      } else if (message.includes('invalid') || message.includes('wrong') || message.includes('user-not-found')) {
        setError(`Invalid credentials. ${remaining} attempt(s) remaining.`);
      } else {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <Logo className="w-48 h-auto mx-auto" />
          </Link>
          <p className="text-sm text-on-surface-variant mt-3 tracking-wide uppercase font-semibold">Admin Portal</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-outline-variant/20 p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
              <Lock className="text-on-primary" size={18} />
            </div>
            <h1 className="font-display text-xl font-bold text-primary">Sign In</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1.5" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60" size={18} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@obomocare.com"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-outline-variant/40 rounded-lg text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-all bg-surface"
                />
              </div>
            </div>
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
                  placeholder="Enter your password"
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
              {error && <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-secondary-container text-on-primary font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? <><Loader2 className="animate-spin" size={18} /> Authenticating...</> : <><Lock size={18} /> Login</>}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={async () => {
                  if (!email) {
                    setError('Enter your email above first, then click Forgot Password.');
                    return;
                  }
                  try {
                    await resetPassword(email);
                    setError('');
                    alert('Password reset email sent. Check your inbox.');
                  } catch (err: unknown) {
                    const message = err instanceof Error ? err.message : 'Reset failed';
                    setError(message.includes('user-not-found') ? 'No account found with this email.' : message);
                  }
                }}
                className="text-xs text-on-surface-variant hover:text-primary transition-colors"
              >
                Forgot password?
              </button>
            </div>
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
