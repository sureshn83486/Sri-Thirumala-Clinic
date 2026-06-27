/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from './types';
import { TRANSLATIONS } from './data/translations';
import { Logo } from './components/Logo';
import { DoctorProfile } from './components/DoctorProfile';
import { ServicesGrid } from './components/ServicesGrid';
import { Appointments } from './components/Appointments';
import { HeroBanners } from './components/HeroBanners';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Activity, 
  Heart, 
  ArrowRight, 
  AlertCircle, 
  Languages, 
  CheckCircle,
  HelpCircle,
  Thermometer,
  Shield,
  BriefcaseMedical,
  Navigation
} from 'lucide-react';


export default function App() {
  const [language, setLanguage] = useState<Language>('te'); // Default to Telugu as requested & optimal for rural Darsi, but toggleable easily
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedServiceEn, setSelectedServiceEn] = useState('');
  const [selectedServiceTe, setSelectedServiceTe] = useState('');
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'services' | 'facilities' | 'timings' | 'book'>('home');

  const handleNavigate = (tab: 'home' | 'about' | 'services' | 'facilities' | 'timings' | 'book') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [facBannerSrc, setFacBannerSrc] = useState<string>('/banner_facilities.png');

  const t = TRANSLATIONS[language];

  // Map selector link (Curichedu road, Darsi near Anjaneyaswamy temple)
  const mapDirectionsURL = "https://maps.app.goo.gl/jooPZd5BpvVnTHcr6";

  const handleSelectService = (nameEn: string, nameTe: string) => {
    setSelectedServiceEn(nameEn);
    setSelectedServiceTe(nameTe);
    handleNavigate('book');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased selection:bg-rose-500 selection:text-white">
      
      {/* 24/7 Red Alert Floating Banner */}
      <div className="bg-rose-700 text-white text-xs md:text-sm font-semibold py-2.5 px-4 text-center shadow-inner relative flex items-center justify-center gap-2 overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%,transparent)] bg-[length:40px_40px] animate-[pulse_3s_infinite]" />
        <span className="inline-block w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping shrink-0" />
        <p className="relative font-bold select-none tracking-wide">
          {t.emergencySlogan}
        </p>
      </div>

      {/* Header and Interactive Navbar */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-sm border-b border-slate-100 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
          
          {/* Left Portion: Branding & Desktop Nav Links */}
          <div className="flex items-center gap-4 xl:gap-10 grow">
            {/* Logo & Slogan Branding */}
            <button 
              onClick={() => handleNavigate('home')} 
              className="flex items-center gap-3.5 group focus:outline-none shrink-0 text-left cursor-pointer"
            >
              <Logo size={46} showText={false} className="shrink-0 scale-95 group-hover:scale-100 transition-transform duration-200" />
              <div className="leading-tight">
                <h1 className="text-xs sm:text-base lg:text-[15px] xl:text-lg font-black tracking-tight text-slate-900 font-serif whitespace-nowrap">
                  {t.clinicName}
                </h1>
                <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold font-sans text-rose-600 tracking-wider whitespace-nowrap">
                  {t.tagline}
                </p>
              </div>
            </button>

            {/* Nav Links for Desktop */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-5 text-[11px] xl:text-xs font-bold uppercase tracking-wider ml-2 xl:ml-5">
              <button 
                onClick={() => handleNavigate('home')} 
                className={`transition-all duration-200 cursor-pointer whitespace-nowrap px-2 py-1 rounded-lg ${activeTab === 'home' ? 'text-rose-600 font-extrabold bg-rose-50/50' : 'text-slate-600 hover:text-rose-600'}`}
              >
                {t.navHome}
              </button>
              <button 
                onClick={() => handleNavigate('about')} 
                className={`transition-all duration-200 cursor-pointer whitespace-nowrap px-2 py-1 rounded-lg ${activeTab === 'about' ? 'text-rose-600 font-extrabold bg-rose-50/50' : 'text-slate-600 hover:text-rose-600'}`}
              >
                {t.navAbout}
              </button>
              <button 
                onClick={() => handleNavigate('services')} 
                className={`transition-all duration-200 cursor-pointer whitespace-nowrap px-2 py-1 rounded-lg ${activeTab === 'services' ? 'text-rose-600 font-extrabold bg-rose-50/50' : 'text-slate-600 hover:text-rose-600'}`}
              >
                {t.navServices}
              </button>
              <button 
                onClick={() => handleNavigate('facilities')} 
                className={`transition-all duration-200 cursor-pointer whitespace-nowrap px-2 py-1 rounded-lg ${activeTab === 'facilities' ? 'text-rose-600 font-extrabold bg-rose-50/50' : 'text-slate-600 hover:text-rose-600'}`}
              >
                {language === 'en' ? 'Facilities' : 'సౌకర్యాలు'}
              </button>
              <button 
                onClick={() => handleNavigate('timings')} 
                className={`transition-all duration-200 cursor-pointer whitespace-nowrap px-2 py-1 rounded-lg ${activeTab === 'timings' ? 'text-rose-600 font-extrabold bg-rose-50/50' : 'text-slate-600 hover:text-rose-600'}`}
              >
                {t.navTimings}
              </button>
              <button 
                onClick={() => handleNavigate('book')} 
                className={`transition-all duration-200 cursor-pointer bg-rose-50 hover:bg-rose-100 text-rose-700 px-3 py-2 rounded-xl border whitespace-nowrap ${activeTab === 'book' ? 'bg-rose-600 hover:bg-rose-700 text-white border-rose-600' : 'border-rose-100'}`}
              >
                {t.navBook}
              </button>
            </nav>
          </div>

          {/* Bilingual Toggle and Phone Buttons */}
          <div className="flex items-center gap-3 shrink-0 ml-4">
            
            {/* Compact Multilingual Switcher Button */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'te' : 'en')}
              className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-xl text-xs font-black transition-all duration-150 flex items-center gap-1.5 cursor-pointer shadow-sm text-slate-700 active:scale-95"
              title={language === 'en' ? 'Switch to Telugu' : 'Switch to English'}
            >
              <Languages size={13} className="text-rose-600" />
              <span>{language === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            {/* Dial Button on Desktop */}
            <a 
              href="tel:9618888743" 
              className="hidden md:flex items-center gap-1.5 bg-[#1e3a8a] hover:bg-[#122354] active:bg-blue-900 text-white font-bold text-xs p-2.5 xl:px-4 xl:py-2.5 rounded-xl shadow transition-colors"
              title="Call Sri Thirumala Clinic"
            >
              <Phone size={14} />
              <span className="hidden xl:inline">9618888743</span>
            </a>

            {/* Mobile Burger Icon */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden p-2 text-slate-600 hover:text-rose-600 cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-6 space-y-3 shadow-md animate-[slideDown_0.2s_ease-out] flex flex-col items-stretch text-left">
            <button 
              onClick={() => handleNavigate('home')}
              className={`block w-full text-left text-sm font-bold py-2.5 px-3 rounded-xl transition-all border-b border-slate-50 ${activeTab === 'home' ? 'text-rose-600 bg-rose-50/55 font-extrabold' : 'text-slate-700 hover:text-rose-600'}`}
            >
              {t.navHome}
            </button>
            <button 
              onClick={() => handleNavigate('about')}
              className={`block w-full text-left text-sm font-bold py-2.5 px-3 rounded-xl transition-all border-b border-slate-50 ${activeTab === 'about' ? 'text-rose-600 bg-rose-50/55 font-extrabold' : 'text-slate-700 hover:text-rose-600'}`}
            >
              {t.navAbout}
            </button>
            <button 
              onClick={() => handleNavigate('services')}
              className={`block w-full text-left text-sm font-bold py-2.5 px-3 rounded-xl transition-all border-b border-slate-50 ${activeTab === 'services' ? 'text-rose-600 bg-rose-50/55 font-extrabold' : 'text-slate-700 hover:text-rose-600'}`}
            >
              {t.navServices}
            </button>
            <button 
              onClick={() => handleNavigate('facilities')}
              className={`block w-full text-left text-sm font-bold py-2.5 px-3 rounded-xl transition-all border-b border-slate-50 ${activeTab === 'facilities' ? 'text-rose-600 bg-rose-50/55 font-extrabold' : 'text-slate-700 hover:text-rose-600'}`}
            >
              {language === 'en' ? 'Facilities' : 'సౌకర్యాలు'}
            </button>
            <button 
              onClick={() => handleNavigate('timings')}
              className={`block w-full text-left text-sm font-bold py-2.5 px-3 rounded-xl transition-all border-b border-slate-50 ${activeTab === 'timings' ? 'text-rose-600 bg-rose-50/55 font-extrabold' : 'text-slate-700 hover:text-rose-600'}`}
            >
              {t.navTimings}
            </button>
            <button 
              onClick={() => handleNavigate('book')}
              className={`block w-full text-center text-sm font-extrabold text-rose-700 bg-rose-50 py-2.5 px-4 rounded-xl border border-rose-100 transition-all ${activeTab === 'book' ? 'bg-rose-600 text-white border-rose-600' : ''}`}
            >
              {t.navBook}
            </button>
          </div>
        )}
      </header>

      {/* Main Page Sections */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {/* TAB 1: HOME */}
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {/* HERO BANNER SECTION WITH INTEGRATED SLIDESHOW */}
              <HeroBanners 
                language={language} 
                onSelectBook={() => handleNavigate('book')}
                onNavigate={handleNavigate}
              />

              {/* Quick Overview Cards to browse other pages directly */}
              <section className="py-16 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 uppercase tracking-widest font-mono">
                      {language === 'en' ? 'Overview' : 'అవలోకనం'}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif font-black text-slate-900 mt-4 tracking-tight">
                      {language === 'en' ? 'Explore Our Dedicated Medical Sections' : 'మా వైద్య సేవల విభాగములు చూడండి'}
                    </h2>
                    <p className="text-xs text-slate-500 mt-2 font-semibold">
                      {language === 'en' ? 'Select any department to view detailed information or secure an appointment.' : 'వివరాలు తెలుసుకోవడానికి లేదా అపాయింట్మెంట్ కొరకు క్రింది వాటిని ఎంచుకోండి.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Meet Doctor */}
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/60 hover:border-rose-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-700 mb-4 font-black">👨‍⚕️</div>
                        <h3 className="text-lg font-black text-slate-800 font-serif leading-tight">
                          {language === 'en' ? 'Chief Civil Surgeon' : 'ప్రధాన వైద్యాధికారి'}
                        </h3>
                        <p className="text-slate-500 font-semibold text-xs mt-2 leading-relaxed">
                          {language === 'en' ? 'Dr. N.S. Nayak, MBBS, FMEM (UK). Former Apollo chief medical officer with over 15+ years of clinical excellence.' : 'డా॥ N.S. నాయక్ గారు (Civil Surgeon). లండన్ శిక్షణ మరియు ప్రముఖ కార్పొరేట్ హాస్పిటల్స్ అత్యవసర విభాగ అనుభవం.'}
                        </p>
                      </div>
                      <button onClick={() => handleNavigate('about')} className="text-xs font-bold text-rose-600 mt-6 flex items-center gap-1 hover:underline cursor-pointer">
                        <span>{language === 'en' ? 'Doctor Profile' : 'వైద్యుల వివరాలు'}</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>

                    {/* Card 2: Specialized Treatments */}
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/60 hover:border-[#1e3a8a] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 bg-indigo-100 rounded-2xl flex items-center justify-center text-[#1e3a8a] mb-4 font-black">🩺</div>
                        <h3 className="text-lg font-black text-slate-800 font-serif leading-tight">
                          {language === 'en' ? 'Specialized Treatments' : 'చికిత్సలు & జ్వరాలు'}
                        </h3>
                        <p className="text-slate-500 font-semibold text-xs mt-2 leading-relaxed">
                          {language === 'en' ? 'BP, diabetes management, expert fever therapy (dengue, typhoid), asthma relief, poisoning care & stings rescue.' : 'విషజ్వరాలు, డెంగీ, బి.పి, షుగరు, ఆయాసం మరియు తేలుకాటు అత్యవసర ప్రాణ రక్షణ చికిత్సలు.'}
                        </p>
                      </div>
                      <button onClick={() => handleNavigate('services')} className="text-xs font-bold text-[#1e3a8a] mt-6 flex items-center gap-1 hover:underline cursor-pointer">
                        <span>{language === 'en' ? 'Browse Treatments' : 'చికిత్సల వివరాలు'}</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>

                    {/* Card 3: Diagnostics & Facilities */}
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/60 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-4 font-black">🏥</div>
                        <h3 className="text-lg font-black text-slate-800 font-serif leading-tight">
                          {language === 'en' ? 'On-Site Diagnostics' : 'వైద్య సదుపాయాలు'}
                        </h3>
                        <p className="text-slate-500 font-semibold text-xs mt-2 leading-relaxed">
                          {language === 'en' ? 'Immediate high-flow clinical oxygen systems, 12-lead ECG, on-site diagnostics laboratory and pharmacy.' : 'అत्यవసర ఆక్సిజన్, 12-లీడ్ ఈ.సి.జి, డెంగ్యూ & మలేరియా వ్యాధులను గుర్తించు ల్యాబ్ మరియు మెడికల్ షాప్.'}
                        </p>
                      </div>
                      <button onClick={() => handleNavigate('facilities')} className="text-xs font-bold text-emerald-700 mt-6 flex items-center gap-1 hover:underline cursor-pointer">
                        <span>{language === 'en' ? 'View Facilities' : 'సదుపాయాలు చూడండి'}</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Location Map section on Home page */}
              <section className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-4">
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-6 justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-indigo-50 text-[#1e3a8a] rounded-2xl border border-indigo-100 shadow-inner">
                        <MapPin size={22} />
                      </div>
                      <div>
                        <h4 className="text-md font-extrabold text-slate-800 font-serif">
                          {language === 'en' ? 'Clinic Physical Address' : 'క్లినిక్ చిరునామా'}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 max-w-sm font-semibold leading-relaxed">
                          {t.addressText}
                        </p>
                      </div>
                    </div>
                    
                    <a 
                      href={mapDirectionsURL}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full md:w-auto text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-950 px-5 py-3 rounded-xl transition-all duration-150 border border-slate-950 shadow-sm text-center cursor-pointer"
                    >
                      {language === 'en' ? 'Open Google Maps 🗺️' : 'మ్యాప్‌ చిరునామా చూడండి 🗺️'}
                    </a>
                  </div>
                </div>
              </section>

              {/* PATIENT FREQUENTLY ASKED QUESTIONS */}
              <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                  <div className="text-center mb-12">
                    <span className="text-xs font-bold text-[#1e3a8a] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 uppercase tracking-widest font-mono">
                      {language === 'en' ? 'FAQ' : 'ప్రశ్నోత్తరాలు'}
                    </span>
                    <h2 className="text-2xl font-serif font-black text-slate-900 mt-4 tracking-tight">
                      {language === 'en' ? 'Frequently Asked Questions' : 'రోగుల సాధారణ సందేహాలు'}
                    </h2>
                    <div className="w-10 h-0.5 bg-rose-600 mx-auto mt-4 rounded-full"></div>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        q_en: "Is the Doctor available on Sunday?",
                        q_te: "ఆదివారం వైద్య సేవలు అందుబాటులో ఉంటాయా?",
                        a_en: "Yes, Dr. N.S. Nayak represents our Sunday shift in the morning from 09:00 AM to 01:00 PM for all outpatients. Emergency cases are accepted 24/7.",
                        a_te: "అవును, ఆదివారం ఉదయం 9-00 నుండి మధ్యాహ్నం 1-00 గంటల వరకు ఓ.పి సేవలు అందుబాటులో ఉంటాయి. అత్యవసర కేసులు ఎప్పుడైనా (24/7) చూడబడును."
                      },
                      {
                        q_en: "How does the Night-Hospital emergency work?",
                        q_te: "రాత్రిвеళల్లో వైద్య సేవల సదుపాయం ఎలా ఉంటుంది?",
                        a_en: "For any emergency case (stroke, child suffering, breathing struggle, stings, accidents) at night, please call our hotline +91 9618888743 directly. Dr. N.S. Nayak, Civil Assistant Surgeon, is resident and handles nights.",
                        a_te: "గుండెనొప్పి, శ్వాసకోస సమస్యలు, పాము లేదా తేలుకాటు మరియు ప్రమాదాల వంటి ఏ అత్యవసర పరిస్థితుల కొరకు అయినా మా హెల్ప్‌లైన్ నెంబరు 9618888743 కి కాల్ చేయవచ్చు."
                      },
                      {
                        q_en: "Are there diagnostic testing amenities at the clinic?",
                        q_te: "క్లినిక్ నందు ల్యాబ్ మరియు ఈ.సి.జి పరీక్షలు లభించునా?",
                        a_en: "Yes! There is a high-accuracy 12-lead ECG, on-site diagnostics laboratory (for rapid dengue/malaria fevers, blood biochemistry, sugars), premium stock storage pharmacy (medical) and emergency oxygen ventilation setups.",
                        a_te: "అవును! అత్యవసర ఆక్సిజన్, 12-లీడ్ ఈ.సి.జి, డెంగ్యూ & మలేరియా వ్యాధులను గుర్తించు ల్యాబ్ మరియు అన్నిరకాల మందులు ప్రక్కనే ఉన్న మెడికల్ షాప్ నందు 24 గంటలు సిద్ధంగా ఉంచబడును."
                      }
                    ].map((faq, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-xs space-y-2">
                        <h4 className="font-extrabold text-slate-900 flex items-start gap-2 text-sm md:text-base font-serif">
                          <span className="text-rose-600 shrink-0 font-bold">Q{idx + 1}:</span>
                          <span>{language === 'en' ? faq.q_en : faq.q_te}</span>
                        </h4>
                        <div className="pl-6 border-l-2 border-slate-200 mt-2 space-y-1">
                          <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                            {language === 'en' ? faq.a_en : faq.a_te}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* TAB 2: ABOUT */}
          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <DoctorProfile language={language} />
            </motion.div>
          )}

          {/* TAB 3: SERVICES */}
          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <ServicesGrid 
                language={language} 
                onSelectService={handleSelectService} 
              />
            </motion.div>
          )}

          {/* TAB 4: FACILITIES */}
          {activeTab === 'facilities' && (
            <motion.div
              key="facilities"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {/* IMMERSIVE TOP HERO BANNER OR CUSTOM UPLOAD */}
              <div className="relative w-full overflow-hidden shadow-xl border-b border-slate-200 bg-[#071324] text-white">
                {facBannerSrc ? (
                  <div className="w-full h-auto overflow-hidden">
                    <img 
                      src={facBannerSrc} 
                      alt="Sri Thirumala Clinic Facilities Banner" 
                      onError={() => {
                        if (facBannerSrc === '/banner_facilities.png') {
                          setFacBannerSrc('');
                        }
                      }}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto select-none block"
                    />
                  </div>
                ) : (
                  /* Reconstructed HTML/CSS Fallback for Facilities Showcase Banner */
                  <div className="relative w-full py-10 md:py-14 flex flex-col justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
                    <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-indigo-500/10 via-indigo-500/5 to-transparent pointer-events-none" />
                    
                    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full relative z-20">
                      <div className="max-w-3xl space-y-3">
                        {/* Glowing alert badge */}
                        <div className="flex items-center gap-2">
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                          </span>
                          <span className="text-[10px] md:text-xs font-black tracking-widest text-indigo-300 uppercase bg-indigo-950/40 px-3 py-1 rounded-full border border-indigo-500/20 font-mono">
                            {language === 'en' ? 'Clinical Infrastructure & Medical Gear' : 'క్లినికల్ మౌలిక సదుపాయాలు మరియు వైద్య పరికరాలు'}
                          </span>
                        </div>

                        <h1 className="text-2xl md:text-4xl font-serif font-black tracking-tight text-white uppercase">
                          {language === 'en' ? 'Modern Medical Diagnostics' : 'అధునాతన రోగ నిర్ధారణ & చికిత్స సౌకర్యాలు'}
                        </h1>
                        <p className="text-slate-300 text-xs md:text-sm font-semibold max-w-xl">
                          {language === 'en' 
                            ? 'Equipped with direct clinical high-flow oxygen lines, instant 12-lead ECG setups, and rapid test panels for seamless patient triaging.' 
                            : 'నేరుగా క్లినికల్ హై-ఫ్లో ఆక్సిజన్ లైన్లు, తక్షణ 12-లీడ్ ECG మరియు త్వరిత వ్యాధి నిర్ధారణ ల్యాబ్ సదుపాయాలు కలవు.'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <section className="relative bg-slate-50 min-h-screen">


                {/* Remaining Content Container */}
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 space-y-12">

                  {/* Header Column */}
                  <div className="text-center max-w-2xl mx-auto">
                    <span className="text-xs font-bold text-[#1e3a8a] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 uppercase tracking-widest font-mono">
                      {language === 'en' ? 'Diagnostics' : 'రోగ నిర్ధారణ'}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mt-4 tracking-tight">
                      {t.facilitiesTitle}
                    </h2>
                    <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
                  </div>

                  {/* List Facility Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1: Oxygen support */}
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-sky-300 hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 bg-sky-100/80 rounded-2xl flex items-center justify-center text-sky-700 mb-6 font-black font-mono">O₂</div>
                      <h3 className="text-lg font-extrabold text-slate-800 font-serif leading-tight">
                        {t.oxygenTitle}
                      </h3>
                      <p className="text-slate-500 font-semibold text-xs mt-3 leading-relaxed">
                        {t.oxygenDesc}
                      </p>
                      <p className="text-[10px] text-emerald-600 font-black tracking-wider uppercase font-mono mt-4 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded w-max">
                        <CheckCircle size={10} strokeWidth={3} /> Available
                      </p>
                    </div>

                    {/* Card 2: ECG Screening */}
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 bg-indigo-100/80 rounded-2xl flex items-center justify-center text-indigo-700 mb-6">
                        <Activity size={24} className="animate-pulse" />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-800 font-serif leading-tight">
                        {t.ecgTitle}
                      </h3>
                      <p className="text-slate-500 font-semibold text-xs mt-3 leading-relaxed">
                        {t.ecgDesc}
                      </p>
                      <p className="text-[10px] text-emerald-600 font-black tracking-wider uppercase font-mono mt-4 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded w-max">
                        <CheckCircle size={10} strokeWidth={3} /> Available
                      </p>
                    </div>

                    {/* Card 3: Stocked Pharmacy */}
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 bg-emerald-100/80 rounded-2xl flex items-center justify-center text-emerald-700 mb-6">
                        <BriefcaseMedical size={24} />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-800 font-serif leading-tight">
                        {t.medicalTitle}
                      </h3>
                      <p className="text-slate-500 font-semibold text-xs mt-3 leading-relaxed">
                        {t.medicalDesc}
                      </p>
                      <p className="text-[10px] text-emerald-600 font-black tracking-wider uppercase font-mono mt-4 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded w-max">
                        <CheckCircle size={10} strokeWidth={3} /> Available
                      </p>
                    </div>

                    {/* Card 4: Pathology Lab */}
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-rose-300 hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 bg-rose-100/80 rounded-2xl flex items-center justify-center text-rose-700 mb-6">
                        <Thermometer size={24} />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-800 font-serif leading-tight">
                        {t.labTitle}
                      </h3>
                      <p className="text-slate-500 font-semibold text-xs mt-3 leading-relaxed">
                        {t.labDesc}
                      </p>
                      <p className="text-[10px] text-emerald-600 font-black tracking-wider uppercase font-mono mt-4 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded w-max">
                        <CheckCircle size={10} strokeWidth={3} /> Available
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* TAB 5: TIMINGS */}
          {activeTab === 'timings' && (
            <motion.div
              key="timings"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {/* DETAILED WORKING HOURS & STATUS BOARD */}
              <section className="py-12 bg-slate-50 border-t border-slate-100 bg-sky-50/45 scroll-mt-16">
                <div className="max-w-4xl mx-auto px-4">
                  
                  <div className="text-center mb-16">
                    <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 uppercase tracking-widest font-mono">
                      {t.navTimings}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mt-4 tracking-tight">
                      {t.timingsTitle}
                    </h2>
                    <div className="w-16 h-1 bg-rose-600 mx-auto mt-4 rounded-full"></div>
                  </div>

                  {/* Timings Deck Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    
                    {/* Weekday Timings card */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-rose-50 text-rose-600 rounded-2xl border border-rose-100">
                            <Clock size={22} />
                          </div>
                          <div>
                            <h4 className="text-lg font-extrabold text-slate-900 font-serif">
                              {t.weekdayLabel}
                            </h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono mt-0.5">
                              Working Weekdays
                            </p>
                          </div>
                        </div>

                        <div className="mt-8 space-y-4">
                          {/* Morning shift */}
                          <div className="flex items-center justify-between pb-3 border-b border-slate-50">
                            <span className="text-sm text-slate-500 font-bold">{t.morningLabel}</span>
                            <span className="text-sm font-extrabold text-[#111e54] font-mono select-all bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100">
                              07:45 AM - 08:45 AM
                            </span>
                          </div>

                          {/* Evening shift */}
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500 font-bold">{t.eveningLabel}</span>
                            <span className="text-sm font-extrabold text-rose-700 font-mono select-all bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-100">
                              04:30 PM - 09:00 PM
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-slate-50 text-center">
                        <p className="text-[11px] text-slate-400 font-medium font-sans">
                          * ఉదయం 7-45 నుండి 8-45 మరియు సాయంత్రం 4-30 నుండి రాత్రి 9-00 వరకు చూస్తారు.
                        </p>
                      </div>
                    </div>

                    {/* Sunday timings card */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-amber-50 text-amber-600 rounded-2xl border border-amber-100">
                            <Clock size={22} />
                          </div>
                          <div>
                            <h4 className="text-lg font-extrabold text-slate-900 font-serif">
                              {t.sundayLabel}
                            </h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono mt-0.5">
                              Sunday Special OP Shift
                            </p>
                          </div>
                        </div>

                        <div className="mt-8 space-y-4">
                          {/* Morning shift */}
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500 font-bold">{t.morningLabel}</span>
                            <span className="text-sm font-extrabold text-[#1e3a8a] font-mono select-all bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100">
                              09:00 AM - 01:00 PM
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto pt-8">
                        <div className="bg-gradient-to-r from-indigo-950 to-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
                          <h5 className="text-rose-400 text-xs font-black uppercase tracking-wider font-mono">
                            {t.emergencyLabel}
                          </h5>
                          <p className="text-white text-xs font-black mt-1 font-mono tracking-wide">
                            ⚡ 24/7 CASUALTY SERVICE
                          </p>
                          <p className="text-[10px] text-slate-400 mt-1">
                            {t.emergencyNote}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Location Address Detail Banner mapping details */}
                  <div className="mt-12 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-rose-50 text-rose-600 rounded-2xl border border-rose-100 shadow-inner">
                          <MapPin size={22} />
                        </div>
                        <div>
                          <h4 className="text-md font-extrabold text-slate-800 font-serif">
                            {language === 'en' ? 'Clinic Physical Address' : 'క్లినిక్ చిరునామా'}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5 max-w-sm font-semibold leading-relaxed">
                            {t.addressText}
                          </p>
                        </div>
                      </div>
                      
                      <a 
                        href={mapDirectionsURL}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full md:w-auto text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-950 px-5 py-3.5 rounded-xl transition-all duration-150 border border-slate-950 shadow-sm text-center cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Navigation size={13} className="text-rose-400" />
                        <span>{language === 'en' ? 'Open Google Maps' : 'మ్యాప్‌ చిరునామా చూడండి'}</span>
                      </a>
                    </div>

                    {/* Interactive Embedded Map */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5 text-slate-800 font-extrabold text-xs uppercase font-mono">
                        <MapPin className="text-rose-600 animate-pulse" size={14} />
                        <span>{language === 'en' ? 'Live Interactive Route' : 'లైవ్ ఇంటరాక్టివ్ రూట్ మ్యాప్'}</span>
                      </div>
                      <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative">
                        <iframe
                          title="Sri Thirumala Clinic Map Timings"
                          src="https://maps.google.com/maps?q=Sri%20Thirumala%20Clinic%2C%20Darsi%2C%20Andhra%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={false}
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            </motion.div>
          )}

          {/* TAB 6: BOOK */}
          {activeTab === 'book' && (
            <motion.div
              key="book"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <Appointments 
                language={language}
                selectedServiceEn={selectedServiceEn}
                selectedServiceTe={selectedServiceTe}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER BRASS BOARD */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={48} showText={false} className="scale-90" />
              <div>
                <h4 className="text-white font-extrabold tracking-wider font-serif">
                  {TRANSLATIONS.en.clinicName}
                </h4>
                <p className="text-[10px] uppercase text-rose-500 font-black tracking-widest font-mono">
                  {TRANSLATIONS.en.tagline}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              {t.legalNote}
            </p>
          </div>

          {/* Col 2: Navigation Map Links */}
          <div className="md:col-span-3 space-y-4 text-xs font-bold font-mono">
            <h5 className="text-white text-xs font-black uppercase tracking-wider font-serif">
              {language === 'en' ? 'Quick Actions' : 'త్వరిత లింకులు'}
            </h5>
            <ul className="space-y-2 uppercase tracking-widest text-[9px] text-slate-500">
              <li><button onClick={() => handleNavigate('home')} className="hover:text-rose-500 transition-colors block text-left cursor-pointer">{t.navHome}</button></li>
              <li><button onClick={() => handleNavigate('about')} className="hover:text-rose-500 transition-colors block text-left cursor-pointer">{t.navAbout}</button></li>
              <li><button onClick={() => handleNavigate('services')} className="hover:text-rose-500 transition-colors block text-left cursor-pointer">{t.navServices}</button></li>
              <li><button onClick={() => handleNavigate('facilities')} className="hover:text-rose-500 transition-colors block text-left cursor-pointer">{language === 'en' ? 'Facilities' : 'సౌకర్యాలు'}</button></li>
              <li><button onClick={() => handleNavigate('timings')} className="hover:text-rose-500 transition-colors block text-left cursor-pointer">{t.navTimings}</button></li>
              <li><button onClick={() => handleNavigate('book')} className="hover:text-rose-500 transition-colors block text-left cursor-pointer">{t.navBook}</button></li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <h5 className="text-white text-xs font-black uppercase tracking-wider font-serif">
              {t.addressLabel}
            </h5>
            <div className="space-y-3 font-semibold">
              <p className="text-slate-400 leading-relaxed font-sans">
                {t.addressText}
              </p>
              <div className="flex flex-col gap-2 font-mono text-[11px] text-rose-400">
                <a href="tel:9618888743" className="hover:underline flex items-center gap-1.5">
                  📞 Emergency dial: 9618888743
                </a>
                <a href="https://wa.me/919618888743" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1.5 text-emerald-500">
                  💬 WhatsApp doctor: 9618888743
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copywrite and developer tags */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 text-center text-[10px] text-slate-600 font-mono">
          <p>{t.rightsText}</p>
        </div>
      </footer>

      {/* WhatsApp Floating Icon */}
      <motion.a
        id="whatsapp-floating-button"
        href="https://wa.me/919618888743"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/50 flex items-center justify-center transition-shadow group cursor-pointer"
        aria-label="Contact on WhatsApp"
      >
        <svg 
          id="whatsapp-icon-svg"
          className="w-6 h-6 fill-current" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.538 1.966 14.071 1.9 12.003 1.9c-5.439 0-9.863 4.372-9.867 9.802-.001 1.77.487 3.5 1.414 5.016l-.994 3.633 3.733-.969c.001 0 .001 0 0 0zm11.367-7.46c-.301-.15-1.781-.879-2.056-.979-.275-.1-.475-.15-.675.15-.199.299-.775.979-.95 1.178-.175.199-.35.224-.651.075-1.204-.582-2.128-1.021-2.937-2.42-.213-.369.213-.343.61-.1.356.124.6.425.6.425s.175.299.075.498c-.1.2-.475.95-.575 1.178-.1.225-.2.15-.3.075-.403-.201-1.704-.627-3.245-1.998-1.199-1.068-2.009-2.387-2.244-2.786-.235-.4-.025-.616.175-.815.18-.18.4-.475.6-.712.199-.237.266-.4.4-.666.133-.267.066-.5-.034-.7-.1-.2-.675-1.624-.925-2.223-.244-.589-.493-.51-.675-.519-.174-.009-.373-.01-.573-.01-.2 0-.525.075-.8.374-.275.299-1.05 1.024-1.05 2.5s1.075 2.9 1.225 3.1c.15.199 2.113 3.227 5.12 4.524.714.309 1.272.493 1.707.63.717.228 1.368.196 1.883.119.574-.085 1.781-.728 2.03-1.429.25-.7.25-1.3.175-1.429-.075-.125-.275-.199-.575-.349z"/>
        </svg>
        
        {/* Hover tooltip */}
        <span 
          id="whatsapp-tooltip-text"
          className="absolute right-16 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-slate-800"
        >
          {language === 'en' ? 'Chat with us' : 'మాతో చాట్ చేయండి'}
        </span>
      </motion.a>

    </div>
  );
}
