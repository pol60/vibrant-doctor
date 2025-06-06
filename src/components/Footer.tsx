import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 justify-between">
          {/* Logo and About */}
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <Link to="/" className="flex items-center text-xl sm:text-2xl font-bold">
              <span className="text-medical-600">Med</span>
              <span className="text-teal-600">Care</span>
            </Link>
            <p className="text-gray-600 text-sm sm:text-base">
              {t("footer_description")}
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              © {currentYear} MedCare. {t("all_rights_reserved")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">{t("quick_links")}</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm sm:text-base text-gray-600 hover:text-medical-600">
                {t("home")}
              </Link>
              <Link to="/about" className="text-sm sm:text-base text-gray-600 hover:text-medical-600">
                {t("about")}
              </Link>
              <Link to="/services" className="text-sm sm:text-base text-gray-600 hover:text-medical-600">
                {t("services")}
              </Link>
              <Link to="/contact" className="text-sm sm:text-base text-gray-600 hover:text-medical-600">
                {t("contact")}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">{t("contact_info")}</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center text-sm sm:text-base text-gray-600">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-medical-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm sm:text-base text-gray-600">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-medical-600" />
                <span>info@medcare.com</span>
              </div>
              <div className="flex items-center text-sm sm:text-base text-gray-600">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-medical-600" />
                <span>123 Medical Center Dr.</span>
              </div>
              <div className="flex items-center text-sm sm:text-base text-gray-600">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-medical-600" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
