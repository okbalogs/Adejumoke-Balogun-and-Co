import React from "react";
import { Link } from "react-router";
import { motion as Motion } from "motion/react";
import { BookOpen, FileText, Shield, Scale, Info, ArrowRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import scalesOfJustice from "../../assets/scales-of-justice.png";

export const Resources = () => {
  const resources = [
    {
      title: "Understanding Tenancy Agreements in Nigeria",
      desc: "Learn about your rights and obligations as a landlord or tenant under Nigerian law.",
      icon: <Shield className="text-[#D6AD60]" size={32} />,
      tag: "Tenancy Law"
    },
    {
      title: "Key Clauses Every Business Contract Should Contain",
      desc: "Essential elements to include in your contracts to protect your interests and avoid litigation.",
      icon: <FileText className="text-[#D6AD60]" size={32} />,
      tag: "Contracts"
    },
    {
      title: "The Importance of a Power of Attorney",
      desc: "How a Power of Attorney works and when you might need one for legal or financial matters.",
      icon: <Scale className="text-[#D6AD60]" size={32} />,
      tag: "Estate Management"
    },
    {
      title: "Legal Considerations for Business Partnerships",
      desc: "What you need to know before entering into a partnership agreement with others.",
      icon: <BookOpen className="text-[#D6AD60]" size={32} />,
      tag: "Business Law"
    },
    {
      title: "Rights and Obligations of Landlords and Tenants",
      desc: "A comprehensive guide on the legal relationship between property owners and renters.",
      icon: <Info className="text-[#D6AD60]" size={32} />,
      tag: "Property Law"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-['Inter'] font-semibold text-[#D6AD60] text-sm tracking-widest uppercase mb-4 block">
            Legal Resources
          </span>
          <h1 className="font-['Playfair_Display'] text-5xl lg:text-6xl font-bold text-[#1B1E21] mb-8 leading-tight">
            Knowledge Center
          </h1>
          <p className="font-['Inter'] text-lg text-[#3F4242] leading-relaxed">
            This section provides general legal information to help individuals and businesses better understand common legal issues.
          </p>
        </div>

        <div className="bg-[#F8F9FA] border-l-4 border-[#D6AD60] p-8 rounded-r-[30px] mb-16 max-w-4xl mx-auto">
          <div className="flex gap-6 items-start">
            <Info className="text-[#D6AD60] shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-['Playfair_Display'] text-xl font-bold text-[#1B1E21] mb-2">Legal Disclaimer</h4>
              <p className="font-['Inter'] text-sm text-[#3F4242] leading-relaxed italic opacity-80">
                Please note that the information provided in this section is for general educational purposes and does not constitute legal advice. Accessing or using this website does not create a lawyer-client relationship between you and Barr. Adejumoke Balogun.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, idx) => (
            <Motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white border border-gray-100 p-10 rounded-[40px] shadow-sm hover:shadow-2xl transition-all group cursor-pointer"
            >
              <div className="mb-6 bg-[#F8F9FA] p-5 rounded-2xl w-fit group-hover:bg-[#D6AD60]/10 transition-colors">
                {resource.icon}
              </div>
              <span className="font-['Inter'] font-bold text-[#D6AD60] text-xs tracking-widest uppercase mb-4 block">
                {resource.tag}
              </span>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1B1E21] mb-6 group-hover:text-[#D6AD60] transition-colors">
                {resource.title}
              </h3>
              <p className="font-['Inter'] text-gray-500 leading-relaxed mb-8">
                {resource.desc}
              </p>
              <div className="flex items-center gap-2 text-[#1B1E21] font-bold text-sm group-hover:translate-x-1 transition-transform">
                Read Article
                <ArrowRight size={18} />
              </div>
            </Motion.div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#242C44] rounded-[60px] p-12 lg:p-20 text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <ImageWithFallback
              src={scalesOfJustice}
              alt="Legal Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-8">
              Need Professional Legal Advice?
            </h2>
            <p className="font-['Inter'] text-lg text-gray-400 mb-10 leading-relaxed">
              While general resources are helpful, every legal situation is unique. For advice regarding your specific situation, please contact our office directly.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D6AD60] text-[#1B1E21] px-10 py-5 rounded-full font-['Inter'] font-bold text-lg hover:bg-white transition-all shadow-xl group"
            >
              Consult the Lawyer
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="hidden lg:block relative z-10">
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[40px] border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#D6AD60] flex items-center justify-center text-[#1B1E21]">
                  <ExternalLink size={32} />
                </div>
                <div>
                  <h4 className="font-['Playfair_Display'] text-xl font-bold">Consultation Services</h4>
                  <p className="font-['Inter'] text-sm text-gray-400">Personalized legal support</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Detailed Case Review",
                  "Strategic Legal Planning",
                  "Document Preparation",
                  "Risk Assessment"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-['Inter'] text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D6AD60]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
