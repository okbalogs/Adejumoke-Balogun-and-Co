import React, { useState } from "react";
import { motion as Motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Briefcase, User, Info, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/e557697424378847b7379f9dd75d09fb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `Legal Inquiry: ${formData.service || 'General Inquiry'} - ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
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
                      <h4 className="font-['Playfair_Display'] text-lg sm:text-xl font-bold mb-1">Phone</h4>
                      <a
                        href="tel:+2348035307543"
                        className="font-['Inter'] text-xs sm:text-sm text-gray-400 hover:text-[#D6AD60] transition-colors"
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
              href="mailto:adejumokejbalogun@yahoo.co.uk"
              className="flex items-center justify-center gap-3 w-full bg-[#1B1E21] text-white px-6 py-4 rounded-2xl font-['Inter'] font-bold text-base hover:bg-[#2d3136] transition-all shadow-lg"
            >
              <Mail size={24} />
              Send an Email
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
                <div className="w-10 h-10 bg-[#1B1E21] rounded-xl flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#1B1E21]">
                  Send a Message
                </h3>
              </div>
              <p className="font-['Inter'] text-sm text-gray-400 mb-8 sm:mb-10">
                Fill in the form below and we will get back to you as soon as possible.
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

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="w-full bg-[#1B1E21] text-white p-5 sm:p-6 rounded-2xl font-['Inter'] font-bold text-base sm:text-lg hover:bg-[#2d3136] transition-all flex items-center justify-center gap-3 shadow-xl group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        Sending...
                        <Loader2 size={22} className="animate-spin" />
                      </>
                    ) : status === "success" ? (
                      <>
                        Message Sent
                        <CheckCircle size={22} className="text-green-400" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 font-['Inter'] text-sm justify-center bg-red-50 p-3 rounded-xl border border-red-100">
                      <AlertCircle size={16} />
                      Failed to send message. Please try again later.
                    </div>
                  )}
                  {status === "success" && (
                    <div className="flex items-center gap-2 text-green-600 font-['Inter'] text-sm justify-center bg-green-50 p-3 rounded-xl border border-green-100">
                      <CheckCircle size={16} />
                      Your message has been sent successfully.
                    </div>
                  )}
                </div>
              </form>
            </Motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
