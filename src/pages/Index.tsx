import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar, ArrowRight, Star, User, Shield, Clock, Check, Heart } from 'lucide-react';
import Hero from '../components/Hero';
import { useLanguage } from '../context/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Stats data
  const stats = [
    { number: '15+', label: t('experience'), icon: <Clock className="w-6 h-6 text-teal-500" /> },
    { number: '5000+', label: t('patients'), icon: <User className="w-6 h-6 text-medical-500" /> },
    { number: '35+', label: t('published_research'), icon: <Star className="w-6 h-6 text-medical-500" /> },
  ];

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement;
            setTimeout(() => {
              card.classList.add('visible');
            }, 100);
            observer.unobserve(card);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    const statsElements = statsRef.current?.querySelectorAll('.stats-card');
    statsElements?.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${index * 200}ms`;
      observer.observe(el);
    });

    return () => {
      statsElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Services data
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-medical-500" />,
      title: t('urological_diagnostics'),
      description: t('urological_diagnostics_desc')
    },
    {
      icon: <User className="w-12 h-12 text-teal-500" />,
      title: t('andrological_treatment'),
      description: t('andrological_treatment_desc')
    },
    {
      icon: <Heart className="w-12 h-12 text-medical-500" />,
      title: t('preventative_care'),
      description: t('preventative_care_desc')
    }
  ];

  // Common conditions data
  const conditions = [
    t('condition_bph'),
    t('condition_ed'),
    t('condition_uti'),
    t('condition_stones'),
    t('condition_prostatitis'),
    t('condition_infertility'),
    t('condition_testicular'),
    t('condition_bladder')
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with the new doctor image */}
      <Hero 
        title={t('hero_title')}
        subtitle={t('hero_subtitle')}
        image="image-uploads/21d35256-3096-4d78-a011-fc301bf0cc1c.png"
      />

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-card-gradient rounded-xl shadow-sm stats-card"
              >
                <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">
                  {stat.number}
                </h3>
                <p className="text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">{t('services_title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('info_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-medical-600 hover:text-medical-700 font-medium">
                  {t('view_all_services')} <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-white text-medical-700 border border-medical-200 rounded-lg font-medium hover:bg-medical-50 hover-lift"
            >
              {t('view_all_services')} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Conditions Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">{t('conditions_title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('info_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-card-gradient p-4 rounded-lg flex items-center"
              >
                <Check className="w-5 h-5 text-medical-500 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{condition}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/conditions"
              className="inline-flex items-center px-6 py-3 bg-white text-medical-700 border border-medical-200 rounded-lg font-medium hover:bg-medical-50 hover-lift"
            >
              {t('view_all_conditions')} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cta-gradient text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">{t('ready_schedule')}</h2>
            <p className="text-white/90 mb-8 text-lg">
              {t('highest_quality')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-medical-700 rounded-lg font-medium hover:bg-medical-50 hover-lift"
              >
                <Calendar className="mr-2 w-5 h-5" />
                {t('cta_button')}
              </Link>
              <a
                href="tel:+380971234567"
                className="inline-flex items-center px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 hover-lift"
              >
                <Phone className="mr-2 w-5 h-5" />
                {t('call_now')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
