/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MedicalService } from '../types';

export const MEDICAL_SERVICES: MedicalService[] = [
  {
    id: 'fever',
    title: 'Seasonal Fevers & Infections',
    teluguTitle: 'విషజ్వరాలు, డెంగీ, మలేరియా, టైఫాయిడ్',
    description: 'Expert diagnostics and intensive management of Dengue, Typhoid, Malaria, and viral fevers, focusing on rapid hydration and recovery.',
    teluguDescription: 'విషజ్వరాలు, డెంగీ, మలేరియా మరియు టైఫాయిడ్‌లపై సమగ్ర రోగ నిర్ధారణ మరియు త్వరిత కోలుకోవడానికి ప్రత్యేక చికిత్స.',
    category: 'seasonal',
    iconName: 'Thermometer'
  },
  {
    id: 'bp_sugar',
    title: 'BP, Diabetes & Thyroid Management',
    teluguTitle: 'బి.పి, షుగరు, థైరాయిడ్, రక్తహీనత',
    description: 'Chronic disease tracking and precision dosage calibration for Hypertension, Diabetes, Thyroid, and Anemia.',
    teluguDescription: 'బి.పి, షుగర్, థైరాయిడ్ సమస్యలు మరియు రక్తహీనతకు నిరంతర పర్యవేక్షణ మరియు సరైన ఔషధ నియంత్రణ.',
    category: 'chronic',
    iconName: 'Activity'
  },
  {
    id: 'chest_asthma',
    title: 'Asthma & Respiratory Support',
    teluguTitle: 'ఆయాసం, శ్వాసకోస ఇబ్బందులు',
    description: 'Acute relief and maintenance therapy for asthma attacks, breathing difficulties, chronic bronchitis, and chest discomfort.',
    teluguDescription: 'ఆయాసం, దగ్గు, గొంతు నొప్పి మరియు ఇతర శ్వాసకోస సమస్యల నుండి త్వరిత ఉపశమనం మరియు దీర్ఘకాలిక నియంత్రణ చికిత్స.',
    category: 'emergency',
    iconName: 'Wind'
  },
  {
    id: 'injury_accidents',
    title: 'Wound Care & Minor Trauma',
    teluguTitle: 'అన్నిరకాల గాయాలు, యాక్సిడెంట్ కేసులు',
    description: 'Immediate surgical suturing, plastering, sterile dressing, and stabilizing care for minor accidents, trauma, and cuts.',
    teluguDescription: 'చిన్నపాటి ప్రమాదాలు మరియు గాయాలకు అత్యవసర సర్జికల్ కుట్లు, కట్టు కట్టడం మరియు తక్షణ ప్రథమ చికిత్స సౌకర్యాలు.',
    category: 'emergency',
    iconName: 'Stretcher'
  },
  {
    id: 'poisoning_toxic',
    title: 'Pesticide & Poison Emergencies',
    teluguTitle: 'పురుగుల మందు తాగినవారికి తక్షణ చికిత్స',
    description: 'Specialized toxicology response and gastric lavage interventions for insecticide or chemical consumption cases.',
    teluguDescription: 'పురుగుల మందు లేదా ఇతర విష రసాయనాలు తాగిన రోగులకు అనుభవజ్ఞులైన వైద్యులచే అత్యవసర చికిత్స మరియు ప్రాణ రక్షణ చర్యలు.',
    category: 'emergency',
    iconName: 'ShieldAlert'
  },
  {
    id: 'stings_bites',
    title: 'Scorpion & Snake Bites',
    teluguTitle: 'తేలుకాటు మరియు ఇతర అత్యవసర కేసులు',
    description: 'Immediate administration of antivenoms, pain blocks, and dynamic observation for scorpion stings and other bites.',
    teluguDescription: 'తేలుకాటు, పురుగు కాటు మరియు ఇతర విషపూరిత జంతువుల కాటుకు తక్షణ నొప్పి నివారణ మరియు విరుగుడు చికిత్స.',
    category: 'emergency',
    iconName: 'Skull'
  },
  {
    id: 'gastric_trouble',
    title: 'Gastrointestinal & Acidity Care',
    teluguTitle: 'గ్యాస్ట్రబుల్, తలనొప్పి, వాంతులు',
    description: 'Rapid symptomatic relief from acute gastric issues, severe headaches, colic pain, food poisoning, and continuous vomiting.',
    teluguDescription: 'తీవ్రమైన గ్యాస్ట్రబుల్, కడుపునొప్పి, తలనొప్పి మరియు నిరంతర వాంతుల నుండి తక్షణ ప్రశమన లభించును.',
    category: 'general',
    iconName: 'Sparkles'
  },
  {
    id: 'joints_pain',
    title: 'Muscular & Joint Pain Management',
    teluguTitle: 'కండరాలు మరియు కీళ్ళ నొప్పులు',
    description: 'Therapy and medical aid for acute backache, arthritis, joint inflammations, and musculoskeletal pains.',
    teluguDescription: 'కీళ్ల నొప్పులు, కండరాల నొప్పులు మరియు నడుమునొప్పి మరియు వాతపు నొప్పుల శాశ్వత నివారణకు సరైన చికిత్స.',
    category: 'general',
    iconName: 'Bone'
  },
  {
    id: 'heat_stroke',
    title: 'Heat Stroke & Dehydration Care',
    teluguTitle: 'వడదెబ్బ మరియు డీహైడ్రేషన్',
    description: 'Intravenous fluid therapy, electrolyte rebalancing, and cooling interventions for heat stroke patients.',
    teluguDescription: 'వడదెబ్బ తగిలి నీరసించిన వారికి సెలైన్ల ద్వారా త్వరిత శక్తి పంపిణీ మరియు అత్యవసర చికిత్స.',
    category: 'seasonal',
    iconName: 'Sun'
  },
  {
    id: 'dermatology',
    title: 'Skin & Dermatology Care',
    teluguTitle: 'చర్మ అలర్జీలు & డెర్మటాలజీ చికిత్స',
    description: 'Diagnosis and treatment of skin infections, allergies, eczema, psoriasis, acne, hair loss, and nail disorders by specialist skin consultants.',
    teluguDescription: 'అలెర్జీలు, తామర, సోరియాసిస్, దురదలు, జుట్టు రాలడం మరియు ఇతర చర్మ వ్యాధుల కొరకు ప్రత్యేక చర్మ వైద్య నిపుణులచే చికిత్స.',
    category: 'general',
    iconName: 'Sparkles'
  }
];

export const TRANSLATIONS = {
  en: {
    clinicName: 'Sri Thirumala Clinic',
    tagline: 'Night-Hospital & Emergency Services',
    teluguBadge: 'శ్రీ తిరుమల క్లినిక్ (నైట్ - హాస్పిటల్)',
    emergencySlogan: 'Emergency Care Whenever You Need It! Especially At Night!',
    locationDarsi: 'Darsi, Prakasam Dist.',
    navHome: 'Home',
    navAbout: 'About Doctor',
    navServices: 'Treatments',
    navTimings: 'Timings',
    navBook: 'Consultation Slip',
    navContact: 'Contact Us',
    
    // Hero Banner
    heroTitle: 'Sri Thirumala Clinic & Night-Hospital',
    heroSubtitle: 'D.V.S. Complex, near Anjaneyaswamy Temple, Kurichedu Road, Darsi',
    heroTag: '24/7 Night Care & Emergency Facility',
    heroDescription: 'Professional, compassionate healthcare led by government surgeon Dr. N.S. Nayak. We offer top-tier general consultations, laboratory facilities, pharmacies, and 24-hour priority emergency solutions.',
    callButton: 'Call Clinic: +91 96188 88743',
    directionsButton: 'Get Location Directions',
    emergencyBannerText: '🔴 Doctor is available at night for emergency cases. Call immediately for emergency support.',

    // Doctor Profile
    docTitle: 'Consultant Doctor',
    docSubtitle: 'Meet Dr. N.S. Nayak Garu',
    docAcademic: 'Academic Credentials:',
    docExperience: 'Professional Clinical Experience:',
    docSummary: 'Serving as a Civil Assistant Surgeon in the Government Hospital at Darsi. Dr. N.S. Nayak provides elite primary and emergency medicine, utilizing extensive fellowship experience from the United Kingdom (UK) and tenure as a Chief Medical Officer (CMO) at Apollo Hospitals in Kakinada.',
    govDoctorLabel: 'Govt. Assistant Surgeon (Darsi)',

    // Timings
    timingsTitle: 'Out-Patient (OP) Consultation Timings',
    weekdayLabel: 'Monday to Saturday (Mon - Sat)',
    sundayLabel: 'Sunday (Sun Only)',
    morningLabel: 'Morning Hours',
    eveningLabel: 'Evening Hours',
    emergencyLabel: 'Emergency & Trauma Cases',
    emergencyNote: 'Available 24/7. Nights prioritized for critical cases.',

    // Facilities
    facilitiesTitle: 'On-Site Diagnostic & Life Support Facilities',
    oxygenTitle: 'Emergency Oxygen Support',
    oxygenDesc: 'High-flow backup cylinder setups for respiratory failure, trauma, or severe asthma.',
    ecgTitle: '12-Lead ECG Diagnostics',
    ecgDesc: 'Instant screening for chest pain, palpitations, cardiac blocks, or emergency triage.',
    medicalTitle: 'Fully Stocked Pharmacy (Medical Shop)',
    medicalDesc: 'Authorized ethical drugs, injections, antidiabetic pills, and IV infusions on-site.',
    labTitle: 'Diagnostic Lab Facility',
    labDesc: 'Diagnostic tests for dengue, malaria, blood sugar, hemoglobin, and electrolytes.',

    // Offers
    freeCampTitle: 'Complimentary Prevention Camp',
    freeCampDesc: 'Free Blood Pressure & Blood Sugar checks are performed every single day for all outpatients!',
    freeCampBadge: '100% FREE',

    // Appt Request
    apptTitle: 'Digital OPD Admission Slip',
    apptSubtitle: 'Pre-fill your details to generate your digital OPD slip. You can immediately send it to the Doctor on WhatsApp!',
    patientName: 'Patient Name',
    patientAge: 'Age',
    patientGender: 'Gender',
    genderMale: 'Male',
    genderFemale: 'Female',
    genderOther: 'Other',
    patientPhone: 'WhatsApp Mobile Number',
    patientCondition: 'Chief Medical Complaint (brief description)',
    consultDate: 'Preferred Consultation Date',
    consultSlot: 'Select Time Slot',
    slotMorning: 'Morning (07:45 AM - 08:45 AM)',
    slotEvening: 'Evening (04:30 PM - 09:00 PM)',
    slotSunday: 'Sunday Morning (09:00 AM - 01:00 PM)',
    slotEmergency: '🚨 EMERGENCY NIGHT USE',
    generateSlip: 'Generate OPD Slip & Call Doctor',
    downloadSlip: 'Download Receipt PDF/Image',
    whatsappSlip: 'Send to Clinic WhatsApp',
    slipReceiptHeader: 'SRI THIRUMALA CLINIC DIGITAL RECEPT',
    slipStatus: 'Status: Sent to Clinic Registry',

    // Footer
    addressLabel: 'Address Details',
    addressText: 'D.V.S. Complex (DVR Complex), near Anjaneyaswamy Temple, Kurichedu Road, Darsi, Andhra Pradesh, Pin - 523247.',
    rightsText: 'All Rights Reserved. Sri Thirumala Clinic & Night-Hospital © 2026.',
    legalNote: 'The medical treatments, facilities, and academic degrees shown are fully verified from the Doctor’s boards.'
  },
  te: {
    clinicName: 'శ్రీ తిరుమల క్లినిక్',
    tagline: 'నైట్ - హాస్పిటల్ & ఎమర్జెన్సీ సేవలు',
    teluguBadge: 'శ్రీ తిరుమల క్లినిక్ (నైట్ - హాస్పిటల్)',
    emergencySlogan: 'అత్యవసర వైద్యం అన్నివేళలా అవసరం! ముఖ్యంగా రాత్రివేళల్లో!',
    locationDarsi: 'దర్శి, ప్రకాశం జిల్లా.',
    navHome: 'హోమ్',
    navAbout: 'డాక్టర్ గారి వివరాలు',
    navServices: 'వైద్య సేవలు',
    navTimings: 'పనివేళలు',
    navBook: 'ఓ.పి స్లిప్',
    navContact: 'సంప్రదించండి',

    // Hero Banner
    heroTitle: 'శ్రీ తిరుమల క్లినిక్ & నైట్ - హాస్పిటల్',
    heroSubtitle: 'డి.వి.ఎస్. కాంప్లెక్స్, ఆంజనేయస్వామి గుడి దగ్గర, కురిచేడు రోడ్, దర్శి.',
    heroTag: '24/7 నైట్ కేర్ & ఎమర్జెన్సీ విభాగం',
    heroDescription: 'ప్రభుత్వ వైద్యాధికారి డా॥ N.S. నాయక్ గారి ఆధ్వర్యంలో నమ్మకమైన ఉచిత మరియు అకుంఠిత వైద్య సేవల క్లినిక్. ఆక్సిజన్ సదుపాయం, ECG, ల్యాబ్ మరియు ఫార్మసీ సేవలు రాత్రి వేళల్లో కూడా ఇక్కడ అందుబాటులో ఉన్నాయి.',
    callButton: 'ఫోన్ చేయండి: 9618888743',
    directionsButton: 'మ్యాప్ చిరునామా',
    emergencyBannerText: '🔴 అత్యవసర కేసులకు రాత్రివేళల్లో కూడా డాక్టర్ గారు అందుబాటులో ఉంటారు. సంప్రదించండి.',

    // Doctor Profile
    docTitle: 'కన్సల్టెంట్ డాక్టర్',
    docSubtitle: 'డా॥ N.S. నాయక్ గారు',
    docAcademic: 'విద్యార్హతలు:',
    docExperience: 'వైద్య అనుభవం:',
    docSummary: 'దర్శి ప్రభుత్వ ఆసుపత్రిలో సివిల్ అసిస్టెంట్ సర్జన్‌గా సేవలు అందిస్తున్నారు. వీరు కింగ్డమ్ (UK) లో ఫెలోషిప్ ఇన్ ఎమర్జెన్సీ మెడిసిన్ పూర్తి చేసి, కాకినాడ అపోలో హాస్పిటల్స్ లో చీఫ్ మెడికల్ ఆఫీసర్ (CMO) గా పని చేసిన విశేష అనుభవం కలిగి ఉన్నారు.',
    govDoctorLabel: 'గవర్నమెంట్ అసిస్టెంట్ సర్జన్ (దర్శి)',

    // Timings
    timingsTitle: 'ఓ.పి. (O.P.) సమయాలు',
    weekdayLabel: 'సోమవారం నుండి శనివారం వరకు (Mon - Sat)',
    sundayLabel: 'ఆదివారం (ఆదివారం మాత్రమే)',
    morningLabel: 'ఉదయం వేళలు',
    eveningLabel: 'సాయంత్రం/రాత్రి వేళలు',
    emergencyLabel: 'అత్యవసర కేసులు',
    emergencyNote: '24 గంటలు అందుబాటులో ఉంటారు. రాత్రివేళలకు ప్రాధాన్యత ఇవ్వబడుతుంది.',

    // Facilities
    facilitiesTitle: 'క్లినిక్ నందలి అధునాతన వైద్య సహాయాలు',
    oxygenTitle: 'ఆక్సిజన్ సౌకర్యం (Oxygen Cylinder)',
    oxygenDesc: 'శ్వాసకోస సమస్యలు, వడదెబ్బ లేదా అత్యవసర ప్రమాదాల కోసం హై-ఫ్లో నిరంతర ఆక్సిజన్ సదుపాయం కలదు.',
    ecgTitle: 'ఈ.సి.జి (12-Lead ECG)',
    ecgDesc: 'గుండెల్లో నొప్పి లేదా గుండె జబ్బుల గుర్తింపు కొరకు వెంటనే ఈ.సి.జి సదుపాయం కలదు.',
    medicalTitle: 'ఈ.సి.జి & మెడికల్ షాప్ (Pharmacy)',
    medicalDesc: 'అన్ని రకాల అత్యవసర మందులు మరియు ఇంజెక్షన్లు క్లినిక్ నందే లభించును.',
    labTitle: 'ల్యాబ్ సదుపాయం (Diagnostic Lab)',
    labDesc: 'రక్త పరీక్షలు, మలేరియా, డెంగ్యూ, షుగర్ మరియు ఇతర సాధారణ వ్యాధి రోగనిర్ధారణలు ఇక్కడ చేయబడును.',

    // Offers
    freeCampTitle: 'ఉచిత వ్యాధి నిర్ధారణ పరీక్షలు',
    freeCampDesc: 'రోగులందరికీ ప్రతి రోజు బి.పి మరియు షుగర్ పరీక్షలు ఉచితం!',
    freeCampBadge: '100% ఉచితం',

    // Appt Request
    apptTitle: 'ఆన్‌లైన్ డిజిటల్ ఓ.పి (OPD) రిజిస్ట్రేషన్',
    apptSubtitle: 'మీ వివరాలను పూర్తి చేయండి, డిజిటల్ ఓ.పి స్లిప్ సృష్టించండి. వెంటనే డాక్టర్ గారి వాట్సాప్‌కి నేరుగా పంపండి!',
    patientName: 'రోగి పేరు (Patient Name)',
    patientAge: 'వయస్సు (Age)',
    patientGender: 'లింగము (Gender)',
    genderMale: 'పురుషుడు (Male)',
    genderFemale: 'స్త్రీ (Female)',
    genderOther: 'ఇతరులు (Other)',
    patientPhone: 'వాట్సాప్ మొబైల్ నెంబర్',
    patientCondition: 'ఆరోగ్య సమస్య/బాధ (Brief Complaint)',
    consultDate: 'సంప్రదించాలనుకున్న తేదీ',
    consultSlot: 'సమయం (Select Time Slot)',
    slotMorning: 'ఉదయం (07:45 AM - 08:45 AM)',
    slotEvening: 'సాయంత్రం (04:30 PM - 09:00 PM)',
    slotSunday: 'ఆదివారం ఉదయం (09:00 AM - 01:00 PM)',
    slotEmergency: '🚨 అత్యవసర రాత్రి సౌకర్యం',
    generateSlip: 'ఓ.పి స్లిప్‌ని సృష్టించండి',
    downloadSlip: 'స్లిప్‌ని సేవ్ చేయండి',
    whatsappSlip: 'వాట్సాప్ ద్వారా పంపండి',
    slipReceiptHeader: 'శ్రీ తిరుమల క్లినిక్ డిజిటల్ ఓ.పి రశీదు',
    slipStatus: 'పరిస్థితి: క్లినిక్ రికార్డు నమోదు చేయబడింది',

    // Footer
    addressLabel: 'చిరునామా',
    addressText: 'డి.వి.ఎస్. కాంప్లెక్స్ (DVR కాంప్లెక్స్), ఆంజనేయస్వామి గుడి దగ్గర, కురిచేడు రోడ్, దర్శి, ప్రకాశం జిల్లా - 523247.',
    rightsText: 'సర్వ హక్కులు ప్రత్యేకించబడినవి. శ్రీ తిరుమల క్లినిక్ & నైట్ - హాస్పిటల్ © 2026.',
    legalNote: 'డాక్టర్ గారి డిగ్రీలు మరియు సేవలు పూర్తిగా దృవీకరించబడినవి.'
  }
};
