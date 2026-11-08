import { FadeIn } from './ui/AnimatedText';
import { useInView } from '../hooks/useAnimations';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const { ref, inView } = useInView(0.1);
  const currentYear = 2026;

  const handleNav = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      ref={ref as React.RefObject<HTMLElement>}
      style={{ backgroundColor: '#0A0E14', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Large background watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(5rem, 20vw, 18rem)',
            letterSpacing: '-0.05em',
            lineHeight: 1,
            color: 'rgba(255,255,255,0.025)',
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          GUSTAVO
        </span>
      </div>

      <div className="section-padding footer-content" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <FadeIn inView={inView} delay={0}>
            <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '2.5rem' }}>
              {/* Brand */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <a
                  href="#inicio"
                  onClick={(e) => { e.preventDefault(); handleNav('#inicio'); }}
                  style={{ display: 'inline-block', textDecoration: 'none' }}
                  aria-label="gk.taveira — Início"
                >
                  <img
                    src="/logo.png"
                    alt="gk.taveira"
                    style={{
                      height: '32px',
                      width: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </a>
                <p style={{ color: '#919AA5', fontSize: '0.875rem', lineHeight: '1.6', maxWidth: '18rem' }}>
                  Designer com foco em criação de marcas, identidades visuais e experiências criativas.
                </p>
              </div>

              {/* Navigation */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <span className="label-tag">Navegação</span>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                        style={{ color: '#919AA5', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s ease', display: 'inline-block', padding: '0.2rem 0' }}
                        onMouseOver={(e) => (e.currentTarget.style.color = '#00AEEF')}
                        onMouseOut={(e) => (e.currentTarget.style.color = '#919AA5')}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div
              className="footer-bottom"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}
            >
              <p style={{ color: '#5A6473', fontSize: '0.75rem', margin: 0 }}>
                © {currentYear} Gustavo Kauã. Portfólio pessoal.
              </p>
              <p style={{ color: '#5A6473', fontSize: '0.75rem', margin: 0 }}>
                Design & Desenvolvimento
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        .footer-content {
          padding-top: 4.5rem;
          padding-bottom: 4rem;
        }
        .footer-grid {
          margin-bottom: 3.5rem;
        }
        .footer-bottom {
          padding-top: 2rem;
        }
        @media (max-width: 639px) {
          .footer-content {
            padding-top: 3.5rem;
            padding-bottom: 2.5rem;
          }
          .footer-grid {
            margin-bottom: 2.5rem;
            gap: 2rem !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
