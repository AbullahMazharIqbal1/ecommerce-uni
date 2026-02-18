import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [darkMode, setDarkMode] = useState(() => {
    // Persist theme preference on reload
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition">
            <span className="font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            ShopFront
          </span>
        </Link>

        {/* Action Area */}
        <div className="flex gap-6 items-center">
          <Link to="/products" className="font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">
            Store
          </Link>
          
          <Link to="/cart" className="relative group p-2">
            <span className="text-2xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-gray-900 animate-bounce">
                {cartCount}
              </span>
            )}
          </Link>

          {/* NEW LOGIN BUTTON */}
          <Link to="/login" className="hidden sm:block px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 rounded-lg transition-colors">
            Login
          </Link>

          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => (
    <footer className="bg-gray-800 text-white text-center p-6 mt-10">
        <p>&copy; 2026 ShopFront. All rights reserved.</p>
    </footer>
);