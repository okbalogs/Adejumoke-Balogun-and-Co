import React from "react";
import { Link } from "react-router";
import { motion as Motion } from "motion/react";
import { Briefcase, Award, BookOpen, Shield, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import consultation from "../../assets/consultation.jpg";
import legalGavel from "../../assets/legal-gavel.jpg";
import legalPractice from "../../assets/legal-practice.jpg";
import heroPortrait from "../../assets/hero-portrait.jpg";
import teamLaw from "../../assets/team-law.jpg";

export const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: "Contract Drafting and Review",
      desc: "Contracts are essential in defining legal relationships and preventing disputes. Our services include the drafting, review, and interpretation of various legal agreements to ensure clarity and legal protection for all parties involved.",
      details: [
        "Business contracts",
        "Service agreements",
        "Website development agreements",
        "Partnership agreements",
        "Consultancy agreements",
        "Non-disclosure agreements"
      ],
      icon: <Briefcase className="text-[#D6AD60]" size={36} />,
      image: consultation
    },
    {
      title: "Property and Tenancy Law",
      desc: "Property transactions and tenancy arrangements require clear legal documentation to avoid disputes and protect ownership rights.",
      details: [
        "Drafting tenancy agreements",
        "Property transaction documentation",
        "Land agreements",
        "Lease agreements",
        "Legal advisory on landlord and tenant rights"
      ],
      icon: <Award className="text-[#D6AD60]" size={36} />,
      image: legalGavel
    },
    {
      title: "Estate Administration and Documentation",
      desc: "Proper estate planning and administration help ensure that assets are properly managed and transferred in accordance with the law.",
      details: [
        "Power of Attorney documentation",
        "Estate administration support",
        "Legal documentation relating to estate management",
        "Inheritance planning advice"
      ],
      icon: <BookOpen className="text-[#D6AD60]" size={36} />,
      image: legalPractice
    },
    {
      title: "Legal Advisory Services",
      desc: "We provide professional legal advice to individuals, startups, and organizations seeking guidance on legal matters affecting their personal or business interests. Our advisory services help clients make informed decisions while minimizing legal risks.",
      details: [
        "Risk management advice",
        "Dispute resolution strategies",
        "Legal compliance audits",
        "Contractual obligations advisory"
      ],
      icon: <Shield className="text-[#D6AD60]" size={36} />,
      image: heroPortrait
    },
    {
      title: "Business and Corporate Legal Support",
      desc: "Businesses require reliable legal support to operate effectively and comply with applicable laws. Our services include business agreements, corporate documentation, legal advisory for entrepreneurs, and compliance support.",
      details: [
        "Business registration support",
        "Corporate governance advisory",
        "Commercial contract management",
        "Operational legal compliance"
      ],
      icon: <Users className="text-[#D6AD60]" size={36} />,
      image: teamLaw
    }
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="font-['Inter'] font-semibold text-[#D6AD60] text-sm tracking-widest uppercase mb-3 block">
            Our Expertise
          </span>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B1E21] mb-6 leading-tight">
            Our Range of Services
          </h1>
          <p className="font-['Inter'] text-base sm:text-lg text-[#3F4242] leading-relaxed">
            Our practice is founded on the principles of integrity, excellence, and diligence. We provide legal support across various areas of law to ensure your rights are properly protected.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {practiceAreas.map((area, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8 lg:gap-16 lg:flex-row lg:items-center"
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-2xl h-[280px] sm:h-[380px] lg:h-[500px]">
                  <ImageWithFallback
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-5 left-5 sm:top-8 sm:left-8 bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg">
                    {area.icon}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B1E21] mb-4 sm:mb-6">
                  {area.title}
                </h3>
                <p className="font-['Inter'] text-base sm:text-lg text-[#3F4242] leading-relaxed mb-6 sm:mb-8">
                  {area.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {area.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#D6AD60] mt-1 shrink-0" />
                      <span className="font-['Inter'] font-medium text-[#1B1E21] text-sm leading-snug">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 sm:mt-12">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-['Inter'] font-bold text-[#1B1E21] hover:text-[#D6AD60] transition-colors group"
                  >
                    Request Consultation
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        <div className="mt-20 sm:mt-32 bg-[#1B1E21] rounded-[40px] sm:rounded-[60px] p-8 sm:p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D6AD60] via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
              Need Legal Guidance On These Matters?
            </h2>
            <p className="font-['Inter'] text-base sm:text-lg text-gray-400 mb-8 sm:mb-12">
              Every client matter is handled with care, professionalism, and dedication to achieving the best possible outcome.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D6AD60] text-[#1B1E21] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-['Inter'] font-bold text-base sm:text-lg hover:bg-white transition-all shadow-xl shadow-black/20 group"
            >
              Contact Us Today
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
