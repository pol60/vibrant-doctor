
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-hero-pattern">
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xs"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-4 py-16 sm:px-6 max-w-md"
      >
        <div className="mb-8">
          <span className="text-9xl font-bold gradient-text">404</span>
        </div>
        
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          {t('page_not_found')}
        </h1>
        
        <p className="text-gray-600 mb-8">
          {t('page_not_found_desc')}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover-lift inline-flex items-center"
          >
            <Home className="w-5 h-5 mr-2" />
            {t('return_home')}
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 hover-lift inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t('go_back')}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
