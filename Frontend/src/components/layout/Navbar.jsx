import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#0c1321] border-b border-white/10 text-white shadow-md">
      <div className="flex items-center gap-8">
        <Link to="/" className="font-bold text-xl text-emerald-400 tracking-wider">Beatflow</Link>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-sm font-medium hover:text-emerald-400 transition-colors">Home</Link>
          <Link to="/music" className="text-sm font-medium hover:text-emerald-400 transition-colors">All Music</Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-sm text-slate-300">Welcome, {user?.username || user?.name || 'User'}</span>
        <button 
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-medium bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
