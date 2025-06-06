import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ChevronUp, ChevronDown } from "lucide-react";
import Hero from "../components/Hero";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      // Reset form status after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    }, 1000);
  };

  // Contact information
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-medical-500" />,
      title: t("phone"),
      details: ["+380 97 123 4567", "+380 50 987 6543"],
    },
    {
      icon: <Mail className="w-6 h-6 text-medical-500" />,
      title: t("email"),
      details: ["doctor@example.com", "info@medcare.com"],
    },
    {
      icon: <MapPin className="w-6 h-6 text-medical-500" />,
      title: t("address"),
      details: ["123 Medical Street", "Kyiv, Ukraine, 01001"],
    },
    {
      icon: <Clock className="w-6 h-6 text-medical-500" />,
      title: t("consultation_hours"),
      details: ["Mon-Fri: 9:00 - 18:00", "Sat: 10:00 - 15:00", "Sun: Closed"],
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={t("contact_title")}
        subtitle="We're here to help. Reach out to us with any questions or to schedule an appointment"
        showCta={false}
        image="/contact.jpg"
      />

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md h-full">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
                  {t("contact_info")}
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-medical-600 mt-0.5" />
                    <div>
                      <h3 className="text-sm sm:text-base font-medium text-gray-800">{t("phone")}</h3>
                      <p className="text-sm sm:text-base text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-medical-600 mt-0.5" />
                    <div>
                      <h3 className="text-sm sm:text-base font-medium text-gray-800">{t("email")}</h3>
                      <p className="text-sm sm:text-base text-gray-600">info@medcare.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-medical-600 mt-0.5" />
                    <div>
                      <h3 className="text-sm sm:text-base font-medium text-gray-800">{t("address")}</h3>
                      <p className="text-sm sm:text-base text-gray-600">123 Medical Center Dr.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-medical-600 mt-0.5" />
                    <div>
                      <h3 className="text-sm sm:text-base font-medium text-gray-800">{t("working_hours")}</h3>
                      <p className="text-sm sm:text-base text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md h-full">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
                  {t("send_message")}
                </h2>

                {formStatus === "success" ? (
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-start mb-4 sm:mb-6">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm sm:text-base font-medium">{t("message_sent")}</p>
                      <p className="text-xs sm:text-sm mt-1">
                        {t("message_sent_description")}
                      </p>
                    </div>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                        {t("name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                        {t("email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      {t("subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      {t("message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-medical-600 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === "sending" ? t("sending") : t("send_message")}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">{t("faq_title")}</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              {t("faq_description")}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-6 flex justify-between items-center text-left"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-medical-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-medical-500" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 sm:p-6 pt-0 border-t border-gray-100">
                          <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
