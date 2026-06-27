/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function Logo({ className = '', size = 120, showText = true }: LogoProps) {
  const uniqueIdTop = "logo-text-path-top";
  const uniqueIdBottom = "logo-text-path-bottom";

  return (
    <div className={`flex flex-col items-center justify-center font-sans ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md select-none transition-transform duration-300 hover:rotate-3"
      >
        {/* Background Circle */}
        <circle cx="200" cy="200" r="195" fill="white" />

        {/* Outer Red Border Circle */}
        <circle cx="200" cy="200" r="185" stroke="#be123c" strokeWidth="6" />
        {/* Inner Red Border Circle */}
        <circle cx="200" cy="200" r="172" stroke="#be123c" strokeWidth="2.5" />
        {/* Inner-most Border Circle Enclosing Caduceus & Leaves */}
        <circle cx="200" cy="200" r="125" stroke="#be123c" strokeWidth="1.5" fill="none" />

        {/* Paths for text curvature */}
        <defs>
          {/* Top text path - arc from left to right */}
          <path
            id={uniqueIdTop}
            d="M 64,200 A 136,136 0 0,1 336,200"
            fill="none"
          />
          {/* Bottom text path - arc from left to right (upright text) */}
          <path
            id={uniqueIdBottom}
            d="M 36,200 A 164,164 0 0,0 364,200"
            fill="none"
          />
          
          {/* Subtle gradient for leaves */}
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
        </defs>

        {/* Upper Curved Text: SRI THIRUMALA CLINIC */}
        <text className="font-bold fill-[#1e3a8a]" fontSize="28" letterSpacing="5" fontFamily="serif">
          <textPath href={`#${uniqueIdTop}`} startOffset="50%" textAnchor="middle">
            SRI THIRUMALA CLINIC
          </textPath>
        </text>

        {/* Lower Curved Text: DARSI */}
        <text className="font-bold fill-[#1e3a8a]" fontSize="30" letterSpacing="8" fontFamily="serif">
          <textPath href={`#${uniqueIdBottom}`} startOffset="50%" textAnchor="middle">
            DARSI
          </textPath>
        </text>

        {/* Stars (Three solid red stars under upper text) */}
        <g fill="#e11d48">
          {/* Left Star */}
          <polygon points="160,95 163,103 172,103 165,108 167,117 160,111 153,117 155,108 148,103 157,103" />
          {/* Center Star (slightly larger) */}
          <polygon points="200,85 204,95 214,95 206,101 209,111 200,104 191,111 194,101 186,95 196,95" />
          {/* Right Star */}
          <polygon points="240,95 243,103 252,103 245,108 247,117 240,111 233,117 235,108 228,103 237,103" />
        </g>

        {/* Caduceus Staff (Double hollow lines or filled column) */}
        <g stroke="#be123c" strokeWidth="5" strokeLinecap="round">
          {/* Main rod/staff */}
          <line x1="200" y1="140" x2="200" y2="310" strokeWidth="8" />
          {/* Staff bottom tip */}
          <circle cx="200" cy="310" r="6" fill="#be123c" />
          {/* Staff top globe */}
          <circle cx="200" cy="120" r="14" fill="#be123c" />
        </g>

        {/* Wings of the Caduceus */}
        <path
          d="M 200,150 
             C 170,120 120,135 110,155 
             C 105,165 112,175 125,172 
             C 145,168 175,175 200,195 
             C 225,175 255,168 275,172 
             C 288,175 295,165 290,155 
             C 280,135 230,120 200,150 Z"
          fill="#be123c"
          stroke="#9f1239"
          strokeWidth="2"
        />
        {/* Additional Wing details */}
        <path
          d="M 200,155 
             C 180,140 145,148 135,163 
             C 155,160 180,165 200,182 
             C 220,165 245,160 265,163 
             C 255,148 220,140 200,155 Z"
          fill="#fda4af"
          opacity="0.6"
        />

        {/* Snakes (Coiled around the staff) */}
        <g fill="none" stroke="#be123c" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
          {/* Snake 1 (Starting left, winding, head right looking inward) */}
          <path d="M 165,160 C 180,185 220,180 220,205 C 220,230 180,230 180,255 C 180,280 220,275 200,300" />
          {/* Snake 2 (Starting right, winding opposite, head left looking inward) */}
          <path d="M 235,160 C 220,185 180,180 180,205 C 180,230 220,230 220,255 C 220,280 180,275 200,300" />
        </g>
        {/* Snake Heads and Eyes */}
        <g fill="#be123c">
          <circle cx="166" cy="158" r="8" />
          <circle cx="234" cy="158" r="8" />
          {/* Little tongues */}
          <path d="M 162,154 Q 155,152 153,158" stroke="#be123c" strokeWidth="2.5" fill="none" />
          <path d="M 238,154 Q 245,152 247,158" stroke="#be123c" strokeWidth="2.5" fill="none" />
        </g>

        {/* Leafy Stems (Left & Right green branches) */}
        <g stroke="url(#leafGrad)" strokeWidth="3" strokeLinecap="round" fill="url(#leafGrad)">
          {/* Left Branch stem */}
          <path d="M 180,280 Q 130,260 135,210" fill="none" strokeWidth="4" />
          {/* Left branch leaves */}
          <path d="M 135,210 C 125,205 125,195 138,200 C 145,204 140,210 135,210 Z" />
          <path d="M 148,225 C 135,222 133,212 145,217 C 153,220 152,225 148,225 Z" />
          <path d="M 158,245 C 145,243 144,233 155,238 C 163,241 162,246 158,245 Z" />
          <path d="M 169,265 C 158,266 156,256 167,259 C 174,261 173,266 169,265 Z" />
          <path d="M 178,280 C 168,285 168,275 177,276 C 183,277 182,281 178,280 Z" />

          {/* Right Branch stem */}
          <path d="M 220,280 Q 270,260 265,210" fill="none" strokeWidth="4" />
          {/* Right branch leaves */}
          <path d="M 265,210 C 275,205 275,195 262,200 C 255,204 260,210 265,210 Z" />
          <path d="M 252,225 C 265,222 267,212 255,217 C 247,220 248,225 252,225 Z" />
          <path d="M 242,245 C 255,243 256,233 245,238 C 237,241 238,246 242,245 Z" />
          <path d="M 231,265 C 242,266 244,256 233,259 C 226,261 227,266 231,265 Z" />
          <path d="M 222,280 C 232,285 232,275 223,276 C 217,277 218,281 222,280 Z" />
        </g>
      </svg>
      {showText && (
        <div className="text-center mt-2">
          <span className="text-base font-black tracking-wider text-rose-700 uppercase block font-serif">
            Sri Thirumala Clinic
          </span>
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] text-[#1e3a8a]/90 block font-sans">
            NIGHT-HOSPITAL • DARSI
          </span>
        </div>
      )}
    </div>
  );
}
