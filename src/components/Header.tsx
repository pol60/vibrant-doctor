import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage, Language } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: t("home"), path: "/" },
    { name: t("about"), path: "/about" },
    { name: t("services"), path: "/services" },
    { name: t("conditions"), path: "/conditions" },
    { name: t("contact"), path: "/contact" },
  ];

  // Languages
  const languages: { code: Language; name: string }[] = [
    { code: "uk", name: "Українська" },
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
  ];

  // Change language
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold gradient-text"
            onClick={closeMenu}
          >
            <span className="text-medical-600">Med</span>
            <span className="text-teal-600">Care</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm lg:text-base font-medium transition-colors hover:text-medical-600 ${
                  location.pathname === link.path
                    ? "text-medical-600"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1 text-sm lg:text-base font-medium text-gray-700 hover:text-medical-600 transition-colors"
              >
                <Globe size={16} />
                <span className="uppercase">{language}</span>
                <ChevronDown size={16} />
              </button>
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg w-40 py-2 border border-gray-100 z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        language === lang.code
                          ? "text-medical-600 font-medium bg-medical-50"
                          : "text-gray-700"
                      }`}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-medical-600 transition-colors"
              >
                <Globe size={16} />
                <span className="uppercase">{language}</span>
              </button>
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg w-40 py-2 border border-gray-100 z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        language === lang.code
                          ? "text-medical-600 font-medium bg-medical-50"
                          : "text-gray-700"
                      }`}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-medical-600 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2 text-base font-medium transition-colors hover:text-medical-600 ${
                      location.pathname === link.path
                        ? "text-medical-600"
                        : "text-gray-700"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
