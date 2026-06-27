/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, AppointmentInquiry } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Calendar, Phone, Clock, FileText, Check, Trash2, Send, Share2, ClipboardList, ShieldAlert } from 'lucide-react';

interface AppointmentsProps {
  language: Language;
  selectedServiceEn: string;
  selectedServiceTe: string;
}

export function Appointments({ language, selectedServiceEn, selectedServiceTe }: AppointmentsProps) {
  const t = TRANSLATIONS[language];
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [phone, setPhone] = useState('');
  const [complaint, setComplaint] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Evening (04:30 PM - 09:00 PM)');
  
  // Storing generated ticket or history
  const [generatedTicket, setGeneratedTicket] = useState<AppointmentInquiry | null>(null);
  const [bookingHistory, setBookingHistory] = useState<AppointmentInquiry[]>([]);

  // Update complaint field when service is selected from the grid
  useEffect(() => {
    if (selectedServiceEn) {
      const displaytext = language === 'en' 
        ? `${selectedServiceEn}` 
        : `${selectedServiceTe}`;
      setComplaint(displaytext);
    }
  }, [selectedServiceEn, selectedServiceTe, language]);

  // Load previous bookings on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('thirumala_appointments');
      if (saved) {
        setBookingHistory(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Could not load storage history", e);
    }
  }, []);

  // Save history helper
  const saveToHistory = (newBooking: AppointmentInquiry) => {
    const updated = [newBooking, ...bookingHistory].slice(0, 5); // store latest 5
    setBookingHistory(updated);
    try {
      localStorage.setItem('thirumala_appointments', JSON.stringify(updated));
    } catch (e) {
      console.error("Could not save to storage", e);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !age) {
      alert(language === 'en' ? 'Please fill in all required fields!' : 'దయచేసి అన్ని వివరాలను నమోదు చేయండి!');
      return;
    }

    const ticketId = `STC-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 900 + 100)}`;
    const newInquiry: AppointmentInquiry = {
      id: ticketId,
      patientName: name,
      age,
      gender,
      phone,
      complaint: complaint || (language === 'en' ? 'General Consultation Checkup' : 'సాధారణ తనిఖీ'),
      date: date || new Date().toISOString().split('T')[0],
      timeSlot,
      createdAt: new Date().toLocaleString(),
      status: 'Confirmed'
    };

    setGeneratedTicket(newInquiry);
    saveToHistory(newInquiry);
  };

  const handleClearForm = () => {
    setName('');
    setAge('');
    setGender('Male');
    setPhone('');
    setComplaint('');
    setDate('');
    setGeneratedTicket(null);
  };

  const deleteHistory = () => {
    if (confirm(language === 'en' ? 'Clear booking history?' : 'రిజిస్ట్రేషన్ల చరిత్రను తొలగించాలా?')) {
      setBookingHistory([]);
      localStorage.removeItem('thirumala_appointments');
    }
  };

  // Generate perfect custom WhatsApp URL formatting
  const getWhatsAppURL = (ticket: AppointmentInquiry) => {
    const clinicHeading = `*🏥 SRI THIRUMALA CLINIC & NIGHT-HOSPITAL *`;
    const subHeading = `*OPD DIGITAL CONSULTATION ADMISSION SLIP*`;
    const separator = `----------------------------------------`;
    
    const message = `${clinicHeading}
${subHeading}
${separator}
🎟️ *OPD Ticket ID:* ${ticket.id}
👤 *Patient Name:* ${ticket.patientName}
🎂 *Age / Gender:* ${ticket.age} Yrs / ${ticket.gender}
📱 *Phone:* ${ticket.phone}
🗓️ *Preferred Date:* ${ticket.date}
⏰ *Time Preference:* ${ticket.timeSlot}
🩺 *Complaint Description:*
${ticket.complaint}
${separator}
📡 _This ticket has been pre-registered locally. Please stamp this for priority O.P. line._ 

📞 *Clinic Hotline:* 9618888743
📍 *Address:* D.V.S. Complex, near Anjaneyaswamy Temple, Kurichedu Road, Darsi.`;

    const encodedText = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=919618888743&text=${encodedText}`;
  };

  return (
    <section id="book" className="py-24 bg-slate-900 text-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Head Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20 uppercase tracking-widest font-mono">
            {t.navBook}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-white mt-4 tracking-tight">
            {language === 'en' ? 'Pre-Register Outpatient Slip' : 'డిజిటల్ ఓ.పి (O.P.) స్లిప్ పొందండి'}
          </h2>
          <p className="text-slate-400 mt-2 text-sm leading-relaxed">
            {t.apptSubtitle}
          </p>
          <div className="w-16 h-1 bg-rose-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Work Area Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Submission Form Block */}
          <div className="lg:col-span-7 bg-slate-800/60 p-6 md:p-8 rounded-3xl border border-slate-700/50 shadow-xl backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6 font-serif">
              <ClipboardList className="text-rose-500" size={22} />
              <span>{language === 'en' ? 'OPD Medical Form' : 'వైద్య నమోదు పత్రం'}</span>
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Row: Name and Age */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                    {t.patientName} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suresh Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all duration-150"
                  />
                </div>
                
                <div className="md:col-span-4">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                    {t.patientAge} *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="115"
                    placeholder="Years"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all duration-150"
                  />
                </div>
              </div>

              {/* Row: Gender & Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                    {t.patientGender}
                  </label>
                  <div className="flex gap-2">
                    {['Male', 'Female', 'Other'].map((gen) => (
                      <button
                        key={gen}
                        type="button"
                        onClick={() => setGender(gen)}
                        className={`flex-1 py-3 text-xs font-bold rounded-xl border transition-all duration-200 cursor-pointer ${
                          gender === gen
                            ? 'bg-rose-600 border-rose-500 text-white shadow-md'
                            : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                        }`}
                      >
                        {gen === 'Male' ? t.genderMale : gen === 'Female' ? t.genderFemale : t.genderOther}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-7">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                    {t.patientPhone} *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-xs font-bold text-slate-500 font-mono">+91</span>
                    <input
                      type="tel"
                      required
                      pattern="[6789][0-9]{9}"
                      maxLength={10}
                      placeholder="9618888743"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-14 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all duration-150"
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 font-mono">
                    Must be a 10-digit mobile number starting with 6, 7, 8, or 9.
                  </p>
                </div>
              </div>

              {/* Row: Complaint (With interactive helper) */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                  {t.patientCondition}
                </label>
                <textarea
                  rows={3}
                  placeholder={language === 'en' ? "Describe headache, stomach ache, fever, pediatric issues or any trauma..." : "ఆరోగ్య ఇబ్బంది... తలనొప్పి, గ్యాస్ట్రిక్ నివారణ లేదా అత్యవసర ప్రమాదం..."}
                  value={complaint}
                  onChange={(e) => setComplaint(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all duration-150"
                />
                {selectedServiceEn && (
                  <div className="mt-1 flex items-center justify-between text-[11px] bg-slate-900 px-3 py-1.5 rounded-lg border border-rose-500/20 text-rose-400 font-semibold font-mono">
                    <span>⚡ Pre-filled from clicked treatment selection</span>
                    <button type="button" onClick={() => setComplaint('')} className="text-slate-400 hover:text-white underline cursor-pointer">
                      Reset
                    </button>
                  </div>
                )}
              </div>

              {/* Row: Date & Time slot */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                    {t.consultDate}
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition-all duration-150"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                    {t.consultSlot}
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 cursor-pointer"
                  >
                    <option value="Morning (07:45 AM - 08:45 AM)">{t.slotMorning}</option>
                    <option value="Evening (04:30 PM - 09:00 PM)">{t.slotEvening}</option>
                    <option value="Sunday Morning (09:00 AM - 01:00 PM)">{t.slotSunday}</option>
                    <option value="🚨 EMERGENCY NIGHT CASUALTY">{t.slotEmergency}</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText size={18} />
                  <span>{t.generateSlip}</span>
                </button>
                
                <button
                  type="button"
                  onClick={handleClearForm}
                  className="bg-slate-900 hover:bg-slate-950 text-slate-300 border border-slate-700 font-bold py-3 px-5 rounded-2xl transition-colors duration-150 cursor-pointer"
                >
                  Clear
                </button>
              </div>

            </form>
          </div>

          {/* Ticket Receipt Viewer Column (Right) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Live Ticket Generated Viewer */}
            {generatedTicket ? (
              <div className="bg-white text-slate-900 rounded-3xl border-4 border-double border-slate-300 shadow-2xl p-6 relative overflow-hidden transition-all duration-300 transform scale-[1.01]">
                
                {/* Decorative cutouts for ticket aesthetic */}
                <div className="absolute -left-3 top-1/2 w-6 h-6 bg-slate-900 rounded-full"></div>
                <div className="absolute -right-3 top-1/2 w-6 h-6 bg-slate-900 rounded-full"></div>
                
                {/* Barcode representation */}
                <div className="absolute top-4 right-6 w-20 flex flex-col items-center opacity-80 select-none">
                  <div className="flex gap-0.5 h-6">
                    {[1,2,4,1,3,1,2,1,4,1,2,3,1].map((w, i) => (
                      <div key={i} className="bg-slate-950" style={{ width: `${w}px` }}></div>
                    ))}
                  </div>
                  <span className="text-[7px] font-mono mt-0.5 leading-none">STC-{generatedTicket.id.split('-')[1]}</span>
                </div>

                {/* Reciept Header */}
                <div className="text-center pb-5 border-b-2 border-dashed border-slate-200">
                  <span className="text-[10px] font-black tracking-widest text-[#1e3a8a] bg-sky-50 border border-sky-100 rounded px-2 py-0.5 uppercase block w-max mx-auto mb-2">
                    {generatedTicket.id}
                  </span>
                  <h4 className="font-black text-rose-800 font-serif leading-tight">
                    {t.slipReceiptHeader}
                  </h4>
                  <p className="text-[9px] text-slate-500 mt-1 uppercase tracking-wider font-mono">
                    Darsi • Prakasam Dist • 24/7 Night Care
                  </p>
                </div>

                {/* Ticket Specs Table */}
                <div className="py-5 space-y-3 font-sans text-sm pb-5 border-b-2 border-dashed border-slate-200">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold text-xs uppercase font-mono">Patient</span>
                    <span className="font-extrabold text-slate-900">{generatedTicket.patientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold text-xs uppercase font-mono">Age / Sex</span>
                    <span className="font-extrabold text-slate-900">{generatedTicket.age} Yrs / {generatedTicket.gender === 'Male' ? t.genderMale : generatedTicket.gender === 'Female' ? t.genderFemale : t.genderOther}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold text-xs uppercase font-mono">Phone No.</span>
                    <span className="font-extrabold text-slate-900 text-xs font-mono">+91 {generatedTicket.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold text-xs uppercase font-mono">Date Select</span>
                    <span className="font-extrabold text-slate-900 text-xs font-mono flex items-center gap-1">
                      <Calendar size={12} className="text-sky-600" />
                      {generatedTicket.date}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold text-xs uppercase font-mono">Timing Slot</span>
                    <span className="font-black text-xs text-indigo-950 font-serif flex items-center gap-1">
                      <Clock size={12} className="text-indigo-600" />
                      {generatedTicket.timeSlot}
                    </span>
                  </div>
                  <div className="pt-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 font-black text-[9px] uppercase tracking-wider block mb-1 font-mono">COMPLAINT / ఉల్లేఖన</span>
                    <p className="text-xs text-slate-700 font-bold leading-relaxed">{generatedTicket.complaint}</p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="py-4 text-center">
                  <div className="bg-emerald-500 text-white flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm max-w-max mx-auto mb-4 font-mono animate-pulse">
                    <Check size={14} strokeWidth={3} />
                    <span>{t.slipStatus}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium font-sans">
                    * Pre-registration completes instantly. Present this ticket at the clinic to skip the manual paperwork.
                  </p>
                </div>

                {/* Sub Action Buttons (Send on Whatsapp, etc.) */}
                <div className="space-y-2">
                  <a
                    href={getWhatsAppURL(generatedTicket)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#25d366] hover:bg-[#20ba56] text-white font-extrabold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-150 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Send size={15} />
                    <span>{t.whatsappSlip}</span>
                  </a>
                </div>

              </div>
            ) : (
              /* If no active ticket is generated, show informational reminder block */
              <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-3xl text-center space-y-4">
                <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto text-slate-400">
                  <FileText size={28} />
                </div>
                <div>
                  <h4 className="text-md font-bold text-slate-200">OPD Ticket Generator is Idle</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-xs mx-auto">
                    Fill the appointment form on the left with the patient details to generate your official registration token.
                  </p>
                </div>
              </div>
            )}

            {/* Local History logs (Stores up to 5 latest tickets) */}
            {bookingHistory.length > 0 && (
              <div className="bg-slate-800/20 border border-slate-700/30 p-6 rounded-3xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/50 mb-4">
                  <h4 className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                    <FileText size={16} className="text-rose-500" />
                    <span>{language === 'en' ? 'Previous Bookings (Saved locally)' : 'మునుపటి ఓ.పి రిజిస్ట్రేషన్లు'}</span>
                  </h4>
                  <button 
                    onClick={deleteHistory}
                    className="text-[11px] text-slate-400 hover:text-rose-400 font-bold uppercase font-mono tracking-wider flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 size={12} />
                    <span>Clear all</span>
                  </button>
                </div>

                <div className="space-y-3 max-h-[180px] overflow-y-auto pr-1">
                  {bookingHistory.map((book) => (
                    <div 
                      key={book.id}
                      onClick={() => setGeneratedTicket(book)}
                      className="bg-slate-850 hover:bg-slate-800 p-3 rounded-xl border border-slate-700/50 flex justify-between items-center cursor-pointer transition-all duration-150 hover:border-slate-600"
                    >
                      <div className="space-y-0.5">
                        <span className="text-[10px] bg-slate-700 font-bold text-rose-400 px-1.5 py-0.5 rounded font-mono">
                          {book.id}
                        </span>
                        <p className="text-xs font-bold text-slate-200 mt-1">{book.patientName}</p>
                        <p className="text-[10px] text-slate-400 font-mono italic">{book.createdAt}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-emerald-500 border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-500/10 font-mono">OPEN SLIP</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick 24/7 Hotline Panel */}
            <div className="bg-gradient-to-br from-rose-950/40 to-slate-900 border border-rose-500/20 p-6 rounded-3xl space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-rose-500/10 text-rose-500 rounded-xl border border-rose-500/20">
                  <ShieldAlert size={20} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">
                    {language === 'en' ? '🚨 Hospital Hotline Support' : '🚨 ఆసుపత్రి అత్యవసర సంప్రదింపు'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {language === 'en' 
                      ? 'Nights are reserved for severe casualty & acute trauma cases. Please call the hotline directly for emergency guidance.'
                      : 'రాత్రివేళల్లో గుండెనొప్పి, శ్వాసకోస తీవ్ర సమస్యలు లేదా ప్రమాదాల వైద్య సేవలకు నేరుగా ఫోన్ చేయండి.'}
                  </p>
                </div>
              </div>
              <a 
                href="tel:9618888743" 
                className="text-xs font-extrabold text-white bg-rose-600/90 hover:bg-rose-600 font-mono px-4 py-2.5 rounded-xl border border-rose-500/20 text-center block"
              >
                📞 HOTLINE: +91 96188 88743
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
