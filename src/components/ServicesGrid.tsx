/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, MedicalService } from '../types';
import { MEDICAL_SERVICES, TRANSLATIONS } from '../data/translations';
import * as Icons from 'lucide-react';
import { getStoredBanner, setStoredBanner, deleteStoredBanner } from '../utils/db';

interface ServicesGridProps {
  language: Language;
  onSelectService: (serviceNameEn: string, serviceNameTe: string) => void;
}

export function ServicesGrid({ language, onSelectService }: ServicesGridProps) {
  const t = TRANSLATIONS[language];
  const [activeCategory, setActiveCategory] = useState<'all' | 'emergency' | 'general' | 'chronic' | 'seasonal'>('all');

  const [customBanner, setCustomBanner] = useState<string | null>(null);

  const [bannerSrc, setBannerSrc] = useState<string>(() => {
    const base = (import.meta as any).env?.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    return `${cleanBase}banner_treatments.png`;
  });

  React.useEffect(() => {
    async function loadBanner() {
      const saved = await getStoredBanner('dr_nayak_treatments_banner');
      if (saved) {
        setCustomBanner(saved);
        setBannerSrc(saved);
      }
    }
    loadBanner();
  }, []);

  const handleBannerUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const result = e.target?.result as string;
        if (result) {
          try {
            await setStoredBanner('dr_nayak_treatments_banner', result);
            setCustomBanner(result);
            setBannerSrc(result);
          } catch (err) {
            console.error('Failed to save treatments banner', err);
            alert(language === 'en'
              ? 'Could not save the image. Please try another image.'
              : 'చిత్రం సేవ్ చేయలేకపోయాము. దయచేసి మరొక చిత్రాన్ని ఎంచుకోండి.');
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetBanner = async () => {
    await deleteStoredBanner('dr_nayak_treatments_banner');
    setCustomBanner(null);
    const base = (import.meta as any).env?.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    setBannerSrc(`${cleanBase}banner_treatments.png`);
  };

  const handleBannerError = () => {
    setBannerSrc('');
  };


  const categories = [
    { id: 'all', en: 'All Treatments', te: 'అన్ని సేవలు' },
    { id: 'emergency', en: '🚨 Emergencies (24/7)', te: 'అత్యవసర చికిత్సలు' },
    { id: 'general', en: 'General OPD', te: 'సాధారణ సమస్యలు' },
    { id: 'chronic', en: 'Chronic Care', te: 'దీర్ఘకాలిక వ్యాధులు' },
    { id: 'seasonal', en: 'Seasonal Fevers', te: 'కాలానుగుణ జ్వరాలు' }
  ];

  const filteredServices = MEDICAL_SERVICES.filter(service => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  // Helper to map icon name to Lucide components safely
  const renderIcon = (iconName: string) => {
    let IconComp = Icons.Activity; // default safety fallback
    
    if (iconName === 'Thermometer') IconComp = Icons.Thermometer;
    else if (iconName === 'Activity') IconComp = Icons.Activity;
    else if (iconName === 'Wind') IconComp = Icons.Wind;
    else if (iconName === 'Stretcher' || iconName === 'Hospital') IconComp = Icons.Activity; 
    else if (iconName === 'ShieldAlert') IconComp = Icons.ShieldAlert;
    else if (iconName === 'Skull') IconComp = Icons.Skull;
    else if (iconName === 'Sparkles') IconComp = Icons.Sparkles;
    else if (iconName === 'Bone') IconComp = Icons.Bone;
    else if (iconName === 'Sun') IconComp = Icons.Sun;

    // Special graphic tuning for emergencies
    const isEmergencyIcon = iconName === 'ShieldAlert' || iconName === 'Skull' || iconName === 'Stretcher';

    return (
      <div className={`p-4 rounded-2xl transition-colors duration-300 ${
        isEmergencyIcon 
          ? 'bg-rose-100 text-rose-700 group-hover:bg-rose-700 group-hover:text-white' 
          : 'bg-indigo-50 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white'
      }`}>
        <IconComp size={32} strokeWidth={2} />
      </div>
    );
  };

  return (
    <section id="services" className="py-0 bg-white scroll-mt-16 bg-gradient-to-b from-white to-slate-50">
      
      {/* TREATMENTS SHOWCASE HERO BANNER (BANNER 2/3) - FULL WIDTH */}
      <div className="relative w-full overflow-hidden shadow-xl border-b border-slate-200 bg-[#0b1c2e] text-white">
        
        {/* Main Banner Image Container */}
        {bannerSrc ? (
          <div className="w-full h-auto overflow-hidden">
            <img 
              src={bannerSrc} 
              alt="Sri Thirumala Clinic Treatments Banner" 
              onError={handleBannerError}
              referrerPolicy="no-referrer"
              className="w-full h-auto select-none block"
            />
          </div>
        ) : (
          /* Reconstructed HTML/CSS Fallback for Treatments Showcase Banner (Banner 2/3) */
          <div className="relative w-full py-10 md:py-14 flex flex-col justify-between overflow-hidden">
            {/* Background styling */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                  {/* Glowing badge */}
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] md:text-xs font-black tracking-widest text-emerald-400 uppercase bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20 font-mono">
                      {language === 'en' ? 'Complete Clinical Care & Pharmacy' : 'పూర్తి స్థాయి క్లినికల్ వైద్యం & ఫార్మసీ'}
                    </span>
                  </div>

                  {/* Banner Title */}
                  <div className="space-y-1">
                    <h1 className="text-2xl md:text-4xl font-serif font-black tracking-tight text-white">
                      COMPLETE CARE FOR <span className="text-emerald-400">YOU & YOUR FAMILY</span>
                    </h1>
                    <p className="text-slate-300 text-xs md:text-sm font-semibold tracking-wide font-sans">
                      {language === 'en' 
                        ? 'Your Health is Our Highest Priority - Available Day or Night' 
                        : 'మీ ఆరోగ్యం మా మొదటి ప్రాధాన్యత - ఉదయం మరియు రాత్రి వేళలలో అందుబాటు'}
                    </p>
                  </div>

                  {/* Treatments list preview */}
                  <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-bold text-slate-300">
                    <span className="bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded-lg">
                      🩺 General Physician
                    </span>
                    <span className="bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded-lg">
                      🚨 24/7 Emergency
                    </span>
                    <span className="bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded-lg">
                      🧪 Diagnostics & Lab
                    </span>
                    <span className="bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded-lg">
                      💊 Pharmacy Support
                    </span>
                  </div>
                </div>

                {/* Left Clock info box */}
                <div className="bg-slate-900/70 border border-white/10 p-5 rounded-2xl max-w-xs w-full backdrop-blur-sm shadow-xl flex items-center gap-3.5">
                  <Icons.Clock size={32} className="text-emerald-400 animate-pulse shrink-0" />
                  <div>
                    <h4 className="text-xs font-black text-slate-300 uppercase tracking-widest">{language === 'en' ? 'Clinical Hours' : 'క్లినిక్ వేళలు'}</h4>
                    <p className="text-white text-sm font-extrabold mt-0.5">24 Hours / 7 Days</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{language === 'en' ? 'Nights prioritized for emergency' : 'రాత్రివేళ అత్యవసర చికిత్సలు'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Banner Action Controls Bar */}
        <div className="relative z-10 bg-slate-950/70 py-2.5 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2 font-semibold">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{language === 'en' ? 'Treatments & Services Banner Slot' : 'వైద్య చికిత్సలు & సర్వీసులు బ్యానర్ సదుపాయం'}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-black px-3.5 py-1.5 rounded-xl cursor-pointer transition-all duration-150 shadow-sm flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                <Icons.Sparkles size={11} className="text-amber-300 animate-pulse" />
                <span>{language === 'en' ? 'Upload Banner Image' : 'బ్యానర్ అప్‌లోడ్'}</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleBannerUpload} 
                  className="hidden" 
                />
              </label>

              {customBanner && (
                <button
                  onClick={handleResetBanner}
                  className="bg-slate-800 hover:bg-red-950/60 hover:text-red-400 border border-slate-700 px-3 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all duration-150 cursor-pointer"
                >
                  {language === 'en' ? 'Reset' : 'రీసెట్'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Remaining Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 space-y-12">

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold text-[#1e3a8a] bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 uppercase tracking-widest font-mono">
            {t.navServices}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mt-4 tracking-tight">
            {language === 'en' ? 'Quality Healthcare Services' : 'విశిష్ట ఉచిత & అత్యవసర వైద్య సేవలు'}
          </h2>
          <p className="text-slate-500 mt-3 text-sm md:text-base leading-relaxed">
            {language === 'en' 
              ? 'Our clinic features specialized primary care and urgent life-saving operations led by highly experienced clinical doctors.'
              : 'మందులు, పరీక్షలు మరియు చికిత్స లభించు అన్ని రకాల సాధారణ మరియు తీవ్ర అత్యవసర కాలవ్యాధుల సమూహములు.'}
          </p>
          <div className="w-16 h-1 bg-[#1e3a8a] mx-auto mt-4 rounded-full"></div>
        </div>


        {/* Free Screenings Alert Box */}
        <div className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-dashed border-amber-300 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm transition-transform duration-200 hover:scale-[1.01]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500 text-white rounded-full">
              <Icons.Gift size={24} className="animate-bounce" />
            </div>
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-amber-500 text-white text-[10px] font-black uppercase tracking-wider rounded-md mb-1 font-mono">
                {t.freeCampBadge}
              </span>
              <h4 className="text-lg font-extrabold text-amber-950 font-serif">
                {t.freeCampTitle}
              </h4>
              <p className="text-sm text-amber-900 font-semibold mt-0.5">
                {t.freeCampDesc}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-xl text-xs font-mono font-bold text-amber-950/80 border border-amber-200">
            <Icons.CheckCircle2 className="text-amber-600" size={14} />
            <span>Walk-ins Welcome Everyday</span>
          </div>
        </div>

        {/* Categories Tab Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 border-slate-950 text-white shadow-md transform -translate-y-0.5'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span className="block font-sans">{cat.en}</span>
              <span className="block text-[10px] opacity-75 font-normal font-sans mt-0.5">{cat.te}</span>
            </button>
          ))}
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const isEmergency = service.category === 'emergency';
            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between bg-white p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isEmergency
                    ? 'border-rose-100 shadow-[0_4px_20px_rgba(244,63,94,0.04)] bg-gradient-to-b from-rose-50/10 to-white hover:border-rose-300 hover:shadow-[0_12px_36px_rgba(225,29,72,0.08)]'
                    : 'border-slate-150-100 hover:border-indigo-300'
                }`}
              >
                {/* Upper Section */}
                <div>
                  {/* Category Pill Tag */}
                  <div className="flex justify-between items-start mb-6">
                    {renderIcon(service.iconName)}
                    
                    <span className={`text-[10px] font-black uppercase tracking-wider font-mono px-2.5 py-1 rounded-md border ${
                      isEmergency
                        ? 'bg-rose-50 text-rose-700 border-rose-100'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                    }`}>
                      {service.category}
                    </span>
                  </div>

                  {/* Bilingual Headings */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1e3a8a] transition-colors duration-200 font-serif">
                      {service.title}
                    </h3>
                    <h4 className="text-sm font-semibold text-rose-700 tracking-normal font-sans h-10 line-clamp-2 md:line-clamp-none">
                      {service.teluguTitle}
                    </h4>
                  </div>

                  {/* Bilingual Description */}
                  <div className="mt-4 space-y-3 pb-6 border-b border-dashed border-slate-100">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed bg-slate-50/70 py-1.5 px-2.5 rounded-lg border border-slate-100">
                      {service.teluguDescription}
                    </p>
                  </div>
                </div>

                {/* Card footer actions */}
                <div className="pt-4 flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-black font-mono text-slate-400 tracking-widest flex items-center gap-1">
                    <Icons.ShieldCheck size={12} className="text-emerald-500" />
                    VERIFIED
                  </span>
                  
                  <button
                    onClick={() => onSelectService(service.title, service.teluguTitle)}
                    className={`text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-1 border hover:-translate-y-0.5 cursor-pointer ${
                      isEmergency
                        ? 'bg-rose-700 hover:bg-rose-800 text-white shadow-sm border-rose-700'
                        : 'bg-[#1e3a8a] hover:bg-[#111e54] text-white shadow-sm border-[#1e3a8a]'
                    }`}
                  >
                    <span>{language === 'en' ? 'Select & OPD' : 'చికిత్స ఎంచుకో'}</span>
                    <Icons.ArrowRight size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
