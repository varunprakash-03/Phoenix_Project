'use client';

import { useState, useEffect, useRef } from 'react';
import './slide-down.css';

let hasPlayedIntro = false;

export default function SlideDown() {
  const [isPlaying, setIsPlaying] = useState(!hasPlayedIntro);
  const [phase, setPhase] = useState('entering'); // 'entering' | 'idle' | 'sliding' | 'done'
  const hasDismissed = useRef(false);

  useEffect(() => {
    if (hasPlayedIntro) {
      document.body.classList.add('ph-intro-done');
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      hasPlayedIntro = true;
      setIsPlaying(false);
      document.body.classList.add('ph-intro-done');
      return;
    }

    hasPlayedIntro = true;

    // Lock scroll while overlay is up
    document.body.style.overflow = 'hidden';
    document.body.classList.add('ph-intro-playing');

    // After brand fades in, move to idle state (waiting for user input)
    const idleTimer = setTimeout(() => {
      setPhase('idle');
    }, 1000);

    // --- Dismiss handler: called when user scrolls / swipes / clicks ---
    const dismiss = () => {
      if (hasDismissed.current) return;
      hasDismissed.current = true;

      setPhase('sliding');
      document.body.classList.add('ph-intro-animate');

      // Unlock scroll after the overlay slides off screen (600ms slide)
      setTimeout(() => {
        document.body.style.overflow = '';
        document.body.classList.remove('ph-intro-playing');
        document.body.classList.add('ph-intro-done');
        setIsPlaying(false);
        setPhase('done');
      }, 700);
    };

    // Listen for any scroll / wheel / touch / key intent
    const onWheel = (e) => { if (e.deltaY > 0) dismiss(); };
    const onTouchStart = (e) => { window._phTouchY = e.touches[0].clientY; };
    const onTouchMove = (e) => {
      if (window._phTouchY !== undefined) {
        const dy = window._phTouchY - e.touches[0].clientY;
        if (dy > 10) dismiss();
      }
    };
    const onKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) dismiss();
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isPlaying) return null;

  return (
    <div
      className={`ph-slide-down-overlay ph-overlay-${phase}`}
      aria-hidden="true"
      onClick={() => {
        // Also allow click/tap to dismiss (mobile-friendly)
        if (phase === 'idle') {
          const event = new WheelEvent('wheel', { deltaY: 1 });
          window.dispatchEvent(event);
        }
      }}
    >
      <div className="ph-intro-content">
        <h1 className="ph-intro-brand">PHOENIX</h1>
        <p className="ph-intro-tagline">Garment Identities</p>
      </div>

      {/* Scroll hint — only shows once brand has fully loaded */}
      {phase === 'idle' && (
        <div className="ph-scroll-hint" aria-hidden="true">
          <span className="ph-scroll-hint-line" />
          <span className="ph-scroll-hint-label">scroll</span>
        </div>
      )}
    </div>
  );
}
