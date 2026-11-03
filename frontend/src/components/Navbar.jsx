import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Sprout, LogOut, Menu, X, ShieldAlert, BookOpen, Clock, UserCheck, HelpCircle } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    setMobileMenuOpen(false);
    navigate('/');
  };

  const closeMenu = () => setMobileMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md border-b-4 border-green-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center">
            <Link to={token ? "/dashboard" : "/"} className="flex items-center gap-2 group" onClick={closeMenu}>
              <div className="bg-green-100 p-2 rounded-xl group-hover:bg-green-200 transition">
                <Sprout className="h-7 w-7 text-green-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-tight">
                  Plant Disease Detection
                </span>
                <span className="text-[10px] sm:text-xs text-green-700 font-semibold tracking-wider uppercase">
                  using Multimodel AI
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {token ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${isActive('/dashboard') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'}`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/detect" 
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${isActive('/detect') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'}`}
                >
                  Detect Disease
                </Link>
                <Link 
                  to="/disease-library" 
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${isActive('/disease-library') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'}`}
                >
                  Disease Library
                </Link>
                <Link 
                  to="/history" 
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${isActive('/history') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'}`}
                >
                  History
                </Link>
                <Link 
                  to="/profile" 
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${isActive('/profile') ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'}`}
                >
                  Profile
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 ml-3 bg-red-50 text-red-600 px-3.5 py-2 rounded-lg hover:bg-red-100 text-sm font-bold transition"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${isActive('/') ? 'text-green-700 font-bold' : 'text-gray-700 hover:text-green-700'}`}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${isActive('/about') ? 'text-green-700 font-bold' : 'text-gray-700 hover:text-green-700'}`}
                >
                  About
                </Link>
                <Link 
                  to="/how-it-works" 
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${isActive('/how-it-works') ? 'text-green-700 font-bold' : 'text-gray-700 hover:text-green-700'}`}
                >
                  How It Works
                </Link>
                <Link 
                  to="/disease-library" 
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${isActive('/disease-library') ? 'text-green-700 font-bold' : 'text-gray-700 hover:text-green-700'}`}
                >
                  Disease Library
                </Link>
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-green-700 font-semibold px-4 py-2 text-sm"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fade-in">
          {token ? (
            <>
              <Link 
                to="/dashboard" 
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:bg-green-50 hover:text-green-700"
              >
                Dashboard
              </Link>
              <Link 
                to="/detect" 
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:bg-green-50 hover:text-green-700"
              >
                Detect Disease
              </Link>
              <Link 
                to="/disease-library" 
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:bg-green-50 hover:text-green-700"
              >
                Disease Library
              </Link>
              <Link 
                to="/history" 
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:bg-green-50 hover:text-green-700"
              >
                History
              </Link>
              <Link 
                to="/profile" 
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:bg-green-50 hover:text-green-700"
              >
                Profile
              </Link>
              <button 
                onClick={handleLogout}
                className="w-full text-left flex items-center gap-2 px-3 py-2 text-red-600 font-bold hover:bg-red-50 rounded-md"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/" 
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:bg-green-50 hover:text-green-700"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:bg-green-50 hover:text-green-700"
              >
                About Project
              </Link>
              <Link 
                to="/how-it-works" 
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:bg-green-50 hover:text-green-700"
              >
                How It Works
              </Link>
              <Link 
                to="/disease-library" 
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:bg-green-50 hover:text-green-700"
              >
                Disease Library
              </Link>
              <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                <Link 
                  to="/login" 
                  onClick={closeMenu}
                  className="block text-center py-2 px-4 rounded-lg font-bold border border-green-600 text-green-700 hover:bg-green-50"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  onClick={closeMenu}
                  className="block text-center py-2 px-4 rounded-lg font-bold bg-green-600 text-white hover:bg-green-700 shadow"
                >
                  Get Started
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
