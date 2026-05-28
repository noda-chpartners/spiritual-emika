import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    // ── Hero（ページ読み込み時） ──────────────────────────
    gsap.from('.hero-picture img', {
      duration: 1.6,
      autoAlpha: 0,
      scale: 1.06,
      ease: 'power2.out',
    });

    // ── Header ──────────────────────────────────────────
    gsap.from('.header', {
      duration: 0.9,
      y: -24,
      autoAlpha: 0,
      ease: 'power2.out',
      delay: 0.15,
    });

    // ── セクション見出し ────────────────────────────────
    gsap.utils.toArray<HTMLElement>('.section > .inner > h2').forEach((title) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 88%',
        },
        duration: 0.85,
        y: 28,
        autoAlpha: 0,
        ease: 'power2.out',
      });
    });

    // ── About（.about-title は共通 h2 アニメーションで処理） ──
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
      gsap.from('.profile-card-img', {
        scrollTrigger: {
          trigger: '.profile-card',
          start: 'top 82%',
        },
        duration: 1,
        x: -36,
        autoAlpha: 0,
        ease: 'power2.out',
      });

      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: '.profile-card-body',
          start: 'top 85%',
        },
        duration: 0.7,
        y: 20,
        autoAlpha: 0,
        stagger: 0.08,
        ease: 'power2.out',
      });
    }

    // ── Voice（お客様の声） ──────────────────────────────
    const voiceSection = document.querySelector('.voice');
    if (voiceSection) {
      gsap.from('.voice-lead', {
        scrollTrigger: {
          trigger: voiceSection,
          start: 'top 85%',
        },
        duration: 0.8,
        y: 24,
        autoAlpha: 0,
        ease: 'power2.out',
      });

      gsap.from('.voice-carousel', {
        scrollTrigger: {
          trigger: voiceSection,
          start: 'top 80%',
        },
        duration: 0.9,
        y: 36,
        autoAlpha: 0,
        ease: 'power2.out',
        delay: 0.1,
      });
    }

    // ── Menu ────────────────────────────────────────────
    const menuSection = document.querySelector('.menu');
    if (menuSection) {
      gsap.from('.menu-card', {
        scrollTrigger: {
          trigger: menuSection,
          start: 'top 82%',
        },
        duration: 1,
        y: 40,
        autoAlpha: 0,
        ease: 'power2.out',
      });

      gsap.from('.menu-block', {
        scrollTrigger: {
          trigger: '.menu-card',
          start: 'top 78%',
        },
        duration: 0.9,
        y: 32,
        autoAlpha: 0,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.15,
      });

      gsap.from('.menu-group', {
        scrollTrigger: {
          trigger: '.menu-groups',
          start: 'top 85%',
        },
        duration: 0.8,
        y: 24,
        autoAlpha: 0,
        stagger: 0.15,
        ease: 'power2.out',
      });

      gsap.from('.price-row', {
        scrollTrigger: {
          trigger: '.menu-card',
          start: 'top 75%',
        },
        duration: 0.55,
        x: -12,
        autoAlpha: 0,
        stagger: 0.05,
        ease: 'power2.out',
        delay: 0.35,
      });

      gsap.from('.menu-features li', {
        scrollTrigger: {
          trigger: '.menu-features',
          start: 'top 90%',
        },
        duration: 0.5,
        y: 12,
        autoAlpha: 0,
        stagger: 0.07,
        ease: 'power2.out',
      });
    }

    // ── Info ────────────────────────────────────────────
    gsap.from('.info-row', {
      scrollTrigger: {
        trigger: '.info-list',
        start: 'top 85%',
      },
      duration: 0.65,
      y: 20,
      autoAlpha: 0,
      stagger: 0.08,
      ease: 'power2.out',
    });

    // ── Contact ─────────────────────────────────────────
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
      gsap.from('.contact-lead', {
        scrollTrigger: {
          trigger: contactSection,
          start: 'top 85%',
        },
        duration: 0.8,
        y: 24,
        autoAlpha: 0,
        ease: 'power2.out',
      });

      gsap.from('.contact-card', {
        scrollTrigger: {
          trigger: '.contact-grid',
          start: 'top 88%',
        },
        duration: 0.75,
        y: 32,
        autoAlpha: 0,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }

    // ── Footer ──────────────────────────────────────────
    gsap.from('.footer-top > *', {
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 92%',
      },
      duration: 0.7,
      y: 20,
      autoAlpha: 0,
      stagger: 0.1,
      ease: 'power2.out',
    });

    window.addEventListener('load', () => ScrollTrigger.refresh());

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
