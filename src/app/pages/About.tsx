import React from "react";
import { Link } from "react-router";
import { motion as Motion } from "motion/react";
import { CheckCircle2, Award, Shield, Users, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import aboutPortrait from "../../assets/about-portrait.jpg";

export const About = () => {
  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="container mx-auto px-5 sm:px-6">
        <section className="mb-16 sm:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] sm:rounded-[60px] overflow-hidden shadow-2xl border-[10px] sm:border-[16px] border-[#D6AD60]/10">
                <ImageWithFallback
                  src={aboutPortrait}
                  alt="Barr. Adejumoke Balogun"
                  className="w-full h-[380px] sm:h-[500px] lg:h-[700px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#D6AD60] rounded-full z-0 opacity-20" />
              <div className="absolute -top-6 -left-6 w-24 h-24 sm:w-40 sm:h-40 bg-[#242C44] rounded-full z-0 opacity-10" />
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-['Inter'] font-semibold text-[#D6AD60] text-sm tracking-widest uppercase mb-3 block">
                Meet the Lawyer
              </span>
              <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B1E21] mb-6 leading-tight">
                Barr. Adejumoke Balogun
              </h1>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-[#3F4242] leading-relaxed font-['Inter']">
                <p>
                  Barr. Adejumoke Balogun is a seasoned Legal Practitioner with extensive experience in providing legal advisory, documentation, and professional legal support to individuals, businesses, and organizations.
                </p>
                <p>
                  She obtained her Bachelor of Laws (LL.B) degree from the University of Ilorin in 2003. She subsequently attended the Nigerian Law School and was called to the Nigerian Bar on the 8th of November, 2005, thereby becoming a member of the Nigerian Bar Association.
                </p>
                <p>
                  Barr. Balogun began her professional legal career with Agnamuche &amp; Agbamuche, where she practiced between 2007 and 2008, gaining valuable experience in legal practice, client representation, and legal documentation.
                </p>
                <p>
                  With a strong commitment to professional excellence and client service, she later established her private legal practice in 2020, where she continues to provide legal services to individuals, entrepreneurs, and corporate organizations. Her work primarily focuses on contract drafting and review, property and tenancy matters, legal documentation, estate-related matters, and general legal advisory services.
                </p>
                <p>
                  Over the years, Barr. Balogun has worked with numerous individual clients and corporate organizations, providing practical and well-structured legal solutions designed to protect their legal rights and commercial interests.
                </p>
                <p>
                  In addition to her private practice, she currently serves as the Legal Secretary of the Nigerian Credit Rating Association, where she contributes her legal expertise to the administrative and regulatory activities of the association.
                </p>
                <p>
                  Barr. Adejumoke Balogun is known for her professional integrity, attention to detail, and dedication to delivering reliable legal solutions. Her approach to legal practice is guided by a commitment to excellence, confidentiality, and the protection of her clients' interests.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h4 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#1B1E21]">LL.B, 2003</h4>
                  <p className="font-['Inter'] text-xs sm:text-sm text-gray-500 font-medium">University of Ilorin</p>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h4 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#1B1E21]">Called, 2005</h4>
                  <p className="font-['Inter'] text-xs sm:text-sm text-gray-500 font-medium">Nigerian Bar Association</p>
                </div>
              </div>
            </Motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-[#F8F9FA] rounded-[40px] sm:rounded-[60px] px-6 sm:px-12 mb-16 sm:mb-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6AD60]/5 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <span className="font-['Inter'] font-semibold text-[#D6AD60] text-sm tracking-widest uppercase mb-3 block">
                Our Foundation
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1E21]">
                Core Principles of Our Practice
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
              {[
                {
                  title: "Professional Excellence",
                  icon: <Award className="text-[#D6AD60]" size={28} />,
                  desc: "Upholding the highest standards in every legal matter we handle."
                },
                {
                  title: "Confidentiality & Trust",
                  icon: <Shield className="text-[#D6AD60]" size={28} />,
                  desc: "Protecting your information with absolute discretion and care."
                },
                {
                  title: "Client-Focused Representation",
                  icon: <Users className="text-[#D6AD60]" size={28} />,
                  desc: "Your legal rights and interests are our primary commitment."
                },
                {
                  title: "Effective Documentation",
                  icon: <CheckCircle2 className="text-[#D6AD60]" size={28} />,
                  desc: "Clear, concise, and legally sound documents to prevent future disputes."
                }
              ].map((value, idx) => (
                <div key={idx} className="bg-white p-7 sm:p-10 rounded-[28px] sm:rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center">
                  <div className="mb-4 bg-[#F8F9FA] p-4 sm:p-6 rounded-2xl sm:rounded-3xl">{value.icon}</div>
                  <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-bold text-[#1B1E21] mb-3">{value.title}</h3>
                  <p className="font-['Inter'] text-sm text-gray-500 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center px-2">
          <h2 className="font-['Playfair_Display'] text-2xl sm:text-4xl font-bold text-[#1B1E21] mb-6 sm:mb-8 leading-snug">
            "To provide accessible, reliable, and effective legal services tailored to meet the unique needs of every client."
          </h2>
          <p className="font-['Inter'] text-base sm:text-lg text-[#3F4242] mb-8 sm:mb-12">
            Barr. Adejumoke Balogun is dedicated to helping individuals and organizations navigate the complexities of the law with peace of mind.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#1B1E21] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-['Inter'] font-bold text-base sm:text-lg hover:bg-[#D6AD60] transition-all shadow-xl shadow-black/20 group"
          >
            Get In Touch
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </div>
    </div>
  );
};
