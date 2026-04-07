import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">
        Welcome back, <span className="text-emerald-400">{user?.username || user?.name || 'User'}</span>!
      </h1>
      <p className="text-slate-400 text-lg mb-8">
        Your dashboard is ready. Dive into your favorite tracks or discover new ones.
      </p>
      
      <div className="p-8 rounded-2xl bg-[rgba(12,19,33,0.82)] border border-white/10">
        <h2 className="text-2xl font-semibold mb-2">New Releases</h2>
        <p className="text-slate-400 mb-6">Based on what you love listening to.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="aspect-square bg-[#05080f] rounded-xl flex items-center justify-center border border-white/5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              Track {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
