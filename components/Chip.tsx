import React from 'react';

interface ChipProps {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

// A toggle button used for quick choices in the feedback forms.
export const Chip: React.FC<ChipProps> = ({ on, onClick, children }) => (
  <button
    type="button"
    aria-pressed={on}
    onClick={onClick}
    className={`min-h-[36px] px-3 py-1.5 rounded-full border text-sm text-left transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
      on ? 'bg-emerald-900 border-emerald-900 text-stone-50' : 'bg-white border-stone-300 text-stone-800 hover:border-emerald-600'
    }`}
  >
    {children}
  </button>
);
