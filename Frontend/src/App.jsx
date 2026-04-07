import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/HomePage';
import AllMusic from './pages/AllMusic';
import Navbar from './components/layout/Navbar';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  return (
    <div className="bg-[#05080f] min-h-screen text-white flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/music" 
            element={
              <ProtectedRoute>
                <AllMusic />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
