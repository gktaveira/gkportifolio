import { useState, useEffect } from 'react';
import { useScrollY, useActiveSection } from '../hooks/useAnimations';

const C = {
  bgPrimary: '#0A0E14',
  bgSurface: '#171C22',
  bgElevated: '#1E252F',
  blueElectric: '#00AEEF',
  blueLight: '#1FCFFF',
  textWhite: '#EAF8FF',
  textSecondary: '#919AA5',
  textMuted: '#5A6473',
};

const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
];

const SECTION_IDS = ['inicio', 'sobre', 'especialidades', 'projetos', 'processo', 'contato'];

export default function Navbar() {
  const scrollY = useScrollY();
  const activeSection = useActiveSection(SECTION_IDS);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const scrolled = scrollY > 60;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(-16px)',
        transition: 'all 0.5s ease',
      }}>
        <div className="section-padding" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
          <nav style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
            padding: '0.75rem 1.25rem', borderRadius: '1rem',
            backgroundColor: scrolled ? 'rgba(23,28,34,0.85)' : 'rgba(23,28,34,0.5)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
            transition: 'all 0.3s ease',
          }}>
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              aria-label="gk.taveira — Início"
            >
              <img
                src="/logo.png"
                alt="gk.taveira"
                style={{
                  height: '28px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </a>

            {/* Desktop nav */}
            <ul style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', listStyle: 'none', padding: 0, margin: 0 }}
              className="desktop-nav">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <li key={item.href}>
                    <a href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                      style={{
                        padding: '0.5rem 1rem', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 500,
                        textDecoration: 'none', display: 'block', transition: 'all 0.2s ease',
                        color: isActive ? C.blueElectric : C.textSecondary,
                        backgroundColor: isActive ? 'rgba(0,174,239,0.1)' : 'transparent',
                      }}
                      onMouseOver={(e) => { if (!isActive) { e.currentTarget.style.color = C.textWhite; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}}
                      onMouseOut={(e) => { if (!isActive) { e.currentTarget.style.color = C.textSecondary; e.currentTarget.style.backgroundColor = 'transparent'; }}}
                    >{item.label}</a>
                  </li>
                );
              })}
            </ul>

            {/* Right side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button onClick={() => handleNavClick('#projetos')}
                className="cta-btn"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.25rem',
                  backgroundColor: C.blueElectric, color: C.bgPrimary, fontWeight: 600, borderRadius: '9999px',
                  fontSize: '0.8rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
                  fontFamily: "'Sora', sans-serif",
                }}>
                Explorar projetos
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Hamburger */}
              <button onClick={() => setMobileOpen(!mobileOpen)} className="hamburger-btn"
                style={{
                  padding: '0.5rem', borderRadius: '0.75rem', backgroundColor: 'transparent',
                  border: 'none', cursor: 'pointer', color: C.textSecondary, display: 'none',
                }}
                aria-label="Abrir menu">
                {mobileOpen ? (
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 40 }} className="mobile-nav-overlay">
          <div onClick={() => setMobileOpen(false)}
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10,14,20,0.95)', backdropFilter: 'blur(20px)' }} />
          <div style={{
            position: 'absolute', top: '6rem', left: '1.5rem', right: '1.5rem',
            backgroundColor: C.bgSurface, borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.08)',
            padding: '1.5rem',
          }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', listStyle: 'none', padding: 0, margin: 0 }}>
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <li key={item.href}>
                    <a href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0.875rem 1rem', borderRadius: '0.75rem', textDecoration: 'none',
                        fontSize: '1rem', fontWeight: 500,
                        color: isActive ? C.blueElectric : C.textSecondary,
                        backgroundColor: isActive ? 'rgba(0,174,239,0.1)' : 'transparent',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span>{item.label}</span>
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ opacity: isActive ? 1 : 0.4 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <button onClick={() => handleNavClick('#projetos')}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  padding: '0.875rem 1.5rem', backgroundColor: C.blueElectric, color: C.bgPrimary,
                  fontWeight: 600, borderRadius: '9999px', fontSize: '0.875rem', border: 'none',
                  cursor: 'pointer', fontFamily: "'Sora', sans-serif",
                }}>
                Explorar projetos
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .desktop-nav { display: flex !important; } .hamburger-btn { display: none !important; } .cta-btn { display: inline-flex !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } .hamburger-btn { display: flex !important; } .cta-btn { display: none !important; } .mobile-nav-overlay { display: block !important; } }
        @media (min-width: 640px) { .sm-show { display: block !important; } }
        .cta-btn:hover { background-color: #1FCFFF !important; box-shadow: 0 0 25px rgba(0,174,239,0.4) !important; }
      `}</style>
    </>
  );
}
