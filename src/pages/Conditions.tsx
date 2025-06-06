import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Info, ChevronDown, ChevronUp, Check, ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

const Conditions = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCondition, setExpandedCondition] = useState<number | null>(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Toggle expanded condition
  const toggleCondition = (index: number) => {
    if (expandedCondition === index) {
      setExpandedCondition(null);
    } else {
      setExpandedCondition(index);
    }
  };

  // Conditions data
  const conditions = [
    {
      title: "Benign Prostatic Hyperplasia (BPH)",
      shortDescription: "Non-cancerous enlargement of the prostate gland that can cause urinary symptoms.",
      description:
        "Benign Prostatic Hyperplasia (BPH) is a common condition in older men where the prostate gland enlarges, potentially causing urinary problems. The enlarged prostate can squeeze or partially block the urethra, causing difficulty in urination.",
      symptoms: [
        "Frequent need to urinate, especially at night",
        "Difficulty starting urination",
        "Weak urine stream or a stream that stops and starts",
        "Dribbling at the end of urination",
        "Inability to completely empty the bladder"
      ],
      treatment: "Treatment options include lifestyle modifications, medications to relax the prostate muscles or shrink the prostate, minimally invasive procedures, and surgical interventions in more severe cases."
    },
    {
      title: "Erectile Dysfunction",
      shortDescription: "The inability to achieve or maintain an erection sufficient for satisfactory sexual performance.",
      description:
        "Erectile Dysfunction (ED) is a common condition characterized by the consistent inability to achieve or maintain an erection sufficient for sexual intercourse. It can be caused by physical factors, psychological issues, or a combination of both.",
      symptoms: [
        "Difficulty achieving an erection",
        "Trouble maintaining an erection during sexual activities",
        "Reduced sexual desire"
      ],
      treatment: "Treatment approaches include addressing underlying health conditions, lifestyle changes, medications such as PDE5 inhibitors, therapy for psychological causes, vacuum devices, and surgical options in some cases."
    },
    {
      title: "Urinary Tract Infections (UTIs)",
      shortDescription: "Infection in any part of the urinary system, including kidneys, ureters, bladder, and urethra.",
      description:
        "Urinary Tract Infections (UTIs) occur when bacteria enter the urinary tract system, which includes your kidneys, ureters, bladder, and urethra. UTIs most commonly affect the lower urinary tract (the bladder and urethra).",
      symptoms: [
        "Strong, persistent urge to urinate",
        "Burning sensation when urinating",
        "Cloudy, strong-smelling urine",
        "Pelvic pain in women",
        "Rectal pain in men"
      ],
      treatment: "Treatment typically involves antibiotics to kill the bacteria causing the infection. For recurrent UTIs, longer courses of antibiotics, preventive antibiotics, or other treatments may be recommended."
    },
    {
      title: "Kidney Stones",
      shortDescription: "Hard deposits made of minerals and salts that form inside your kidneys.",
      description:
        "Kidney stones are hard deposits made of minerals and salts that form inside your kidneys. They can affect any part of your urinary tract from your kidneys to your bladder. Passing kidney stones can be quite painful, but the stones usually cause no permanent damage.",
      symptoms: [
        "Severe pain in the side and back, below the ribs",
        "Pain that radiates to the lower abdomen and groin",
        "Pain that comes in waves and fluctuates in intensity",
        "Pink, red, or brown urine",
        "Nausea and vomiting"
      ],
      treatment: "Treatment depends on the size and cause of the stones. Small stones may pass naturally with pain management and increased fluid intake. Larger stones may require medical procedures such as sound wave therapy, ureteroscopy, or percutaneous nephrolithotomy."
    },
    {
      title: "Prostatitis",
      shortDescription: "Inflammation of the prostate gland that can cause pelvic pain and urinary symptoms.",
      description:
        "Prostatitis is inflammation of the prostate gland that can cause pain in the groin, pelvic area, or genitals, and urination problems. It can be caused by a bacterial infection or other factors.",
      symptoms: [
        "Pain or burning sensation when urinating",
        "Difficulty urinating",
        "Frequent urination, particularly at night",
        "Pain in the abdomen, groin, or lower back",
        "Pain in the perineum, penis, or testicles"
      ],
      treatment: "Treatment depends on the cause. Bacterial prostatitis is treated with antibiotics. Non-bacterial prostatitis may be treated with alpha-blockers, anti-inflammatory agents, and lifestyle changes."
    },
    {
      title: "Male Infertility",
      shortDescription: "Inability to cause pregnancy in a fertile female due to problems with sperm production or delivery.",
      description:
        "Male infertility is a condition where a man has a reduced ability to cause pregnancy in a fertile female. It's usually due to problems with sperm production or sperm function. Various factors can interfere with sperm production and reduce fertility.",
      symptoms: [
        "Inability to conceive a child after a year of regular, unprotected sexual intercourse",
        "Problems with sexual function, such as difficulty with ejaculation",
        "Pain, swelling, or a lump in the testicle area",
        "Decreased facial or body hair or other signs of chromosomal or hormonal abnormalities"
      ],
      treatment: "Treatment depends on the cause and may include surgery, treatments for infections, hormone treatments, assisted reproductive technology, or lifestyle changes."
    },
    {
      title: "Testicular Disorders",
      shortDescription: "Various conditions affecting the testicles, including inflammation, torsion, and cancer.",
      description:
        "Testicular disorders encompass a range of conditions affecting the male reproductive glands. These include inflammation (orchitis), testicular torsion (twisting of the testicle), varicocele (enlarged veins), and testicular cancer.",
      symptoms: [
        "Pain or discomfort in a testicle or the scrotum",
        "Swelling or lump in the testicle",
        "Feeling of heaviness in the scrotum",
        "Dull ache in the abdomen or groin",
        "Sudden pain in the testicle or scrotum (emergency in case of torsion)"
      ],
      treatment: "Treatment varies by condition. Infections may require antibiotics, torsion needs emergency surgery, varicoceles may be surgically corrected, and testicular cancer treatment depends on the stage and type."
    },
    {
      title: "Bladder Cancer",
      shortDescription: "Cancer that begins in the cells lining the inside of the bladder.",
      description:
        "Bladder cancer is a type of cancer that begins in the cells of the bladder, a hollow muscular organ in the lower abdomen that stores urine. Most bladder cancers start in the cells that line the inside of the bladder (urothelial cells).",
      symptoms: [
        "Blood in urine (hematuria)",
        "Frequent urination",
        "Painful urination",
        "Back pain",
        "Pelvic pain"
      ],
      treatment: "Treatment options depend on the stage and grade of the cancer, as well as overall health. They may include surgery, intravesical therapy, chemotherapy, radiation therapy, immunotherapy, and targeted therapy."
    }
  ];

  // Filter conditions based on search term
  const filteredConditions = conditions.filter(condition =>
    condition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    condition.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        title={t("conditions_title")}
        subtitle="Information about common urological and andrological conditions, their symptoms, and treatment options"
        showCta={false}
        image="/conditions.jpg"
      />

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search conditions..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-medical-400 focus:ring focus:ring-medical-100 focus:ring-opacity-50 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions List */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">{t('conditions_title')}</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              {t('info_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-card-gradient p-4 sm:p-5 rounded-lg flex items-center"
              >
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-medical-500 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">{condition.title}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/conditions"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-medical-700 border border-medical-200 rounded-lg font-medium hover:bg-medical-50 hover-lift"
            >
              {t('view_all_conditions')} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Conditions Details */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-4 sm:space-y-6"
          >
            {filteredConditions.length > 0 ? (
              filteredConditions.map((condition, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div
                    className="p-4 sm:p-6 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleCondition(index)}
                  >
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                        {condition.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mt-1">{condition.shortDescription}</p>
                    </div>
                    <div className="ml-4">
                      {expandedCondition === index ? (
                        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-medical-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-medical-500" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedCondition === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 sm:p-6 border-t border-gray-100">
                          <div className="prose prose-sm sm:prose-base max-w-none">
                            <p className="text-sm sm:text-base text-gray-600">{condition.description}</p>
                            {condition.symptoms && (
                              <div className="mt-4">
                                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                                  {t('common_symptoms')}
                                </h4>
                                <ul className="list-disc list-inside space-y-1">
                                  {condition.symptoms.map((symptom, idx) => (
                                    <li key={idx} className="text-sm sm:text-base text-gray-600">
                                      {symptom}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {condition.treatment && (
                              <div className="mt-4">
                                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                                  {t('treatment_options')}
                                </h4>
                                <p className="text-sm sm:text-base text-gray-600">{condition.treatment}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-8 sm:py-12">
                <Info className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2">No conditions found</h3>
                <p className="text-sm sm:text-base text-gray-500">
                  No conditions match your search criteria. Please try different keywords.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Information Disclaimer */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-card-gradient rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-gray-800">Important Information</h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600">
              <p>
                The information provided on this page is for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
              </p>
              <p>
                If you think you may have a medical emergency, call your doctor or emergency services immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conditions;
