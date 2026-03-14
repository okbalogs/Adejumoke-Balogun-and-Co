import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion as Motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Practice Areas", path: "/practice-areas" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="font-['Playfair_Display'] font-bold text-[#1B1E21] text-2xl tracking-tighter leading-tight">
            BARR. ADEJUMOKE
          </span>
          <span className="font-['Inter'] font-semibold text-[#D6AD60] text-sm tracking-widest uppercase">
            BALOGUN
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-['Inter'] text-sm font-medium transition-colors hover:text-[#D6AD60] ${
                location.pathname === link.path ? "text-[#D6AD60]" : "text-[#1B1E21]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#1B1E21] text-white px-6 py-2.5 rounded-full font-['Inter'] text-sm font-semibold hover:bg-[#D6AD60] transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>

        <button
          className="md:hidden text-[#1B1E21]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden border-t"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-['Inter'] text-lg font-medium ${
                    location.pathname === link.path ? "text-[#D6AD60]" : "text-[#1B1E21]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#1B1E21] text-white px-6 py-3 rounded-xl font-['Inter'] font-semibold text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#1B1E21] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-flex flex-col mb-6 group">
              <span className="font-['Playfair_Display'] font-bold text-white text-xl leading-tight group-hover:text-[#D6AD60] transition-colors">
                BARR. ADEJUMOKE
              </span>
              <span className="font-['Inter'] font-semibold text-[#D6AD60] text-xs tracking-widest uppercase mt-1">
                BALOGUN
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing professional legal services with integrity, diligence, and a commitment to protecting the rights and interests of every client.
            </p>
          </div>

          <div>
            <h4 className="font-['Playfair_Display'] font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-[#D6AD60] transition-colors">About the Lawyer</Link></li>
              <li><Link to="/practice-areas" className="hover:text-[#D6AD60] transition-colors">Practice Areas</Link></li>
              <li><Link to="/resources" className="hover:text-[#D6AD60] transition-colors">Legal Resources</Link></li>
              <li><Link to="/contact" className="hover:text-[#D6AD60] transition-colors">Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Playfair_Display'] font-bold text-lg mb-6">Practice Areas</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/practice-areas" className="hover:text-[#D6AD60] transition-colors">Contract Drafting &amp; Review</Link></li>
              <li><Link to="/practice-areas" className="hover:text-[#D6AD60] transition-colors">Property &amp; Tenancy Law</Link></li>
              <li><Link to="/practice-areas" className="hover:text-[#D6AD60] transition-colors">Estate Administration</Link></li>
              <li><Link to="/practice-areas" className="hover:text-[#D6AD60] transition-colors">Legal Advisory</Link></li>
              <li><Link to="/practice-areas" className="hover:text-[#D6AD60] transition-colors">Business Legal Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Playfair_Display'] font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="text-[#D6AD60] shrink-0" size={18} />
                <span>No 5 Agunfoye road igbogbo ikorodu Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="text-[#D6AD60] shrink-0" size={18} />
                <a href="https://wa.me/2348035307543" target="_blank" rel="noopener noreferrer" className="hover:text-[#D6AD60] transition-colors">08035307543</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="text-[#D6AD60] shrink-0" size={18} />
                <a href="mailto:adejumokejbalogun@yahoo.co.uk" className="hover:text-[#D6AD60] transition-colors break-all">adejumokejbalogun@yahoo.co.uk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 Barr. Adejumoke Balogun. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
