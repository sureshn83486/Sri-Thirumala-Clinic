/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Award, BookOpen, GraduationCap, Building, ShieldCheck, CheckCircle, Stethoscope, Sparkles } from 'lucide-react';

interface DoctorProfileProps {
  language: Language;
}

export function DoctorProfile({ language }: DoctorProfileProps) {
  const t = TRANSLATIONS[language];
  const [photoUrl, setPhotoUrl] = React.useState<string | null>('/doctor.png');
  const [candidateIndex, setCandidateIndex] = React.useState(0);
  const candidates: string[] = ['/doctor.png'];
  const [bannerSrc, setBannerSrc] = React.useState<string>('/banner_doctor.png');
  const handleBannerError = () => {
    setBannerSrc('');
  };

  const degreesList = [
    {
      en: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
      te: "M.B.B.S. (వైద్య శాస్త్ర పట్టా - బ్యాచిలర్ ఆఫ్ మెడిసిన్, బ్యాచిలర్ ఆఫ్ సర్జరీ)"
    },
    {
      en: "Fellowship in Emergency Medicine (UK)",
      te: "ఫెలోషిప్ ఇన్ ఎమర్జెన్సీ మెడిసిన్ (యునైటెడ్ కింగ్‌డమ్ - UK)"
    }
  ];

  const clinicalExpList = [
    {
      en: "Civil Assistant Surgeon, Government Hospital (Darsi)",
      te: "సివిల్ అసిస్టెంట్ సర్జన్, ప్రభుత్వ ప్రాంతీయ ఆసుపత్రి (దర్శి)",
      status: "active"
    },
    {
      en: "Ex. Chief Medical Officer (CMO), Apollo Hospitals (Kakinada)",
      te: "మాజీ చీఫ్ మెడికల్ ఆఫీసర్ (CMO), అపోలో హాస్పిటల్స్ (కాకినాడ)",
      status: "previous"
    },
    {
      en: "General & Emergency Specialist, Sri Thirumala Clinic Night-Hospital (Darsi)",
      te: "జనరల్ మరియు ఎమర్జెన్సీ స్పెషలిస్ట్, శ్రీ తిరుమల క్లినిక్ నైట్ - హాస్పిటల్",
      status: "current"
    }
  ];

  return (
    <section id="about" className="py-0 bg-slate-550 border-y border-slate-100 scroll-mt-16 bg-gradient-to-b from-slate-50 to-slate-100">
      {/* CLINICAL SHOWCASE HERO BANNER (BANNER 1/2) - FULL WIDTH */}
      <div className="relative w-full overflow-hidden shadow-xl border-b border-slate-200 bg-[#071324] text-white">
          
          {/* Main Banner Image Container */}
          {bannerSrc ? (
            <div className="w-full h-auto overflow-hidden">
              <img 
                src={bannerSrc} 
                alt="Sri Thirumala Clinic & Doctor Banner" 
                onError={handleBannerError}
                referrerPolicy="no-referrer"
                className="w-full h-auto select-none block"
              />
            </div>
          ) : (
            /* Reconstructed HTML/CSS Fallback for Doctor Showcase Banner (Banner 1/2) */
            <div className="relative w-full py-10 md:py-14 flex flex-col justify-between overflow-hidden">
              {/* Background ambient medical wave lines */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-rose-500/10 to-transparent pointer-events-none" />
              
              <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-4 max-w-2xl">
                    {/* Glowing alert badge */}
                    <div className="flex items-center gap-2">
                      <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                      </span>
                      <span className="text-[10px] md:text-xs font-black tracking-widest text-red-400 uppercase bg-red-950/40 px-3 py-1 rounded-full border border-red-500/20 font-mono">
                        {language === 'en' ? '24/7 Night Hospital Emergency' : '24 గంటల నైట్ హాస్పిటల్ అత్యవసర విభాగం'}
                      </span>
                    </div>

                    {/* Banner Title */}
                    <div className="space-y-1">
                      <h1 className="text-2xl md:text-4xl font-serif font-black tracking-tight text-white flex flex-wrap items-center gap-x-2">
                        <span>SRI THIRUMALA CLINIC</span>
                        <span className="text-rose-500 font-sans italic text-xl md:text-2xl font-light">Night Hospital</span>
                      </h1>
                      <p className="text-slate-300 text-xs md:text-sm font-semibold tracking-wide font-sans">
                        {language === 'en' 
                          ? 'Compassionate Care, Every Hour, Every Day • Darsi, Prakasam Dist.' 
                          : 'నిరంతర వైద్య సేవలు, ప్రతి గంట, ప్రతి రోజు • దర్శి'}
                      </p>
                    </div>

                    {/* Medical Service Badges */}
                    <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-bold text-slate-300">
                      <span className="bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded-lg flex items-center gap-1">
                        🩺 Expert Care
                      </span>
                      <span className="bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded-lg flex items-center gap-1">
                        ⚡ Quick Emergency
                      </span>
                      <span className="bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded-lg flex items-center gap-1">
                        🧪 Diagnostics
                      </span>
                    </div>
                  </div>

                  {/* Right Doctor Pill info */}
                  <div className="bg-slate-900/70 border border-white/10 p-5 rounded-2xl max-w-sm w-full backdrop-blur-sm shadow-xl space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center font-extrabold text-white text-base font-serif border border-white/20">
                        DN
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white leading-tight">Dr. N.S. Nayak, <span className="text-rose-400 text-xs font-normal">M.B.B.S, FEM (UK)</span></h4>
                        <p className="text-[10px] text-sky-400 font-bold uppercase tracking-wider mt-0.5">Govt. Assistant Surgeon</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-400">{language === 'en' ? 'Direct Contact:' : 'డైరెక్ట్ కాంటాక్ట్:'}</span>
                      <a href="tel:9618888743" className="text-emerald-400 font-black font-mono hover:underline">+91 96188 88743</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>

        {/* Remaining content container */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 space-y-12">

        {/* Section Heading */}
        <div className="text-center">
          <span className="text-sm font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            {t.docTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mt-3 tracking-tight">
            {language === 'en' ? 'Verified Expert Doctor' : 'అనుభవజ్ఞులైన వైద్యాధికారి'}
          </h2>
          <div className="w-16 h-1 bg-rose-600 mx-auto mt-4 rounded-full"></div>
        </div>


        {/* Profile Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Custom Vector Doctor Image & Badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[360px] aspect-[3/4] bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-500 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              {/* Doctor Background elements */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.15),transparent_60%)]"></div>
              
              {photoUrl ? (
                <img 
                  src={photoUrl} 
                  alt="Dr. N.S. Nayak" 
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover select-none"
                  onError={() => {
                    if (photoUrl && photoUrl.startsWith('data:image/')) {
                      setPhotoUrl(null);
                      return;
                    }
                    const nextIndex = candidateIndex + 1;
                    if (nextIndex < candidates.length) {
                      setCandidateIndex(nextIndex);
                      setPhotoUrl(candidates[nextIndex]);
                    } else {
                      setPhotoUrl(null);
                    }
                  }}
                />
              ) : (
                /* Custom Vector Representation Of Dr N.S. Nayak matching the photo */
                <svg viewBox="0 0 300 400" className="absolute bottom-0 w-full h-full object-contain">
                  {/* Backdrop Gradient for the Portrait */}
                  <defs>
                    <radialGradient id="portraitGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="150" cy="180" r="110" fill="url(#portraitGlow)" />
                  
                  {/* Hair Backing (Prevents any background gaps) */}
                  <path d="M 75,180 C 65,110 100,60 150,60 C 200,60 235,110 225,180 Z" fill="#111827" />

                  {/* Ears */}
                  <ellipse cx="88" cy="165" rx="7" ry="11" fill="#c2855b" />
                  <ellipse cx="212" cy="165" rx="7" ry="11" fill="#c2855b" />
                  
                  {/* Neck */}
                  <path d="M 125,190 L 125,245 L 175,245 L 175,190 Z" fill="#c2855b" />
                  <path d="M 125,200 Q 150,225 175,200 L 175,245 L 125,245 Z" fill="#ab6e45" opacity="0.6" />

                  {/* Face base structure (No empty high-line gap) */}
                  <path d="M 95,130 C 95,95 110,90 150,90 C 190,90 205,95 205,130 L 202,180 C 202,215 175,225 150,225 C 125,225 98,215 98,180 Z" fill="#d2966a" />
                  
                  {/* Styled Groomed Hair (No forehead banding/gapping) */}
                  <path d="M 75,140 C 75,85 105,70 150,70 C 195,70 225,85 225,140 C 225,120 215,105 198,100 C 182,95 118,95 102,100 C 85,105 75,120 75,140 Z" fill="#111827" />
                  <path d="M 95,120 C 120,102 165,102 205,115 C 185,107 140,98 115,110 Z" fill="#1f2937" />

                  {/* Eyebrows */}
                  <path d="M 110,140 Q 123,132 138,137" stroke="#111827" strokeWidth="5.5" fill="none" strokeLinecap="round" />
                  <path d="M 162,137 Q 177,132 190,140" stroke="#111827" strokeWidth="5.5" fill="none" strokeLinecap="round" />

                  {/* Dark Brown Eyes */}
                  <ellipse cx="124" cy="151" rx="7" ry="5.5" fill="#ffffff" />
                  <ellipse cx="176" cy="151" rx="7" ry="5.5" fill="#ffffff" />
                  <circle cx="124" cy="151" r="4" fill="#2d1c10" />
                  <circle cx="176" cy="151" r="4" fill="#2d1c10" />
                  <circle cx="125.5" cy="149.5" r="1.5" fill="#ffffff" />
                  <circle cx="177.5" cy="149.5" r="1.5" fill="#ffffff" />

                  {/* Nose */}
                  <path d="M 146,146 L 147,170 Q 150,173 153,170" stroke="#b0754c" strokeWidth="3" fill="none" strokeLinecap="round" />

                  {/* Mustache & Clean-Groomed Substantial Indian Beard */}
                  <path d="M 98,175 C 98,208 120,226 150,226 C 180,226 202,208 202,175 C 200,200 180,221 150,221 C 120,221 100,200 98,175 Z" fill="#1e293b" />
                  <path d="M 98,170 Q 100,200 115,212 Q 130,224 150,224 Q 170,224 185,212 Q 200,200 202,170 C 197,195 175,218 150,218 C 125,218 103,195 98,170 Z" fill="#0f172a" />
                  <path d="M 122,178 Q 150,168 178,178 Q 150,186 122,178 Z" fill="#0f172a" />
                  <path d="M 127,177 Q 150,170 173,177 Q 150,182 127,177 Z" fill="#111827" />
                  <path d="M 142,205 Q 150,202 158,205 Q 150,218 142,205 Z" fill="#0f172a" />

                  {/* Lips */}
                  <path d="M 134,188 Q 150,195 166,188" stroke="#a14242" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M 137,188 Q 150,190 163,188" stroke="#7a2a2a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                  {/* Collar of Light Blue Under-Shirt */}
                  <path d="M 120,240 L 150,268 L 180,240 L 165,285 L 135,285 Z" fill="#93c5fd" />
                  <path d="M 130,240 L 150,265 L 170,240 Z" fill="#783a1a" opacity="0.15" />

                  {/* Clean White Professional Doctor Lab Coat */}
                  <path d="M 80,250 C 60,285 52,365 50,400 L 250,400 C 248,365 240,285 220,250 C 195,264 175,270 150,270 C 125,270 105,264 80,250 Z" fill="#ffffff" />
                  <path d="M 80,250 L 115,290 L 150,290 L 185,290 L 220,250 Z" fill="#f1f5f9" />
                  <path d="M 95,250 L 125,335 L 150,335 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                  <path d="M 205,250 L 175,335 L 150,335 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                  <path d="M 75,325 L 98,325 L 98,355 L 75,355 Z" fill="#fcfcfc" stroke="#e2e8f0" strokeWidth="1.5" rx="2" />

                  {/* Symmetrically Draped Navy-Blue Stethoscope */}
                  <path d="M 110,225 C 105,285 195,285 190,225" fill="none" stroke="#1e293b" strokeWidth="6.5" strokeLinecap="round" />
                  <path d="M 110,225 L 110,212" fill="none" stroke="#94a3b8" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M 190,225 L 190,212" fill="none" stroke="#94a3b8" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M 152,274 Q 174,300 178,322" fill="none" stroke="#0f172a" strokeWidth="5.5" strokeLinecap="round" />
                  <circle cx="178" cy="328" r="11" fill="#94a3b8" stroke="#1e293b" strokeWidth="3" />
                  <circle cx="178" cy="328" r="6" fill="#f8fafc" />
                  <circle cx="178" cy="328" r="3" fill="#64748b" />
                </svg>
              )}
              
              {/* Floating Verified Badge */}
              <div className="absolute top-4 right-4 bg-emerald-500 text-white flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                <ShieldCheck size={14} />
                <span>Govt. Surgeon</span>
              </div>

              {/* Clinic Affiliation Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-rose-500/30 text-center">
                <p className="text-rose-400 text-[10px] font-bold tracking-widest uppercase">
                  {TRANSLATIONS[language].teluguBadge}
                </p>
                <p className="text-white text-xs font-semibold mt-0.5 font-mono text-center">
                  Consultant General & Emergency Specialist
                </p>
              </div>
            </div>

            {/* Emergency Mobile Shortcut */}
            <a 
              href="tel:9618888743" 
              className="mt-6 flex items-center justify-center gap-2 w-full max-w-[360px] bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold py-3 px-6 rounded-2xl shadow-md transition-all duration-200"
            >
              <span className="text-sm font-mono tracking-wider">📞 Call Direct: 9618888743</span>
            </a>
          </div>

          {/* Right Block - Academic Degrees & Credentials */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-rose-600 font-extrabold text-lg tracking-wide flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 bg-rose-600 rounded-full animate-ping"></span>
                {t.docSubtitle}
              </p>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
                Dr. N.S. Nayak, <span className="text-rose-700 font-serif font-semibold text-3xl block md:inline md:align-middle md:ml-2">M.B.B.S, FEM (UK)</span>
              </h3>
              <p className="text-sky-800 font-bold text-sm tracking-widest uppercase mt-3 flex items-center gap-1.5 bg-sky-50 px-3 py-1 rounded-md border border-sky-100 max-w-max">
                <Building size={14} />
                {t.govDoctorLabel}
              </p>
            </div>

            {/* Bilingual Biography Section */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <div className="border-l-4 border-rose-600 pl-4">
                <p className="text-slate-600 font-medium text-sm italic leading-relaxed">
                  "Serving as a Civil Assistant Surgeon in the Government Hospital at Darsi. Dr. N.S. Nayak provides expert primary diagnostics & critical emergency medicine. With advanced training in Emergency Medicine from the UK and experience heading clinical operations as Chief Medical Officer at Apollo Hospitals, Kakinada, he leads Sri Thirumala Clinic to offer elite day-and-night health cover."
                </p>
              </div>
              <div className="border-l-4 border-sky-600 pl-4">
                <p className="text-slate-700 font-semibold text-sm leading-relaxed font-sans">
                  "దర్శి గవర్నమెంట్ హాస్పిటల్‌నందు సివిల్ అసిస్టెంట్ సర్జన్‌గా సేవలు అందిస్తూ, సమాంతరంగా రాత్రివేళల్లో అత్యవసర రోగుల ప్రాణ రక్షణే ధ్యేయంగా శ్రీ తిరుమల క్లినిక్ (నైట్ హాస్పిటల్)ను నడుపుతున్నారు. యునైటెడ్ కింగ్‌డమ్ (UK) లో ఎమర్జెన్సీ మెడిసిన్ ఫెలోషిప్ పూర్తి చేసి, అపోలో హాస్పిటల్స్ వంటి కార్పొరేట్ సంస్థలలో సుదీర్ఘ అనుభవంతో అత్యుత్తమ చికిత్స అందిస్తున్నారు."
                </p>
              </div>
            </div>

            {/* Academic Credentials Accordion */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <GraduationCap className="text-rose-600" size={20} />
                <span>{t.docAcademic}</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {degreesList.map((degree, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-slate-50 to-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-rose-100 transition-colors duration-200">
                    <p className="text-xs font-bold text-rose-700 uppercase font-mono">Degree {idx + 1}</p>
                    <p className="text-sm font-extrabold text-slate-800 mt-1">{degree.en}</p>
                    <p className="text-xs font-semibold text-slate-500 mt-1 font-sans">{degree.te}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Logs */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Award className="text-sky-600" size={20} />
                <span>{t.docExperience}</span>
              </h4>
              <div className="space-y-3">
                {clinicalExpList.map((exp, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 ${
                      exp.status === 'active' 
                        ? 'bg-rose-50/40 border-rose-100 shadow-sm'
                        : 'bg-white border-slate-150'
                    }`}
                  >
                    <div className="mt-1">
                      <CheckCircle className={exp.status === 'active' ? 'text-rose-600' : 'text-emerald-500'} size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-slate-800">{exp.en}</p>
                      <p className="text-xs font-bold text-slate-500 mt-0.5">{exp.te}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Visiting Specialist Consultants Section */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              {language === 'en' ? 'Specialized Medical Services' : 'ప్రత్యేక వైద్య విభాగాలు'}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-black text-slate-900 mt-3 tracking-tight">
              {language === 'en' ? 'Visiting Specialists & Consultant Panel' : 'కన్సల్టెంట్ స్పెషలిస్ట్ వైద్యుల ప్యానల్'}
            </h3>
            <p className="text-slate-500 font-semibold text-xs mt-2">
              {language === 'en' 
                ? 'Authorized specialty consultations available on schedule or prior appointment booking.'
                : 'ముందుస్తు అపాయింట్‌మెంట్ ల ద్వారా లభించు ప్రత్యేక నిపుణులైన కన్సల్టెంట్ వైద్యుల సేవలు.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Gastrosurgeon Profile Card */}
            <div className="bg-gradient-to-tr from-indigo-50/50 to-white hover:from-indigo-50/10 p-6 rounded-3xl border border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-100 text-indigo-700 rounded-2xl border border-indigo-200 shadow-inner">
                    <Stethoscope size={24} />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 bg-indigo-100 text-indigo-800 text-[10px] font-bold uppercase rounded-md mb-1 border border-indigo-200 font-mono">
                      {language === 'en' ? 'Gastrosurgeon' : 'గ్యాస్ట్రోఎంటరాలజీ నిపుణులు'}
                    </span>
                    <h4 className="text-lg md:text-xl font-extrabold text-[#111e54] font-serif">
                      Dr. Sure Pawan Kumar
                    </h4>
                    <p className="text-xs font-bold text-slate-500 font-mono mt-0.5">
                      M.S, M.Ch (Surgical Gastroenterology)
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pl-2 border-l-2 border-indigo-400 mt-4">
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    {language === 'en'
                      ? 'Consultant Gastrosurgeon specializing in advanced gastrointestinal, colorectal, pancreatic, and hepatobiliary surgeries.'
                      : 'జీర్ణకోశ, కాలేయ సమస్యలు మరియు పెప్టిక్ అల్సర్, అసిడిటీ, హెర్నియా, అపెండిసైటిస్ ఎమర్జెన్సీ సర్జరీల విభాగంలో అత్యుత్తమ వైద్యాధికారి.'}
                  </p>
                  <p className="text-xs text-slate-700 font-bold leading-relaxed font-sans">
                    {language === 'en'
                      ? 'Expert in chronic digestive tract issues, acute abdominal emergency triages, and complete surgical advice.'
                      : 'దర్శి శ్రీ తిరుమల క్లినిక్ నందు ముందస్తు రిజిస్ట్రేషన్ ద్వారా గ్యాస్ట్రిక్ సర్జన్ గారి అపాయింట్‌మెంట్ లభించును.'}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-indigo-100/40 flex items-center justify-between text-[11px]">
                <span className="text-emerald-600 font-extrabold font-mono uppercase bg-emerald-50 px-2 py-1 rounded border border-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                  {language === 'en' ? 'On Appointment' : 'అపాయింట్‌మెంట్ ద్వారా'}
                </span>
                <span className="text-slate-400 font-medium font-serif">Verified Specialist</span>
              </div>
            </div>

            {/* Skin Care & Dermatology Card */}
            <div className="bg-gradient-to-tr from-pink-50/50 to-white hover:from-pink-50/10 p-6 rounded-3xl border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-pink-100 text-pink-700 rounded-2xl border border-pink-200 shadow-inner">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 bg-pink-100 text-pink-800 text-[10px] font-bold uppercase rounded-md mb-1 border border-pink-200 font-mono">
                      {language === 'en' ? 'Dermatology' : 'చర్మ మరియు కేశ సంరక్షణ'}
                    </span>
                    <h4 className="text-lg md:text-xl font-extrabold text-pink-950 font-serif">
                      {language === 'en' ? 'Dr. B. Rohitha' : 'డాక్టర్ బి. రోహిత'}
                    </h4>
                    <p className="text-xs font-bold text-slate-500 font-mono mt-0.5">
                      {language === 'en' ? 'M.D. (DVL) — Dermatologist' : 'M.D. (DVL) — చర్మ వైద్య నిపుణులు'}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pl-2 border-l-2 border-pink-400 mt-4">
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    {language === 'en'
                      ? 'Comprehensive diagnostics and advanced therapies for skin infections, eczema, hair thinning, scalp therapies, and psoriasis.'
                      : 'అలర్జీలు, దీర్ఘకాలిక దురదలు, శరీర మచ్చలు, మొటిమలు, తామర, జుట్టు రాలడం మరియు సోరియాసిస్ వ్యాధులకు శాశ్వత పరిష్కారాన్ని అందించు నిపుణులు.'}
                  </p>
                  <p className="text-xs text-slate-700 font-bold leading-relaxed font-sans">
                    {language === 'en'
                      ? 'Ethical skincare diagnostics, treatment of complex pigmentation disorders, and customized allergy advice.'
                      : 'దర్శి ప్రాంతవాసులు తమ సమయమును ఆదా చేసుకొనుటకు క్లినిక్ నందే ప్రత్యేక చర్మ వైద్య సేవలను వినియోగించుకొనవచ్చును.'}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-pink-100/40 flex items-center justify-between text-[11px]">
                <span className="text-emerald-600 font-extrabold font-mono uppercase bg-emerald-50 px-2 py-1 rounded border border-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                  {language === 'en' ? 'Visiting Panel' : 'నిపుణులచే చికిత్స'}
                </span>
                <span className="text-slate-400 font-medium font-serif">Verified Specialist</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
