import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, Heart, Star } from 'lucide-react';
import Hero from '../components/Hero';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Education data
  const education = [
    {
      year: '2005 - 2011',
      degree: 'doctor_of_medicine',
      institution: 'kyiv_medical_university'
    },
    {
      year: '2011 - 2014',
      degree: 'residency_in_urology',
      institution: 'national_medical_academy'
    },
    {
      year: '2015',
      degree: 'fellowship_in_andrology',
      institution: 'european_association'
    }
  ];

  // Experience data
  const experience = [
    {
      year: '2014 - 2017',
      position: 'urologist',
      institution: 'kyiv_city_clinical_hospital'
    },
    {
      year: '2017 - 2020',
      position: 'senior_urologist',
      institution: 'medical_center_health'
    },
    {
      year: '2020 - Present',
      position: 'head_of_urology',
      institution: 'medcare_clinic'
    }
  ];

  // Certifications data
  const certifications = [
    'european_board',
    'advanced_training',
    'laser_surgery',
    'minimally_invasive'
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={t('about_title')}
        subtitle={t('about_subtitle')}
        showCta={false}
        reversed={true}
        image="image-uploads/21d35256-3096-4d78-a011-fc301bf0cc1c.png"
      />

      {/* Doctor's Profile */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">{t('doctor_name')}</h2>
              <p className="text-xl text-gray-700 mb-4">{t('doctor_specialty')}</p>
              
              <div className="space-y-6 text-gray-600 flex-grow">
                <p>{t('doctor_description_1')}</p>
                <p>{t('doctor_description_2')}</p>
                <p>{t('doctor_description_3')}</p>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center p-3 bg-medical-50 rounded-lg">
                  <Heart className="w-6 h-6 text-medical-500 mr-2" />
                  <div>
                    <p className="text-medical-700 font-medium">{t('compassionate_care')}</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-teal-50 rounded-lg">
                  <Award className="w-6 h-6 text-teal-500 mr-2" />
                  <div>
                    <p className="text-teal-700 font-medium">{t('award_winning')}</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg shadow-md">
                  <div className="flex items-center gap-1 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-medium">200+ {t('patient_reviews')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              {/* Certifications */}
              <div className="flex-grow">
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 bg-medical-100 rounded-full">
                    <Award className="w-6 h-6 text-medical-600" />
                  </div>
                  <h2 className="text-2xl font-bold">{t('certifications')}</h2>
                </div>

                <div className="bg-card-gradient rounded-xl p-6 h-[calc(100%-3rem)]">
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-medical-500 rounded-full"></div>
                        </div>
                        <span className="ml-3 text-gray-700">{t(cert)}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Approach */}
              <div className="flex-grow mt-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 bg-teal-100 rounded-full">
                    <BookOpen className="w-6 h-6 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold">{t('my_approach')}</h2>
                </div>

                <div className="bg-card-gradient rounded-xl p-6 space-y-6 h-[calc(100%-3rem)]">
                  <div className="glass-card p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{t('patient_centered')}</h3>
                    <p className="text-gray-600">
                      {t('patient_centered_desc')}
                    </p>
                  </div>

                  <div className="glass-card p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{t('evidence_based')}</h3>
                    <p className="text-gray-600">
                      {t('evidence_based_desc')}
                    </p>
                  </div>

                  <div className="glass-card p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{t('continuous_education')}</h3>
                    <p className="text-gray-600">
                      {t('continuous_education_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="mr-4 p-3 bg-medical-100 rounded-full">
                  <GraduationCap className="w-6 h-6 text-medical-600" />
                </div>
                <h2 className="text-2xl font-bold">{t('education')}</h2>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:bg-medical-400 before:rounded-full before:z-10"
                  >
                    <div className="absolute left-[5.5px] top-3 bottom-0 w-1 h-full bg-medical-200"></div>
                    <div className="glass-card p-5">
                      <span className="text-sm text-medical-600 font-medium">{item.year}</span>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">{t(item.degree)}</h3>
                      <p className="text-gray-600">{t(item.institution)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="mr-4 p-3 bg-teal-100 rounded-full">
                  <Briefcase className="w-6 h-6 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold">{t('experience')}</h2>
              </div>

              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:bg-teal-400 before:rounded-full before:z-10"
                  >
                    <div className="absolute left-[5.5px] top-3 bottom-0 w-1 h-full bg-teal-200"></div>
                    <div className="glass-card p-5">
                      <span className="text-sm text-teal-600 font-medium">{item.year}</span>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">{t(item.position)}</h3>
                      <p className="text-gray-600">{t(item.institution)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
