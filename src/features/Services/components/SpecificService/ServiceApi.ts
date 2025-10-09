import type { ThemeConfig } from './types';

export const containerTheme: Record<'light' | 'dark' | 'gradient' | 'cta', ThemeConfig> = {
  light: {
    container: 'bg-gray-50',
    text: 'text-gray-900',
    card: 'bg-white shadow-sm border border-gray-200',
    border: 'border-gray-200',
    hover: 'hover:bg-gray-100',
    accent: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    subtext: 'text-gray-600',
  },
  dark: {
    container: 'bg-neutral-950',
    text: 'text-gray-100',
    card: 'bg-neutral-900 border border-neutral-800 shadow-md',
    border: 'border-neutral-800',
    hover: 'hover:bg-neutral-800',
    accent: 'bg-gradient-to-br from-indigo-400 to-emerald-400',
    subtext: 'text-gray-400',
  },
  gradient: {
    container: 'bg-gradient-to-br from-sky-50 via-indigo-50 to-rose-50',
    text: 'text-gray-900',
    card: 'bg-white/80 border border-gray-200 backdrop-blur-md shadow-md',
    border: 'border-gray-200',
    hover: 'hover:bg-white',
    accent: 'bg-gradient-to-br from-pink-500 via-violet-500 to-indigo-500',
    subtext: 'text-gray-700',
  },
  cta: {
    container: 'bg-gradient-to-br from-blue-950 via-sky-900 to-gray-900',
    text: 'text-white',
    card: 'bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl',
    border: 'border-white/30',
    hover: 'hover:bg-white/20',
    accent: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    subtext: 'text-white/80',
  },
};
