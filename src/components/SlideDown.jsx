'use client';

import React, { useState, useEffect } from 'react';
import styles from './SlideDown.module.css';

export default function SlideDown() {
  const [loaderState, setLoaderState] = useState('visible'); // 'visible' | 'fading' | 'hidden'
  const [heroActive, setHeroActive] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setLoaderState('hidden');
      setHeroActive(true);
      return;
    }

    // 1. Lock scroll during loader
    document.body.style.overflow = 'hidden';

    // 2. Loader fades out after 1.2s
    const fadeTimer = setTimeout(() => {
      setLoaderState('fading');
      setHeroActive(true);
    }, 1200);

    // 3. Loader completes fade & unlock scroll at 1.9s
    const hideTimer = setTimeout(() => {
      setLoaderState('hidden');
      document.body.style.overflow = '';
    }, 1900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* ── Fullscreen Intro Loader ── */}
      {loaderState !== 'hidden' && (
        <div
          className={`${styles.loader} ${
            loaderState === 'fading' ? styles.loaderHidden : ''
          }`}
        >
          <div className={styles.loaderContent}>
            <h1 className={styles.loaderBrand}>PHOENIX</h1>
            <p className={styles.loaderTagline}>Garment Identities & Printing</p>
            <div className={styles.loaderRule} />
          </div>
        </div>
      )}

      {/* ── Sticky Hero ── */}
      <div className={styles.heroStickyWrapper}>
        <div className={styles.heroSticky}>
          {/* Hero Image reveal with curtain clip-path */}
          <div
            className={`${styles.heroImageContainer} ${
              heroActive ? styles.heroImageContainerActive : ''
            }`}
          >
            <img
              src="/images/catalogue/hero page.png"
              alt="Phoenix Hero Catalogue"
              className={styles.heroImage}
            />
          </div>

          <div className={styles.heroOverlay} />

          {/* Hero Content */}
          <div
            className={`${styles.heroContent} ${
              heroActive ? styles.heroContentActive : ''
            }`}
          >
            <span className={styles.eyebrow}>01 / THE PHOENIX COLLECTION</span>
            <h1 className={styles.heroTitle}>
              Crafted for <em>Distinction</em>
            </h1>
            <p className={styles.heroDescription}>
              High-definition woven labels, 3D silicone prints, custom badges, and premium garment finishing engineered to elevate every identity.
            </p>
          </div>

          {/* Giant lowercase "phoenix" wordmark rising from bottom */}
          <div
            className={`${styles.giantWordmark} ${
              heroActive ? styles.giantWordmarkActive : ''
            }`}
          >
            phoenix
          </div>
        </div>
      </div>

      {/* ── Next Section (Scrolls over Sticky Hero with rounded top corners) ── */}
      <section className={styles.nextSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>02 / THE ESSENTIALS</span>
          <h2 className={styles.sectionTitle}>
            Bespoke <em>Craftsmanship</em> & Branding
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Woven Labels</h3>
            <p className={styles.cardText}>
              High-density micro-weave labels designed for tactile comfort and enduring brand clarity across garment collections.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>3D Silicone Prints</h3>
            <p className={styles.cardText}>
              Dimensional elevated heat transfers engineered with sharp edge definition and ultra-durable flexibility.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Garment Patches</h3>
            <p className={styles.cardText}>
              Flock velvet, TPU, and custom embroidered badges designed for outerwear, luxury apparel, and modern streetwear.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
