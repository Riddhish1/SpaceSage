import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../App';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  
  const navItems = [
    { name: 'Galaxy Classifier', path: '/galaxy-classifier', infoPath: '/galaxy-info' },
    { name: 'AndreShift', path: '/andre-shift', infoPath: '/andre-shift-info' },
    { name: 'ExoHabit', path: '/exo-habit', infoPath: '/exo-habit-info' },
    { name: 'Orbita', path: '/orbita', infoPath: '/orbita-info' },
    { name: 'About', path: '/about', infoPath: null }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDark ? 'bg-black/10 border-white/10' : 'bg-white/70 border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className={`flex items-center space-x-2 transition-colors duration-300 ${
            isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
          }`}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Rocket className="h-8 w-8" />
            </motion.div>
            <span className="text-xl font-bold font-space">SpaceSage</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={location.pathname === item.path && item.infoPath ? item.infoPath : item.path}
                  className={`${
                    location.pathname === item.path
                      ? isDark ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-600 border-b-2 border-blue-600'
                      : isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  } px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 font-space`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isDark 
                  ? 'text-yellow-400 hover:bg-yellow-400/10' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;