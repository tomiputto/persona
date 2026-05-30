import React, { useState, useEffect } from 'react';
import susannaImg from '../susanna.png';
import emmiImg from '../emmi.png';
import './InfoPage.css';

// ============================================================
// TYPES
// ============================================================

type Lang = 'en' | 'fi';

// ============================================================
// TRANSLATIONS
// ============================================================

const INFO_TRANSLATIONS = {
  en: {
    faq: [
      {
        q: 'What is Persona and how does the service work?',
        a: 'Persona is a service that lets you interact with the unattainable through cutting-edge technology, emotional intelligence and human connection. You can have conversations that feel real and are private.',
      },
      {
        q: 'Who is behind the Persona service?',
        a: 'Persona was founded by a team focused on meaningful connections. Our founders bring together expertise in technology and human-centred design to build this experience.',
        linkText: 'Meet the founders',
        linkHash: 'company',
      },
      {
        q: 'How does Persona ensure security and privacy?',
        a: 'Your conversations are private and we take security seriously. We use industry-standard practices to protect your data and ensure that your interactions remain confidential.',
      },
      {
        q: 'Are there any limitations on the content or number of messages in the service?',
        a: 'Service limits may apply depending on your plan. Check the current terms and your account settings for details on message counts and content guidelines.',
      },
      {
        q: 'How can I contact customer support?',
        a: 'You can reach us via the Support page. We aim to respond to all enquiries as quickly as possible.',
        linkText: 'Go to Support',
        linkHash: 'support',
      },
    ],
    company: {
      slogan: 'Company built for meaningful connections',
      description: 'Persona redefines how we communicate across time and place. We make it possible to interact with the unattainable, by combining cutting edge technology, emotional intelligence and human connections.',
      foundersHeading: 'Persona founders',
      founders: [
        { name: 'Susanna Jääskeläinen', role: 'CEO', photo: susannaImg },
        { name: 'Emmi Sainio', role: 'CMO', photo: emmiImg },
      ],
      contactTitle: 'Interested in hearing more?',
      contactBtn: 'Contact us',
      legalTitle: 'Legal conditions',
      legalBtn: 'Terms of service',
    },
    support: {
      heading: 'Support',
      techTitle: 'Technical support',
      techPhone: '+358 40 716 0909',
      techNote: 'You can call or send a text message or WhatsApp message',
      peopleTitle: 'Contact Persona people',
      people: [
        { name: 'Susanna', role: 'CEO', email: 'susanna@personaavatar.com', photo: susannaImg },
        { name: 'Emmi',    role: 'CMO', email: 'emmi@personaavatar.com',    photo: emmiImg },
      ],
    },
    faqHeading: 'FAQ',
  },
  fi: {
    faq: [
      {
        q: 'Mikä on Persona ja miten palvelu toimii?',
        a: 'Persona on palvelu, jonka avulla voit olla vuorovaikutuksessa tavoittamattomien kanssa huippuluokan teknologian, tunneälyn ja inhimillisen yhteyden kautta. Voit käydä keskusteluja, jotka tuntuvat aidoilta ja ovat yksityisiä.',
      },
      {
        q: 'Kuka on Persona-palvelun takana?',
        a: 'Personan perusti tiimi, joka keskittyy merkityksellisiin yhteyksiin. Perustajamme yhdistävät osaamisen teknologiassa ja ihmiskeskeisessä suunnittelussa tämän kokemuksen rakentamiseksi.',
        linkText: 'Tutustu perustajiin',
        linkHash: 'company',
      },
      {
        q: 'Miten Persona varmistaa turvallisuuden ja yksityisyyden?',
        a: 'Keskustelusi ovat yksityisiä ja suhtaudumme turvallisuuteen vakavasti. Käytämme alan standardikäytäntöjä tietojesi suojaamiseen ja vuorovaikutustesi luottamuksellisuuden varmistamiseen.',
      },
      {
        q: 'Onko palvelussa rajoituksia sisällön tai viestien määrän suhteen?',
        a: 'Palvelurajoituksia voi olla voimassa suunnitelmastasi riippuen. Tarkista nykyiset ehdot ja tilisi asetukset saadaksesi tietoja viestimääristä ja sisältöohjeista.',
      },
      {
        q: 'Miten voin ottaa yhteyttä asiakastukeen?',
        a: 'Tavoitat meidät Tuki-sivun kautta. Pyrimme vastaamaan kaikkiin tiedusteluihin mahdollisimman nopeasti.',
        linkText: 'Siirry Tuki-sivulle',
        linkHash: 'support',
      },
    ],
    company: {
      slogan: 'Yritys rakennettu merkityksellisiä yhteyksiä varten',
      description: 'Persona määrittelee uudelleen, kuinka kommunikoimme ajasta ja paikasta riippumatta. Teemme mahdolliseksi vuorovaikuttaa tavoittamattomien kanssa yhdistämällä huippuluokan teknologiaa, tunneälyä ja inhimillisiä yhteyksiä.',
      foundersHeading: 'Personan perustajat',
      founders: [
        { name: 'Susanna Jääskeläinen', role: 'Toimitusjohtaja', photo: susannaImg },
        { name: 'Emmi Sainio', role: 'Markkinointijohtaja', photo: emmiImg },
      ],
      contactTitle: 'Haluatko kuulla lisää?',
      contactBtn: 'Ota yhteyttä',
      legalTitle: 'Juridiset ehdot',
      legalBtn: 'Käyttöehdot',
    },
    support: {
      heading: 'Tuki',
      techTitle: 'Tekninen tuki',
      techPhone: '+358 40 716 0909',
      techNote: 'Voit soittaa tai lähettää tekstiviestin tai WhatsApp-viestin',
      peopleTitle: 'Ota yhteyttä Persona-tiimiin',
      people: [
        { name: 'Susanna', role: 'Toimitusjohtaja', email: 'susanna@personaavatar.com', photo: susannaImg },
        { name: 'Emmi',    role: 'Markkinointijohtaja', email: 'emmi@personaavatar.com', photo: emmiImg },
      ],
    },
    faqHeading: 'UKK',
  },
};

// ============================================================
// SHARED COMPONENTS
// ============================================================

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      style={{ transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none' }}>
      <path d="M8 1v14M1 8h14" stroke="#000" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

type FaqItem = { q: string; a: string; linkText?: string; linkHash?: string };

function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="info-faq-list">
      {items.map((item, i) => (
        <li key={i} className="info-faq-item">
          <button
            className="info-faq-question"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="info-faq-icon">
              <PlusIcon open={open === i} />
            </span>
            <span>{item.q}</span>
          </button>
          <div className={`info-faq-answer-wrap${open === i ? ' open' : ''}`}>
            <div className="info-faq-answer-inner">
              <p className="info-faq-answer">{item.a}</p>
              {item.linkText && item.linkHash && (
                <a href={`#${item.linkHash}`} className="info-faq-link">
                  {item.linkText} →
                </a>
              )}
            </div>
          </div>
          <div className="info-faq-divider" />
        </li>
      ))}
    </ul>
  );
}

type CompanyData = {
  slogan: string;
  description: string;
  foundersHeading: string;
  founders: { name: string; role: string; photo: string }[];
  contactTitle: string;
  contactBtn: string;
  legalTitle: string;
  legalBtn: string;
};

function CompanyContent({ data }: { data: CompanyData }) {
  return (
    <div className="company-content">
      <div className="company-slogan">
        <h2 className="company-slogan-title">{data.slogan}</h2>
        <p className="company-slogan-body">{data.description}</p>
      </div>

      <h3 className="company-founders-heading">{data.foundersHeading}</h3>

      <div className="company-founders-grid">
        {data.founders.map((f) => (
          <div key={f.name} className="company-founder-card">
            <div className="company-founder-avatar-wrap">
              <img src={f.photo} alt={f.name} className="company-founder-avatar" />
            </div>
            <p className="company-founder-name">{f.name}</p>
            <p className="company-founder-role">{f.role}</p>
          </div>
        ))}
      </div>

      <div className="company-cta-grid">
        <div className="company-cta-card">
          <svg className="company-cta-icon" width="24" height="24" viewBox="0 0 24 24" fill="#FFDDB2" aria-hidden="true">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <p className="company-cta-title">{data.contactTitle}</p>
          <a href="#support" className="company-cta-btn">{data.contactBtn}</a>
        </div>
        <div className="company-cta-card">
          <svg className="company-cta-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3v18M3 21h18" stroke="#FFDDB2" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M6 10l-3 5h6l-3-5z" fill="#FFDDB2"/>
            <path d="M18 10l-3 5h6l-3-5z" fill="#FFDDB2"/>
            <line x1="6" y1="10" x2="18" y2="10" stroke="#FFDDB2" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p className="company-cta-title">{data.legalTitle}</p>
          <a href="#" className="company-cta-btn company-cta-btn--icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="#2B2621" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {data.legalBtn}
          </a>
        </div>
      </div>
    </div>
  );
}

type SupportData = {
  heading: string;
  techTitle: string;
  techPhone: string;
  techNote: string;
  peopleTitle: string;
  people: { name: string; role: string; email: string; photo: string }[];
};

function SupportContent({ data }: { data: SupportData }) {
  return (
    <div className="support-content">
      <div className="support-card">
        <p className="support-card-title">{data.techTitle}</p>
        <p className="support-card-phone">{data.techPhone}</p>
        <p className="support-card-note">{data.techNote}</p>
      </div>

      <h2 className="support-people-heading">{data.peopleTitle}</h2>

      <div className="support-people-grid">
        {data.people.map((person) => (
          <div key={person.name} className="support-person-card">
            <img src={person.photo} alt={person.name} className="support-person-avatar" />
            <div className="support-person-info">
              <p className="support-person-name">{person.name}</p>
              <p className="support-person-role">{person.role}</p>
              <p className="support-person-email">{person.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// PAGE EXPORTS
// ============================================================

function scrollToTop() {
  window.scrollTo(0, 0);
}

export function CompanyPage({ lang }: { lang: Lang }) {
  const t = INFO_TRANSLATIONS[lang];
  useEffect(scrollToTop, []);
  return (
    <div className="info-page">
      <div className="container">
        <CompanyContent data={t.company} />
      </div>
    </div>
  );
}

export function SupportPage({ lang }: { lang: Lang }) {
  const t = INFO_TRANSLATIONS[lang];
  useEffect(scrollToTop, []);
  return (
    <div className="info-page">
      <div className="container">
        <h1 className="info-page-heading">{t.support.heading}</h1>
        <SupportContent data={t.support} />
      </div>
    </div>
  );
}

export function FaqPage({ lang }: { lang: Lang }) {
  const t = INFO_TRANSLATIONS[lang];
  useEffect(scrollToTop, []);
  return (
    <div className="info-page">
      <div className="container">
        <h1 className="info-page-heading">{t.faqHeading}</h1>
        <FaqList items={t.faq} />
      </div>
    </div>
  );
}
