/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'te';

export interface DoctorDetails {
  name: string;
  title: string;
  subTitle: string;
  degrees: string[];
  roles: string[];
  description: string;
}

export interface MedicalService {
  id: string;
  title: string;
  teluguTitle: string;
  description: string;
  teluguDescription: string;
  category: 'general' | 'emergency' | 'chronic' | 'seasonal';
  iconName: string;
}

export interface AppointmentInquiry {
  id: string;
  patientName: string;
  age: string;
  gender: string;
  phone: string;
  complaint: string;
  date: string;
  timeSlot: string;
  createdAt: string;
  status: 'Pending' | 'Confirmed';
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
}
