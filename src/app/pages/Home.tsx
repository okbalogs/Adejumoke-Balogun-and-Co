import React from "react";
import { Link } from "react-router";
import { motion as Motion } from "motion/react";
import { ChevronRight, ArrowRight, CheckCircle2, Award, Users, BookOpen, Briefcase } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import heroPortrait from "../../assets/hero-portrait.jpg";
import legalPractice from "../../assets/legal-practice.jpg";
import legalGavel from "../../assets/legal-gavel.jpg";
import consultation from "../../assets/consultation.jpg";

export const Home = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-[100svh] flex items-center bg-[#F8F9FA] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-[#242C44]" />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 py-12 lg:py-0">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#D6AD60]/10 text-[#D6AD60] font-['Inter'] font-semibold text-xs tracking-widest uppercase rounded-full mb-5">
              Legal Practitioner &amp; Consultant
            </span>
            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1B1E21] leading-tight mb-6 lg:mb-8">
              Protecting Your <span className="text-[#D6AD60]">Rights</span> With Integrity.
            </h1>
            <p className="font-['Inter'] text-base sm:text-lg text-[#3F4242] leading-relaxed mb-8 lg:mb-10">
              Welcome to the official website of Barr. Adejumoke Balogun. We provide legal support to individuals, businesses, and organizations seeking practical legal solutions and professional guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="bg-[#1B1E21] text-white px-6 sm:px-8 py-4 rounded-full font-['Inter'] font-bold text-base hover:bg-[#D6AD60] transition-all flex items-center justify-center gap-2 group shadow-xl shadow-black/10"
              >
                Book a Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/practice-areas"
                className="bg-white border-2 border-[#E5E7EB] text-[#1B1E21] px-6 sm:px-8 py-4 rounded-full font-['Inter'] font-bold text-base hover:border-[#D6AD60] hover:text-[#D6AD60] transition-all flex items-center justify-center"
              >
                Our Practice Areas
              </Link>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] mx-auto aspect-[4/5] rounded-t-[600px] border-[12px] border-[#D6AD60]/20 overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={heroPortrait}
                alt="Barr. Adejumoke Balogun"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1E21]/40 to-transparent" />
            </div>

            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-4 left-2 sm:-bottom-6 sm:-left-6 bg-[#1B1E21] text-white p-5 sm:p-8 rounded-2xl shadow-2xl max-w-[180px] sm:max-w-[220px]"
            >
              <h4 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#D6AD60] mb-1 sm:mb-2">99%</h4>
              <p className="font-['Inter'] text-xs sm:text-sm font-medium leading-snug opacity-80">
                Commitment to achieving the best possible outcome for every client.
              </p>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={legalPractice}
                  alt="Legal Practice"
                  className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-28 h-28 sm:w-40 sm:h-40 bg-[#D6AD60] rounded-full z-0 opacity-20" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 sm:w-64 sm:h-64 bg-[#242C44] rounded-full z-0 opacity-10" />
            </div>

            <div className="w-full lg:w-1/2">
              <span className="font-['Inter'] font-semibold text-[#D6AD60] text-sm tracking-widest uppercase mb-3 block">
                The Legal Advocate
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1E21] mb-6 leading-tight">
                Our practice is founded on integrity, excellence, and diligence.
              </h2>
              <p className="font-['Inter'] text-base sm:text-lg text-[#3F4242] leading-relaxed mb-8">
                Whether you require assistance with contract drafting, property matters, tenancy agreements, legal advisory services, or estate documentation, our goal is to ensure that your legal rights and interests are properly protected.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Professional Excellence",
                  "Confidentiality & Trust",
                  "Client-Focused Representation",
                  "Effective Legal Documentation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#D6AD60] shrink-0" size={20} />
                    <span className="font-['Inter'] font-medium text-[#1B1E21] text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-['Inter'] font-bold text-[#1B1E21] hover:text-[#D6AD60] transition-colors group"
              >
                Read More About the Lawyer
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#1B1E21] text-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="font-['Inter'] font-semibold text-[#D6AD60] text-sm tracking-widest uppercase mb-3 block">
                Our Areas of Expertise
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Comprehensive Legal Solutions Tailored To Your Needs
              </h2>
            </div>
            <Link
              to="/practice-areas"
              className="bg-[#D6AD60] text-[#1B1E21] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-['Inter'] font-bold text-sm hover:bg-white transition-all shadow-lg shrink-0"
            >
              All Practice Areas
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Contract Drafting & Review",
                desc: "Assisting with business contracts, service agreements, and non-disclosure agreements.",
                icon: <Briefcase className="text-[#D6AD60]" size={32} />
              },
              {
                title: "Property & Tenancy Law",
                desc: "Drafting tenancy agreements, land agreements, and legal advisory on property rights.",
                icon: <Award className="text-[#D6AD60]" size={32} />
              },
              {
                title: "Estate Administration",
                desc: "Power of Attorney documentation, and legal support relating to estate management.",
                icon: <BookOpen className="text-[#D6AD60]" size={32} />
              }
            ].map((area, idx) => (
              <Motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-[#242C44]/50 border border-white/10 p-7 sm:p-10 rounded-[24px] sm:rounded-[30px] transition-all hover:bg-[#242C44]"
              >
                <div className="mb-5">{area.icon}</div>
                <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold mb-3">{area.title}</h3>
                <p className="text-gray-400 font-['Inter'] text-sm sm:text-base leading-relaxed mb-6">
                  {area.desc}
                </p>
                <Link to="/practice-areas" className="text-[#D6AD60] font-bold text-sm inline-flex items-center gap-2 group">
                  Learn More
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="font-['Inter'] font-semibold text-[#D6AD60] text-sm tracking-widest uppercase mb-3 block">
                Why Choose Our Firm
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1E21] mb-8 leading-tight">
                Dedicated To Delivering Effective Legal Outcomes
              </h2>
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    title: "Professional Excellence",
                    desc: "Commitment to providing high-quality legal advice and thorough documentation."
                  },
                  {
                    title: "Client-Focused Approach",
                    desc: "Every case is handled with individual attention and care for your specific needs."
                  },
                  {
                    title: "Integrity & Transparency",
                    desc: "Clear communication and honest representation in all legal matters."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 sm:gap-6">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#F8F9FA] rounded-xl flex items-center justify-center text-[#D6AD60]">
                      <CheckCircle2 size={22} />
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display'] text-lg sm:text-xl font-bold text-[#1B1E21] mb-1">{item.title}</h4>
                      <p className="text-[#3F4242] font-['Inter'] text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-lg h-48 sm:h-64">
                    <ImageWithFallback src={legalGavel} alt="Legal Gavel" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#D6AD60] p-6 sm:p-10 rounded-[24px] sm:rounded-[30px] text-[#1B1E21] h-48 sm:h-64 flex flex-col justify-end">
                    <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Focused</h3>
                    <p className="font-['Inter'] text-sm sm:text-base font-medium opacity-80">Representation on what matters most to you.</p>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 pt-8 sm:pt-12">
                  <div className="bg-[#1B1E21] p-6 sm:p-10 rounded-[24px] sm:rounded-[30px] text-white h-48 sm:h-64 flex flex-col justify-end">
                    <Users size={28} className="text-[#D6AD60] mb-3" />
                    <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Trusted</h3>
                    <p className="font-['Inter'] text-sm sm:text-base font-medium opacity-80">By individuals and businesses alike.</p>
                  </div>
                  <div className="rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-lg h-48 sm:h-64">
                    <ImageWithFallback src={consultation} alt="Consultation" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="bg-[#1B1E21] rounded-[30px] sm:rounded-[40px] p-8 sm:p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#D6AD60]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
                Ready To Discuss Your Case?
              </h2>
              <p className="font-['Inter'] text-base sm:text-lg text-gray-400 mb-8 sm:mb-12">
                We are committed to helping you navigate your legal issues with clarity and confidence. Contact us today to schedule a professional consultation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#D6AD60] text-[#1B1E21] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-['Inter'] font-bold text-base sm:text-lg hover:bg-white transition-all shadow-xl shadow-black/20 group"
              >
                Schedule Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
