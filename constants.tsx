import { Map, Zap, Eye, Navigation, CloudLightning, BarChart3 } from 'lucide-react';
import React from 'react';
import { Feature, KpDataPoint } from './types';

export const APP_STORE_LINK = "#";

export const FEATURES: Feature[] = [
  {
    title: "Real-Time Precision",
    description: "Get accurate, city-level aurora visibility forecasts updated in real-time.",
    icon: <Zap className="w-6 h-6 text-green-400" />
  },
  {
    title: "Geo Conditions",
    description: "Monitor the NOAA G-Scale and KP Index forecasts up to 3 days in advance.",
    icon: <BarChart3 className="w-6 h-6 text-orange-400" />
  },
  {
    title: "Interactive Maps",
    description: "Explore light pollution overlays and live aurora probability heatmaps across Canada.",
    icon: <Map className="w-6 h-6 text-blue-400" />
  },
  // {
  //   title: "Viewing Conditions",
  //   description: "Detailed weather data including cloud cover and darkness levels for optimal viewing.",
  //   icon: <Eye className="w-6 h-6 text-purple-400" />
  // }
];

// Mock data for the KP Index Chart to replicate the screenshot visually
export const KP_DATA: KpDataPoint[] = [
  { time: '18:00', kp: 2 },
  { time: '21:00', kp: 3 },
  { time: '00:00', kp: 4.5 },
  { time: '03:00', kp: 3 },
  { time: '06:00', kp: 2 },
  { time: '09:00', kp: 1 },
  { time: '12:00', kp: 1.5 },
  { time: '15:00', kp: 2 },
];
