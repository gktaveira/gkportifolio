import { useInView } from '../hooks/useAnimations';
import { FadeIn } from './ui/AnimatedText';

const C = {
  bgPrimary: '#0A0E14',
  bgSurface: '#171C22',
  blueElectric: '#00AEEF',
  blueLight: '#1FCFFF',
};

export default function ClosingSection() {
  const { ref, inView } = useInView(0.1);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section ref={ref as React.RefObject<HTMLElement>}
      className="section-padding closing-section">
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <FadeIn inView={inView} delay={0}>
          <div className="closing-panel" style={{
            position: 'relative', backgroundColor: C.blueElectric, borderRadius: '2rem',
            overflow: 'hidden', textAlign: 'center',
          }}>
            {/* Background pattern */}
            <div style={{
              position: 'absolute', inset: 0, opacity: 0.15,
              background: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.5) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.3) 0%, transparent 60%)',
            }} />
            {/* Content */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}>
              <h2 style={{
                fontWeight: 800, color: C.bgPrimary, margin: 0, maxWidth: '50rem',
                fontSize: 'clamp(1.75rem, 5vw, 3.8rem)', letterSpacing: '-0.03em', lineHeight: 1.1,
              }}>
                Boas ideias merecem atenção aos detalhes.
              </h2>

              <p style={{ color: 'rgba(10,14,20,0.7)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '34rem', margin: 0, lineHeight: 1.7 }}>
                Cada projeto é uma oportunidade de aprender, explorar e criar algo novo. Obrigado por conhecer um pouco do meu trabalho — espero que tenha gostado de explorar esse espaço tanto quanto eu gosto de criar.
              </p>

              <button onClick={scrollToTop}
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  padding: '0.875rem 1.75rem', backgroundColor: C.bgPrimary, color: C.blueElectric,
                  fontWeight: 600, borderRadius: '9999px', fontSize: '0.875rem', border: 'none',
                  cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: "'Sora', sans-serif",
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#0F1521'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = C.bgPrimary; e.currentTarget.style.transform = 'scale(1)'; }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(180deg)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Voltar ao início
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .closing-section {
          padding-top: 3.5rem;
          padding-bottom: 5rem;
        }
        .closing-panel {
          padding: 4.5rem 2.5rem;
        }
        @media (max-width: 639px) {
          .closing-section {
            padding-top: 2.5rem;
            padding-bottom: 3.5rem;
          }
          .closing-panel {
            padding: 3rem 1.25rem;
            border-radius: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
