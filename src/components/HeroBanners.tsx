/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Activity, 
  Heart, 
  ShieldAlert, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { Logo } from './Logo';

interface HeroBannersProps {
  language: Language;
  onSelectBook: () => void;
  onNavigate?: (tab: 'home' | 'about' | 'services' | 'facilities' | 'timings' | 'book') => void;
}

export function HeroBanners({ language, onSelectBook, onNavigate }: HeroBannersProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const [bgImages, setBgImages] = useState<{ [key: number]: string }>({
    0: '/banner_facilities.png',
    1: '/banner_doctor.png',
    2: '/banner_treatments.png',
    3: '/banner_facilities.png'
  });

  const mapDirectionsURL = "https://www.google.com/maps/search/?api=1&query=DVS+Complex+Kurichedu+Road+Darsi+Anjaneyaswamy+Temple";

  const banners = [
    {
      id: 'emergency',
      badgeEn: '🚨 24/7 EMERGENCY & CASUALTY',
      badgeTe: '🚨 24/7 అత్యవసర సేవలు',
      titleEn: 'Sri Thirumala Night-Hospital',
      titleTe: 'శ్రీ తిరుమల క్లినిక్ & నైట్ - హాస్పిటల్',
      subtitleEn: '🏥 Verified 24/7 Emergency Support in Darsi',
      subtitleTe: '🏥 24 గంటల తక్షణ అత్యవసర వైద్య కేంద్రం',
      descriptionEn: 'Equipped to handle midnight crises, respiratory distress, snake/scorpion bites, acute severe pain, and emergency toxic/pesticide cases instantly under specialist surgeon Dr. N.S. Nayak.',
      descriptionTe: 'అర్ధరాత్రి వేళల్లో వచ్చే అత్యవసర జబ్బులు, ఆయాసం, గుండె నొప్పి, పాము లేదా తేలుకాటు మరియు పురుగుల మందు తాగినవారికి డా॥ N.S. నాయక్ గారి ఆధ్వర్యంలో తక్షణ ప్రాణ రక్షణ చికిత్స లభించును.',
      themeClass: 'from-[#060c21] via-[#0b1536] to-[#122254]',
      glowColor: 'rgba(239, 68, 68, 0.15)',
      primaryBtnTextEn: 'Call Emergency Hotline',
      primaryBtnTextTe: 'అత్యవసర కాల్ చేయండి',
      primaryBtnHref: 'tel:9618888743',
      secondaryBtnTextEn: 'View Location',
      secondaryBtnTextTe: 'మ్యాప్ చిరునామా',
      secondaryBtnHref: '#facilities',
      iconType: 'emergency'
    },
    {
      id: 'doctor',
      badgeEn: '🎖️ EXPERT CIVIL SURGEON',
      badgeTe: '🎖️ నిపుణులైన వైద్యాధికారి',
      titleEn: 'Dr. N.S. Nayak, MBBS, FMEM (UK)',
      titleTe: 'డా॥ N.S. నాయక్ గారు (Civil Surgeon)',
      subtitleEn: 'UK Fellowship Trained & Former Apollo Chief Medical Officer',
      subtitleTe: 'లండన్ (UK) శిక్షణ మరియు కాకినాడ అపోలో హాస్పిటల్స్ మాజీ CMO',
      descriptionEn: 'Serving as Civil Assistant Surgeon at Darsi Govt Hospital. Bringing advanced clinical experience in trauma triage, toxicological emergencies, and cardiovascular resuscitation.',
      descriptionTe: 'దర్శి ప్రభుత్వ ఆసుపత్రిలో సివిల్ అసిస్టెంట్ సర్జన్‌గా సేవలు అందిస్తున్నారు. లండన్ మరియు ప్రముఖ కార్పొరేట్ హాస్పిటల్స్ నందు అత్యవసర విభాగంలో విశేష అనుభవం కలదు.',
      themeClass: 'from-[#030712] via-[#0f172a] to-[#1e293b]',
      glowColor: 'rgba(59, 130, 246, 0.15)',
      primaryBtnTextEn: 'Meet Dr. N.S. Nayak',
      primaryBtnTextTe: 'డాక్టర్ గారి వివరాలు',
      primaryBtnHref: '#about',
      secondaryBtnTextEn: 'Book Consultation',
      secondaryBtnTextTe: 'ఓ.పి స్లిప్ బుక్ చేయండి',
      secondaryBtnAction: true,
      iconType: 'doctor'
    },
    {
      id: 'freecamp',
      badgeEn: '🎁 100% FREE DAILY HEALTH CAMP',
      badgeTe: '🎁 ప్రతిరోజు ఉచిత బి.పి & షుగర్ పరీక్షలు',
      titleEn: 'Free Prevention & Diabetes Camp',
      titleTe: 'ఉచిత వ్యాధి నిర్ధారణ పరీక్షల శిబిరం',
      subtitleEn: 'Comprehensive Screenings for Every Outpatient Daily',
      subtitleTe: 'నివారణే ఉత్తమ నివారణ - మీ ఆరోగ్యం మా బాధ్యత',
      descriptionEn: 'Promoting long-term well-being in Prakasam district. We perform completely complimentary Blood Pressure and capillary Blood Sugar check-ups daily for every visiting outpatient.',
      descriptionTe: 'దర్శి మరియు చుట్టుపక్కల గ్రామాల ప్రజల కొరకు మా క్లినిక్ విచ్చేసే ప్రతి అవుట్-పేషెంట్ (OP) రోగికి ఉచితంగా బి.పి మరియు షుగరు పరీక్షలు ప్రతిరోజు నిశితంగా చేయబడును.',
      themeClass: 'from-[#051610] via-[#072418] to-[#0d3f27]',
      glowColor: 'rgba(16, 185, 129, 0.15)',
      primaryBtnTextEn: 'Get Your Free Slip',
      primaryBtnTextTe: 'ఉచిత ఓ.పి రిజిస్ట్రేషన్',
      primaryBtnAction: true,
      secondaryBtnTextEn: 'Get Directions',
      secondaryBtnTextTe: 'క్లినిక్ దారి',
      secondaryBtnHref: mapDirectionsURL,
      secondaryBtnExternal: true,
      iconType: 'camp'
    },
    {
      id: 'diagnostics',
      badgeEn: '🏥 ON-SITE O₂ & DIAGNOSTICS',
      badgeTe: '🏥 అధునాతన ల్యాబ్ & ఆక్సిజన్ సదుపాయం',
      titleEn: 'Instant Oxygen, ECG & Pathology',
      titleTe: 'ఆక్సిజన్, 12-లీడ్ ఈ.సి.జి & ల్యాబ్',
      subtitleEn: 'High-Accuracy Screenings and 24/7 Stocked Pharmacy',
      subtitleTe: 'త్వరిత వ్యాధి నిర్ధారణ పరీక్షలు మరియు 24 గంటల మెడిసిన్',
      descriptionEn: 'Quick diagnostic panels for Dengue, Malaria, Typhoid, and blood glucose. Includes immediate high-flow clinical oxygen systems and an on-site medicine store for immediate relief.',
      descriptionTe: 'గుండెల్లో నొప్పికి తక్షణ ఈ.సి.జి, శ్వాసకోస సమస్యల కోసం ఆక్సిజన్, మరియు డెంగ్యూ, మలేరియా జ్వర పరీక్షల సదుపాయం క్లినిక్ నందే కలదు.',
      themeClass: 'from-[#0a172c] via-[#092644] to-[#124273]',
      glowColor: 'rgba(6, 182, 212, 0.15)',
      primaryBtnTextEn: 'Explore Facilities',
      primaryBtnTextTe: 'వైద్య సౌకర్యాలు',
      primaryBtnHref: '#facilities',
      secondaryBtnTextEn: 'Emergency Call',
      secondaryBtnTextTe: 'అత్యవసర కాల్',
      secondaryBtnHref: 'tel:9618888743',
      iconType: 'diagnostics'
    }
  ];

  // Auto-play interval
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isHovered, banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const currentData = banners[currentSlide];

  return (
    <section 
      id="home"
      className="relative text-white overflow-hidden transition-all duration-700 min-h-[580px] md:min-h-[520px] lg:min-h-[580px] xl:min-h-[620px] flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Inline styles for custom glossy shimmer/shine effects */}
      <style>{`
        @keyframes shine-sweep {
          0% { transform: translateX(-150%) skewX(-15deg); }
          30% { transform: translateX(150%) skewX(-15deg); }
          100% { transform: translateX(150%) skewX(-15deg); }
        }
        .glossy-shine {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.4) 100%);
          mix-blend-mode: overlay;
          pointer-events: none;
        }
        .glass-highlight {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0.06), transparent 30%, rgba(0,0,0,0.1));
          pointer-events: none;
        }
      `}</style>

      {/* Dynamic Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${currentData.themeClass} transition-all duration-700`} />
      
      {/* Dynamic Background Image with Glossy Effect for All Slides */}
      <AnimatePresence mode="wait">
        {bgImages[currentSlide] && (
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.65, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <img 
              src={bgImages[currentSlide]} 
              alt={banners[currentSlide].titleEn} 
              onError={() => {
                setBgImages(prev => ({
                  ...prev,
                  [currentSlide]: ''
                }));
              }}
              className="absolute inset-0 w-full h-full object-cover select-none brightness-[0.34] transition-all duration-1000 scale-102"
            />
            {/* Glossy Overlay for sheen and lighting depth */}
            <div className="glossy-shine" />
            <div className="glass-highlight" />
            
            {/* Frosted Glass overlay to integrate image beautifully with backdrop blur */}
            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1.5px]" />
            
            {/* Text readability shadow gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            
            {/* Shimmer sweep effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
              style={{
                animation: 'shine-sweep 7s infinite ease-in-out'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decorative Aura Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 30%, ${currentData.glowColor}, transparent 60%)`
        }}
      />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14 lg:py-16 relative z-10 w-full">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left side: Information Content - Glassmorphism card container for all slides for premium glossy readability */}
            <div className="lg:col-span-7 space-y-5 transition-all duration-500 bg-slate-950/45 backdrop-blur-lg p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl shadow-slate-950/30">
              
              {/* Badge Pillar */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-rose-600 text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg border border-rose-500/20">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                  {language === 'en' ? currentData.badgeEn : currentData.badgeTe}
                </span>
                
                <span className="bg-sky-500/15 text-sky-300 text-[10px] md:text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-sky-400/20 backdrop-blur-xs">
                   📍 {language === 'en' ? 'Darsi Center' : 'దర్శి టౌన్'}
                </span>
              </div>

              {/* Slider Titles */}
              <div className="space-y-1.5">
                <h2 className="tracking-tight leading-tight flex flex-col gap-1">
                  <span className="text-3xl md:text-5xl lg:text-[44px] xl:text-[54px] font-serif font-black text-white leading-tight drop-shadow-sm">
                    {language === 'en' ? currentData.titleEn : currentData.titleTe}
                  </span>
                  <span className="text-sm md:text-xl font-sans font-bold text-rose-500 uppercase tracking-wider block mt-1.5">
                    {language === 'en' ? currentData.subtitleEn : currentData.subtitleTe}
                  </span>
                </h2>
              </div>

              {/* Horizontal rule separator */}
              <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full" />

              {/* Main Banner Description */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl font-normal">
                {language === 'en' ? currentData.descriptionEn : currentData.descriptionTe}
              </p>

              {/* Dynamic Banner CTA Actions */}
              <div className="pt-3 flex flex-wrap gap-3 items-stretch sm:items-center">
                
                {/* Primary CTA button */}
                {currentData.primaryBtnAction ? (
                  <button 
                    onClick={onSelectBook}
                    className="flex-1 sm:flex-initial bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-2xl shadow-xl hover:shadow-rose-600/20 active:scale-98 transition-all duration-150 flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Sparkles size={16} className="text-amber-300 animate-pulse" />
                    <span>{language === 'en' ? currentData.primaryBtnTextEn : currentData.primaryBtnTextTe}</span>
                  </button>
                ) : (
                  <a 
                    href={currentData.primaryBtnHref}
                    onClick={(e) => {
                      if (currentData.primaryBtnHref && currentData.primaryBtnHref.startsWith('#')) {
                        e.preventDefault();
                        const tab = currentData.primaryBtnHref.substring(1) as any;
                        if (onNavigate) onNavigate(tab);
                      }
                    }}
                    className="flex-1 sm:flex-initial bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-2xl shadow-xl hover:shadow-rose-600/20 active:scale-98 transition-all duration-150 flex items-center justify-center gap-2.5"
                  >
                    <Phone size={15} />
                    <span>{language === 'en' ? currentData.primaryBtnTextEn : currentData.primaryBtnTextTe}</span>
                  </a>
                )}

                {/* Secondary CTA button */}
                {currentData.secondaryBtnAction ? (
                  <button 
                    onClick={onSelectBook}
                    className="flex-1 sm:flex-initial bg-white/10 hover:bg-white/15 active:bg-white/20 text-slate-200 border border-white/15 font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-2xl shadow-md transition-all duration-150 flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Clock size={15} className="text-rose-400" />
                    <span>{language === 'en' ? currentData.secondaryBtnTextEn : currentData.secondaryBtnTextTe}</span>
                  </button>
                ) : (
                  <a 
                    href={currentData.secondaryBtnHref}
                    onClick={(e) => {
                      if (currentData.secondaryBtnHref && currentData.secondaryBtnHref.startsWith('#')) {
                        e.preventDefault();
                        const tab = currentData.secondaryBtnHref.substring(1) as any;
                        if (onNavigate) onNavigate(tab);
                      }
                    }}
                    target={currentData.secondaryBtnExternal ? "_blank" : undefined}
                    rel={currentData.secondaryBtnExternal ? "noreferrer" : undefined}
                    className="flex-1 sm:flex-initial bg-white/10 hover:bg-white/15 active:bg-white/20 text-slate-200 border border-white/15 font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-2xl shadow-md transition-all duration-150 flex items-center justify-center gap-2.5"
                  >
                    <MapPin size={15} className="text-sky-400" />
                    <span>{language === 'en' ? currentData.secondaryBtnTextEn : currentData.secondaryBtnTextTe}</span>
                  </a>
                )}
              </div>

              {/* Urgent Emergency Quick Disclaimer banner (Sticky below buttons inside left) */}
              <div className="bg-rose-950/40 p-3.5 rounded-2xl border border-rose-500/25 flex gap-3 items-start relative overflow-hidden mt-4">
                <ShieldAlert size={18} className="text-rose-400 shrink-0 mt-0.5 animate-bounce" />
                <div>
                  <h4 className="text-white text-[11px] font-black uppercase tracking-wider font-mono">
                    {language === 'en' ? '⚡ EMERGENCY NIGHT HOSPITALITY' : '⚡ 24/7 అత్యవసర వైద్యం'}
                  </h4>
                  <p className="text-[#fca5a5] text-xs font-semibold mt-0.5 leading-relaxed">
                    {language === 'en' 
                      ? 'Civil Assistant Surgeon resides locally. Immediate emergency interventions for serious conditions are supported 24/7.' 
                      : 'ప్రభుత్వ సివిల్ సర్జన్ నివాసం ఇక్కడే ఉంటుంది. విషకాటులు, శ్వాస ఇబ్బందులు వంటి తీవ్ర కేసులకు 24 గంటలు వైద్యం లభించును.'}
                  </p>
                </div>
              </div>

            </div>

            {/* Right side: Specialized Graphical Theme matching the banner */}
            <div className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-0 relative">
              <div className="relative w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] flex items-center justify-center">
                
                {/* Visual Backdrop Halo Glow */}
                <div className="absolute inset-0 bg-rose-500/10 rounded-full blur-2xl animate-pulse" />
                
                {/* Specific SVG vectors / animations depending on the slide */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.88 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full relative z-10 flex items-center justify-center"
                  >
                    {currentData.iconType === 'emergency' && (
                      <div className="relative flex items-center justify-center">
                        <Logo size={200} showText={false} className="opacity-95 text-white" />
                        <motion.div 
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        >
                          <div className="w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] rounded-full border-2 border-rose-500/40 opacity-40 animate-ping" />
                        </motion.div>
                        {/* Red Flasher Light Icon overlay */}
                        <div className="absolute -top-1 -right-1 bg-red-600 p-3 rounded-full shadow-lg border border-red-500 flex items-center justify-center animate-pulse">
                          <ShieldAlert size={22} className="text-white" />
                        </div>
                      </div>
                    )}

                    {currentData.iconType === 'doctor' && (
                      <div className="relative w-full h-full flex flex-col items-center justify-center bg-slate-900/50 rounded-full p-6 border border-white/10 backdrop-blur-sm shadow-2xl">
                        {/* UK Academic Credentials Badge Visual */}
                        <div className="w-16 h-16 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center mb-4 text-sky-400">
                          <Award size={36} />
                        </div>
                        <span className="text-[11px] font-black text-rose-400 tracking-widest uppercase font-mono mb-1">Darsi Gov Hospital</span>
                        <h4 className="text-md sm:text-lg font-extrabold text-white text-center font-serif leading-tight">Civil Assistant Surgeon</h4>
                        <div className="flex gap-2 items-center justify-center mt-2.5">
                          <span className="text-[10px] font-bold bg-white/10 px-2.5 py-1 rounded-md border border-white/5">MBBS</span>
                          <span className="text-[10px] font-bold bg-indigo-500/20 px-2.5 py-1 rounded-md border border-indigo-500/20 text-indigo-300">FMEM (UK)</span>
                        </div>
                        <p className="text-[10px] text-slate-400 text-center mt-3 leading-relaxed max-w-[200px]">
                          {language === 'en' ? 'Formerly Chief Medical Officer at Apollo Hospitals' : 'గతంలో అపోలో హాస్పిటల్స్ ప్రధాన వైద్యాధికారి'}
                        </p>
                      </div>
                    )}

                    {currentData.iconType === 'camp' && (
                      <div className="relative w-full h-full flex flex-col items-center justify-center bg-emerald-950/40 rounded-full p-6 border border-emerald-500/20 backdrop-blur-sm shadow-2xl">
                        {/* Heart Rate / Medical camp decoration */}
                        <div className="w-16 h-16 rounded-full bg-emerald-900/40 border border-emerald-500/30 flex items-center justify-center mb-3.5 text-emerald-400">
                          <Heart size={34} className="animate-pulse" />
                        </div>
                        <span className="text-xs font-black text-emerald-400 tracking-wider uppercase font-mono">
                          {language === 'en' ? 'PROMOTING WELLNESS' : 'ప్రజా ఆరోగ్య సేవా శిబిరం'}
                        </span>
                        <h4 className="text-xl font-black text-amber-300 text-center mt-1 leading-tight">
                          BP & sugar: 100% FREE
                        </h4>
                        <div className="mt-3 bg-emerald-950 px-4 py-1.5 rounded-full border border-emerald-700/30">
                          <span className="text-[10px] font-extrabold text-white tracking-widest uppercase font-mono flex items-center gap-1.5">
                            <CheckCircle2 size={11} className="text-emerald-400" />
                            {language === 'en' ? 'Every Outpatient Daily' : 'ప్రతిరోజూ ఉచితం'}
                          </span>
                        </div>
                      </div>
                    )}

                    {currentData.iconType === 'diagnostics' && (
                      <div className="relative w-full h-full flex flex-col items-center justify-center bg-slate-900/60 rounded-full p-6 border border-sky-500/20 backdrop-blur-sm shadow-2xl">
                        {/* Diagnostic Screen Visual representation */}
                        <div className="w-16 h-16 rounded-full bg-sky-900/30 border border-sky-500/30 flex items-center justify-center mb-3.5 text-sky-400">
                          <Activity size={32} className="text-cyan-400 animate-pulse" />
                        </div>
                        <span className="text-[10px] font-black text-sky-400 tracking-widest uppercase font-mono mb-1">State-Of-The-Art</span>
                        <h4 className="text-md sm:text-base font-extrabold text-white text-center font-serif leading-tight">Emergency Diagnostics</h4>
                        
                        <div className="mt-3.5 grid grid-cols-2 gap-2 w-full max-w-[220px]">
                          <div className="bg-slate-950/70 p-2 rounded-xl border border-white/5 flex items-center gap-1.5 justify-center">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                            <span className="text-[9px] font-bold text-slate-300">12-Lead ECG</span>
                          </div>
                          <div className="bg-slate-950/70 p-2 rounded-xl border border-white/5 flex items-center gap-1.5 justify-center">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                            <span className="text-[9px] font-bold text-slate-300">O₂ Cylinder</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Status Badges on the right visual box */}
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 z-20 bg-emerald-500 text-white text-[9px] sm:text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-xl border-2 border-white flex items-center gap-1 select-none">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-[ping_1.5s_infinite]" />
                  Active
                </span>

                <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 z-20 bg-rose-700 text-white text-[9px] sm:text-[10px] font-black tracking-widest uppercase px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xl border-2 border-rose-500 flex items-center gap-1.5 whitespace-nowrap select-none">
                  Sri Thirumala Clinic
                </span>

              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Manual Slideshow Controls */}
        <div className="flex items-center justify-between w-full mt-10 md:mt-12">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2.5">
            {banners.map((b, i) => (
              <button
                key={b.id}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === i 
                    ? 'w-7 bg-rose-500 shadow-md shadow-rose-500/20' 
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                } cursor-pointer`}
                title={`Go to Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Left/Right Arrow buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2.5 bg-white/10 hover:bg-white/20 border border-white/5 rounded-xl text-slate-200 transition-colors shadow-sm cursor-pointer hover:text-white"
              title="Previous Banner"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 bg-white/10 hover:bg-white/20 border border-white/5 rounded-xl text-slate-200 transition-colors shadow-sm cursor-pointer hover:text-white"
              title="Next Banner"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
