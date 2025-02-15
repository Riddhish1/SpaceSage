import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Salad as GalaxySpiral, Orbit, Plane as Planet, Satellite } from 'lucide-react';
import { ThemeContext } from '../App';
import { motion, useAnimation } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const features = [
  {
    title: 'Galaxy Classifier',
    description: 'Advanced ML model to classify galaxy shapes with stunning accuracy',
    icon: GalaxySpiral,
    path: '/galaxy-info',
    gradient: 'from-purple-600 to-blue-500'
  },
  {
    title: 'AndreShift',
    description: 'Analyze Andromeda\'s movement patterns with our predictive model',
    icon: Orbit,
    path: '/andre-shift-info',
    gradient: 'from-red-600 to-pink-500'
  },
  {
    title: 'ExoHabit',
    description: 'Discover habitable planets using our sophisticated analysis tools',
    icon: Planet,
    path: '/exo-habit-info',
    gradient: 'from-green-600 to-teal-500'
  },
  {
    title: 'Orbita',
    description: 'Determine optimal satellite orbits with our advanced orbital analysis system',
    icon: Satellite,
    path: '/orbita-info',
    gradient: 'from-blue-600 to-indigo-500'
  }
];

const Home = () => {
  const { isDark } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('features-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
          controls.start('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: isDark ? 0.7 : 0.4 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2048&q=80"
            alt="Space background"
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          <div className={`absolute inset-0 transition-colors duration-300 ${
            isDark ? 'bg-black/40' : 'bg-white/40'
          }`}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className={`text-5xl md:text-7xl font-bold mb-6 font-space ${
              isDark 
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'
                : 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-800'
            }`}
          >
            Welcome to SpaceSage
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            <Typewriter
              options={{
                strings: [
                  'Explore the cosmos through the lens of artificial intelligence',
                  'Discover new galaxies with advanced ML models',
                  'Analyze celestial movements with precision',
                  'Find habitable worlds across the universe'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30
              }}
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className={`w-6 h-6 mx-auto transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div
        id="features-section"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className={`group relative rounded-xl p-8 transition-all duration-300 overflow-hidden border transform perspective-1000 ${
                isDark 
                  ? 'bg-black/50 border-white/10 hover:border-white/20'
                  : 'bg-white/70 border-gray-200 hover:border-gray-300'
              }`}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                initial={false}
                animate={{ rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className={`w-12 h-12 mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} />
              </motion.div>
              <h3 className={`text-xl font-semibold mb-2 font-space transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>{feature.title}</h3>
              <p className={`transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>{feature.description}</p>
              <Link
                to={feature.path}
                className={`mt-4 inline-flex items-center transition-colors duration-300 ${
                  isDark ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600 group-hover:text-blue-500'
                }`}
              >
                <span className="font-space">Learn More</span>
                <motion.svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Home;