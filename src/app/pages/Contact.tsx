import React, { useState } from "react";
import { motion as Motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Briefcase, User, Info } from "lucide-react";

const WHATSAPP_NUMBER = "2348035307543";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      `Hello Barr. Adejumoke Balogun,`,
      ``,
      `My name is ${formData.name}.`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service needed: ${formData.service}`,
      ``,
      `Message:`,
      formData.message
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="font-['Inter'] font-semibold text-[#D6AD60] text-sm tracking-widest uppercase mb-3 block">
            Get In Touch
          </span>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B1E21] mb-6 leading-tight">
            Contact Barr. Adejumoke Balogun
          </h1>
          <p className="font-['Inter'] text-base sm:text-lg text-[#3F4242] leading-relaxed">
            Every client matter is handled with care, professionalism, and dedication. Reach out today to schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            <div className="bg-[#1B1E21] text-white p-8 sm:p-10 rounded-[40px] sm:rounded-[50px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#D6AD60]/20 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold mb-8">Contact Info</h3>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#242C44] rounded-2xl flex items-center justify-center text-[#D6AD60]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display'] text-lg sm:text-xl font-bold mb-1">Office Address</h4>
                      <p className="font-['Inter'] text-xs sm:text-sm text-gray-400 leading-relaxed">
                        No 5 Agunfoye road igbogbo ikorodu Lagos, Lagos State, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#242C44] rounded-2xl flex items-center justify-center text-[#D6AD60]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display'] text-lg sm:text-xl font-bold mb-1">Phone / WhatsApp</h4>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Inter'] text-xs sm:text-sm text-[#25D366] hover:underline"
                      >
                        08035307543
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#242C44] rounded-2xl flex items-center justify-center text-[#D6AD60]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display'] text-lg sm:text-xl font-bold mb-1">Email</h4>
                      <p className="font-['Inter'] text-xs sm:text-sm text-gray-400 break-all">adejumokejbalogun@yahoo.co.uk</p>
                    </div>
                  </div>

                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#242C44] rounded-2xl flex items-center justify-center text-[#D6AD60]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display'] text-lg sm:text-xl font-bold mb-1">Availability</h4>
                      <p className="font-['Inter'] text-xs sm:text-sm text-gray-400">Monday - Friday: 9am - 5pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white px-6 py-4 rounded-2xl font-['Inter'] font-bold text-base hover:bg-[#1ebe57] transition-all shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>

            <div className="bg-[#F8F9FA] p-6 sm:p-8 rounded-[30px] sm:rounded-[40px] border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <Info size={20} className="text-[#D6AD60]" />
                <h4 className="font-['Playfair_Display'] font-bold text-[#1B1E21]">Important Note</h4>
              </div>
              <p className="font-['Inter'] text-xs sm:text-sm text-gray-500 leading-relaxed">
                Accessing or using this website does not create a lawyer-client relationship. For legal advice regarding your specific situation, please schedule a consultation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-100 p-8 sm:p-12 lg:p-16 rounded-[40px] sm:rounded-[60px] shadow-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#1B1E21]">
                  Send a WhatsApp Message
                </h3>
              </div>
              <p className="font-['Inter'] text-sm text-gray-400 mb-8 sm:mb-10">
                Fill in the form and you will be taken directly to WhatsApp with your message pre-filled and ready to send.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2">
                    <label className="font-['Inter'] text-sm font-bold text-[#1B1E21] flex items-center gap-2">
                      <User size={15} className="text-[#D6AD60]" />
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-[#F8F9FA] border border-gray-200 p-4 sm:p-5 rounded-2xl font-['Inter'] text-sm focus:outline-none focus:border-[#D6AD60] focus:ring-1 focus:ring-[#D6AD60] transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-['Inter'] text-sm font-bold text-[#1B1E21] flex items-center gap-2">
                      <Mail size={15} className="text-[#D6AD60]" />
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-[#F8F9FA] border border-gray-200 p-4 sm:p-5 rounded-2xl font-['Inter'] text-sm focus:outline-none focus:border-[#D6AD60] focus:ring-1 focus:ring-[#D6AD60] transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2">
                    <label className="font-['Inter'] text-sm font-bold text-[#1B1E21] flex items-center gap-2">
                      <Phone size={15} className="text-[#D6AD60]" />
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="Enter your phone"
                      className="w-full bg-[#F8F9FA] border border-gray-200 p-4 sm:p-5 rounded-2xl font-['Inter'] text-sm focus:outline-none focus:border-[#D6AD60] focus:ring-1 focus:ring-[#D6AD60] transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-['Inter'] text-sm font-bold text-[#1B1E21] flex items-center gap-2">
                      <Briefcase size={15} className="text-[#D6AD60]" />
                      Service Required
                    </label>
                    <select
                      required
                      className="w-full bg-[#F8F9FA] border border-gray-200 p-4 sm:p-5 rounded-2xl font-['Inter'] text-sm focus:outline-none focus:border-[#D6AD60] focus:ring-1 focus:ring-[#D6AD60] transition-all appearance-none cursor-pointer"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select a service</option>
                      <option value="Contract Drafting & Review">Contract Drafting &amp; Review</option>
                      <option value="Property & Tenancy Law">Property &amp; Tenancy Law</option>
                      <option value="Estate Administration">Estate Administration</option>
                      <option value="Legal Advisory Services">Legal Advisory Services</option>
                      <option value="Business Legal Support">Business Legal Support</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-['Inter'] text-sm font-bold text-[#1B1E21] flex items-center gap-2">
                    <MessageSquare size={15} className="text-[#D6AD60]" />
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your legal needs..."
                    className="w-full bg-[#F8F9FA] border border-gray-200 p-4 sm:p-5 rounded-3xl font-['Inter'] text-sm focus:outline-none focus:border-[#D6AD60] focus:ring-1 focus:ring-[#D6AD60] transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] text-white p-5 sm:p-6 rounded-2xl font-['Inter'] font-bold text-base sm:text-lg hover:bg-[#1ebe57] transition-all flex items-center justify-center gap-3 shadow-xl group"
                >
                  Send via WhatsApp
                  <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </Motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
