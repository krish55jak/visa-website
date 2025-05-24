"use client"

import { Link } from "react-router-dom"
import { Facebook, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"
import LanguageSwitcher from "./LanguageSwitcher"

const Footer = () => {
  const { t, language } = useLanguage()

  const quickLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.clients"), path: "/clients" },
    { name: t("nav.jobs"), path: "/job-apply" },
  ]

  const services = [
    { name: "Malaysia Visa", path: "/services" },
    { name: "UAE Visa", path: "/services" },
    { name: "Qatar Visa", path: "/services" },
    { name: "Japan Visa", path: "/services" },
    { name: "European Visas", path: "/services" },
  ]

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/placeholder.svg?height=40&width=40" alt="Visa Center Logo" className="h-10 w-10 mr-2" />
              <span className="text-xl font-bold">VisaCenter</span>
            </div>
            <p className="text-gray-300 mb-4">
              {language === "en"
                ? "Your trusted partner for international visa services and job opportunities."
                : "अन्तर्राष्ट्रिय भिसा सेवाहरू र रोजगारी अवसरहरूका लागि तपाईंको विश्वसनीय साझेदार।"}
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">{language === "en" ? "Language:" : "भाषा:"}</span>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">{language === "en" ? "Quick Links" : "द्रुत लिङ्कहरू"}</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-300 hover:text-blue-300 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">{language === "en" ? "Our Services" : "हाम्रा सेवाहरू"}</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-300 hover:text-blue-300 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">{language === "en" ? "Contact Us" : "सम्पर्क गर्नुहोस्"}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-blue-300" />
                <span className="text-gray-300">123 Visa Street, Global City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-300" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-300" />
                <a href="mailto:info@visacenter.com" className="text-gray-300 hover:text-blue-300">
                  info@visacenter.com
                </a>
              </li>
              <li className="flex items-center">
                <Facebook size={18} className="mr-2 text-blue-300" />
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-300"
                >
                  VisaCenter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VisaCenter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
