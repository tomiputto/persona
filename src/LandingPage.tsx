import React, { useState, useEffect, useRef } from 'react';
import phoneInHand from '../phone-in-hand.png';
import avatarImg from '../avatar.png';
import bottomBg from '../Bottom.png';
import bgImg from '../BG.png';
import personaVideo from '../PERSONA_INAPP_S_16x9.mp4';
import videoPoster from '../video-poster.jpg';
import logoImg from '../logo.png';
import './LandingPage.css';
import { CompanyPage, SupportPage, FaqPage } from './InfoPage';

// ============================================================
// TRANSLATIONS
// ============================================================

const translations = {
  en: {
    nav: ['Home', 'Company', 'Support', 'FAQ'],
    auth: { login: 'Login', signUp: 'Sign up' },
    hero: {
      headline: 'You are being listened',
      body: 'Persona gives you an unique connection and interaction with your favourite person, idol or mentor.',
      signUp: 'Sign up',
      newsletter: 'Subscribe newsletter',
    },
    persona: {
      heading: 'This is Persona',
      description: 'Persona lets you connect with your favourite people like never before. You can chat with them whenever you want, wherever you are. Persona is available 24/7 in your own language.',
    },
    how: {
      heading: 'How Persona works',
      cards: [
        { title: '1. Choose Persona', body: 'Select from a diverse collection of personas that match your interests and goals.' },
        { title: '2. Start the conversation', body: 'Ask questions, share a moment, hear their voice. They respond in real time, just for you.' },
        { title: '3. Feel the connection', body: 'Enjoy your personal interactions that feel real — and are 100% private.' },
      ],
      footerParts: [
        'Do you have questions about Persona? Check out our ',
        ' section or get in touch. If you\'re interested in investing in Persona Entertainment, please visit our ',
        ' section.',
      ],
      footerFaqLabel: 'FAQ',
      footerInvestorsLabel: 'Investors',
    },
    newsletter: {
      heading: 'Newsletter',
      desc: "Sign up for our newsletter now! We don't send many emails. Just the ones worth opening.",
      emailLabel: 'Email address',
      emailPlaceholder: 'Your email address',
      langLabel: 'Language',
      langValue: 'English',
      phoneLabel: 'Phone',
      phonePlaceholder: '40 123 4567',
      signUp: 'Sign up',
    },
    social: {
      heading: 'Social Media',
      desc: 'Follow Persona on social media and be the first to know what\'s new.',
      followBtn: 'Follow',
      channels: [
        { name: 'Instagram', desc: 'Behind-the-scenes moments and talent highlights from the world of Persona.' },
        { name: 'Threads', desc: 'Join the conversation and stay up to date with the latest from Persona.' },
        { name: 'TikTok', desc: 'Short clips, big personalities — watch our talents come to life.' },
        { name: 'Facebook', desc: 'Connect with the Persona community. News, events and updates.' },
        { name: 'YouTube', desc: 'Full episodes, interviews and exclusive content from our talents.' },
        { name: 'LinkedIn', desc: 'Follow our journey as a company — news, careers and partnerships.' },
      ],
    },
    footer: {
      links: ['Home', 'Company', 'Support', 'FAQ'],
      legalLinks: ['Privacy Policy', 'Cookie Policy', 'Terms of Service', 'iOS EULA Addendum'],
      copyright: '© 2026 — Copyright Persona Entertainment Oy',
    },
  },
  fi: {
    nav: ['Etusivu', 'Yritys', 'Tuki', 'UKK'],
    auth: { login: 'Kirjaudu', signUp: 'Rekisteröidy' },
    hero: {
      headline: 'Sinua kuunnellaan',
      body: 'Persona tarjoaa sinulle ainutlaatuisen yhteyden ja vuorovaikutuksen suosikkihenkilösi, idolisi tai mentorisi kanssa.',
      signUp: 'Rekisteröidy',
      newsletter: 'Tilaa uutiskirje',
    },

    persona: {
      heading: 'Tämä on Persona',
      description: 'Persona antaa sinulle mahdollisuuden olla yhteydessä suosikkihenkilöihisi kuten koskaan ennen. Voit keskustella heidän kanssaan milloin tahansa, missä tahansa. Persona on käytettävissä 24/7 omalla kielelläsi.',
    },
    how: {
      heading: 'Miten Persona toimii',
      cards: [
        { title: '1. Valitse Persona', body: 'Valitse monipuolisesta valikoimasta persona, joka vastaa kiinnostuksiasi ja tavoitteitasi.' },
        { title: '2. Aloita keskustelu', body: 'Kysy kysymyksiä, jaa hetki, kuule heidän äänensä. He vastaavat reaaliajassa, juuri sinulle.' },
        { title: '3. Koe yhteys', body: 'Nauti henkilökohtaisista vuorovaikutuksista, jotka tuntuvat aidoilta — ja ovat 100% yksityisiä.' },
      ],
      footerParts: [
        'Onko sinulla kysyttävää Personasta? Tutustu ',
        '-osioomme tai ota yhteyttä. Jos olet kiinnostunut sijoittamaan Persona Entertainmentiin, vieraile ',
        '-osiossa.',
      ],
      footerFaqLabel: 'UKK',
      footerInvestorsLabel: 'Sijoittajat',
    },
    newsletter: {
      heading: 'Uutiskirje',
      desc: 'Tilaa uutiskirjeemme nyt! Emme lähetä paljoa sähköpostia. Vain ne, jotka kannattaa avata.',
      emailLabel: 'Sähköpostiosoite',
      emailPlaceholder: 'Sähköpostiosoitteesi',
      langLabel: 'Kieli',
      langValue: 'Suomi',
      phoneLabel: 'Puhelinnumero',
      phonePlaceholder: '40 123 4567',
      signUp: 'Tilaa',
    },
    social: {
      heading: 'Sosiaalinen media',
      desc: 'Seuraa Personaa sosiaalisessa mediassa ja ole ensimmäinen tietämässä uusimmista uutisista.',
      followBtn: 'Seuraa',
      channels: [
        { name: 'Instagram', desc: 'Kulissien takaa ja talenttinostoja Personan maailmasta.' },
        { name: 'Threads', desc: 'Liity keskusteluun ja pysy ajan tasalla Personan uutisista.' },
        { name: 'TikTok', desc: 'Lyhyitä klippejä, suuria persoonia — katso talenttimme henkiin.' },
        { name: 'Facebook', desc: 'Liity Persona-yhteisöön. Uutisia, tapahtumia ja päivityksiä.' },
        { name: 'YouTube', desc: 'Täyspitkiä jaksoja, haastatteluja ja eksklusiivista sisältöä talenteiltamme.' },
        { name: 'LinkedIn', desc: 'Seuraa yritystarinaamme — uutiset, avoimet paikat ja kumppanuudet.' },
      ],
    },
    footer: {
      links: ['Etusivu', 'Yritys', 'Tuki', 'UKK'],
      legalLinks: ['Tietosuojakäytäntö', 'Evästekäytäntö', 'Käyttöehdot', 'iOS EULA Addendum'],
      copyright: '© 2026 — Copyright Persona Entertainment Oy',
    },
  },
};

type Lang = 'en' | 'fi';
type T = typeof translations.en;

// ============================================================
// DATA
// ============================================================


const FOOTER_LINKS_HREFS = ['#', '#company', '#support', '#faq'];
const FOOTER_LEGAL_HREFS = ['#', '#', '#', '#'];

const SOCIAL_CHANNELS = [
  { Icon: InstagramIcon, color: 'rgba(195, 42, 163, 0.18)', border: 'rgba(195, 42, 163, 0.45)' },
  { Icon: ThreadsIcon,   color: 'rgba(255, 255, 255, 0.06)', border: 'rgba(255, 255, 255, 0.22)' },
  { Icon: TikTokIcon,    color: 'rgba(255, 0, 80, 0.18)',   border: 'rgba(255, 0, 80, 0.45)' },
  { Icon: FacebookIcon,  color: 'rgba(24, 119, 242, 0.18)', border: 'rgba(24, 119, 242, 0.45)' },
  { Icon: YouTubeIcon,   color: 'rgba(255, 0, 0, 0.18)',    border: 'rgba(255, 0, 0, 0.45)' },
  { Icon: LinkedInIcon,  color: 'rgba(10, 102, 194, 0.18)', border: 'rgba(10, 102, 194, 0.45)' },
];

// ============================================================
// ICONS
// ============================================================

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18l6-6-6-6" stroke="#FFDDB2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


function ChevronDownIcon({ color = 'white' }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FinnishFlag() {
  return (
    <svg width="22" height="16" viewBox="0 0 28 20" fill="none" aria-label="Finnish flag">
      <rect width="28" height="20" rx="2" fill="white" />
      <rect y="7.5" width="28" height="5" fill="#003580" />
      <rect x="7.5" width="5" height="20" fill="#003580" />
    </svg>
  );
}

function UKFlag() {
  return (
    <svg width="22" height="16" viewBox="0 0 60 40" fill="none" aria-label="UK flag">
      <rect width="60" height="40" rx="2" fill="#012169"/>
      <path d="M0 0L60 40M60 0L0 40" stroke="white" strokeWidth="8"/>
      <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30 0V40M0 20H60" stroke="white" strokeWidth="12"/>
      <path d="M30 0V40M0 20H60" stroke="#C8102E" strokeWidth="7"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M12 2C9 2 7 4.5 7 7.5v1c-.8.1-1.5.6-1.5 1.5 0 .7.5 1.2 1.2 1.4-.2 1.2-1.5 2.1-1.5 2.1s.8.4 3 .4c.4.9 1.3 1.5 3.3 1.5 2 0 2.9-.6 3.3-1.5 2.2 0 3-.4 3-.4s-1.3-.9-1.5-2.1c.7-.2 1.2-.7 1.2-1.4 0-.9-.7-1.4-1.5-1.5v-1C17 4.5 15 2 12 2z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.18 8.18 0 004.79 1.53V6.88a4.85 4.85 0 01-1.02-.19z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="22" viewBox="0 0 814 1000" fill="white" aria-hidden="true">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-47.4-148.2-108.4C87 413.4 55.6 251.5 55.6 198.6c0-62.6 19.9-120.8 57.8-164.5C151.7 8.3 207.7-18 263.8-18c65.2 0 101 42.6 162.9 42.6 60.1 0 98.5-42.6 166.6-42.6 53.9 0 105.7 23.1 143.4 58.8l-2.6-2.2zM563.9-100c-23.6 22.2-42.9 54.4-42.9 86.6 0 4.8.6 9.5 1.3 13.4 2.6.6 6.5.6 10.3.6 23.6 0 50.7-13.4 69.2-34.9 20.6-23.1 34.8-56.5 34.8-89.7 0-4.5-.6-9-1.3-13.8-3.2-.6-6.5-.6-9.7-.6-22.4 0-50.1 13.4-61.7 38.4z" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 192 192" fill="white" aria-hidden="true">
      <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4542 134.508 73.8341 139.431C80.9596 143.607 90.1748 145.656 99.7309 145.131C112.285 144.432 122.041 139.193 128.554 129.618C133.557 122.28 136.669 112.661 137.883 100.428C144.079 104.008 148.718 109.653 151.167 117.1C155.149 129.07 155.484 149.289 142.468 162.198C131.111 173.48 117.284 178.378 96.5604 178.522C73.5801 178.35 56.3294 171.059 45.3199 156.847C35.0665 143.582 29.7332 124.427 29.5321 100C29.7332 75.5731 35.0665 56.4182 45.3199 43.1532C56.3294 28.9411 73.5801 21.6497 96.5604 21.4779C119.687 21.6494 137.218 28.9758 148.479 43.2549C154.02 50.2868 158.044 59.2884 160.455 69.8468L176.938 65.8404C173.989 53.2093 169.09 42.1478 162.276 33.0618C148.668 15.0851 128.559 5.76076 96.6321 5.5H96.4679C64.6104 5.76076 44.3744 15.1108 30.5425 33.0729C18.2746 48.9534 11.9793 71.1656 11.7686 100C11.9793 128.834 18.2746 151.046 30.5425 166.927C44.3744 184.889 64.6104 194.239 96.4679 194.5H96.6321C125.219 194.261 143.397 186.431 157.161 172.781C173.209 156.822 172.765 136.655 167.786 121.534C163.979 110.006 156.12 100.496 141.537 88.9883ZM98.4405 128.084C88.0005 128.663 77.0586 124.367 76.5482 114.922C76.1728 107.922 81.3258 100.274 99.1822 99.2601C101.087 99.1509 102.958 99.0979 104.799 99.0979C111.549 99.0979 117.905 99.739 123.78 100.979C121.881 124.176 110.981 127.395 98.4405 128.084Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M22.54 6.42a2.83 2.83 0 00-2-1.99C18.88 4 12 4 12 4s-6.88 0-8.55.43a2.83 2.83 0 00-2 2A29.94 29.94 0 001 12a29.94 29.94 0 00.46 5.58 2.83 2.83 0 002 1.99C5.12 20 12 20 12 20s6.88 0 8.55-.43a2.83 2.83 0 002-1.99A29.94 29.94 0 0023 12a29.94 29.94 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 512 512" fill="none" aria-hidden="true">
      <path d="M48 18L298 256 48 494V18z" fill="#EA4335" />
      <path d="M48 18l250 238 64-60L98 18H48z" fill="#FBBC04" />
      <path d="M48 494l250-238 64 60L98 494H48z" fill="#34A853" />
      <path d="M362 196l-64 60 64 60 74-42a30 30 0 000-36l-74-42z" fill="#4285F4" />
    </svg>
  );
}

// ============================================================
// USER ACCOUNT PANEL
// ============================================================

// ============================================================
// NAVBAR
// ============================================================

function Navbar({ lang, setLang, t, page, setPage }: { lang: Lang; setLang: (l: Lang) => void; t: T; page: string; setPage: (p: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner container">
        <a href="#" className="navbar-logo" aria-label="Persona home" onClick={() => setPage('home')}>
          <img src={logoImg} alt="Persona" className="logo-img" />
        </a>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen && <div className="drawer-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />}

        <div className={`nav-links${menuOpen ? ' open' : ''}`} role="menubar">
          <div className="drawer-header">
            <img src={logoImg} alt="Persona" className="logo-img" />
            <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          {t.nav.map((label, i) => {
            const pageId = ['home', 'company', 'support', 'faq'][i];
            const isActive = page === pageId;
            return (
              <a
                key={label}
                href={pageId === 'home' ? '#' : `#${pageId}`}
                className={`nav-item${isActive ? ' active' : ''}`}
                role="menuitem"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(pageId);
                  setMenuOpen(false);
                }}
              >
                {label}
              </a>
            );
          })}
          <button
            className="lang-toggle lang-toggle--drawer"
            onClick={() => { setLang(lang === 'en' ? 'fi' : 'en'); setMenuOpen(false); }}
            aria-label="Toggle language"
          >
            {lang === 'en' ? <FinnishFlag /> : <UKFlag />}
            {lang === 'en' ? 'FI' : 'EN'}
          </button>
          <div className="drawer-auth">
            <button className="btn-outline btn-nav-login drawer-auth-btn">{t.auth.login}</button>
            <button className="btn-primary btn-nav-signup drawer-auth-btn"><HeartIcon />{t.auth.signUp}</button>
          </div>
        </div>

        <div className="nav-actions">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === 'en' ? 'fi' : 'en')}
            aria-label="Toggle language"
          >
            {lang === 'en' ? <FinnishFlag /> : <UKFlag />}
            {lang === 'en' ? 'FI' : 'EN'}
          </button>
          <button className="btn-outline btn-nav-login">{t.auth.login}</button>
          <button className="btn-primary btn-nav-signup"><HeartIcon />{t.auth.signUp}</button>
        </div>
      </div>
    </nav>
    </>
  );
}

// ============================================================
// BLOB ANIMATION
// ============================================================

function BlobCanvas({ cxRatio = 0.5, className = '' }: { cxRatio?: number; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasBlurRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const sharp = canvasRef.current;
    const blurry = canvasBlurRef.current;
    if (!sharp || !blurry) return;
    const ctx = sharp.getContext('2d')!;
    const ctx2 = blurry.getContext('2d')!;
    let W = 0, H = 0, t = 0, last = 0;
    const FPS = 40, INTERVAL = 1000 / FPS;
    const STEPS = 100;

    function resize() {
      const rect = sharp!.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio, 2);
      W = sharp!.width = blurry!.width = rect.width * dpr;
      H = sharp!.height = blurry!.height = rect.height * dpr;
    }

    function noise(x: number, y: number, nt: number) {
      return (
        Math.sin(x * 2.1 + nt * 0.7) * Math.cos(y * 1.8 - nt * 0.5) +
        Math.sin(x * 3.3 - nt * 0.4 + y * 1.2) * 0.5 +
        Math.cos(x * 1.5 + y * 2.7 + nt * 0.9) * 0.3
      ) / 1.8;
    }

    function drawBlob(c: CanvasRenderingContext2D, cx: number, cy: number, baseR: number, nt: number, alpha: number, hue: number, sat: number, light: number, seed: number, scaleY: number, warp: number) {
      const pulse = 1 + Math.sin(nt * 1.1 + seed) * 0.08 + Math.sin(nt * 0.6 + seed * 0.5) * 0.05;
      c.beginPath();
      for (let i = 0; i <= STEPS; i++) {
        const angle = (i / STEPS) * Math.PI * 2;
        const nx = Math.cos(angle + seed) * 1.2;
        const ny = Math.sin(angle + seed) * 1.2;
        const n = noise(nx, ny, nt + seed);
        const r = baseR * pulse * (1 + n * warp);
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r * scaleY;
        i === 0 ? c.moveTo(x, y) : c.lineTo(x, y);
      }
      c.closePath();
      const g = c.createRadialGradient(cx - baseR * 0.2, cy - baseR * 0.15, 0, cx, cy, baseR * 1.5);
      g.addColorStop(0, `hsla(${hue + 15},${sat}%,${light + 18}%,${alpha})`);
      g.addColorStop(0.5, `hsla(${hue},${sat}%,${light}%,${alpha * 0.85})`);
      g.addColorStop(1, `hsla(${hue - 10},${sat - 10}%,${light - 12}%,0)`);
      c.fillStyle = g;
      c.fill();
    }

    function drawGlow(c: CanvasRenderingContext2D, cx: number, cy: number, baseR: number, nt: number) {
      const pulse = 1 + Math.sin(nt * 1.1) * 0.1;
      for (let i = 2; i >= 1; i--) {
        const r = baseR * (2.0 + i * 0.9) * pulse;
        const g = c.createRadialGradient(cx, cy, baseR * 0.3, cx, cy, r);
        g.addColorStop(0, `rgba(255,90,15,${0.12 / i})`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        c.beginPath();
        c.arc(cx, cy, r, 0, Math.PI * 2);
        c.fillStyle = g;
        c.fill();
      }
    }

    function drawRings(c: CanvasRenderingContext2D, cx: number, cy: number, baseR: number, nt: number) {
      const pulse = 1 + Math.sin(nt * 1.1) * 0.06;
      [2.2, 3.4].forEach((mult, i) => {
        const r = baseR * mult * pulse;
        c.beginPath();
        c.arc(cx, cy, r, 0, Math.PI * 2);
        c.strokeStyle = `rgba(255,110,30,${0.07 - i * 0.02})`;
        c.lineWidth = 0.8;
        c.stroke();
      });
    }

    let animId: number;
    function frame(now: number) {
      animId = requestAnimationFrame(frame);
      if (now - last < INTERVAL) return;
      last = now;
      t += 0.013;

      const cx = W * cxRatio, cy = H * 0.5;
      const baseR = Math.min(W, H) * 0.26;

      ctx.clearRect(0, 0, W, H);
      drawGlow(ctx, cx, cy, baseR, t);
      drawRings(ctx, cx, cy, baseR, t);
      drawBlob(ctx, cx, cy, baseR,        t,               0.82, 18, 100, 45, 0,   0.85, 0.32);
      drawBlob(ctx, cx, cy, baseR * 0.55, t * 1.3,        0.95, 30, 100, 58, 0,   0.85, 0.32);

      ctx2.clearRect(0, 0, W, H);
      drawBlob(ctx2, cx, cy, baseR * 1.9,  t * 0.35 + 2.0, 0.55, 8,  85, 28, 1.1, 0.8,  0.22);
      drawBlob(ctx2, cx, cy, baseR * 1.28, t * 0.7  + 1.5, 0.65, 10, 90, 35, 0,   0.85, 0.32);
    }

    resize();
    window.addEventListener('resize', resize);
    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [cxRatio]);

  return (
    <div className={`blob-canvas-wrap ${className}`}>
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <canvas ref={canvasBlurRef} className="hero-canvas-blur" aria-hidden="true" />
    </div>
  );
}

// ============================================================
// HERO
// ============================================================

function HeroSection({ t }: { t: T }) {
  return (
    <section className="hero" aria-labelledby="hero-headline">
      <BlobCanvas cxRatio={0.62} className="hero-blob" />

      <div className="hero-overlay">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-headline" id="hero-headline">
              {t.hero.headline}
            </h1>
            <p className="hero-body">
              {t.hero.body}
            </p>
            <div className="hero-ctas">
              <button className="btn-primary">
                <HeartIcon />
                {t.hero.signUp}
              </button>
              <a href="#newsletter" className="btn-outline">
                {t.hero.newsletter}
              </a>
            </div>
          </div>
        </div>
        <img
          src={phoneInHand}
          alt=""
          className="hero-phone"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

// ============================================================
// APP STORES
// ============================================================

function AppStoresSection() {
  return (
    <section className="appstores-section" aria-label="Download the app">
      <div className="container">
        <div className="appstores-row">
          <button className="store-btn" aria-label="Get it on Google Play">
            <div className="store-icon"><GooglePlayIcon /></div>
            <div className="store-text">
              <span className="store-get">GET IT ON</span>
              <span className="store-name">Google Play</span>
            </div>
          </button>
          <button className="store-btn" aria-label="Download on the App Store">
            <div className="store-icon"><AppleIcon /></div>
            <div className="store-text">
              <span className="store-get">Download on the</span>
              <span className="store-name">App Store</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SOCIAL MEDIA
// ============================================================

function SocialMediaSection({ t }: { t: T }) {
  return (
    <section className="social-section" id="social" aria-labelledby="social-heading">
      <div className="container">
        <h2 className="section-title-accent" id="social-heading">{t.social.heading}</h2>
        <p className="social-section-desc">{t.social.desc}</p>
        <div className="social-cards">
          {SOCIAL_CHANNELS.map((channel, i) => {
            const ch = t.social.channels[i];
            return (
              <article key={ch.name} className="social-card">
                <div
                  className="social-card-icon"
                  style={{ background: channel.color, borderColor: channel.border }}
                >
                  <channel.Icon />
                </div>
                <h3 className="social-card-name">{ch.name}</h3>
                <p className="social-card-desc">{ch.desc}</p>
                <button className="btn-outline social-card-btn">{t.social.followBtn}</button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// THIS IS PERSONA
// ============================================================

function PersonaSection({ t }: { t: T }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }

  return (
    <section className="persona-section" aria-labelledby="persona-heading">
      <div className="container">
        <div className="persona-text">
          <h2 className="section-title-accent" id="persona-heading">{t.persona.heading}</h2>
          <p className="persona-description">{t.persona.description}</p>
        </div>
        <div className="persona-video-outer">
          <img src={bgImg} alt="" className="persona-bg" aria-hidden="true" />
          <div className="persona-video-wrap" onClick={togglePlay}>
          <video
            ref={videoRef}
            className="persona-video"
            src={personaVideo}
            poster={videoPoster}
            playsInline
            preload="metadata"
            controls={playing}
            onEnded={() => { if (videoRef.current) videoRef.current.currentTime = 0; setPlaying(false); }}
          />
          {!playing && (
            <button className="persona-play-btn" aria-label="Play video">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// HOW IT WORKS
// ============================================================

function HowItWorksSection({ t }: { t: T }) {
  return (
    <section className="how-section" aria-labelledby="how-heading">
      <div className="container">
        <h2 className="section-title-accent" id="how-heading">{t.how.heading}</h2>
        <div className="how-cards">
          {t.how.cards.map((card) => (
            <article key={card.title} className="how-card">
              <h3 className="how-card-title">{card.title}</h3>
              <p className="how-card-body">{card.body}</p>
            </article>
          ))}
        </div>
        <p className="how-footer-text">
          {t.how.footerParts[0]}
          <a href="#faq" className="how-footer-link">{t.how.footerFaqLabel}</a>
          {t.how.footerParts[1]}
          <a href="#" className="how-footer-link">{t.how.footerInvestorsLabel}</a>
          {t.how.footerParts[2]}
        </p>
      </div>
    </section>
  );
}

// ============================================================
// NEWSLETTER
// ============================================================

function NewsletterSection({ t }: { t: T }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <section className="newsletter-section" id="newsletter" aria-labelledby="newsletter-heading">
      <div className="container">
        <p className="newsletter-label" id="newsletter-heading">{t.newsletter.heading}</p>
        <p className="newsletter-desc">{t.newsletter.desc}</p>

        <form
          className="newsletter-form"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Newsletter signup form"
        >
          <div className="form-group form-group--email">
            <label htmlFor="email">{t.newsletter.emailLabel}</label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder={t.newsletter.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="form-group form-group--lang">
            <label id="lang-label">{t.newsletter.langLabel}</label>
            <div className="form-select-row" role="button" tabIndex={0} aria-labelledby="lang-label" aria-haspopup="listbox">
              <span>{t.newsletter.langValue}</span>
              <ChevronDownIcon />
            </div>
          </div>

          <div className="form-group form-group--phone">
            <label htmlFor="phone">{t.newsletter.phoneLabel}</label>
            <div className="form-phone-row">
              <div className="phone-prefix">
                <FinnishFlag />
                <span className="phone-prefix-text">+358</span>
                <ChevronDownIcon />
              </div>
              <div className="phone-divider" aria-hidden="true" />
              <input
                id="phone"
                type="tel"
                className="phone-input"
                placeholder={t.newsletter.phonePlaceholder}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
              />
            </div>
          </div>
        </form>

        <button className="btn-primary" type="submit" aria-label="Sign up for newsletter">
          {t.newsletter.signUp}
        </button>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================

function Footer({ t }: { t: T }) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-logo">
          <img src={logoImg} alt="Persona" className="logo-img" />
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {t.footer.links.map((link, i) => (
            <a key={link} href={FOOTER_LINKS_HREFS[i] ?? '#'} className="footer-link">
              {link}
            </a>
          ))}
        </nav>

        <nav className="footer-legal-nav" aria-label="Legal links">
          {t.footer.legalLinks.map((link, i) => (
            <a key={link} href={FOOTER_LEGAL_HREFS[i] ?? '#'} className="footer-legal-link">
              {link}
            </a>
          ))}
        </nav>

        <div className="footer-bottom">
          <div className="social-links" aria-label="Social media links">
            <a href="#" className="social-btn" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" className="social-btn" aria-label="Threads"><ThreadsIcon /></a>
            <a href="#" className="social-btn" aria-label="TikTok"><TikTokIcon /></a>
            <a href="#" className="social-btn" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" className="social-btn" aria-label="YouTube"><YouTubeIcon /></a>
            <a href="#" className="social-btn" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>

          <div className="app-stores" aria-label="Download on app stores">
            <button className="store-btn" aria-label="Get it on Google Play">
              <div className="store-icon"><GooglePlayIcon /></div>
              <div className="store-text">
                <span className="store-get">GET IT ON</span>
                <span className="store-name">Google Play</span>
              </div>
            </button>
            <button className="store-btn" aria-label="Download on the App Store">
              <div className="store-icon"><AppleIcon /></div>
              <div className="store-text">
                <span className="store-get">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </button>
          </div>
        </div>

        <p className="footer-copyright">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}

// ============================================================
// PAGE
// ============================================================

const PASSWORD = 'hsk9843hksjffsj78687yugwef897fger';

function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('pw') === '1');
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === PASSWORD) {
      sessionStorage.setItem('pw', '1');
      setUnlocked(true);
    } else {
      setError(true);
      setValue('');
    }
  }

  if (unlocked) return <>{children}</>;

  return (
    <div className="pw-gate">
      <form className="pw-form" onSubmit={handleSubmit}>
        <img src={logoImg} alt="Persona" className="pw-logo" />
        <input
          className="pw-input"
          type="password"
          placeholder="Enter password"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false); }}
          autoFocus
        />
        {error && <p className="pw-error">Incorrect password</p>}
        <button className="btn-primary" type="submit">Enter</button>
      </form>
    </div>
  );
}

function getPageFromHash() {
  const hash = window.location.hash.slice(1);
  if (hash === 'company' || hash === 'support' || hash === 'faq') return hash;
  return 'home';
}

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [page, setPage] = useState(getPageFromHash);
  const t = translations[lang];

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function navigateTo(newPage: string) {
    if (newPage === 'home') {
      history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = newPage;
    }
    setPage(newPage);
  }

  return (
    <PasswordGate>
      <div>
        <Navbar lang={lang} setLang={setLang} t={t} page={page} setPage={navigateTo} />
        <main>
          {page === 'company' ? (
            <>
              <CompanyPage lang={lang} />
              <NewsletterSection t={t} />
            </>
          ) : page === 'support' ? (
            <>
              <SupportPage lang={lang} />
              <NewsletterSection t={t} />
            </>
          ) : page === 'faq' ? (
            <>
              <FaqPage lang={lang} />
              <NewsletterSection t={t} />
            </>
          ) : (
            <>
              <HeroSection t={t} />
              <AppStoresSection />
              <SocialMediaSection t={t} />
              <PersonaSection t={t} />
              <HowItWorksSection t={t} />
              <NewsletterSection t={t} />
            </>
          )}
        </main>
        <Footer t={t} />
      </div>
    </PasswordGate>
  );
}
