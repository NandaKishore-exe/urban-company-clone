import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ChevronDown, LogIn, UserCheck, Calendar } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = React.useState(false);

  const handleUserDropdownToggle = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.closest('.user-dropdown')) {
      setIsUserDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Quicknest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Side - Actions */}
          <div className="flex items-center space-x-4">
            {/* User Dropdown */}
            <div className="relative user-dropdown">
              <button
                onClick={handleUserDropdownToggle}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <User size={20} />
                <span>Login</span>
                <ChevronDown size={16} className={`transition-transform ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {/* New Customer Section */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">New customer?</span>
                      <Link 
                        to="/signup" 
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        onClick={() => setIsUserDropdownOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>

                  {/* Menu Options */}
                  <div className="py-2">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsUserDropdownOpen(false)}
                    >
                      <UserCheck size={18} />
                      <span>My Profile</span>
                    </Link>
                    
                    <Link
                      to="/bookings"
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsUserDropdownOpen(false)}
                    >
                      <Calendar size={18} />
                      <span>My Bookings</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            

            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile User Options */}
              <div className="border-t border-gray-200 pt-4">
                <Link
                  to="/signup"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LogIn size={18} />
                  <span>Sign Up</span>
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <UserCheck size={18} />
                  <span>My Profile</span>
                </Link>
                <Link
                  to="/bookings"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calendar size={18} />
                  <span>My Bookings</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 