import React from 'react';

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lotus Petals - center */}
      <path
        d="M250 20 C250 20, 200 130, 250 210 C300 130, 250 20, 250 20 Z"
        fill="#FF7F00"
      />
      {/* Lotus Petals - middle left/right */}
      <path
        d="M250 210 C180 190, 130 110, 130 50 C180 90, 220 150, 250 210 Z"
        fill="#FF7F00"
      />
      <path
        d="M250 210 C320 190, 370 110, 370 50 C320 90, 280 150, 250 210 Z"
        fill="#FF7F00"
      />
      {/* Lotus Petals - outer left/right */}
      <path
        d="M250 210 C150 210, 80 160, 50 110 C110 160, 180 190, 250 210 Z"
        fill="#FF7F00"
      />
      <path
        d="M250 210 C350 210, 420 160, 450 110 C390 160, 320 190, 250 210 Z"
        fill="#FF7F00"
      />
      {/* Lotus Petals - bottom outer left/right */}
      <path
        d="M250 210 C120 225, 40 210, 10 180 C80 220, 160 215, 250 210 Z"
        fill="#FF7F00"
      />
      <path
        d="M250 210 C380 225, 460 210, 490 180 C420 220, 340 215, 250 210 Z"
        fill="#FF7F00"
      />

      {/* Silhouettes standing inside the lotus base */}
      <g fill="#000000">
        {/* Child 1 */}
        <circle cx="160" cy="180" r="5" />
        <path d="M157 210 L158 187 L162 187 L163 210 Z" />

        {/* Person 1 (left) */}
        <circle cx="180" cy="170" r="8" />
        <path d="M170 210 L175 180 L185 180 L190 210 Z" />
        
        {/* Person 2 (middle left) */}
        <circle cx="215" cy="155" r="10" />
        <path d="M200 210 L210 170 L220 170 L230 210 Z" />

        {/* Child 2 */}
        <circle cx="240" cy="175" r="6" />
        <path d="M236 210 L238 183 L242 183 L244 210 Z" />
        
        {/* Wheelchair person (center-right) */}
        <circle cx="265" cy="160" r="9" />
        <path d="M260 210 L260 175 L270 175 L270 190 L280 190" stroke="black" strokeWidth="4" />
        <circle cx="255" cy="195" r="12" fill="none" stroke="black" strokeWidth="3" />
        <circle cx="255" cy="195" r="8" fill="none" stroke="black" strokeWidth="1" />
        <line x1="255" y1="183" x2="255" y2="207" stroke="black" strokeWidth="1"/>
        <line x1="243" y1="195" x2="267" y2="195" stroke="black" strokeWidth="1"/>

        {/* Child 3 */}
        <circle cx="295" cy="180" r="5" />
        <path d="M292 210 L293 187 L297 187 L298 210 Z" />

        {/* Person 3 (middle right) */}
        <circle cx="315" cy="150" r="11" />
        <path d="M305 210 L310 165 L320 165 L325 210 Z" />

        {/* Person 4 (right) */}
        <circle cx="345" cy="165" r="9" />
        <path d="M335 210 L340 178 L350 178 L355 210 Z" />

        {/* Child 4 */}
        <circle cx="370" cy="175" r="6" />
        <path d="M366 210 L368 183 L372 183 L374 210 Z" />
      </g>

      <text x="250" y="255" fontFamily="sans-serif" fontSize="36" fontWeight="bold" textAnchor="middle" letterSpacing="1">
        <tspan fill="#FF7F00" stroke="#FFFFFF" strokeWidth="1">OBOMOCARE</tspan>{' '}
        <tspan fill="#FFFFFF" stroke="#000000" strokeWidth="0.5" fontStyle="italic">CBO</tspan>
      </text>
      
      <text x="250" y="280" fontFamily="sans-serif" fontSize="14" fontStyle="italic" textAnchor="middle" fill="#FFFFFF">
        Supporting Independence with Dignity and Heart
      </text>
    </svg>
  );
}
