import React, { useState, useEffect } from 'react';
import susannaImg from '../susanna.png';
import emmiImg from '../emmi.png';
import './InfoPage.css';

// ============================================================
// TYPES
// ============================================================

type Tab = 'company' | 'faq' | 'support' | 'news' | 'investors' | 'careers';

type Lang = 'en' | 'fi';

// ============================================================
// TRANSLATIONS
// ============================================================

const INFO_TRANSLATIONS = {
  en: {
    tabs: [
      { id: 'company' as Tab,   label: 'Company' },
      { id: 'faq' as Tab,       label: 'FAQ' },
      { id: 'support' as Tab,   label: 'Support' },
      { id: 'news' as Tab,      label: 'News' },
      { id: 'investors' as Tab, label: 'Investors' },
      { id: 'careers' as Tab,   label: 'Careers' },
    ],
    faq: [
      {
        q: 'What is Persona and how does the service work?',
        a: 'Persona is a platform that gives you a unique connection with your favourite people, idols and mentors. You can chat with them whenever you want, wherever you are — available 24/7 in your own language.',
      },
      {
        q: 'Who is behind the Persona service?',
        a: 'Persona is built by Persona Entertainment Oy, a Finnish company focused on creating meaningful digital connections between people and their inspirations.',
      },
      {
        q: 'How does Persona ensure security and privacy?',
        a: 'All conversations are fully private and encrypted. We never share your personal data with third parties. Your interactions remain 100% confidential.',
      },
      {
        q: 'Are there any limitations on the content or number of messages in the service?',
        a: 'Limitations depend on your subscription plan. Free users have access to a limited number of messages per day. Premium subscribers enjoy unlimited interactions.',
      },
      {
        q: 'How can I contact customer service?',
        a: 'You can reach our support team at support@persona.app. We aim to respond within 24 hours on business days.',
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
      techTitle: 'Technical support',
      techPhone: '+358 40 716 0909',
      techNote: 'You can call or send a text message or WhatsApp message',
      peopleTitle: 'Contact Persona people',
      people: [
        { name: 'Susanna', role: 'CEO', email: 'susanna@personaavatar.com', photo: susannaImg },
        { name: 'Emmi',    role: 'CMO', email: 'emmi@personaavatar.com',    photo: emmiImg },
      ],
    },
    news: [
      {
        date: '28.04.2026',
        headline: 'Persona launches its AI-powered platform for personal connections',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor enim sit amet vulputate sagittis. Donec quis turpis nec felis ultrices luctus in ac turpis. Duis ornare est ligula, non ullamcorper urna suscipit eget. Vestibulum id mattis magna. Nulla id tortor placerat, eleifend nisl convallis, imperdiet quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ante leo. Suspendisse nibh neque, consequat ac eleifend eget, sollicitudin in arcu. Nullam ac tempus nibh.\n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis sed facilisis urna, ac feugiat ipsum. Aenean eu est ac elit dictum egestas. Mauris sem augue, rutrum eu neque in, sollicitudin lobortis sapien.',
      },
      {
        date: '15.03.2026',
        headline: 'Persona raises seed funding to expand its talent network',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor enim sit amet vulputate sagittis. Donec quis turpis nec felis ultrices luctus in ac turpis. Duis ornare est ligula, non ullamcorper urna suscipit eget. Vestibulum id mattis magna. Nulla id tortor placerat, eleifend nisl convallis, imperdiet quam. Lorem ipsum dolor sit amet,',
      },
      {
        date: '01.02.2026',
        headline: 'Meet the team behind Persona Entertainment',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor enim sit amet vulputate sagittis. Donec quis turpis nec felis ultrices luctus in ac turpis. Duis ornare est ligula, non ullamcorper urna suscipit eget. Vestibulum id mattis magna. Nulla id tortor placerat, eleifend nisl convallis, imperdiet quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ante leo. Suspendisse nibh neque, consequat ac eleifend eget, sollicitudin in arcu. Nullam ac tempus nibh.\n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis sed facilisis urna, ac feugiat ipsum.',
      },
    ],
    shareLabel: 'Share',
    investors: 'Interested in investing in Persona? Contact us at investors@persona.app to learn more about our vision and growth plans.',
    careers: 'We are always looking for talented people to join our team. Send your open application to careers@persona.app.',
  },
  fi: {
    tabs: [
      { id: 'company' as Tab,   label: 'Yritys' },
      { id: 'faq' as Tab,       label: 'UKK' },
      { id: 'support' as Tab,   label: 'Tuki' },
      { id: 'news' as Tab,      label: 'Uutiset' },
      { id: 'investors' as Tab, label: 'Sijoittajat' },
      { id: 'careers' as Tab,   label: 'Avoimet työpaikat' },
    ],
    faq: [
      {
        q: 'Mikä on Persona ja miten palvelu toimii?',
        a: 'Persona on alusta, joka tarjoaa sinulle ainutlaatuisen yhteyden suosikkihenkilöihisi, idoleihin ja mentoreihin. Voit jutella heidän kanssaan milloin tahansa, missä tahansa — käytettävissä 24/7 omalla kielelläsi.',
      },
      {
        q: 'Kuka on Persona-palvelun takana?',
        a: 'Personan on rakentanut Persona Entertainment Oy, suomalainen yritys, joka keskittyy merkityksellisten digitaalisten yhteyksien luomiseen ihmisten ja heidän inspiraatioidensa välille.',
      },
      {
        q: 'Miten Persona varmistaa turvallisuuden ja yksityisyyden?',
        a: 'Kaikki keskustelut ovat täysin yksityisiä ja salattuja. Emme koskaan jaa henkilötietojasi kolmansille osapuolille. Vuorovaikutuksesi pysyy 100% luottamuksellisena.',
      },
      {
        q: 'Onko palvelussa rajoituksia sisällön tai viestien määrän suhteen?',
        a: 'Rajoitukset riippuvat tilauspaketistasi. Ilmaisilla käyttäjillä on pääsy rajoitettuun määrään viestejä päivässä. Premium-tilaajat nauttivat rajattomista vuorovaikutuksista.',
      },
      {
        q: 'Miten voin ottaa yhteyttä asiakaspalveluun?',
        a: 'Voit ottaa yhteyttä tukitiimiimme osoitteessa support@persona.app. Pyrimme vastaamaan 24 tunnin kuluessa arkipäivisin.',
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
      techTitle: 'Tekninen tuki',
      techPhone: '+358 40 716 0909',
      techNote: 'Voit soittaa tai lähettää tekstiviestin tai WhatsApp-viestin',
      peopleTitle: 'Ota yhteyttä Persona-tiimiin',
      people: [
        { name: 'Susanna', role: 'Toimitusjohtaja', email: 'susanna@personaavatar.com', photo: susannaImg },
        { name: 'Emmi',    role: 'Markkinointijohtaja', email: 'emmi@personaavatar.com', photo: emmiImg },
      ],
    },
    news: [
      {
        date: '28.04.2026',
        headline: 'Persona lanseeraa tekoälypohjaisen alustan henkilökohtaisille yhteyksille',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor enim sit amet vulputate sagittis. Donec quis turpis nec felis ultrices luctus in ac turpis. Duis ornare est ligula, non ullamcorper urna suscipit eget. Vestibulum id mattis magna. Nulla id tortor placerat, eleifend nisl convallis, imperdiet quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ante leo. Suspendisse nibh neque, consequat ac eleifend eget, sollicitudin in arcu. Nullam ac tempus nibh.\n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis sed facilisis urna, ac feugiat ipsum. Aenean eu est ac elit dictum egestas. Mauris sem augue, rutrum eu neque in, sollicitudin lobortis sapien.',
      },
      {
        date: '15.03.2026',
        headline: 'Persona kerää siemenrahoituksen laajentaakseen talenttverkostoaan',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor enim sit amet vulputate sagittis. Donec quis turpis nec felis ultrices luctus in ac turpis. Duis ornare est ligula, non ullamcorper urna suscipit eget. Vestibulum id mattis magna. Nulla id tortor placerat, eleifend nisl convallis, imperdiet quam. Lorem ipsum dolor sit amet,',
      },
      {
        date: '01.02.2026',
        headline: 'Tutustu Persona Entertainmentin tiimiin',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor enim sit amet vulputate sagittis. Donec quis turpis nec felis ultrices luctus in ac turpis. Duis ornare est ligula, non ullamcorper urna suscipit eget. Vestibulum id mattis magna. Nulla id tortor placerat, eleifend nisl convallis, imperdiet quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a ante leo. Suspendisse nibh neque, consequat ac eleifend eget, sollicitudin in arcu.\n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis sed facilisis urna, ac feugiat ipsum.',
      },
    ],
    shareLabel: 'Jaa',
    investors: 'Kiinnostaako sijoittaminen Personaan? Ota yhteyttä osoitteessa investors@persona.app saadaksesi lisätietoja visiostamme ja kasvusuunnitelmistamme.',
    careers: 'Etsimme aina lahjakkaita ihmisiä tiimiimme. Lähetä avoin hakemuksesi osoitteeseen careers@persona.app.',
  },
};

// ============================================================
// COMPONENTS
// ============================================================

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      style={{ transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none' }}>
      <path d="M8 1v14M1 8h14" stroke="#000" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FaqList({ items }: { items: { q: string; a: string }[] }) {
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
            </div>
          </div>
          <div className="info-faq-divider" />
        </li>
      ))}
    </ul>
  );
}

function TextContent({ text }: { text: string }) {
  return <p className="info-text-content">{text}</p>;
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
          <button className="company-cta-btn">{data.contactBtn}</button>
        </div>
        <div className="company-cta-card">
          <svg className="company-cta-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3v18M3 21h18" stroke="#FFDDB2" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M6 10l-3 5h6l-3-5z" fill="#FFDDB2"/>
            <path d="M18 10l-3 5h6l-3-5z" fill="#FFDDB2"/>
            <line x1="6" y1="10" x2="18" y2="10" stroke="#FFDDB2" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p className="company-cta-title">{data.legalTitle}</p>
          <button className="company-cta-btn company-cta-btn--icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="#2B2621" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {data.legalBtn}
          </button>
        </div>
      </div>
    </div>
  );
}

type NewsItem = { date: string; headline: string; body: string };

function NewsContent({ items, shareLabel }: { items: NewsItem[]; shareLabel: string }) {
  return (
    <div className="news-list">
      {items.map((item, i) => (
        <article key={i} className="news-card">
          <div className="news-card-top">
            <span className="news-date">{item.date}</span>
            <div className="news-share">
              <span className="news-share-label">{shareLabel}</span>
              <div className="news-share-icons">
                <a href="#" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" aria-label="TikTok">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.18 8.18 0 004.79 1.53V6.88a4.85 4.85 0 01-1.02-.19z"/></svg>
                </a>
                <a href="#" aria-label="Snapchat">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C9 2 7 4.5 7 7.5v1c-.8.1-1.5.6-1.5 1.5 0 .7.5 1.2 1.2 1.4-.2 1.2-1.5 2.1-1.5 2.1s.8.4 3 .4c.4.9 1.3 1.5 3.3 1.5 2 0 2.9-.6 3.3-1.5 2.2 0 3-.4 3-.4s-1.3-.9-1.5-2.1c.7-.2 1.2-.7 1.2-1.4 0-.9-.7-1.4-1.5-1.5v-1C17 4.5 15 2 12 2z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <h3 className="news-headline">{item.headline}</h3>
          <div className="news-body">
            {item.body.split('\n\n').map((para, j) => (
              <p key={j}>{para}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

type SupportData = {
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
// INFO PAGE
// ============================================================

const VALID_TABS: Tab[] = ['company', 'faq', 'support', 'news', 'investors', 'careers'];

function getTabFromHash(): Tab {
  const part = window.location.hash.split('/')[1] as Tab;
  return VALID_TABS.includes(part) ? part : 'company';
}

export default function InfoPage({ lang }: { lang: Lang }) {
  const [activeTab, setActiveTab] = useState<Tab>(getTabFromHash);
  const t = INFO_TRANSLATIONS[lang];

  useEffect(() => {
    const onHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function switchTab(tab: Tab) {
    window.location.hash = `info/${tab}`;
    setActiveTab(tab);
  }

  function renderContent() {
    switch (activeTab) {
      case 'faq':       return <FaqList items={t.faq} />;
      case 'company':   return <CompanyContent data={t.company} />;
      case 'support':   return <SupportContent data={t.support} />;
      case 'news':      return <NewsContent items={t.news} shareLabel={t.shareLabel} />;
      case 'investors': return <TextContent text={t.investors} />;
      case 'careers':   return <TextContent text={t.careers} />;
    }
  }

  return (
    <div className="info-page">
      <div className="container">
        <h1 className="info-heading">Info</h1>
        <nav className="info-subnav" aria-label="Info navigation">
          {t.tabs.map((tab) => (
            <button
              key={tab.id}
              className={`info-subnav-btn${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => switchTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        {activeTab !== 'company' && (
          <h2 className="info-tab-heading">
            {t.tabs.find((tab) => tab.id === activeTab)?.label}
          </h2>
        )}
        <div className="info-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
