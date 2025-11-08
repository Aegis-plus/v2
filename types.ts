import type React from 'react';

export interface ArtPiece {
  id: number;
  src: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  // Fix: Use React.ReactElement to avoid relying on a global JSX namespace.
  icon: React.ReactElement;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  socials: SocialLink[];
}
