import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Microscope, Activity, Stethoscope, Pill, User, ClipboardCheck, Heart, FileText, Shield } from "lucide-react";
import Hero from "../components/Hero";
import { useLanguage } from "../context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Services data
  const services = [
    {
      icon: <Microscope className="w-12 h-12 text-medical-500" />,
      title: "Urological Diagnostics",
      description: "Comprehensive assessment using advanced imaging and laboratory tests to accurately diagnose urological conditions.",
      details: [
        "Urinalysis and Urine Culture",
        "Prostate-Specific Antigen (PSA) Testing",
        "Urodynamic Studies",
        "Cystoscopy and Ureteroscopy",
        "Ultrasound Diagnostics",
      ],
    },
    {
      icon: <Activity className="w-12 h-12 text-teal-500" />,
      title: "Male Reproductive Health",
      description: "Specialized services for addressing male reproductive health concerns and sexual dysfunction.",
      details: [
        "Erectile Dysfunction Assessment",
        "Male Infertility Evaluation",
        "Testosterone Level Testing",
        "Sexual Health Counseling",
        "Prostate Health Management",
      ],
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-medical-500" />,
      title: "General Urology",
      description: "Treatment for a wide range of urological issues affecting the urinary tract and reproductive system.",
      details: [
        "Urinary Tract Infections",
        "Kidney Stones",
        "Benign Prostatic Hyperplasia",
        "Bladder Control Problems",
        "Urological Cancer Screening",
      ],
    },
    {
      icon: <Pill className="w-12 h-12 text-teal-500" />,
      title: "Medical Therapies",
      description: "Non-surgical treatment options utilizing the latest medications and therapeutic approaches.",
      details: [
        "Hormone Replacement Therapy",
        "Pharmaceutical Treatments",
        "Pain Management",
        "Anti-inflammatory Therapies",
        "Antibiotics for Urological Infections",
      ],
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-medical-500" />,
      title: "Preventive Urology",
      description: "Proactive measures to maintain urological health and prevent potential issues before they arise.",
      details: [
        "Regular Prostate Exams",
        "Kidney Health Monitoring",
        "Bladder Cancer Screening",
        "Lifestyle Recommendations",
        "Nutritional Guidance for Urological Health",
      ],
    },
    {
      icon: <User className="w-12 h-12 text-teal-500" />,
      title: "Personalized Consultations",
      description: "One-on-one consultations to address your specific concerns and develop tailored treatment plans.",
      details: [
        "Initial Assessment",
        "Follow-up Appointments",
        "Second Opinion Consultations",
        "Family Consultations",
        "Virtual Consultations",
      ],
    },
  ];

  // Why choose us data
  const reasons = [
    {
      icon: <Heart className="w-8 h-8 text-medical-500" />,
      title: "Patient-First Approach",
      description: "Your comfort and wellbeing are our top priorities throughout your treatment journey.",
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-500" />,
      title: "Latest Medical Advances",
      description: "We utilize cutting-edge technology and evidence-based practices for optimal outcomes.",
    },
    {
      icon: <FileText className="w-8 h-8 text-medical-500" />,
      title: "Comprehensive Care",
      description: "From diagnosis to treatment and follow-up, we provide end-to-end urological care.",
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={t("services_title")}
        subtitle="Comprehensive urological and andrological services with a focus on patient comfort and the latest medical advances"
        showCta={false}
        image="/services.jpg"
      />

      {/* Services List */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">Our Specialized Services</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of urological and andrological services, tailored to meet your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover-lift"
              >
                <div className="p-6">
                  <div className="mb-4 p-3 bg-medical-50 rounded-lg inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-medical-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Why Choose Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated to providing exceptional care with a focus on your individual needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover-lift"
              >
                <div className="p-4 bg-medical-50 rounded-full inline-block mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">Our Service Process</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to ensure you receive the care you need efficiently and effectively.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-medical-100 -translate-y-1/2 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
              {/* Step 1 */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="bg-white p-6 rounded-xl shadow-md text-center hover-lift">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-medical-100 text-medical-600 mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Initial Consultation</h3>
                  <p className="text-gray-600">
                    Thorough assessment of your symptoms, medical history, and concerns.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="bg-white p-6 rounded-xl shadow-md text-center hover-lift">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Diagnosis</h3>
                  <p className="text-gray-600">
                    Using advanced techniques to accurately identify the cause of your symptoms.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="bg-white p-6 rounded-xl shadow-md text-center hover-lift">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-medical-100 text-medical-600 mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Treatment Plan</h3>
                  <p className="text-gray-600">
                    Developing a personalized approach to address your specific condition.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="bg-white p-6 rounded-xl shadow-md text-center hover-lift">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Follow-Up Care</h3>
                  <p className="text-gray-600">
                    Ongoing support and monitoring to ensure optimal recovery and results.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
