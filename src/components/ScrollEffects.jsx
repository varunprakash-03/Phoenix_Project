'use client';

import { useEffect } from 'react';
import './scroll-effects.css';

export default function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    document.body.classList.add('ph-scroll-ready');

    // 1. Assign stagger delays to grid elements
    const gridContainers = document.querySelectorAll('.ph-cat-grid, .ph-prod-grid, .ph-services');
    gridContainers.forEach((grid) => {
      const items = grid.querySelectorAll('.ph-cat-tile, .ph-prod-card, .ph-serv-item');
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
      });
    });

    // 2. Setup IntersectionObserver triggered when user scrolls down
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ph-in-view');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const selectors = [
      '.ph-sec-head',
      '.ph-closing',
      '.ph-split-txt > *',
      '.ph-custom-content > *',
      '.ph-custom-card',
      '.ph-cat-tile',
      '.ph-prod-card',
      '.ph-serv-item',
      '.ph-split-pic',
      '.ph-cat-img',
      '.ph-prod-img',
    ];

    const elementsToObserve = document.querySelectorAll(selectors.join(', '));
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
