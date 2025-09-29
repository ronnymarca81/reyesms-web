// blobConfigs.ts

import type { BlobConfig } from "./AnimatedBackground";

export const blobConfigs: Record<string, BlobConfig[]> = {
  office: [
    {
      size: "w-96 h-96",
      color: "bg-blue-500",
      position: "absolute -top-40 -right-32",
      opacity: "opacity-25",
      animation: "animate-pulse",
      translate: { x: 40, y: 40 }
    },
    {
      size: "w-96 h-96",
      color: "bg-sky-400",
      position: "absolute -bottom-48 -left-36",
      opacity: "opacity-20",
      animation: "animate-bounce-slow",
      translate: { x: -30, y: 30 }
    },
    {
      size: "w-72 h-72",
      color: "bg-cyan-500",
      position: "absolute top-40 left-1/3",
      opacity: "opacity-20",
      animation: "animate-float",
      translate: { x: 20, y: -20 }
    },
    {
      size: "w-64 h-64",
      color: "bg-amber-400",
      position: "absolute bottom-20 right-1/4",
      opacity: "opacity-15",
      animation: "animate-float-delayed",
      translate: { x: -25, y: 25 }
    },
    {
      size: "w-60 h-60",
      color: "bg-gray-400",
      position: "absolute top-1/3 left-10",
      opacity: "opacity-10",
      animation: "animate-bounce-slow",
      translate: { x: 15, y: -15 }
    }
  ],

  healthcare: [
    {
      size: "w-96 h-96",
      color: "bg-emerald-400",
      position: "absolute -top-32 left-1/4",
      opacity: "opacity-25",
      animation: "animate-pulse",
      translate: { x: 30, y: 30 }
    },
    {
      size: "w-80 h-80",
      color: "bg-teal-300",
      position: "absolute bottom-20 right-1/3",
      opacity: "opacity-20",
      animation: "animate-float",
      translate: { x: -20, y: 20 }
    }
  ],

  spa: [
    {
      size: "w-96 h-96",
      color: "bg-pink-300",
      position: "absolute top-10 left-20",
      opacity: "opacity-20",
      animation: "animate-float-delayed",
      translate: { x: 25, y: -25 }
    },
    {
      size: "w-72 h-72",
      color: "bg-purple-400",
      position: "absolute -bottom-32 right-10",
      opacity: "opacity-15",
      animation: "animate-bounce-slow",
      translate: { x: -20, y: 20 }
    }
  ]
};
