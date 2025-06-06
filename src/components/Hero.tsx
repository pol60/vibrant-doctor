import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  title: string;
  subtitle: string;
  showCta?: boolean;
  image?: string;
  reversed?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  showCta = true,
  image = "/doctor-image.jpg",
  reversed = false,
}) => {
  const { t } = useLanguage();
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      localStorage.setItem('hasVisited', 'true');
      setIsFirstVisit(true);
    } else {
      setIsFirstVisit(false);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Enhanced background with vibrant gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-medical-100 via-teal-50 to-blue-50"></div>
      
      {/* Decorative shapes */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-medical-300/30 to-teal-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-300/20 to-medical-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-16 md:py-20 lg:py-24 pb-32 sm:pb-24 md:pb-20 lg:pb-24 relative z-10">
        <motion.div 
          className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-8 lg:gap-12`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content with enhanced styling */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 text-center md:text-left z-10"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block px-3 sm:px-4 py-1 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-medical-600 to-teal-500 rounded-full shadow-md"
            >
              {t("doctor_specialty")}
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6"
            >
              <span className="bg-gradient-to-r from-medical-700 to-teal-600 bg-clip-text text-transparent drop-shadow-sm">
                {title}
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              {subtitle}
            </motion.p>
            
            {showCta && (
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-medical-600 to-teal-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {t("cta_button")}
                </Link>
                <Link
                  to="/services"
                  className="bg-white/80 backdrop-blur-sm text-medical-700 border border-medical-200 px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  {t("services")}
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Image with enhanced styling */}
          <motion.div
            variants={imageVariants}
            className="flex-1 z-10 w-full max-w-md mx-auto md:max-w-none"
          >
            <div className="relative p-3 bg-gradient-to-br from-white to-medical-50 rounded-2xl shadow-2xl overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-medical-100/60 to-teal-100/60 opacity-70"
                animate={{
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative flex flex-col sm:flex-row items-center">
                <motion.img
                  src={image}
                  alt="Doctor"
                  className="w-full sm:w-40 md:w-48 h-[450px] sm:h-auto rounded-xl object-cover relative z-0 brightness-105 contrast-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute sm:relative bottom-0 sm:bottom-auto left-0 sm:left-auto w-full sm:w-auto h-auto sm:h-auto mt-4 sm:mt-0 sm:ml-4 flex-1 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg text-center"
                  variants={itemVariants}
                >
                  <p className="font-bold text-medical-800 text-base sm:text-lg">{t("doctor_name")}</p>
                  <p className="text-xs sm:text-sm text-medical-600">{t("doctor_specialty")}</p>
                  <div className="min-h-[120px] sm:h-[180px] md:h-[210px] flex items-center justify-center">
                    <p className="text-xs sm:text-sm text-gray-600">{t("doctor_description")}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom wave animation - fixed with proper SVG and animation */}
      <motion.div 
        className="absolute bottom-[-10px] sm:bottom-[-60px] md:bottom-[-90px] left-0 right-0 w-full overflow-hidden line-height-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 600" 
          className="w-full h-auto" 
          preserveAspectRatio="none"
        >
          <motion.path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,452L48,457.3C96,463,192,473,288,489.3C384,505,480,527,576,510.7C672,495,768,441,864,441.3C960,441,1056,495,1152,494.7C1248,495,1344,441,1392,414.7L1440,388L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z"
            animate={{ 
              d: [
                "M0,452L48,457.3C96,463,192,473,288,489.3C384,505,480,527,576,510.7C672,495,768,441,864,441.3C960,441,1056,495,1152,494.7C1248,495,1344,441,1392,414.7L1440,388L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z",
                "M0,484L48,473.3C96,463,192,441,288,441.3C384,441,480,463,576,473.3C672,484,768,484,864,473.3C960,463,1056,441,1152,441.3C1248,441,1344,463,1392,473.3L1440,484L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z",
                "M0,452L48,457.3C96,463,192,473,288,489.3C384,505,480,527,576,510.7C672,495,768,441,864,441.3C960,441,1056,495,1152,494.7C1248,495,1344,441,1392,414.7L1440,388L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z"
              ]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path 
            fill="#ffffff" 
            fillOpacity="0.5" 
            d="M0,496L48,501.3C96,507,192,517,288,517.3C384,517,480,507,576,490.7C672,475,768,453,864,437.3C960,421,1056,411,1152,421.3C1248,432,1344,464,1392,480L1440,496L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z"
            animate={{ 
              d: [
                "M0,496L48,501.3C96,507,192,517,288,517.3C384,517,480,507,576,490.7C672,475,768,453,864,437.3C960,421,1056,411,1152,421.3C1248,432,1344,464,1392,480L1440,496L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z",
                "M0,498L48,487.3C96,477,192,455,288,455.3C384,455,480,477,576,487.3C672,498,768,498,864,487.3C960,477,1056,455,1152,455.3C1248,455,1344,477,1392,487.3L1440,498L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z",
                "M0,496L48,501.3C96,507,192,517,288,517.3C384,517,480,507,576,490.7C672,475,768,453,864,437.3C960,421,1056,411,1152,421.3C1248,432,1344,464,1392,480L1440,496L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z"
              ]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
