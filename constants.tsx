import React from 'react';
import type { ArtPiece, ProfileData } from './types';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export const PROFILE_DATA: ProfileData = {
  name: "Aegis+",
  title: "Casual Gamer • Pixel Artist • Digital Creator",
  bio: "Exploring the intersection of technology and creativity, I craft digital experiences that tell stories and evoke emotion. My work is a journey through surreal landscapes and abstract concepts, rendered with a modern, minimalist aesthetic. Welcome to my corner of the digital universe.",
  avatarUrl: "https://picsum.photos/seed/alex-doe/200/200",
  socials: [
    { name: "GitHub", url: "https://github.com/Aegis-plus/", icon: <GithubIcon /> },
    { name: "Email", url: "mailto:hello@aegis.plus", icon: <EmailIcon /> },
    { name: "Steam", url: "#", icon: <span className="font-semibold text-lg">Steam</span> },
  ],
};

export const ART_GALLERY: ArtPiece[] = [
  {
    id: 1,
    src: "https://picsum.photos/seed/art1/600/800",
    title: "Celestial Wanderer",
    description: "A digital painting exploring the lonely journey of a comet through the cosmos, representing solitude and purpose.",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/art2/800/600",
    title: "Neon Depths",
    description: "An abstract piece capturing the vibrant energy of a futuristic cityscape reflected in the deep ocean.",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/art3/600/600",
    title: "Quantum Bloom",
    description: "A representation of growth and complexity, where geometric patterns bloom into organic forms.",
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/art4/800/600",
    title: "Forgotten Relic",
    description: "An ancient artifact from a forgotten civilization, half-swallowed by nature, symbolizing the passage of time.",
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/art5/600/800",
    title: "Echoes in the Void",
    description: "Sound waves visualized as light, traveling through an endless void. A study in sensory translation.",
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/art6/600/600",
    title: "Symbiotic City",
    description: "A metropolis where architecture and nature are not just coexisting, but are fully integrated and symbiotic.",
  },
];