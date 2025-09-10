'use client';
import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

export default function VideoBackground() {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playerRef.current) return;

    const player = new Player(playerRef.current, {
      id: '1087917742', // Replace with your Vimeo video ID
      background: true,
      autopause: false,
      autoplay: true,
      loop: true,
      muted: false,
      responsive: true,
      dnt: true, // Do not track
    });

    player.on('error', (error: unknown) => {
      console.error('Vimeo Player Error:', error);
    });

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div
      ref={playerRef}
      className="relative w-full aspect-[16/9] min-h-[180px] sm:min-h-[220px] md:min-h-[320px] max-h-[100vh] object-cover"
    />
  );
} 