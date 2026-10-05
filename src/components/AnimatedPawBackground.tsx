import React, { useMemo } from 'react';
import pawIcon from '../assets/images/paw_bg_transparent.png';

interface FloatingPaw {
  id: number;
  left: number; // percentage across width
  size: number; // pixels (small: 26px to 44px)
  duration: number; // seconds for upward float
  delay: number; // seconds start delay
  swayDuration: number;
  initialRotation: number;
  opacity: number;
}

export const AnimatedPawBackground: React.FC = () => {
  // 24 animated floating paws across the viewport
  const floatingPaws = useMemo<FloatingPaw[]>(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: Math.round(((i * 4.16) + (Math.sin(i * 2.8) * 3)) % 98),
      size: 28 + ((i * 7) % 20), // 28px to 48px (small & cute)
      duration: 10 + ((i * 2.3) % 10), // 10s to 20s (clearly moving)
      delay: (i * 0.9) % 15,
      swayDuration: 3 + ((i * 1.1) % 4), // 3s to 7s sway
      initialRotation: -30 + ((i * 25) % 60),
      opacity: 0.22 + ((i % 4) * 0.06), // 0.22 to 0.40 (bem visível, nada apagado!)
    }));
  }, []);

  return (
    <>
      {/* Layer 1: Seamless Repeating Small Paw Watermark Gliding Continuously in Background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      >
        <div
          className="w-full h-full animate-paw-drift"
          style={{
            backgroundImage: `url(${pawIcon})`,
            backgroundSize: '60px 60px',
            backgroundRepeat: 'repeat',
            opacity: 0.12, // Visible watermark
            filter: 'contrast(150%) brightness(0.2)',
          }}
        />
      </div>

      {/* Layer 2: Floating Animated Paws that visibly drift over the page */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none"
      >
        {floatingPaws.map((paw) => (
          <div
            key={paw.id}
            className="absolute bottom-0 will-change-transform"
            style={{
              left: `${paw.left}%`,
              width: `${paw.size}px`,
              height: `${paw.size}px`,
              animation: `floatPawUp ${paw.duration}s linear infinite`,
              animationDelay: `-${paw.delay}s`,
              // CSS variables consumed by keyframes
              ['--paw-opacity' as any]: paw.opacity,
              ['--initial-rot' as any]: `${paw.initialRotation}deg`,
            }}
          >
            {/* Inner div handles gentle left-to-right sway */}
            <div
              style={{
                width: '100%',
                height: '100%',
                animation: `pawSway ${paw.swayDuration}s ease-in-out infinite`,
              }}
            >
              <img
                src={pawIcon}
                alt=""
                className="w-full h-full object-contain filter drop-shadow-2xs"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
